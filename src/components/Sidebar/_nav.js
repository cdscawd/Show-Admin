export default {
  items: [
    {
      title: true,
      name: '数据管理',
      wrapper: {            // optional wrapper object
        element: "span",      // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ""             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: '视频动态',
      url: '/list_video',
      icon: 'icon-pie-chart'
    },{
      name: '活动动态',
      url: '/list_activity',
      icon: 'icon-pie-chart'
    },{
      name: '发布活动',
      url: '/release_activity',
      icon: 'icon-pie-chart'
    },

    {
      title: true,
      name: '校区空间'
    },
    {
      name: '空间状态',
      url: '/space_state',
      icon: 'icon-pie-chart'
    },

    
    {
      name: 'Components',
      url: '/components',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Buttons',
          url: '/components/buttons',
          icon: 'icon-puzzle'
        },
        {
          name: 'Social Buttons',
          url: '/components/social-buttons',
          icon: 'icon-puzzle'
        },
        {
          name: 'Cards',
          url: '/components/cards',
          icon: 'icon-puzzle'
        },
        {
          name: 'Forms',
          url: '/components/forms',
          icon: 'icon-puzzle'
        },
        {
          name: 'Modals',
          url: '/components/modals',
          icon: 'icon-puzzle'
        },
        {
          name: 'Switches',
          url: '/components/switches',
          icon: 'icon-puzzle'
        },
        {
          name: 'Tables',
          url: '/components/tables',
          icon: 'icon-puzzle'
        },
        {
          name: 'Tabs',
          url: '/components/tabs',
          icon: 'icon-puzzle'
        }
      ]
    },
    {
      name: 'Icons',
      url: '/icons',
      icon: 'icon-star',
      children: [
        {
          name: 'Font Awesome',
          url: '/icons/font-awesome',
          icon: 'icon-star',
          badge: {
            variant: 'secondary',
            text: '4.7'
          }
        },
        {
          name: 'Simple Line Icons',
          url: '/icons/simple-line-icons',
          icon: 'icon-star'
        }
      ]
    },
    {
      name: 'Widgets',
      url: '/widgets',
      icon: 'icon-calculator',
      badge: {
        variant: 'info',
        text: 'NEW'
      }
    },
    {
      name: 'Charts',
      url: '/charts',
      icon: 'icon-pie-chart'
    },
    {
      divider: true
    },
    {
      title: true,
      name: 'Extras'
    },
    {
      name: 'Login',
      url: '/login',
      icon: 'icon-star'
    },
    {
      name: 'Register',
      url: '/register',
      icon: 'icon-star'
    },
    {
      name: 'Error 404',
      url: '/404',
      icon: 'icon-star'
    },
    {
      name: 'Error 500',
      url: '/500',
      icon: 'icon-star'
    }
  ]
};
