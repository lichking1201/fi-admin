const path = require('path')
const fs = require('fs')
const _ = require('lodash')
var prompt = require('prompt')

var routePath = 'tmp'
var routeFileName = 'Tmp'
var routeName = '模板'
var tmp = fs.readFileSync('scripts/tmp', 'utf8')
var routesStr = fs.readFileSync('src/router/routes.js', 'utf8')

routesStr = routesStr
  .replace('export default ', '')
  .replace(/require\(["|'](.*)["|']\)/g, '"require($1)"')

var getRoutesFun = new Function('return ' + routesStr)
var routes = getRoutesFun()

if (process.argv.length >= 3) {
  routePath = process.argv[2]
  routeName = process.argv[3]
  create()
} else {
  console.log('当前已有路由：')
  routes.routes[0].children.forEach(function(child) {
    if (child.children) {
      child.children.forEach(function(subChild) {
        console.log(child.path + subChild.path)
      })
    } else {
      console.log(child.path.substr(1))
    }
  })
  console.log('请配置新路由')
  prompt.get(
    [
      {
        name: 'routePath',
        description: '访问路径，子路由请用"/"分隔，至多两级',
      },
      {
        name: 'name',
        description: '页面名称',
      },
    ],
    function(err, result) {
      if (!result) return false
      routePath = result.routePath
      routeName = result.routeName
      create()
    }
  )
}

// _.each(namePaths, function(path, index) {
//   if(!routes[path]) {

//   }
// })

// function createRoute(parent, path) {
//   var config = {
//     path: parent.path + '/' + path,
//     name: path,
//   }
//   if(!parent.children) {
//     parent.children = [config]
//   }
//   if(!parent[path]) {
//     parent.children
//   }
// }

function create() {
  routePaths = routePath.split('/')
  routeFileName = _.last(routePaths)
  routeName =
    routeName ||
    routeFileName.charAt(0).toLocaleUpperCase() + routeFileName.substr(1)
  tmp = tmp.replace(/{{name}}/g, routeName)

  routes.routes[0].children.push({
    path: '/' + routePath,
    name: routeName,
    component: 'require(src/components/' + routeName + ')',
    iconCls: 'fa fa-address-card',
  })

  routesStr = JSON.stringify(routes, null, 2)
  var routesResult = routesStr.replace(
    /"component": "require\((.*)\)"/g,
    '"component": require("$1")'
  )

  fs.writeFileSync('src/components/' + routeFileName + '.vue', tmp)
  fs.writeFileSync('src/router/routes.js', 'export default ' + routesResult)
}
