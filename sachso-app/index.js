import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
const port = 3000;

const API_URL = "https://api.escuelajs.co/api/v1/auth/login";

app.use(cors());
app.use(express.json());

app.post("/", async (req, res) => {
  const { email, password } = req.body;
  try {
    const response = await axios.post(API_URL, { email, password });
    console.log(response);
    res.json({ token: response.data.access_token });
  } catch (error) {
    console.error(error.message);
    res.status(401).json({ message: "Email hoặc mật khẩu không đúng!" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
