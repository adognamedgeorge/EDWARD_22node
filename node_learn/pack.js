// import { builtinModules } from "module";

function pack() {
    let name;
    this.setName = function(setname) {
        name = setname;
    };
    this.sayHello = function() {
        console.log(name)
    }
};
module.exports = pack;