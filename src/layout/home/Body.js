import React from 'react';
import '../../App.css';
import {Typography, Link, Grid} from '@material-ui/core';
import {Instagram,Facebook,Contacts} from '@material-ui/icons';

const linkList=[
    {
        name:"nEws",
        to:"#"
    },
    {
        name:"Shop",
        to:"#"
    },
    {
        name:"ranDom",
        to:"#"
    },
    {
        name:"abOut",
        to:"#"
    },
    {
        name:"stoRes",
        to:"#"
    },
    {
        name:"contAct",
        to:"#"
    },
    {
        name:"MailingList",
        to:"#"
    },
]
function Body() {
    const preventDefault = (event) => event.preventDefault();
    return (
        <div className="background" style={{justifyContent:"center",
        display:'flex', flexDirection:'column'}}>
            <Grid style={{justifyContent:"center" , display:"flex" }}>
                <img src={require('./../aset/logo.png')} style={{width:"230px" , height:"200px"}}/>
            </Grid>
                <Grid style={{justifyContent:"center" , display:"flex" }}> 
                <Typography style={{color:"white", fontSize:"15px"}}> ESDORAL</Typography>
                </Grid>
                    <Grid container> 
                    <Grid item xs={5}> </Grid>
                    <Grid item xs={6} style={{ paddingLeft:"50px", paddingTop:"400px"}}> 
                    {linkList.map((value)=>(
                        <div key={value.name} style={{display:'flex', flexDirection:'row', justifyContent:'left'}}>
                        <Link href="#" onClick={preventDefault}>
                            <Typography style={{color:"White" ,fontSize:"30px", textDecoration:"none", textAlign:"webkit"}}>
                                {value.name}
                            </Typography>
                        </Link>
                        </div>
                    ))}
                </Grid>
                <Grid item xs={1}> </Grid>
                <Grid style={{color:"white"}}>
                        <a href="https://www.instagram.com/esdoralofficial/">
                            <Instagram/>
                        </a>
                        <a href="https://www.facebook.com/Esdoral-102058704924098">
                            <Facebook/>
                        </a>
                        <a href="esdoralofficall@gmail.com">
                            <Contacts/>
                        </a>
                </Grid>
            </Grid>
        </div>
    );
  }
  
  export default Body;