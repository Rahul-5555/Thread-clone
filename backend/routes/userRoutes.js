import express from "express";
import { loginUser, logoutUser, signupUser, followUnfollowUser, updateUser, getUserProfile,getSuggestedUsers,freezeAccount } from "../controllers/userControllers.js";
import protectRoute from "../middlewares/protectRoute.js";

const router = express.Router();
router.get('/', (req, res) => {
  res.send('Welcome to the backend API');
});

router.get("/profile/:query", getUserProfile);
router.get("/suggested", protectRoute, getSuggestedUsers);
router.post("/signup", signupUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser)
router.post("/follow/:id", protectRoute, followUnfollowUser);
router.put("/update/:id", protectRoute, updateUser);
router.put("/freeze", protectRoute, freezeAccount);


export default router;