import express from "express";

const router = express.Router();

// Get splendid circles
router.get("/circle/:r", (req, res) => {
  try {
    const radius = Number(req.params.r);
    if (isNaN(radius)) {
      return res.status(400).json({
        error: "Invalid radius. Please provide a numeric value."
      });
    }
    const circleArea = Math.PI * radius * radius;
    const circleCircumference = 2 * Math.PI * radius;
    return res.status(200).json({
      "area": circleArea,
      "circumference": circleCircumference
    });
  }
  catch (err) {
    console.error(err);
    return res.status(500).json({
      error: "Something went wrong; please try again."
    });
  }
});

// Get radical rectangles
router.get("/rectangle/:width/:height", (req, res) => {
  try {
    const width = Number(req.params.width);
    const height = Number(req.params.height);
    if (isNaN(width) || isNaN(height)) {
      return res.status(400).json({
        error: "Invalid width or height. Please provide numeric values."
      });
    }

    const rectArea = width * height;
    const rectPerimeter = 2 * width + 2 * height;
    return res.status(200).json({
      'area': rectArea,
      'perimeter': rectPerimeter
    });
  }
  catch (err) {
    console.error(err);
    return res.status(500).json({
      error: "Something went wrong; please try again."
    });
  }
});

// Get power 
router.get('/power/:base/:exponent', (req, res) => {
  try {
    const base = Number(req.params.base);
    const exponent = Number(req.params.exponent);
    if (base == NaN || exponent == NaN) {
      return res.status(400).json({ "error": "Invalid base or exponent. Please provide numeric values." });
    }
    const power = Math.pow(base, exponent);
    const includeRoot = req.query.root === "true";
    let response = {
      'result': power
    };
    if (includeRoot) {
      response.root = Math.sqrt(base);
    }
    return res.status(200).json(response);
  }
  catch (err) {
    console.error(err);
    return res.status(500).json({
      error: "Something went wrong; please try again."
    });
  }
});

export default router;
