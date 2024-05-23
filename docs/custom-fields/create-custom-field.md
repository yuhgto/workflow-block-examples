# Build a workflow custom field

Workflow fields represent data that are inputs or outputs of a workflow block. 

Custom fields are special data types that can be defined by an app developer. They come in 3 flavours: 
- Primitives – such as string, number, or boolean values
- Objects – fields that represent a set of subfields
- Credentials – a special field to store user credentials or API tokens

You can use custom fields to: 

- List supported operations in your workflow block
- Get a list of products from a 3rd party API and display them for a user to choose
- Dynamically show a list of subfields depending on user selections
- Store and manage user credentials or API tokens

## Add a custom field to your app

1. Open your app and navigate to the Features section
2. Click the “Create feature” button
3. Select “Workflow custom field”

## Configure custom field’s basic information

1. Name the field something recognizable
2. Add a default field key
3. Select a schema type - **string, number, boolean, object, or credentials**

## Update the fields’ options

Different field types require slightly different configuration. Read the following articles to learn about configuring each one: 
- Configuring a primitive field (number, string, boolean)
- Configuring an object field
- Configuring a credentials field

## Add dependencies

Your field can contain dependencies, which are additional fields that the user will have to configure before configuring yours. 

You can add mandatory dependencies, which must be configured first, and optional dependencies. 

When adding your custom field to a workflow block, make sure that all the required dependencies are added as input fields. 

***[TK - add example]***

Dependencies will be sent to your field in the following format: