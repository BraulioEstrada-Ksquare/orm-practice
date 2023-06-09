"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Post_router_1 = require("./Post.router");
const User_router_1 = require("./User.router");
const Comment_router_1 = require("./Comment.router");
const express_1 = require("express");
const APIRouter = (0, express_1.Router)();
APIRouter.use('/post', Post_router_1.PostRouter);
APIRouter.use('/user', User_router_1.UserRouter);
APIRouter.use('/comment', Comment_router_1.CommentRouter);
exports.default = APIRouter;
