export default {
  routes: [
    {
      path: '/',
      component: require('src/components/share/Main'),
      children: [
        {
          path: '/home',
          name: '首页',
          component: require('src/components/Home'),
          iconCls: 'fa fa-address-card',
        },
      ],
    },
    {
      path: '/login',
      component: require('src/components/share/Login'),
      hidden: true,
    },
  ],
}
