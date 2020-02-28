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
    "name": {
      "type": "string",
      "value": "hello daniel",
      "ui": {
        "hidden": "dx: {{$root.show}} === false",
        "label": "Name",
        "widget": "ncform-input"
      }
    }
  }
}