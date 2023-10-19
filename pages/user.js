import React, { useState, useEffect, Component } from "react";
import PropTypes from 'prop-types';
import Head from "next/head";
import BasicInfo from "../components/BasicInfo"
import Layout from "../components/Layout";
import { createGlobalStyle } from "styled-components";
import ChartWrapper from "../components/ChartWrapper";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0px;
        background-color: #F6F8FA;
    }
`

const User = (props) => {
  
  const [userData, setUserData] = useState(null);
  const [animeData, setAnimeData] = useState(null);
  const [userStatistics, setUserStatistics] = useState(null);
  const username = props.data.id;

  // const router = useRouter();
  // const username = router.query.id;
  // console.log(router.query)

  // TODO: combine both API calls into one, /users/{username}/full gets users info + statistics
  const getUserData = (username) => {
    if (username === undefined) {
      setUserData(null);
    } else {
      fetch(`https://api.jikan.moe/v4/users/${username}`)
        .then(res => {
          return res.json();
        })
        .then(json => {
          setUserData(json);
          console.log(json);
        });
      fetch(`https://api.jikan.moe/v4/users/${username}/statistics`)
      .then(res => res.json())
      .then(json => {
        setAnimeData(json);
        console.log(json);
      });
      fetch(`https://api.jikan.moe/v4/users/${username}/animelist`)
        .then(res => {
          return res.json();
        })
        .then(json => {
          setUserStatistics(json);
          console.log(json);
        });
    }
  }

  useEffect(() => {
    getUserData(username);

  }, []);
  

  if (!userData || !animeData) {
    return <div>Loading data...</div>
  } else {
    return (
      <main>
        <GlobalStyle />
        <Head>
          <title>Anime-ted | {username}</title>
        </Head>
        <BasicInfo userData={userData.data} animeData={animeData.data}></BasicInfo>
        <ChartWrapper animeData={animeData.data.anime} mangaData={animeData.data.manga} />
        <div> {JSON.stringify(userStatistics)} </div>
      </main>
    )
  }
}

export async function getServerSideProps(context) {
  const data = context.query;
  return {
    props: {data}, // will be passed to the page component as props
  }
}


export default User;