export default () => ({
  port: 5000,
  keycloak: {
    host: process.env.KEYCLOAK_HOST || 'http://keycloak:8080',
    realm: 'microshop',
    clientId: 'microshop',
    grantType: 'password',
    username: 'admin',
    password: 'admin'
  }
})