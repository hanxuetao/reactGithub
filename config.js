const GITHUB_OAUTH_URL = 'https://github.com/login/oauth/authorize'
const SCOPE = 'user'
const client_id ='Iv1.b8751937c89ab738'

module.exports = {
    github:{
        request_token_url:'https://github.com/login/oauth/access_token',
        client_id,
        client_secret: '77679476c81097cf164977944714faf9a560c22a',
    },
    GITHUB_OAUTH_URL,
    OAUTH_URL: `${GITHUB_OAUTH_URL}?client_id=${
        client_id
    }&scope=${SCOPE}`,
}