const { create } = require("ts-node");

const getAllIncarnations = async(req, res) => {
  res.send('get all incarnations');
};

const getIncarnation = async(req, res) => {
  res.send('get incarnation');
};

const createIncarnation = async(req, res) => {
  res.send('create incarnation');
};

const updateIncarnation = async(req, res) => {
  res.send('update incarnation');
};

const deleteIncarnation = async(req, res) => {
  res.send('delete incarnation');
};

module.exports = {
  getAllIncarnations,
  getIncarnation,
  createIncarnation,
  updateIncarnation,
  deleteIncarnation,
};