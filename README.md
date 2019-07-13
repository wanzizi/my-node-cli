# my-node-cli
node实现的脚手架demo，功能已实现，待完善与更新

参考：https://www.cnblogs.com/myz-blog/p/6609836.html

## npm install

### node bin/scion
入口文件，介绍描述与各种指令

### node bin/scion add
新增模板，暂时是对象，只有一个模板，多模板需将templates.json里的tpl改为数组
输入模板名称和git地址

### node bin/scion list
查看已有模板

### node bin/scion delete
删除已有模板

模板写完之后是初始化项目
### node bin/scion init
输入模板名称和新项目名称，会从模板的git拉取代码到本地，即可使用


## npm link
注册到全局，即可scion add使用

