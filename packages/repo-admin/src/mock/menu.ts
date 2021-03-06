export const menus = [
  {
    id: '1',
    parentId: null,
    menuName: '工作台',
    menuIcon: 'PieChartOutlined',
    routeName: 'dashbord',
    routePath: 'dashbord',
    componentName: 'dashbord',
    componentPath: 'views/dashbord/index.ts',
    sort: 1,
    visible: null,
    closable: null
  },
  {
    id: '2',
    parentId: null,
    menuName: '系统管理',
    menuIcon: 'SettingOutlined',
    routeName: 'system-manager',
    routePath: 'system-manager',
    componentName: null,
    componentPath: null,
    sort: 1,
    visible: null,
    closable: null
  },
  {
    id: '21',
    parentId: '2',
    menuName: '用户管理',
    menuIcon: null,
    routeName: 'user-manager',
    routePath: 'user-manager',
    componentName: null,
    componentPath: 'views/system-manager/user-manager/index.ts',
    sort: 2,
    visible: true,
    closable: true
  },
  {
    id: '22',
    parentId: '2',
    menuName: '科室管理',
    menuIcon: null,
    routeName: 'department-manager',
    routePath: 'department-manager',
    componentName: null,
    componentPath: 'views/system-manager/department-manager/index.ts',
    sort: 1,
    visible: true,
    closable: true
  },
  {
    id: '23',
    parentId: '2',
    menuName: '数据管理',
    menuIcon: null,
    routeName: 'data-manager',
    routePath: 'data-manager',
    componentName: null,
    componentPath: null,
    sort: 1,
    visible: true,
    closable: true
  },
  {
    id: '2301',
    parentId: '23',
    menuName: '标准值域',
    menuIcon: null,
    routeName: 'standard-data-manager',
    routePath: 'standard-data-manager',
    componentName: null,
    componentPath: 'views/system-manager/data-manager/standard-data-manager/index.ts',
    sort: 1,
    visible: true,
    closable: true
  },
  {
    id: '3',
    parentId: null,
    menuName: '系统监控',
    menuIcon: 'EyeOutlined',
    routeName: 'system-monitor',
    routePath: 'system-monitor',
    componentName: null,
    componentPath: null,
    sort: 1,
    visible: null,
    closable: null
  },
  {
    id: '31',
    parentId: '3',
    menuName: '健康检查',
    menuIcon: null,
    routeName: 'health-check',
    routePath: 'health-check',
    componentName: null,
    componentPath: 'views/system-monitor/health-check/index.ts',
    sort: 1,
    visible: true,
    closable: true
  },
  {
    id: '10000',
    parentId: null,
    menuName: '代码示例',
    menuIcon: 'CodeOutlined',
    routeName: 'demo',
    routePath: 'demo',
    componentName: null,
    componentPath: null,
    sort: 1,
    visible: null,
    closable: null
  },
  {
    id: '10001',
    parentId: '10000',
    menuName: 'Naive UI',
    menuIcon: null,
    routeName: 'naive-ui',
    routePath: 'naive-ui',
    componentName: null,
    componentPath: null,
    sort: 1,
    visible: true,
    closable: true
  },
  {
    id: '1000101',
    parentId: '10001',
    menuName: 'Button',
    menuIcon: null,
    routeName: 'button',
    routePath: 'button',
    componentName: null,
    componentPath: 'views/demo/naive-ui/button/index.ts',
    sort: 1,
    visible: true,
    closable: true
  },
  {
    id: '1000101',
    parentId: '10001',
    menuName: 'Select',
    menuIcon: null,
    routeName: 'select',
    routePath: 'select',
    componentName: null,
    componentPath: 'views/demo/naive-ui/select/index.ts',
    sort: 1,
    visible: true,
    closable: true
  },
  {
    id: '10002',
    parentId: '10000',
    menuName: 'Apache ECharts',
    menuIcon: null,
    routeName: 'apache-echarts',
    routePath: 'apache-echarts',
    componentName: null,
    componentPath: null,
    sort: 1,
    visible: true,
    closable: true
  },
  {
    id: '1000201',
    parentId: '10002',
    menuName: 'Pie',
    menuIcon: null,
    routeName: 'pie',
    routePath: 'pie',
    componentName: null,
    componentPath: 'views/demo/apache-echarts/pie/index.ts',
    sort: 1,
    visible: true,
    closable: true
  },
  {
    id: '10003',
    parentId: '10000',
    menuName: 'Vue Use',
    menuIcon: null,
    routeName: 'vue-use',
    routePath: 'vue-use',
    componentName: null,
    componentPath: null,
    sort: 1,
    visible: true,
    closable: true
  },
  {
    id: '1000301',
    parentId: '10003',
    menuName: 'Use Mouse',
    menuIcon: null,
    routeName: 'use-mouse',
    routePath: 'use-mouse',
    componentName: null,
    componentPath: 'views/demo/vue-use/use-mouse/index.ts',
    sort: 1,
    visible: true,
    closable: true
  },
  {
    id: '1000302',
    parentId: '10003',
    menuName: 'Use Data Table',
    menuIcon: null,
    routeName: 'use-data-table',
    routePath: 'use-data-table',
    componentName: null,
    componentPath: 'views/demo/vue-use/use-data-table/index.ts',
    sort: 1,
    visible: true,
    closable: true
  }
]
