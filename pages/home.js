import React, { useState, useEffect, Component } from "react";
import PropTypes from 'prop-types';
import Router, { useRouter } from 'next/router';
import Link from "next/link";
import Head from "next/head";
import BasicInfo from "../components/basicinfo"
import Layout from "../components/layout";

const Home = (props) => {
  
  const [userData, setUserData] = useState(null);
  const [animeData, setAnimeData] = useState(null);
  const username = props.data.id;

  // const router = useRouter();
  // const username = router.query.id;
  // console.log(router.query)

  const getUserData = (username) => {
    if (username === undefined) {
      setUserData(null);
    } else {
      fetch(`https://api.jikan.moe/v3/user/${username}`)
        .then(res => {
          return res.json();
        })
        .then(json => {
          setUserData(json);
          console.log(json);
        });
      fetch(`https://api.jikan.moe/v3/user/${username}/animelist`)
      .then(res => res.json())
      .then(json => {
        setAnimeData(json);
        console.log(json);
      })
    }
  }

  useEffect(() => {
    getUserData(username);

  }, []);
  

  if (!userData) {
    return <div>Loading data...</div>
  } else {
    return (
      <main>
        <Head>
          <title>Anime-ted | {username}</title>
        </Head>
        <BasicInfo userData={userData}></BasicInfo>
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



Home.propTypes = {
  query: PropTypes.objects,
};

export default Home;