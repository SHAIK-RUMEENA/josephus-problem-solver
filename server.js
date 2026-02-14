const express = require("express");
const path = require("path");

const app = express();
const PORT = 5000;

/* Serve static files from public folder */
app.use(express.static(path.join(__dirname, "public")));

/* Optional: redirect root to Josephus page */
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "Josephus_problem.html"));
});

/* Start server */
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
