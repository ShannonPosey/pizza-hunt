const router = require("express").Router();
const {addComment, removeComment} = require("../../controllers/comment-controller");

// SET up all POST at /api/comments/:pizzaId
router
.route("/:pizzaId")
.post(addComment);

// SET up DELETE at /api/comments/:pizzaId/:commentId
router
.route("/:pizzaId/:commentId")
.delete(removeComment);

module.exports = router;