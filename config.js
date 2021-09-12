const ez = require("node-fetch");
global.owner = ['6281313726400','6282124189183','6281214214067'] // Put your number here
global.mods = ['6281313726400','6282124189183','6281214214067'] // Want some help?
global.prems = ['6281313726400','6282124189183','6281214214067'] // Premium user has unlimited limit
global.APIs = { // API Prefix
  clph: 'https://recoders-area.caliph.repl.co',
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  lol: 'https://api.lolhuman.xyz',
  vh: 'http://api.vhtear.com'
  
}
global.APIKeys = { // APIKey Here
   'http://api.vhtear.com': 'HIRO',
   'https://api.lolhuman.xyz': 'dikyadis',
  'https://api.xteam.xyz': 'HIRO'
}
function getBuffer(buffer) {
return ez(buffer).then(a => a.buffer())
}
const choice = (array) => {
return array[Math.floor(Math.random() * array.length)]
}
// Sticker WM
global.packname = (`Chika Bot`)
global.getBuffer = getBuffer
global.author = (`@Rezz19`)
global.sessionid = '48736705854:2Tq6joffmVDzaS:24'
global.multiplier = 69 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})