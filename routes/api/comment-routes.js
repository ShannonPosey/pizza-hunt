const router = require("express").Router();
const {addComment, removeComment, addReply, removeReply} = require("../../controllers/comment-controller");

// SET up all POST at /api/comments/:pizzaId
router
.route("/:pizzaId")
.post(addComment);

// SET up DELETE at /api/comments/:pizzaId/:commentId
router
.route("/:pizzaId/:commentId")
.put(addReply)
.delete(removeComment);

// SET up DELETE reply at /api/comments/:pizzaId
router
.route("/:pizzaId/:commentId/replyId")
.delete(removeReply);

module.exports = router;