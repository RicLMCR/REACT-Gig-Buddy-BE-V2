const {Router}=require("express");
const userRouter = Router();
const {hashPassword}=require("../middleware");
const {createUser, deleteUser}=require("./controllers");

userRouter.post("/user", hashPassword, createUser);
userRouter.delete("/:username", deleteUser);

module.exports = userRouter;
