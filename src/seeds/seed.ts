import mongoose from 'mongoose';
import connectDB from '../config/connection.js';
import { User } from '../models/User.js';
import { Thought } from '../models/Thought.js';

// Define sample data
const seedUsers = [
  { username: 'Super_Mario', email: 'Mario@example.com' },
  { username: 'Luigi', email: 'Luigi@example.com' },
  { username: 'Peach', email: 'Peach@example.com' },
  { username: 'Toad', email: 'Toad@example.com' },
  { username: 'Bowser', email: 'Bowser@example.com' },
  { username: 'Kamek', email: 'Kamek@example.com' },
];

const seedThoughts = [
  { thoughtText: 'This is a great thought!', username: 'Super_Mario' },
  { thoughtText: 'I love coding!', username: 'Luigi' },
  { thoughtText: 'This is a great peach!', username: 'Peach' },
  { thoughtText: 'I love coding mushrooms!', username: 'Toad' },
  { thoughtText: 'I smell like POOP!', username: 'Bowser' },
  { thoughtText: 'I love flying!', username: 'Kamek' },
];

// Function to seed the data
const seedDatabase = async () => {
  try {
    // Connect to the database
    await connectDB();

    // Clear existing data
    await User.deleteMany({});
    await Thought.deleteMany({});

    console.log('Old data removed.');

    // Insert seed data
    const users = await User.insertMany(seedUsers);
    const thoughts = await Thought.insertMany(seedThoughts);

    console.log('Database seeded successfully with users and thoughts.');
    console.log('Users:', users);
    console.log('Thoughts:', thoughts);
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    // Close the database connection
    mongoose.connection.close();
  }
};

// Execute the seed function
seedDatabase();
