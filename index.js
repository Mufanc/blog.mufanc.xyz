const core = require('@actions/core')
const { context, GitHub } = require('@actions/github')
const fs = require('fs').promises

!(async function () {
    try {
        const token = process.env.GITHUB_TOKEN
        const body = process.env.ISSUE_BODY
        const { owner, repo } = context.repo

        if (body) {
            // 保存到单独的 json 文件
            let [ name, link, avatar, descr ] = body.match(/{%.+?%}/g)
                .map(x => x.substring(2, x.length-2).trim())
            let domain = link.match(/https?:\/\/([^/]+)(?:\/.*)?/)[1]
            await fs.writeFile(`./link/sites/${domain}.json`, JSON.stringify({
                name, link, avatar, descr
            }))
        }

        // 生成总的友链 json
        let files = (await fs.readdir('./link/sites')).filter(str => !str.startsWith('.'))
        let json = JSON.parse((await fs.readFile('./link/template.json')).toString())
        let flinks = []
        let target;
        for (let obj of json) {
            if ('gh-actions' in obj) {
                target = obj;
                delete target['gh-actions']
                break
            }
        }
        for (let file of files) {
            let site = JSON.parse((await fs.readFile(`./link/sites/${file}`)).toString())
            target['link_list'].push(site)
            flinks.push(site['link'])
        }
        await fs.writeFile('flinks.json', JSON.stringify(flinks))
        await fs.writeFile('links.json', JSON.stringify(json))

        if (body) {
            // 评论并关闭 issue
            const octokit = new GitHub(token)
            let issue_number = context.payload.issue?.number
            await octokit.issues.createComment({
                owner, repo, issue_number,
                body: '恭喜！你提交的友链已经成功合并'
            })
            await octokit.issues.update({
                owner, repo, issue_number,
                state: 'closed'
            })
        }
    } catch (error) {
        core.setFailed(error.message)
    }
})()
