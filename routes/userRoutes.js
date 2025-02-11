const express = require("express");
const { registerUser, loginUser, getUsers, getUserById, updateUser, deleteUser } = require("../controller/userController");
const authMiddleware = require("../middleware/auth");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

router.get("/getall", authMiddleware, getUsers);
router.get("/getuser/:id", authMiddleware, getUserById);
router.put("/update/:id", authMiddleware, updateUser);
router.delete("/delete/:id", authMiddleware, deleteUser);

module.exports = router;
