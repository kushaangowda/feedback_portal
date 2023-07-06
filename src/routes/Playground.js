import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import { BACKEND_URL } from "../Constants";
import axios from "axios";

export default function Playground() {
  const [category, setCategory] = React.useState("");
  const [name, setname] = React.useState("");
  const [title, settitle] = React.useState("");
  const [rating, setrating] = React.useState("");
  const [date, setdate] = React.useState("");
  const [comment, setcomment] = React.useState("");
  const [posRes, setposRes] = React.useState("");
  const [negRes, setnegRes] = React.useState("");
  const [reply, setreply] = React.useState("");

  const fillCells = (e) => {
    e.preventDefault();
    settitle("Fabulous!");
    setname("Irukulla bharath");
    setdate(new Date().toISOString().substring(0, 10));
    setrating(4);
    setCategory("Display");
    setcomment(
      "notch display Dual camera Face unlock 4000 mah battery. But, some of the apps donot work in full screen mode. No Front flash Great product to purchase finally and its value for money.I got this phone for 10,500 and thanks to Xiaomi."
    );
  };

  const clearCells = (e) => {
    e.preventDefault();
    settitle("");
    setname("");
    setdate("");
    setrating("");
    setCategory("");
    setcomment("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      comment === "" ||
      title === "" ||
      name === "" ||
      date === "" ||
      rating === "" ||
      category === "" ||
      rating < 0 ||
      rating > 5
    ) {
      return;
    }

    const res = await axios.post(BACKEND_URL + "/review/add", {
      comment,
      title,
      name,
      date,
      rating,
      category,
    });

    const data = JSON.parse(res.data);

    setposRes(data["data"]["posRes"] || "");
    setnegRes(data["data"]["negRes"] || "");
    setreply(data["data"]["reply"] || "");
  };

  return (
    <div>
      <h2>Add Review</h2>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Customer Name"
          variant="outlined"
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="Review Title"
          variant="outlined"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="Rating"
          variant="outlined"
          type="number"
          value={rating}
          onChange={(e) => {
            setrating(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label=""
          variant="outlined"
          type="date"
          value={date}
          onChange={(e) => {
            setdate(e.target.value);
          }}
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label" label="Category">
            Category
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            label="Category"
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            <MenuItem value={"Display"}>Display</MenuItem>
            <MenuItem value={"Battery"}>Battery</MenuItem>
            <MenuItem value={"Others"}>Others</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="outlined-multiline-flexible"
          label={"Comment (" + String(comment.length) + "/250 chars)"}
          multiline
          rows={4}
          value={comment}
          onChange={(e) => {
            setcomment(e.target.value.slice(0, 250));
          }}
          style={{ width: "100%" }}
        />
        <Button variant="outlined" onClick={fillCells}>
          Autofill
        </Button>
        <Button variant="outlined" onClick={clearCells}>
          Clear
        </Button>
        <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
      <h3 style={{ marginTop: 40 }}>Positive Response</h3>
      <p style={{ marginTop: -10 }}>{posRes !== "" ? posRes : "Not Available"}</p>
      <h3 style={{ marginTop: 40 }}>Negative Response</h3>
      <p style={{ marginTop: -10 }}>{negRes !== "" ? negRes : "Not Available"}</p>
      <h3 style={{ marginTop: 40 }}>Reply to Customer</h3>
      <p style={{ marginTop: -10 }}>{reply !== "" ? reply : "Not Available"}</p>
    </div>
  );
}
