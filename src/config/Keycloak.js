import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
 url: "http://localhost:8080",
 realm: "bookstore-auth",
 clientId: "reactBookstore-auth",
});

export default keycloak