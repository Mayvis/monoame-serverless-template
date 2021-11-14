const router = require("express").Router();

/**
 * @swagger
 * /api/v1/test:
 *   get:
 *     tags:
 *       - test
 *     name: Test
 *     summary: Test API
 *     produces:
 *       - application/json
 *     responses:
 *       '200':
 *         description: Connection has been established successfully.
 */
router.get("/api/v1/test", async (req, res) => {
  res.status(200).json({ message: "ok" });
});

module.exports = router;
