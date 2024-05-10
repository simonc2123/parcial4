const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// Ruta para el inicio de sesión
router.post("/login", authController.login);

module.exports = router;
