// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// const { v4: uuidv4 } = require("uuid");

// // Initialize Express app
// const app = express();
// const port = process.env.PORT || 5000;

// // Middleware to parse JSON request bodies
// app.use(express.json());
// app.use(cors());

// // MongoDB connection URL
// const mongoUrl = "mongodb+srv://vishali:visha26@cluster0.xtn7uvc.mongodb.net/Movies";

// // Connect to MongoDB
// mongoose.connect(mongoUrl, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => {
//     console.log("Database Connected Successfully");
//     app.listen(port, () => {
//       console.log(`Server is running at port ${port}`);
//     });
//   })
//   .catch((err) => console.log("Error connecting to MongoDB:", err));

// // Define Mongoose Schema and Model
// const movieSchema = new mongoose.Schema({
//   id: { type: String, required: true, unique: true },
//   title: { type: String, required: true },
//   year: { type: String, required: true },
//   genre: { type: String, required: true },
//   rating: { type: Number, required: true },
//   plot: { type: String, required: true },
//   poster: { type: String, required: true }
// });

// const movieModel = mongoose.model("movies", movieSchema);

// // Routes

// // GET: Fetch all movies
// // app.get("/api/movies", async (req, res) => {
// //   try {
// //     const movies = await movieModel.find();
// //     res.status(200).json(movies);
// //   } catch (error) {
// //     res.status(500).json({ message: "Error fetching movies", error: error.message });
// //   }
// // });

// // // GET: Fetch a movie by ID
// // app.get("/api/movies/:id", async (req, res) => {
// //   try {
// //     const { id } = req.params;
// //     const movie = await movieModel.findOne({ id });
// //     if (!movie) {
// //       return res.status(404).json({ message: "Movie not found" });
// //     }
// //     res.status(200).json(movie);
// //   } catch (error) {
// //     res.status(500).json({ message: "Error fetching movie", error: error.message });
// //   }
// // });

// // GET: Fetch all movies
// app.get("/api/movies", async (req, res) => {
//     try {
//       const movies = await movieModel.find();
//       console.log("Fetched Movies:", movies);  
//       res.status(200).json(movies);
//     } catch (error) {
//       console.error("Error fetching movies:", error.message);  
//       res.status(500).json({ message: "Error fetching movies", error: error.message });
//     }
//   });
  
//   // GET: Fetch a movie by ID
//   app.get("/api/movies/:id", async (req, res) => {
//     try {
//       const { id } = req.params;
//       console.log("Fetching Movie ID:", id);  
//       const movie = await movieModel.findOne({ id });
//       if (!movie) {
//         return res.status(404).json({ message: "Movie not found" });
//       }
//       console.log("Fetched Movie:", movie);  
//       res.status(200).json(movie);
//     } catch (error) {
//       console.error("Error fetching movie:", error.message);  
//       res.status(500).json({ message: "Error fetching movie", error: error.message });
//     }
//   });
  

// // POST: Create a new movie
// app.post("/api/movies", async (req, res) => {
//   const { title, year, genre, rating, plot, poster } = req.body;
//   try {
//     const newMovie = new movieModel({
//       id: uuidv4(),
//       title,
//       year,
//       genre,
//       rating,
//       plot,
//       poster
//     });
//     const savedMovie = await newMovie.save();
//     res.status(201).json(savedMovie);
//   } catch (error) {
//     res.status(500).json({ message: "Error creating movie", error: error.message });
//   }
// });

// // PUT: Update a movie by ID
// app.put("/api/movies/:id", async (req, res) => {
//   const { id } = req.params;
//   const { title, year, genre, rating, plot, poster } = req.body;
//   try {
//     const updatedMovie = await movieModel.findOneAndUpdate(
//       { id },
//       { title, year, genre, rating, plot, poster },
//       { new: true }  // Return the updated document
//     );
//     if (!updatedMovie) {
//       return res.status(404).json({ message: "Movie not found" });
//     }
//     res.status(200).json(updatedMovie);
//   } catch (error) {
//     res.status(500).json({ message: "Error updating movie", error: error.message });
//   }
// });

