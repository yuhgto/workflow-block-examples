# Configure a credentials field

Credentials fields are used to store and reuse user credentials, such as logins, API keys, OAuth tokens, etc. When a user clicks the field, they’ll be presented with a list of existing credentials. They can click “Add a new credential” which will open a new window and redirect them to a page of your choice. 

1. Choose “Credentials” as the schema type
2. Add a **Remote options URL** - this will return the list of credentials
    1. monday will send a POST request to your remote options URL to get the options
    2. Your remote options URL should return credentials in the following format:
    
    ```json
    [
        { title: "Dipro's login", value: 'abc1234' },
        { title: "Rachel's login", value: 'bcd2345' }
      ]
    ```
    
3. Add a Create Remote Options URL – this is where the user is directed when they click “Add new credential”
    1. When a user clicks “add new” – monday will open a new window and send them to your Create Remote Options URL
    2. Your app will receive a GET request with the following query params:
        
        
        | Param | Description |
        | --- | --- |
        | backToUrl | URL to redirect user to when login is done |
        | token | JWT to authenticate that the request is coming from monday. The JWT contains useful information like the user ID, account ID, etc |
    3. When your app has stored the credential, redirect the window to the `backToUrl`  – the window will automatically close