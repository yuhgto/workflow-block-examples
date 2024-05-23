# Configure an object field

An object field is a “field of fields” – it represents 1 or more subfields. You can use it to dynamically create input fields to enable on a workflow block. 

> *Example: An "Update item columns" block could use an object field to represent the columns on a board. Since the columns on a monday board are not fixed, the block should return a custom list of fields based on the columns on a board.*

1. Choose ‘Object’ as the schema type
2. If your subfields are always the same, select “Static schema”
    1. Add each field by clicking “Add”
3. If your subfields will change dynamically, select “Dynamic schema”. You will need to specify a remote URL which loads the subfields. 
    1. monday will send a POST request to your remote options URL to get the options
    2. Your remote URL should return subfields in this format: 
        
        ```json
        {
              name: {
                title: "User name",
                type: "primitive", 
                primitiveType: "string", 
                isNullable: false, 
                isArray: true
              },
              email: {
                title: "Email",
                type: "primitive", 
                primitiveType: "string", 
                isNullable: false, 
                isArray: false
              },
              transformationType: {
                title: "Transformation",
                type: "custom", 
                fieldTypeKey: "transformationTypeField", // use the feature's unique key 
                isNullable: false, 
                isArray: false
              }
          }
        ```