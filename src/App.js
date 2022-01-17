import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import Helpers from './Helpers';
import { useEffect, useState } from "react";
import {
  CircularProgress,
  AppBar,
  Button,
  Paper,
  Toolbar,
  Typography,
  makeStyles,
} from "@material-ui/core";
import TranslateIcon from "@material-ui/icons/Translate";
import { useNavigate } from "react-router-dom";
import NewIcon from '@material-ui/icons/FiberNew';
import ViewIcon from '@material-ui/icons/Visibility';

var jsonData = require("./kural.json");

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: 'linear-gradient(to right ,#d7b3ff, #b3ccff)',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  body: {
    padding: '0.6%',
    width: '35%',
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection:'column',
    [theme.breakpoints.down('sm')]:{
      width: "80vw",
      padding: '2%',
      // height:'20vh',
    },
    [theme.breakpoints.between('sm','md')]:{
      width: "55vw",
      padding: '2%',
    },
  },
  bodyWithText: {
    display: 'flex', flexDirection: 'column', justifyContent: 'space-around'
  },
  bodyWOText: { display: 'flex', height: '150px', justifyContent: 'center', alignItems: 'center' },
  quoteStl: { color: Helpers.textColor, padding: '0.6%', fontWeight: 'bold', fontSize: '20px' },
  authorStl: { padding: '0.6%', fontSize: '18px' },
  bottonDiv: { display: 'flex', justifyContent: 'space-between', padding: '0.6%', backgroundColor: 'white',
  [theme.breakpoints.down('sm')]:{
   flexDirection:'column',
  },
},
  bottonStl: {
    color: 'white', fontWeight: 'bold', margin: '0.9%',
  },
}));

function App() {
  const classes = useStyles()
  const url = Helpers.api;
  const [isTamil, setIsTamil] = useState(true);
  const navigate = useNavigate()

  const [myKural, setMyKural] = useState({ line1: "", lin2: "" })

  const getKural = () => {
    let randomNum = Math.floor(Math.random() * jsonData.length)
    setMyKural(jsonData[randomNum])
  }

  const handleTranslate = () => {
    setIsTamil(!isTamil);
  };



  useEffect(() => {
    getKural()
  }, [])

  return (
    <div className={classes.root}>
    <AppBar position='fixed'>
      <Toolbar style={{backgroundColor:Helpers.textColor}} >
        <div style={{width:'100%'}} >
        <Typography style={{fontWeight:'bold', fontSize: '22px'  , textAlign:'center'}} > Thirukkural </Typography>
        </div>
      </Toolbar>
    </AppBar>
    <Paper className={classes.body} elevation={12} >

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
                      {myKural["sect_tam"]}
                    </Typography>
                    <Typography
                      style={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "18px",
                      }}
                    >
                      {myKural["chapgrp_tam"]}
                    </Typography>
                    <Typography
                      style={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "18px",
                      }}
                    >
                      {myKural["chap_tam"]}
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
                      <Typography className={classes.quoteStl} > {myKural["line1"]} </Typography>
                      <Typography className={classes.quoteStl} > {myKural["line1"]} </Typography> <br />
                      <Typography
                        style={{ fontWeight: "bold", fontSize: "20px" }}
                      >
                        விளக்கம்:
                      </Typography>
                      <Typography className={classes.quoteStl}> {myKural["tam_exp"]} </Typography>
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
                      {myKural["sect_eng"]}
                    </Typography>
                    <Typography
                      style={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "18px",
                      }}
                    >
                      {myKural["chapgrp_eng"]}
                    </Typography>
                    <Typography
                      style={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "18px",
                      }}
                    >
                      {myKural["chap_eng"]}
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
                      <Typography className={classes.quoteStl}> {myKural["eng"]} </Typography> <br />
                      <Typography
                        style={{ fontWeight: "bold", fontSize: "20px" }}
                      >
                        
                        Explanation:
                      </Typography>
                      <Typography className={classes.quoteStl}> {myKural["eng_exp"]} </Typography>
                    </Paper>
                  </div>
                </div>
              )}

      <div className={classes.bottonDiv} >
        <Button className={classes.bottonStl} style={{ backgroundColor: Helpers.btnCol1 }} startIcon={ <NewIcon/> } onClick={() => { getKural() }} > Get New Kural </Button>

        <Button className={classes.bottonStl} style={{ backgroundColor: Helpers.btnCol1 }} startIcon={ <TranslateIcon/> } onClick={() => { handleTranslate() }} > Translate </Button>


        <Button className={classes.bottonStl} style={{ backgroundColor: Helpers.btnCol1 }} startIcon={ <ViewIcon/> } onClick={() => { navigate('/kural') }} >View All </Button>
      </div>
    </Paper>


    <div style={{ display: 'flex', placeContent: 'center', position: 'fixed', bottom: 5, left: '0px', right: '0px' }}>
      <p> Developed By  <span onClick={() => { window.open("https://mbganesh.github.io/my_profile/") }} style={{ color: Helpers.textColor, fontWeight: 'bold', cursor: 'pointer' }}> @mbganesh </span> </p>
    </div>

  </div>
  );
}

export default App;