// // DELETE: Delete a movie by ID
// app.delete("/api/movies/:id", async (req, res) => {
//   const { id } = req.params;
//   try {
//     const deletedMovie = await movieModel.findOneAndDelete({ id });
//     if (!deletedMovie) {
//       return res.status(404).json({ message: "Movie not found" });
//     }
//     res.status(200).json({ message: "Movie deleted successfully", deletedMovie });
//   } catch (error) {
//     res.status(500).json({ message: "Error deleting movie", error: error.message });
//   }
// });

// app.get("/", (req, res) => {
//   res.send("Welcome to the Movie Recommendation App API");
// });
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

// Initialize Express app
const app = express();
const port = process.env.PORT || 5000;

// Middleware to parse JSON request bodies
app.use(express.json());
app.use(cors());

// MongoDB connection URL
const mongoUrl = "mongodb+srv://vishali:visha26@cluster0.xtn7uvc.mongodb.net/Movies";

// Connect to MongoDB
mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Database Connected Successfully");
    app.listen(port, () => {
      console.log(`Server is running at port ${port}`);
    });
  })
  .catch((err) => console.log("Error connecting to MongoDB:", err));

// Define Mongoose Schema and Model
const movieSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  year: { type: String, required: true },
  genre: { type: String, required: true },
  rating: { type: Number, required: true },
  plot: { type: String, required: true },
  poster: { type: String, required: true }
});

const movieModel = mongoose.model("movies", movieSchema);

// Routes

// GET: Fetch all movies
app.get("/api/movies", async (req, res) => {
  try {
    const movies = await movieModel.find();
    console.log("Fetched Movies:", movies);
    res.status(200).json(movies);
  } catch (error) {
    console.error("Error fetching movies:", error.message);
    res.status(500).json({ message: "Error fetching movies", error: error.message });
  }
});

// GET: Fetch a movie by ID
app.get("/api/movies/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Fetching Movie ID:", id);
    const movie = await movieModel.findOne({ id: id.trim() });
    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }
    console.log("Fetched Movie:", movie);
    res.status(200).json(movie);
  } catch (error) {
    console.error("Error fetching movie:", error.message);
    res.status(500).json({ message: "Error fetching movie", error: error.message });
  }
});

// POST: Create a new movie
app.post("/api/movies", async (req, res) => {
  const { title, year, genre, rating, plot, poster } = req.body;
  try {
    const newMovie = new movieModel({
      id: uuidv4(),
      title,
      year,
      genre,
      rating,
      plot,
      poster
    });
    const savedMovie = await newMovie.save();
    res.status(201).json(savedMovie);
  } catch (error) {
    res.status(500).json({ message: "Error creating movie", error: error.message });
  }
});

// PUT: Update a movie by ID
app.put("/api/movies/:id", async (req, res) => {
  const { id } = req.params;
  const { title, year, genre, rating, plot, poster } = req.body;
  try {
    const updatedMovie = await movieModel.findOneAndUpdate(
      { id: id.trim() },
      { $set: { title, year, genre, rating, plot, poster } },
      { new: true }
    );
    if (!updatedMovie) {
      return res.status(404).json({ message: "Movie not found" });
    }
    res.status(200).json(updatedMovie);
  } catch (error) {
    res.status(500).json({ message: "Error updating movie", error: error.message });
  }
});

// DELETE: Delete a movie by ID
app.delete("/api/movies/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedMovie = await movieModel.findOneAndDelete({ id: id.trim() });
    if (!deletedMovie) {
      return res.status(404).json({ message: "Movie not found" });
    }
    res.status(200).json({ message: "Movie deleted successfully", deletedMovie });
  } catch (error) {
    res.status(500).json({ message: "Error deleting movie", error: error.message });
  }
});

// Welcome route
app.get("/", (req, res) => {
  res.send("Welcome to the FlipFlix ");
});

