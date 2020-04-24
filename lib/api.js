const axios = require('axios')

const github_base_url = 'http://api.github.com'

async function requestGithub(method, url, data, headers){
    return await axios({
        method,
        url:`${github_base_url} ${url}`,
        data,
        headers
    })
}

const isServer = typeof window === 'undefined'
async function request({ method = 'GET', url, data, headers }, req, res) {
    if(!url){
        throw Error('url must provide')
    }
    if(isServer){
        const session = req.session
        const githubAuth = session.githubAuth || {}
        const headers = {}
        if(githubAuth.access_token){
            headers['Authorization'] = `${githubAuth.token_type} ${githubAuth.access_token}`
        }
        console.log(url)

        return await requestGithub(method, url, data, headers)
    } else {
        // search/respos
        return await axios({
            method,
            url: `/github${url}`,
            data,
            headers
        })
    }
}

module.exports = {
    request,
    requestGithub
}