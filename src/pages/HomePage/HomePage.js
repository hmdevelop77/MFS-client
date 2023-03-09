import "./HomePage.css"
import * as React from "react";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Box from "@mui/material/Box";
import FirstImage from "../../3691910.jpg";
import SecondImage from "../../economist_3.jpg"
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <>
      <div className="introduction">
     <div className="text1">
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
            <h1 className="title">
                Join Our podcast
              </h1>
              <p className="paragraph" >
                We offer valuable insights and advice on personal finance,
                investing, budgeting, and more...
                Whether you're a beginner or an experienced investor join us now.
              </p>
             
              <a href="/signup"><button className="button-71" >Subscribe</button></a> 
            </CardContent>
          
          </Box>
          </div>
      <div>
          <CardMedia
            component="img"
            sx={{ width: 500, height: 450 }}
            image={FirstImage}
            alt="we help you"
          />
       </div>
      </div>
      <div className="introduction">
     <div className="text1">
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
            <h1 className="title">
                Set your budget
              </h1>
              <p className="paragraph" >
              Take control of your finances and achieve your financial goals with our budget management tools.
              We helps you track your income, expenses, and savings.
              </p>
              <a href="/signup"><button className="button-71" >Subscribe</button></a> 
            </CardContent>
           
          </Box>
          </div>
      <div>
          <CardMedia
            component="img"
            sx={{ width: 500, height: 450 }}
            image={SecondImage}
            alt="we help you"
          />
       </div>
      </div>
    </>
  );
}
