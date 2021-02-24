import React, { useState, Component, useEffect } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import styled, { createGlobalStyle } from "styled-components";
import Router from 'next/router';

const GlobalStyle = createGlobalStyle`
    body {
        height: 100%;
        margin: 0px;
    }
`

const CoolContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: black;
    background-color: #2980b9;
    font-family: 'Bangers';
    flex-direction: column;

    div {
        font-size: 3rem;
    }

    label {
        color: white;
        font-size: 3rem;
        padding: 0 1rem;
        margin: 2rem;
        display: block;
    }

    input {
        padding: 12px 20px;
        margin: 8px 0;
        box-sizing: border-box;
        border-radius: 4px;
        border: 0px;
        background-color: #3498db;
        text-align: center;
    }
`

// TODO: Create quote component for random anime quote (have links for character and anime)

export default function Home({animeData}) {
    const [username, setUsername] = useState("");
    const handleChange = e => setUsername(e.target.value);

    return (
        <>
        <GlobalStyle />
        <main>
            <Head>
                <title>Homepage</title>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Exo&display=swap" rel="stylesheet" />
            </Head>
            <CoolContainer>
            <Layout>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    Router.push({
                        pathname: 'home',
                        query: { id: username }
                    });
                }}>
                <label htmlFor='username'>Enter Your MyAnimeList Username</label>
                <input type="text" name="username" autoComplete="off" onChange={handleChange} />
            </form>
            </Layout>
            <div>{animeData.anime + ': ' + animeData.quote + ' - ' + animeData.character}</div>
            </CoolContainer>
        </main>
        </>
    );
}

export async function getStaticProps() {
    const animeData = await fetch(`https://animechanapi.xyz/api/quotes/random`)
    .then(res => {
        return res.json();
    })
    .then(json => {
        return json.data[0];
    })

    return {
        props: { animeData },
    }
}