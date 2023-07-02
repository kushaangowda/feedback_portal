import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import axios from "axios";
import { BACKEND_URL } from "../Constants";

function Row({ row }) {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.count}
        </TableCell>
        <TableCell>{row.title}</TableCell>
        <TableCell>{row.customer}</TableCell>
        <TableCell>{row.rating}</TableCell>
        <TableCell>{row.date}</TableCell>
        <TableCell>{row.category}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <h4>Positives</h4>
              <p style={{ marginTop: -10 }}>{row.posRes}</p>
              <h4>Negatives</h4>
              <p style={{ marginTop: -10 }}>{row.negRes}</p>
              <h4>Reply To Customer</h4>
              <p style={{ marginTop: -10 }}>{row.reply}</p>
              <h4>Original Review</h4>
              <p style={{ marginTop: -10 }}>{row.comment}</p>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function Reviews() {
  const [rows, setrows] = React.useState([]);

  React.useEffect(() => {
    async function getReviews() {
      const res = await axios.get(BACKEND_URL + "/review/get");
      const reviews = JSON.parse(res.data)["reviews"];

      console.log(reviews);

      setrows(
        reviews.map((review, i) => ({
          count: i + 1,
          title: review["title"],
          customer: review["name"],
          rating: review["rating"],
          date: review["date"],
          category: review["category"],
          comment: review["comment"],
          posRes: review["posRes"],
          negRes: review["negRes"],
          reply: review["reply"],
        }))
      );
    }
    getReviews();
  }, []);

  return (
    <div className="Reviews">
      <h2>Reviews</h2>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>S.no.</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Customer</TableCell>
              <TableCell>Rating</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Category</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.count} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
