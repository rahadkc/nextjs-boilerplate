// @ts-nocheck
import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import UserModel, { User } from "../models/userModel";

export const getUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const eventId = req.query.id as string;

  if (!mongoose.Types.ObjectId.isValid(eventId)) {
    res.status(404).json({ error: "No such Event" });
    return;
  }

  try {
    const user: User | null = await UserModel.findById(eventId);
    if (!user) {
      res.status(404).json({ error: "No such user" });
      return;
    }
    res.status(200).json(user.toJSON());
  } catch (_er) {
    res.status(500).json({ error: "Internal Server Error", er: _er });
  }
};
