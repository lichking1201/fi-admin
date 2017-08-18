module.exports = {
  "routes": [
    {
      "path": "/",
      "component": "src/components/Main",
      "children": [
        {
          "path": "/",
          "name": "首页",
          "component": "src/components/Home",
          "iconCls": "fa fa-address-card"
        },
        {
          "path": "/homepage",
          "name": "Homepage",
          "component": "src/components/Homepage",
          "iconCls": "fa fa-address-card"
        },
        {
          "path": "/teste",
          "name": "Teste",
          "component": "src/components/Teste",
          "iconCls": "fa fa-address-card"
        },
        {
          "path": "/teste2",
          "name": "Teste2",
          "component": "src/components/Teste2",
          "iconCls": "fa fa-address-card"
        },
        {
          "path": "/tmp",
          "name": "Tmp",
          "component": "src/components/Tmp",
          "iconCls": "fa fa-address-card"
        },
        {
          "path": "/tmp",
          "name": "Tmp",
          "component": "src/components/Tmp",
          "iconCls": "fa fa-address-card"
        },
        {
          "path": "/tmp",
          "name": "Tmp",
          "component": "src/components/Tmp",
          "iconCls": "fa fa-address-card"
        }
      ]
    },
    {
      "path": "/login",
      "component": "src/components/Login",
      "hidden": true
    }
  ]
}