import React, { useState, useEffect, Component } from "react";
import PropTypes from 'prop-types';
import Router, { useRouter } from 'next/router';
import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout";

const Home = (props) => {
  
  const [userData, setUserData] = useState(null);
  const username = props.data.id;

  // const router = useRouter();
  // const username = router.query.id;
  //console.log(router.query)

  const getUserData = (username) => {
    if (username === undefined) {
      setUserData(null);
    } else {
      fetch(`https://api.jikan.moe/v3/user/${username}`)
        .then(res => {
          return res.json();
        })
        .then(json => setUserData(json));
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
      <div>Debug: {username}</div>
        <pre>{JSON.stringify(userData, null, '\t')}</pre> 
    { userData && username && <Layout>Joined: {new Date(userData.joined).toString()}</Layout> }
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