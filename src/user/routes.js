const {Router}=require("express");
const userRouter = Router();
const {hashPassword, unHash, tokenCheck}=require("../middleware");
const {createUser, deleteUser, login}=require("./controllers");

userRouter.post("/user", hashPassword, createUser, tokenCheck);
userRouter.get("/user", tokenCheck, login); //change to login as well
userRouter.post("/login",unHash, login);
userRouter.delete("/:username", deleteUser);

module.exports = userRouter;
