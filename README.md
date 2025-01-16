ClusterDuck - Social Network API
Description
ClusterDuck is a robust API designed for a social media startup. It allows users to interact with the social network platform, handle large amounts of unstructured data, and seamlessly manage users, thoughts, reactions, and friendships. Built with Node.js and MongoDB, this API ensures smooth operations by syncing Mongoose models with the MongoDB database.

Features
NoSQL Database: Uses MongoDB for handling large, unstructured data in a fast and flexible way.
User and Thought Management: Ability to create, update, and delete users and thoughts.
Reaction Management: Add and remove reactions to thoughts.
Friend Management: Add and remove friends to/from a user's friend list.
Formatted JSON: API GET routes return data in well-structured, readable JSON format.
Installation
To get started, follow the steps below:

Prerequisites
Node.js (v14.0 or higher)
MongoDB or a MongoDB Atlas account for cloud storage
Steps
Clone the repository:

bash
Copy
Edit
git clone https://github.com/<your-username>/ClusterDuck.git
Install dependencies:

bash
Copy
Edit
cd ClusterDuck
npm install
Create a .env file in the root directory and add the following:

bash
Copy
Edit
MONGODB_URI=your-mongo-db-connection-string
Start the server:

bash
Copy
Edit
npm start
Open Insomnia or any other API testing tool to interact with the API routes.

API Routes
GET Routes
/api/users: Get all users.
/api/users/:userId: Get a specific user by ID.
/api/thoughts: Get all thoughts.
/api/thoughts/:thoughtId: Get a specific thought by ID.
POST Routes
/api/users: Create a new user.
/api/thoughts: Create a new thought.
/api/thoughts/:thoughtId/reactions: Add a reaction to a thought.
/api/users/:userId/friends: Add a friend to a user's friend list.
PUT Routes
/api/users/:userId: Update a user's details.
/api/thoughts/:thoughtId: Update a thought's details.
DELETE Routes
/api/users/:userId: Delete a user.
/api/thoughts/:thoughtId: Delete a thought.
/api/thoughts/:thoughtId/reactions/:reactionId: Delete a reaction to a thought.
/api/users/:userId/friends/:friendId: Remove a friend from a user's friend list.
Usage
Test API Routes with Insomnia
GET routes: Retrieve user and thought data in a structured JSON format.
POST, PUT, DELETE routes: Successfully create, update, and delete users, thoughts, reactions, and friends.
Example Requests
Create a User (POST /api/users)

json
Copy
Edit
{
  "username": "johnDoe",
  "email": "john@example.com"
}
Create a Thought (POST /api/thoughts)

json
Copy
Edit
{
  "thoughtText": "This is a great thought!",
  "username": "johnDoe"
}
Add Reaction to Thought (POST /api/thoughts/:thoughtId/reactions)

json
Copy
Edit
{
  "reactionBody": "I agree!",
  "username": "janeDoe"
}
Add Friend (POST /api/users/:userId/friends)

json
Copy
Edit
{
  "friendId": "60f13b9b5f79b2b7e7a4b073"
}
Acceptance Criteria
The server starts and connects to MongoDB on startup.
API GET routes for users and thoughts return well-structured JSON data.
API POST, PUT, and DELETE routes work correctly for users, thoughts, reactions, and friendships.
You can add and remove reactions to thoughts and add/remove friends from the user’s friend list.
Technologies Used
Node.js: JavaScript runtime for building the backend.
MongoDB: NoSQL database for flexible data storage.
Mongoose: ODM for interacting with MongoDB.
Express: Web framework for building the API.
License
This project is licensed under the MIT License.