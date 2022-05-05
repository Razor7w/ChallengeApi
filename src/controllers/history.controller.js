const boom = require("boom");

const History = require("../models/history.model");

const getHistories = async (req, reply) => {
  try {
    const history = await History.find();

    reply.code(200).send(history);
  } catch (err) {
    throw boom.boomify(err);
  }
};

const getHistoryById = async (req, reply) => {
  try {
    const history = await History.findById(req.params.id);

    reply.code(200).send(history);
  } catch (err) {
    throw boom.boomify(err);
  }
};

const saveHistory = async (req, reply) => {
  try {
    const history = new History(req.body);

    await history.save();

    reply.code(201).send(history);
  } catch (err) {
    throw boom.boomify(err);
  }
};

const updateHistory = async (req, reply) => {
  try {
    const history = await History.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    reply.code(200).send(history);
  } catch (err) {
    throw boom.boomify(err);
  }
};

const deleteHistory = async (req, reply) => {
  try {
    await History.findByIdAndDelete(req.params.id);

    reply.code(204).send();
  } catch (err) {
    throw boom.boomify(err);
  }
};

module.exports = {
  getHistories,
  getHistoryById,
  saveHistory,
  updateHistory,
  deleteHistory,
};
