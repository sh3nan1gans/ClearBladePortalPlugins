function PluginTest(settings, updateCallback) {
    this.allInfo = {settings: settings};
    this.render = function (element) {
        return `Stringified Info: <div>${JSON.stringify(this.allInfo)}</div>`;
    }

    this.onSettingsChanged = function (settings) {
        console.log(settings);
        this.allInfo.settings = settings;
    }

    this.onCalculatedValueChanged = function (data) {
        console.log(data);
        this.allInfo.data = data;
    }

    this.onDispose = function () {
        console.log("disposed");
    }
}

CB_PORTAL.registerWidget({
    type_name: "MyTestWidget",
    display_name: "My Test Widget",
    plugin: true,
    class: PluginTest,
    settings: [
        {
            name: "textVal",
            display_name: "Text Value",
            type: "text",
            default_value: "Plugin",
        },
        {
            name: "booleanVal",
            display_name: "Boolean Value",
            type: "boolean",
            default_value: true,
        },
        {
            name: "numberVal",
            display_name: "Number Value",
            type: "number",
            default_value: 42
        },
        {
            name: "colorVal",
            display_name: "Color Value",
            type: "color",
            default_value: "#fff",
        },
        {
            name: "optionVal",
            display_name: "Option Value",
            type: "option",
            default_value: "option2",
            options: [
                {
                    name: "Option 1",
                    value: "option1"
                },
                {
                    name: "Option 2",
                    value: "option2"
                }
            ]
        },
        {
            name: "multiObjectVal",
            display_name: "Multiple Objects Value",
            type: "MULTI_OBJECT_SETTING_TYPE",
            default_value: [
                {"name": "label", "display_name": "Label", "type": "text"},
                {
                    "name": "orientation",
                    "display_name": "Orientation",
                    "type": "option",
                    "options": [{"name": "left", "value": "left"}, {"name": "right", "value": "right"}],
                    "default_value": "right"
                }
            ],
        },
        {
            "name": "dataVal",
            "display_name": "Data Value",
            "type": "DATA_SETTING_TYPE",
            "group": "Data",
            "incoming_parser": true,
            "expected_format": "[{ \"name\": \"Page A\", \"uv\": 4000, \"pv\": 2400, \"av\": 1400, \"rv\": 3000 }, { \"name\": \"Page B\", \"uv\": 3000, \"pv\": 1398, \"av\": 1400, \"rv\": 3000 }]",
            "default_value": {
                "dataType": "CALCULATED_DATA_TYPE",
                "value": "return [{ \"name\": \"Page A\", \"uv\": 4000, \"pv\": 2400, \"av\": 1400, \"rv\": 3000 }, { \"name\": \"Page B\", \"uv\": 3000, \"pv\": 1398, \"av\": 1400, \"rv\": 3000 }];"
            },
            "required": true
        }
    ],
});