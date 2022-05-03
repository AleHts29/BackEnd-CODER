// import { response } from "express";
import { MessageModel } from "../models/messages.model.js";

export async function createMessage(req, res) {
  const { body } = req;
  const response = await MessageModel.create(body);
  res.status(200).json(response);
}

export async function getMessages(req, res) {
  const message = await MessageModel.find();
  res.status(200).json(message);
}

export async function updateMessages(req, res) {
  const id = req.params.id;
  const { body } = req;
  const response = await MessageModel.updateOne({ _id: id }, body);
  res.status(200).json(response);
}

export async function deleteMessages(req, res) {
  const id = req.params.id;
  const response = await MessageModel.deleteOne({ _id: id });
  res.status(200).json(response);
}
