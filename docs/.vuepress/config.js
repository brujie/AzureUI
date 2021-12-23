const list = [];
module.exports = {
  title:"AzureUI",
  base:"/AzureUI/",
    themeConfig: {
      nav:[
        {
          text:'Home',
          link:'/'
        },
        {
          text:'Github',
          link:'https://github.com/brujie/AzureUI',
        },
        {
          text:'Npm',
          link:'https://www.npmjs.com/package/azure-ui'
        }
      ],
      sidebar: [
        '/',
        '/componentsDocs/card',
        '/componentsDocs/backtop',
        '/componentsDocs/message',
        '/componentsDocs/button',
        '/componentsDocs/table',
      ]
    }
  }