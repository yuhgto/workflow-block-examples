# Build your first Workflow Block

Workflow blocks enable monday users to do actions in (or out) of the platform automatically. 

Each workflow block represents a logical step within a larger *monday workflow*. 

In this guide, we’ll be building an **action block** that sends a notification to a user. 

> NOTE: The workflow block builder is still in closed beta. It will be released in the coming months. 

## Create the workflow block feature

Open the monday app that you want to add this feature to. If you haven’t created an app yet, [follow these steps](https://developer.monday.com/apps/docs/manage#creating-a-new-app). 

Open the "OAuth" section and add the "notifications:create" scope. Press save. 

Click “Create Feature”

Choose “Workflow Block” from the feature selection menu

## Configure your block

Name your block something descriptive, like “Send notification”

Choose your block type - for this example, select “Action”

Add your block’s input fields. Our block will create a notification, so we’ll need the fields for the notification’s text body, the target item, and the target user: 

| Field type | Field key | Field title | Optional? | Constraints | List field? | Main field? |
| --- | --- | --- | --- | --- | --- | --- |
| String | notificationText | Text Body | No | N/A | No | Yes |
| Board | boardId | Target board | No | N/A | No | No |
| Item | itemId | Target item | Yes | boardId | No | No |
| User | userId | Recipient | No | N/A | No | No |

Add your block’s output fields. We’ll pass all the block’s inputs as outputs, so that subsequent blocks can use the notification’s info as inputs. 

| Field type | Field key | Field title | Constraints | List field? |
| --- | --- | --- | --- | --- |
| String | notificationText | Text Body | N/A | No |
| Board | boardId | Target board | N/A | No |
| Item | itemId | Target item | boardId | No |
| User | userId | Recipient | N/A | No |

Add a dummy “Execution URL” (we will change this later) –  `https://myserver.com`

Press done to save the feature

Add a unique key to the feature – `notificationBlock`

## Set up your execution URL

*Before doing these steps, make sure you have Node 18 and npm installed on your machine.* 

Clone the example code from the following Github repo - 

`git clone <url>`

Navigate to the repository

`cd apps/workflow-block-examples/create-notification-action-block`

Install the dependencies - `npm install`

Start the development server - `npm run dev`

Copy the URL and paste it as the Execution URL of your app feature

`https://abcd123456.apps-tunnel.monday.com` 

<aside>
💡 In your production app, remember to set up a different endpoints for each of your app features!

</aside>

## Test out your block!

Go back to the monday work management screen

Click the workflows icon at the top

Create a workflow

Add a “When status changes to something” trigger block

- Board - select a board
- Select a status column
- Select a status label

Add your “Create notification” action block

- Write notification text that maps “Previous status” and “Current status”
- Target item – item ID from step 1
- Recipient - User ID from step 1
- Target board – use the same board from step 1

Hit save

Open the board and change the status! You should get a notification. 

## Next steps

Once you’ve got this working, you can try the following to test your knowledge: 

- Add your app’s signing secret to the `.env` file and enable the authorization middleware
- Create a custom field and use it in your block