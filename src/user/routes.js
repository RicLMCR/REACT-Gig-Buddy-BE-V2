const {Router}=require("express");
const userRouter = Router();
const {createUser, deleteUser}=require("./controllers");

userRouter.post("/user", createUser);
userRouter.delete("/:username", deleteUser);

module.exports = userRouter;
