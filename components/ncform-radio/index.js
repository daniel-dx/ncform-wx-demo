// components/ncform-input/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    config: {
      type: Object,
      value: {
        items: []
      }
    },
    value: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    items: []
  },

  lifetimes: {
    attached: function () { 
      const foundOne = this.data.config.items.find(item => item.value === this.data.value);
      if (foundOne) foundOne.checked = true;

      this.setData({
        items: this.data.config.items
      })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    radioChange: function (e) {
      this.triggerEvent('widgetValueChange', e.detail.value === 'true' ? true : false)
    }
  }
})
