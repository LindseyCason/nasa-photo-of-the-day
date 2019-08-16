import React from 'react'
import styled from 'styled-components';

//Styled Components Option



const NavDiv = styled.div`
color: white;
    position: absolute;
    width: 80%;
    top: 0;
    background-color: #f78a79;
    padding: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 10px;
    border-radius:3px;
`;

const A = styled.a`
    color: white;
    font-family: 'Shadows Into Light', cursive;
    font-size: 2rem;
    width:20%;
    top: 0;
    background-color: #7F7fff60;
    padding: 5px;
    border-radius: 3px;
`;



export default function Nav(){

    return (

      <NavDiv>
          <A href="https://apod.nasa.gov/cgi-bin/apod/apod_search">Search Content</A>
          <A href="https://apod.nasa.gov/apod/lib/apsubmit2015.html">Submit A Picture</A>
          <A href="https://apod.nasa.gov/apod/lib/about_apod.html">Learn</A>
          <A href="https://apod.nasa.gov/apod/calendar/allyears.html">Pick A Date</A>
      </NavDiv>
    )
  }

