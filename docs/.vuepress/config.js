const path = require('path')
const fs = require('fs')
// fs.readFile(path.join(__dirname, '../install/README.md'),(err,res)=>{
//   console.log('res',res)
// })
// console.log(path.join(__dirname, '../install/README.md'))
module.exports = {
  base:'/',
  title: 'bees',
  description: '一个有意思的ui库',
  themeConfig: {
    sidebar: [
      '/install/',
      '/get-started/',
      {
        title: '组件',
        collapsable: false,
        children: [
          '/components/button/',
          '/components/icon/',
          '/components/input/',
          '/components/checkbox/',
          '/components/checkbox-group/',
          '/components/datePicker/',
          '/components/dialog/'
        ]
      },
    ]
  }
}