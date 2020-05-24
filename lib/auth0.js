import { initAuth0 } from '@auth0/nextjs-auth0'
export default initAuth0({
    baseURL: 'http://localhost:3000',
    clientId: 'ArQITzpgT0NTrCAX8dPvdDjn8Cs5kLWf',
    clientSecret: 'oD36O-NZR6bEaKZi77vkf1Do7lUrEFRRY3w0bXGjkayeZxmSdvxIMSAozUER8eZH',
    scope: 'openid profile',
    domain: 'fsmdevpleno.auth0.com',
    redirectUri: 'http://localhost:3000/api/callback',
    postLogoutRedirectUri: 'http://localhost:3000',
    session: {
        cookieSecret: 'abaaijsisauahsuahsauhsuahsuahs12',
        cookieLifetime: 3600
    }
})