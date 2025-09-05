const Feedback = require("./feedbackLib");

const getAllFeedbacks = (req, res) => {
  res.json(Feedback.getAll());
};

const getFeedbackById = (req, res) => {
  const id = parseInt(req.params.feedbackId);
  const feedback = Feedback.findById(id);
  if (!feedback) {
    return res.status(404).json({ message: "Feedback not found" });
  }
  res.json(feedback);
};

const createFeedback = (req, res) => {
  const { sender, message, rating } = req.body;
  if (!sender || !message || rating === undefined) {
    return res.status(400).json({ message: "Invalid data" });
  }
  const fb = Feedback.addOne(sender, message, rating);
  res.status(201).json(fb);
};

const updateFeedback = (req, res) => {
  const id = parseInt(req.params.feedbackId);
  const updated = Feedback.updateOne(id, req.body);
  if (!updated) {
    return res.status(404).json({ message: "Feedback not found" });
  }
  res.json(updated);
};

const deleteFeedback = (req, res) => {
  const id = parseInt(req.params.feedbackId);
  const deleted = Feedback.deleteOne(id);
  if (!deleted) {
    return res.status(404).json({ message: "Feedback not found" });
  }
  res.json(deleted);
};

module.exports = {
  getAllFeedbacks,
  getFeedbackById,
  createFeedback,
  updateFeedback,
  deleteFeedback,
};
