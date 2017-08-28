export const constant = {
  colunmTypeOptions: [
    { label: '数值', value: 'int' },
    { label: '枚举', value: 'enum' },
    { label: '日期', value: 'date' },
    { label: '时间', value: 'time' },
    { label: '字符串', value: 'string' },
    { label: '布尔值', value: 'boolean' },
    { label: '图片列表', value: 'photos' },
  ],
  tableConfig: {
    // 对应远端api
    api: 'http://',
    // 主键
    key: 'id',
    name: 'ID',
    // 支持创建行
    canCreate: true,
    // 支持删除行
    canDelete: true,
    showKey: true,
    canKeySearch: true,
    // 分页 [0:无分页, 1:前端分页, 2:后端分页]
    paging: 0,
    columns: [],
  },
  columnConfig: {
    key: 'key',
    name: '键',
    order: 0,
    type: 'string',
    canEdit: true,
    canSearch: true,
  },
}

export const constantPlugin = {
  install: function(Vue, options) {
    Vue.prototype.$getConst = key => {
      return constant[key]
    }
  },
}
