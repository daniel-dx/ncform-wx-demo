// components/ncform-input/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    config: {
      type: Object,
      value: {
        type: 'text', // number/password
      }
    },
    value: {
      type: String
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
    onChange: function(e) {
      this.triggerEvent('widgetValueChange', e.detail.value)
    }
  }
})
