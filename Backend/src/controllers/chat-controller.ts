import { Request, Response, NextFunction } from "express";
import User from "../models/User.js";
import { configureOpenAI } from "../config/openai-config.js";
import { ChatCompletionRequestMessage, OpenAIApi } from "openai";

export const generateChatCompletion = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { message } = req.body;

  try {
    const user = await User.findById(res.locals.jwtData.id);
    if (!User)
      return res.status(401).json("User not registered of token malFunctioned");

    //Grab chats of user
    const chats = user.chat.map(({ role, content }) => ({
      role,
      content,
    })) as ChatCompletionRequestMessage[];
    chats.push({ content: message, role: "user" });
    user.chat.push({ content: message, role: "user" });

    //send all chat with new one to openAI API
    const config = configureOpenAI();
    const openai = new OpenAIApi(config);

    //get latest response
    const chatResponse = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: chats,
    });
    user.chat.push(chatResponse.data.choices[0].message);
    await user.save();
    return res.status(200).json({ chats: user.chat });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};
