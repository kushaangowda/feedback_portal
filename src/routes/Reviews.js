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
import reviews from "../data/reviews.json";

const rows = reviews
  .filter((review) => review["Comments"].length < 400)
  .map((review, i) => ({
    count: i + 1,
    title: review["Review Title"],
    customer: review["Customer name"],
    rating: review["Rating"],
    date: review["Date"],
    category: review["Category"],
    comment: review["Comments"],
  }));

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
              <p>Review: {row.comment}</p>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function Reviews() {
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
