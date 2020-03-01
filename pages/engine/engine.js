// pages/engine/engine.js

let mockData = require('../../mock');
let interpreter = require('./interpreter.js');

Component({

  data: {
    formSchema: {
      properties: []
    },
    formValue: {},
  },

  lifetimes: {
    attached: function () {
      const newSchema = this._handleSchem(mockData);
      this._extractValueFormSchema(newSchema);
      this._calcExpressions(newSchema);
    },
  },

  methods: {

    valueChange(e) {
      const path = e.target.dataset.path;
      const value = e.detail;
      this.data.formValue[path] = value;

      // 计算表达式
      this._calcExpressions(this.data.formSchema);
    },

    // 提取值
    _extractValueFormSchema(schema) {
      schema.properties.forEach(item => {
        this.data.formValue[item.field] = item.value;
      })
    },

    // 对 schema 进行加工
    // TODO: 演示版，只支持一级属性，不支持嵌套
    _handleSchem(schema) {
      schema.properties = Object.keys(schema.properties).map(key => {
        const item = schema.properties[key];
        item.field = key;
        return item;
      });
      return schema;
    },

    // 计算 dx 表达式
    // TODO: 演示版，只支持 hidden
    _calcExpressions(formSchema) {
      formSchema.properties.forEach(item => {
        if (item.ui.hidden === undefined) {
          item._uiHidden = false;
        } else {
          const jsExpr = item.ui.hidden.replace('dx:', '').replace(/{{(.*?)}}/g, '$1');
          const result = interpreter.run(`module.exports=(${jsExpr})`, { $root: this.data.formValue});
          item._uiHidden = result;
        }
      })

      this.setData({
        formSchema
      })
    }
  }

})