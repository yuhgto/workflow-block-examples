# Configure a primitive field - string, number or boolean

Primitive fields represent data in the 3 primitive data types – string, number or boolean. 
- String - contains a piece of text
- Number - contains numeric data (can be positive, negative, integer or floating point)
- Boolean – contains true or false data

1. Choose string, number, or boolean as the schema type
2. If your field’s options will not change, add them as static option. Selecting ‘Add static options’. For each option, define:
    1. Label – text which is shown to the user
    2. Value – data that is stored and passed to the workflow block
3. If you want to populate the options dynamically, select “Add remote options”. You will need to specify a remote URL from which the options are loaded
    1. monday will send a POST request to your remote options URL to get the options
    2. The remote options URL should return options as an array in this format: 
    
    ```json
    [ { "value" : 400, "label" : "Large" }, { "value" : 200, "label" : "Medium" }, { "value" : 100, "label" : "Small" } ]
    ```