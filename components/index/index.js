// components/index/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    componentName: {
      type: String,
      value: 'ncform-input'
    },
    componentConfig: {
      type: Object,
      value: {}
    },
    value: {
      type: String|Boolean
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    valueChange(e) {
      this.triggerEvent('widgetValueChange', e.detail);
    }
  }
})
