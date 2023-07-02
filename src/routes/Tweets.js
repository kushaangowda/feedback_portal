import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export default function Tweets() {
  const [keywords, setkeywords] = React.useState([]);
  const [currKeyword, setcurrKeyword] = React.useState("");

  const handleDelete = (i) => {
    setkeywords(keywords.filter((_, index) => index !== i));
  };

  const handleKeyDown = (event) => {
    console.log("User pressed: ", event.key);

    if (event.key === "Enter") {
      // 👇️ your logic here
      if (currKeyword !== "") {
        setkeywords([...keywords, currKeyword]);
        setcurrKeyword("");
        event.preventDefault();
      }
    }
  };

  return (
    <div className="Tweets">
      <h2>Tweets</h2>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "45ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Keywords"
          variant="outlined"
          helperText="After typing the keyword, click ENTER"
          onSubmit={(e) => {
            e.preventDefault();
            return false;
          }}
          onKeyDown={handleKeyDown}
          onChange={(event) => setcurrKeyword(event.target.value)}
          value={currKeyword}
        />
      </Box>
      <Stack direction="row" spacing={1} style={{ marginTop: 20 }}>
        {keywords.map((keyword, i) => (
          <Chip
            key={keyword}
            label={keyword}
            variant="outlined"
            onDelete={() => {
              handleDelete(i);
            }}
          />
        ))}
      </Stack>
    </div>
  );
}
