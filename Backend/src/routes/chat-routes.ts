import { Router } from "express";
import { verifyToken } from "../utils/token-manager.js";
import { chatCompletionValidator, validate } from "../utils/validator.js";
import { generateChatCompletion } from "../controllers/chat-controller.js";

//Protected API
const charRoutes = Router();
charRoutes.post(
  "/new",
  validate(chatCompletionValidator),
  verifyToken,
  generateChatCompletion
);

export default charRoutes;
