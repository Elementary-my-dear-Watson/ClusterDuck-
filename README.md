

# 🦆 Cluster Duck 🦆 -- Social Media API

Welcome to **ClusterDuck**, the quacky social network API for sharing your thoughts, reacting to friends' musings, and building a nest of connections! This project is a backend solution designed to handle large amounts of unstructured data using MongoDB, Express.js, and Mongoose. Perfect for any social media startup looking to provide a robust and playful experience for its users.

---

## 🦆 Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Models](#models)
  - [User](#user)
  - [Thought](#thought)
  - [Reaction](#reaction)
- [API Routes](#api-routes)
  - [User Routes](#user-routes)
  - [Thought Routes](#thought-routes)
  - [Reaction Routes](#reaction-routes)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Usage](#usage)
- [Walkthrough Video](#walkthrough-video)
- [Contact Information](#contact-information)
- [License](#license)

---

## About the Project

ClusterDuck is a social media API designed with scalability and fun in mind. With ducks and creatures at the center of the theme, users can share their thoughts ("quacks"), react to their friends' posts ("squawks"), and grow their social network ("duckpond").

---

## Features

- **NoSQL Database**: Powered by MongoDB to efficiently handle large amounts of unstructured data.
- **Express.js Routing**: Clear and concise routes for handling user and thought data.
- **Virtuals**: Dynamic fields like `friendCount` and `reactionCount` to enhance queries.
- **Timestamps**: Automatically formatted dates using custom getter methods.

---

## Models

### User

- **Fields:**
  - `username`: String, unique, required, trimmed.
  - `email`: String, unique, required, matches a valid email format.
  - `thoughts`: Array of `_id` values referencing the `Thought` model.
  - `friends`: Array of `_id` values referencing the `User` model.
- **Virtuals:**
  - `friendCount`: Retrieves the total number of friends.

### Thought

- **Fields:**
  - `thoughtText`: String, required, between 1-280 characters.
  - `createdAt`: Date, default current timestamp, formatted via a getter.
  - `username`: String, required.
  - `reactions`: Array of nested `reactionSchema` documents.
- **Virtuals:**
  - `reactionCount`: Retrieves the total number of reactions.

### Reaction (Schema Only)

- **Fields:**
  - `reactionId`: Mongoose's ObjectId, default new ObjectId.
  - `reactionBody`: String, required, max 280 characters.
  - `username`: String, required.
  - `createdAt`: Date, default current timestamp, formatted via a getter.

---

## API Routes

### User Routes

#### `/api/users`

- **GET**: Retrieve all users.
- **GET**: Retrieve a user by `_id`, including populated thought and friend data.
- **POST**: Create a new user. Example:
  ```json
  {
    "username": "ducklover",
    "email": "ducklover@pond.com"
  }
  ```
- **PUT**: Update a user by `_id`.
- **DELETE**: Remove a user by `_id` and their associated thoughts.

#### `/api/users/:userId/friends/:friendId`

- **POST**: Add a friend to a user's list.
- **DELETE**: Remove a friend from a user's list.

### Thought Routes

#### `/api/thoughts`

- **GET**: Retrieve all thoughts.
- **GET**: Retrieve a thought by `_id`.
- **POST**: Create a new thought and associate it with a user. Example:
  ```json
  {
    "thoughtText": "Quacking amazing day!",
    "username": "ducklover",
    "userId": "63f5abc123d45e6a78b9c012"
  }
  ```
- **PUT**: Update a thought by `_id`.
- **DELETE**: Remove a thought by `_id`.

### Reaction Routes

#### `/api/thoughts/:thoughtId/reactions`

- **POST**: Add a reaction to a thought.
- **DELETE**: Remove a reaction by its `reactionId`.

---

## Getting Started

### Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:yourusername/ClusterDuck-.git
   ```
2. Navigate to the project directory:
   ```bash
   cd clusterduck-
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Usage

1. Start the server:
   ```bash
   npm start
   ```
2. Use Insomnia or Postman to test the API endpoints.

---

## Walkthrough Video

Check out the walkthrough video below to see ClusterDuck in action:



---

## Contact Information

**Developer:** Martha Watson

- **GitHub:** [Elementary-my-dear-Watson](https://github.com/Elementary-my-dear-Watson)
- **Email:** [marthacdenzer@gmail.com](mailto\:marthacdenzer@gmail.com)

**Collaborator:** Jacob Watson

- **GitHub:** [JakeStair](https://github.com/JakeStair)
- **Email:** [jacob.watson00@yahoo.com](mailto\:jacob.watson00@yahoo.com)

---

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

Quack on, developers! 🦆

