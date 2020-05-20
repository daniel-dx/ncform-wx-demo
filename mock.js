module.exports = {
  "type": "object",
  "properties": {
    "show": {
      "type": "boolean",
      "value": true,
      "ui": {
        "label": "Show",
        "desc": "bbbb",
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
      "value": "17",
      "ui": {
        "hidden": "dx: {{$root.show}} === false",
        "label": "Age",
        "desc": "aaaa",
        "widget": "ncform-input",
        "widgetConfig": {
          "type": "password"
        }
      }
    },
    "name": {
      "type": "string",
      "value": "hello daniel",
      "ui": {
        "hidden": "dx: parseInt({{$root.age}}) < 18",
        "label": "Name",
        "widget": "ncform-input"
      }
    }
  }
}