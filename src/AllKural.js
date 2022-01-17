import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useState } from "react";
import {
  AppBar,
  Button,
  Paper,
  Toolbar,
  Typography,
} from "@material-ui/core";
import TranslateIcon from "@material-ui/icons/Translate";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
var jsonData = require("./kural.json");

function AllKural() {
    
const navigate = useNavigate()

  const url = "https://api-thirukkural.vercel.app/api?num=";

  const [isTamil, setIsTamil] = useState(true);
  const [myText , setMyText] = useState("English")

  const handleTranslate = () => {
    setIsTamil(!isTamil);

    if(myText === "English"){
      setMyText("தமிழ்")
    }else{
      setMyText("English")
    }
  };


  return (
    <div>
      <AppBar position="fixed">
        <Toolbar
          style={{
            backgroundColor: "#1C6DD0",
          }}
        >
          <Typography style={{fontSize:'22px' , fontWeight:'bold' , flex:1}}>Thirukkural</Typography>

          <Button variant="contained" style={{color:'white' , fontWeight:'bold', fontSize:'15px' , backgroundColor:'#548CFF' , marginRight:'1%'}} startIcon={<ArrowBackIcon/>} onClick={() =>  navigate('/') }> Back </Button>

          <Button variant="contained" style={{color:'white' , fontWeight:'bold', fontSize:'15px' , backgroundColor:'#548CFF' , marginRight:'1%'}} startIcon={<TranslateIcon/>} onClick={() => handleTranslate()}> {myText} </Button>


        </Toolbar>

      </AppBar>

      <div style={{ marginTop: "4%" }}>
        {jsonData.map((kural, index) => (
          <div>
            <Paper
              elevation={10}
              style={{
                backgroundColor: "#548CFF",
                margin: "10px",
                padding: "10px",
              }}
            >
              
                <Typography
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  {kural["number"]}
                </Typography>


              {isTamil ? (
                <div id="tamil">
                  <div
                    style={{ display: "flex", justifyContent: "space-evenly" }}
                  >
                    <Typography
                      style={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "18px",
                      }}
                    >
                      {kural["sect_tam"]}
                    </Typography>
                    <Typography
                      style={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "18px",
                      }}
                    >
                      {kural["chapgrp_tam"]}
                    </Typography>
                    <Typography
                      style={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "18px",
                      }}
                    >
                      {kural["chap_tam"]}
                    </Typography>
                  </div>
                  <div>
                    <Paper
                      elevation={5}
                      style={{ margin: "5px", padding: "5px" }}
                    >
                      <Typography
                        style={{ fontWeight: "bold", fontSize: "20px" }}
                      >
                        குறள்:
                      </Typography>
                      <Typography> {kural["line1"]} </Typography>
                      <Typography> {kural["line1"]} </Typography> <br />
                      <Typography
                        style={{ fontWeight: "bold", fontSize: "20px" }}
                      >
                        விளக்கம்:{" "}
                      </Typography>
                      <Typography> {kural["tam_exp"]} </Typography>
                    </Paper>
                  </div>
                </div>
              ) : (
                <div id="english">
                  <div
                    style={{ display: "flex", justifyContent: "space-evenly" }}
                  >
                    <Typography
                      style={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "18px",
                      }}
                    >
                      {kural["sect_eng"]}
                    </Typography>
                    <Typography
                      style={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "18px",
                      }}
                    >
                      {kural["chapgrp_eng"]}
                    </Typography>
                    <Typography
                      style={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "18px",
                      }}
                    >
                      {kural["chap_eng"]}
                    </Typography>
                  </div>

                  <div>
                    <Paper
                      elevation={5}
                      style={{ margin: "5px", padding: "5px" }}
                    >
                      <Typography
                        style={{ fontWeight: "bold", fontSize: "20px" }}
                      >
                        Poem:
                      </Typography>
                      <Typography> {kural["eng"]} </Typography> <br />
                      <Typography
                        style={{ fontWeight: "bold", fontSize: "20px" }}
                      >
                        {" "}
                        Explanation:{" "}
                      </Typography>
                      <Typography> {kural["eng_exp"]} </Typography>
                    </Paper>
                  </div>
                </div>
              )}
            </Paper>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllKural;
