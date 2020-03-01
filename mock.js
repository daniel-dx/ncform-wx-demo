module.exports = {
  "type": "object",
  "properties": {
    "show": {
      "type": "boolean",
      "value": true,
      "ui": {
        "label": "Show",
        "widget": "ncform-radio",
        "widgetConfig": {
          items: [
            { name: '是', value: true },
            { name: '否', value: false }
          ]
        }
      }
    },
    "age": {
      "type": "string",
      "value": "20",
      "ui": {
        "hidden": "dx: {{$root.show}} === false",
        "label": "Age",
        "widget": "ncform-input"
      }
    },
    "name": {
      "type": "string",
      "value": "hello daniel",
      "ui": {
        "hidden": "dx: {{$root.age}} === '20'",
        "label": "Name",
        "widget": "ncform-input"
      }
    }
  }
}