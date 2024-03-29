'use strict'

const co = require('co')
const prompt = require('co-prompt')
const config = require('./templates')
const chalk = require('chalk')
const fs = require('fs')

module.exports = () =>{
    co(function*(){
        let tplName = yield prompt('Template name:')

        if(!config.tpl[tplName]){
            config.tpl[tplName] = undefined
        }else{
            console.log(chalk.red('Template does not existed!'))
            process.exit()
        }

        fs.writeFile(__dirname+'/../templates.json',JSON.stringify(config),'utf-8',(err)=>{
            if(err) console.log(err)
            console.log(chalk.green('Template delete!\n'))
            console.log(chalk.green('The config is:\n'))
            console.log(config)
            console.log('\n')
            process.exit()
        })
    })
}