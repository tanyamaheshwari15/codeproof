import bcrypt from "bcrypt";
import User from "../models/User.js";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validate input
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        message: "User already exists",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });
  return res.status(201).json({ message: "User registered successfully" });

  } catch (error) {
    return res.status(500).json({ message: "Error registering user" });
  }
};

export const loginUser = async (req, res) => {

  try{
    const { email, password } = req.body;
    const user = await User.findOne({email});

    if(!user) {
      return res.status(400).json({ message: "Email or password is incorrect" });
    }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Email or password is incorrect" });
      }
      return res.status(200).json({ message: "Login successful" });

  } catch (error) {
    return res.status(500).json({ message: "Email or password is incorrect" });
  }
};

export const logoutUser = async (req, res) => {
  try{
    // Implement logout logic here (e.g., clearing session or token)
    return res.status(200).json({ message: "Logout successful" });
  }catch (error) {
    return res.status(500).json({ message: "Error logging out user" });
  }
};