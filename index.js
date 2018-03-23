import "bulma";
import "keycloak-js";

const Elm = require("./src/Main");
const el = document.getElementById("main");


Elm.Main.embed(el, {});
