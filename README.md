# Social Network API

This is a RESTful API for a social network application. Built with **TypeScript**, **Node.js**, **Express**, **MongoDB**, and **Mongoose**, this API allows users to create profiles, post thoughts, react to other users' thoughts, and manage a list of friends.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
  - [Seeding the Database](#seeding-the-database)
- [API Endpoints](#api-endpoints)
  - [Users](#users)
  - [Thoughts](#thoughts)
  - [Reactions](#reactions)
  - [Friends](#friends)
- [Technologies Used](#technologies-used)
- [License](#license)

---

## Features

- **User Management**: Create, update, delete, and view users.
- **Thoughts**: Post, view, and delete thoughts.
- **Reactions**: React to thoughts.
- **Friends List**: Add or remove friends.

---

## Installation

### Prerequisites

- **Node.js** (v14 or higher)
- **MongoDB**

### Setup

1. **Clone the Repository**:
   ```bash
   git clone <https://github.com/kvothe1387/Social_Network_API>
   cd social-network-api

### Usage
  * npm run build
  * npm run seed
  * npm run start

# API Endpoints
  ### Users
  * GET /api/users - Retrieve all users.
  * GET /api/users/:id - Retrieve a single user by ID.
  * POST /api/users - Create a new user.
  * PUT /api/users/:id - Update an existing user by ID.
  * DELETE /api/users/:id - Delete a user by ID.
  ### Thoughts
   * GET /api/thoughts - Retrieve all thoughts.
   * GET /api/thoughts/:id - Retrieve a single thought by ID.
   * POST /api/thoughts - Create a new thought.
   * PUT /api/thoughts/:id - Update a thought by ID.
   * DELETE /api/thoughts/:id - Delete a thought by ID.
   ### Reactions
   * POST /api/thoughts/:thoughtId/reactions - Add a reaction to a thought.
   * DELETE /api/thoughts/:thoughtId/reactions/:reactionId - Remove a reaction from a thought.
   ### Friends
   * POST /api/users/:userId/friends/:friendId - Add a friend to a user's friend list.
   * DELETE /api/users/:userId/friends/:friendId - Remove a friend from a user's friend list.

  # Technologies Used
    * TypeScript - Strongly-typed JavaScript for robust development.
    * Node.js - JavaScript runtime for server-side applications.
    * Express.js - Web framework for creating API routes.
    * MongoDB - NoSQL database for storing user and thought data.
    * Mongoose - ODM library for MongoDB to model and manage data.

  ## Demo Video
  [Watch the Demo Video](https://drive.google.com/file/d/1eERLrUSetNTFRvUgIdEQjqa0rgHf0RTn/view?usp=drive_link)  

  # License
    * This project is licensed under the MIT License.