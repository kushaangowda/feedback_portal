import React, { useState, useEffect } from "react";
import redmi_img from "../images/redmi.png";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { PieChart } from "react-minimal-pie-chart";
import { styled } from "@mui/material/styles";
import axios from "axios";
import { BACKEND_URL } from "../Constants";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: "1.5rem",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export default function ReviewsOverall() {
  const [avgr, setAvgr] = useState(0);
  const [vals, setVals] = useState(["40%", "20%", "10%", "10%", "20%"]);

  useEffect(() => {
    async function getReviews() {
      const res = await axios.get(BACKEND_URL + "/review/get");
      const reviews = JSON.parse(res.data)["reviews"];

      console.log(reviews);

      let ratings = reviews.map((b) => Number(b["rating"]));
      const sum = ratings.reduce((a, b) => a + b, 0);
      setAvgr(Math.round((sum * 10) / ratings.length || 0) / 10);

      let ratingsCount = [0, 0, 0, 0, 0];

      console.log("r");
      console.log(ratings);

      for (let i = 0; i < ratings.length; i++) {
        ratingsCount[ratings[i] - 1] += 100 / ratings.length;
      }

      setVals(ratingsCount.map((r) => String(Math.round(r)) + "%").reverse());
    }
    getReviews();
  }, []);

  const [posRes, setposRes] = useState([
    "Notch display",
    "Dual camera",
    "Face unlock",
    "4000 mah battery",
    "Great product",
    "Value for money",
    "Excellent performance",
    "Beautifully designed and durable",
    "Good battery life",
    "Positive feedback and loyalty from customers",
  ]);
  const [negRes, setnegRes] = useState([
    "Not full screen, No front flash",
    "Notch, Priced at Rs. 10,999, 3GB RAM variant",
    "Very small size",
    "Quite bad",
    "Strong and durable, crisp display and notch",
    "Worst product, really disappointing",
    "Overpriced, Low light photos bad, Only one SIM support",
    "Some apps don't work in full screen mode, No front flash",
    "Poor front camera",
    "Camera could have been better",
  ]);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <Card sx={{ maxWidth: 300 }}>
        <CardMedia component="img" alt="Redmi6" image={redmi_img} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Redmi 6
          </Typography>
          <Typography variant="body2" color="text.secondary">
            The Redmi 6 features a 5.45-inch IPS LCD display with a resolution of 720 x 1440 pixels.
            Powered by a MediaTek Helio P22 octa-core processor, it provides smooth performance for
            everyday tasks.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      {avgr > 0 && (
        <div
          style={{
            marginLeft: "2rem",
            border: "1px solid rgba(0,0,0,0.1)",
            width: "calc(100% - 300px - 2rem)",
            borderRadius: 5,
            padding: "1rem",
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Item>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      width: "min-content",
                    }}
                  >
                    <Rating name="read-only" value={avgr} readOnly />
                    <h3 style={{ fontSize: 40, margin: 0 }}>{avgr}/5</h3>
                    <p style={{ margin: 0 }}>Average Rating</p>
                  </div>
                </Item>
              </Grid>
              <Grid item xs={8}>
                <Item>
                  <div style={{ width: "100%" }}>
                    <h2>Rating Distribution</h2>
                    <div
                      style={{
                        width: "100%",
                        border: "1px solid rgba(0,0,0,0.6)",
                        display: "flex",
                      }}
                    >
                      <div
                        style={{
                          border: "1px solid white",
                          background: "#00a749",
                          width: vals[0],
                          height: "20px",
                          color: "#fff",
                        }}
                      >
                        {vals[0]}
                      </div>
                      <div
                        style={{
                          border: "1px solid white",
                          background: "#5ba700",
                          width: vals[1],
                          height: "20px",
                          color: "#fff",
                        }}
                      >
                        {vals[1]}
                      </div>
                      <div
                        style={{
                          border: "1px solid white",
                          background: "#e2b400",
                          width: vals[2],
                          height: "20px",
                          color: "#fff",
                        }}
                      >
                        {vals[2]}
                      </div>
                      <div
                        style={{
                          border: "1px solid white",
                          background: "#C13C37",
                          width: vals[3],
                          height: "20px",
                          color: "#fff",
                        }}
                      >
                        {vals[3]}
                      </div>
                      <div
                        style={{
                          border: "1px solid white",
                          background: "#6A2135",
                          width: vals[4],
                          height: "20px",
                          color: "#fff",
                        }}
                      >
                        {vals[4]}
                      </div>
                    </div>
                  </div>
                </Item>
              </Grid>
              <Grid item xs={6}>
                <Item>
                  <div>
                    <h2>Overall Positive Responses</h2>
                    <ul style={{ textAlign: "left" }}>
                      {posRes.map((res, i) => (
                        <li key={i}>{res}</li>
                      ))}
                    </ul>
                  </div>
                </Item>
              </Grid>
              <Grid item xs={6}>
                <Item>
                  <div>
                    <h2>Overall Negative Responses</h2>
                    <ul style={{ textAlign: "left" }}>
                      {negRes.map((res, i) => (
                        <li key={i}>{res}</li>
                      ))}
                    </ul>
                  </div>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </div>
      )}
    </div>
  );
}
