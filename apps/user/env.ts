export default () => ({
  port: 5001,
  keycloak: {
    host: process.env.KEYCLOAK_HOST || 'http://keycloak:8080',
    realm: 'microshop',
    clientId: 'microshop',
    grantType: 'password',
    username: 'admin',
    password: 'admin'
  }
})