const express = require("express");
const router = express.Router();

// import the register controller
const {getAllUser, deleteUser, updateUser, getSingleUser} = require("../Controller/UserController");


// Routes for controllers
router.get("/get-all-users",getAllUser);
router.get("/get-single-user/:id",getSingleUser);
router.delete("/delete-user",deleteUser);
router.put("/update-user",updateUser);

module.exports = router;