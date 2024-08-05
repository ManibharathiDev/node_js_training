function sayHello(name)
{
    console.log(`Hello ${name}`);
}

function sayBye()
{
    console.log(`Hey Bye!`);
}

/**
 * Single Function Exports
 */
module.exports = sayHello

/**
 * If you want to export multiple please use consider below
 */

module.exports = {
    sayHello:sayHello,
    sayBye:sayBye
}