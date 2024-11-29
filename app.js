//npm- global command, comes with node
//to ckeck if it installed: npm --version

//to install the dependancy as local dependency
//npm i <packageName>
//local dependency - use it only in this particular project

//to install the dependency as global dependency
//npm install -g <packageName>
//sudo npm install -g <packageName> (mac)
//global dependency- use it in any project

//package.json - manifest file which stores important info about project/package'
// 3 ways to create the package.json
//1: manual approach (create package.json in the root, create properties etc)
//2: npm init (step by step, press enter to skip)
//3: npm init -y (everything default)
 
const lod = require('lodash');

const items = [1,[2,[3,[4]]]];
const newItems = lod.flattenDeep(items);
console.log(newItems);