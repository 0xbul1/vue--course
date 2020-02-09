import Home from '@/views/Home.vue';

export default [
  // 别名
  {
    path: '/',
    name: 'Home',
    alias: '/home_alias',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '@/views/About.vue'),
  },

  // 动态路由匹配
  {
    name: 'argu',
    path: '/argu/:name',
    component: () => import('@/views/argu.vue'),
  },
  // 嵌套路由
  {
    path: '/parent',
    component: () => import('@/views/parent.vue'),
    children: [
      {
        path: 'child',
        component: () => import('@/views/child.vue'),
      },
    ],
  },
  // 命名路由和routerlink的to属性配合使用

  // 命名视图
  {
    path: '/named_view',
    components: {
      default: () => import('@/views/child.vue'),
      email: () => import('@/views/email.vue'),
      tel: () => import('@/views/tel.vue'),
    },
  },

  // 重定向
  {
    path: '/main',
    // redirect: '/',
    // redirect: { name: 'About' },
    redirect: to => {
      // console.log(to);
      // return { name: 'Home' };
      return '/';
    },
  },
];
