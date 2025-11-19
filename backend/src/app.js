import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({ ok: true, msg: "Hello from Express inside a Dev Container!", name: 'Vaishnavi' });
});

// Check health status
app.get("/health", (req, res) => {
  res.status(200).send("healthy");
});

// Get current time 
app.get("/api/time", (req, res) => {
  const currentTime = new Date().toLocaleDateString();
  res.json({ serverTime: currentTime });
});

// Get splendid circles
app.get("/math/circle/:r", (req, res) => {
  let radius = req.params['r'];

  const circleArea = Math.PI * radius * radius;
  const circleCircumference = Math.PI * 2 * radius;
  res.json({
    "area": circleArea,
    "circumference": circleCircumference
  });
});

// Get radical rectangles
app.get("/math/rectangle/:width/:height", (req, res) => {
  let width = req.params['width'];
  let height = req.params['height'];
  const rectArea = width * height;
  const rectPerimeter = 2 * width + 2 * height;
  res.json({
    'area': rectArea,
    'perimeter': rectPerimeter
  });
});

// Get 
app.get('/math/power/:base/:exponent', (req, res) => {
  let base = req.params['base'];
  let exponent = req.params['exponent'];
  const power = Math.pow(base, exponent);
  const includeRoot = req.query.root === "true";
  let response = {
    'result': power
  };
  if (includeRoot == true) {
    response.root = Math.sqrt(base);
  }
  res.json(response);
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});