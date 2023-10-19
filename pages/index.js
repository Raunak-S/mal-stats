import React, { useState, Component, useEffect } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import styled, { createGlobalStyle } from "styled-components";
import Router from 'next/router';
import CharacterInfo from "../components/CharacterInfo";

const GlobalStyle = createGlobalStyle`
    body {
        height: 100%;
        margin: 0px;
    }
`

const ColumnLayer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: black;
    background-color: #2980b9;
    font-family: 'Inter';
    flex-direction: row;
`

const LeftCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: black;
    background-color: #2e51a2;
    flex-direction: column;
    width: 50%;
`

const CoolContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: black;
    background-color: white;
    flex-direction: column;
    width: 50%;

    div {
        font-size: 3rem;
    }

    label {
        color: #2e51a2;
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
        background-color: #EEEEEE;
        text-align: center;
        font-size: 1.5rem;
    }
`

// TODO: Create quote component for random anime quote (have links for character and anime)

export default function User({quoteData, characterData}) {
    const [username, setUsername] = useState("");
    const handleChange = e => setUsername(e.target.value);

    
    return (
        <>
        <GlobalStyle />
        <main>
            <Head>
                <title>Homepage</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" /> 
            </Head>
            <ColumnLayer>
                <LeftCard>
                    <h1 style={{padding: '1rem'}}>{quoteData.quote}</h1>
                    <CharacterInfo characterData={characterData} quoteAnime={quoteData.anime}/>
                </LeftCard>
                <CoolContainer>
                    <Layout>
                        <form
                            onSubmit={e => {
                                e.preventDefault();
                                Router.push({
                                    pathname: 'user',
                                    query: { id: username }
                                });
                            }}>
                            {/* TODO: Replace CDN link with local image */}
                            <img style={{'borderRadius': '50%', width: '30%'}} src="https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png" alt="avatar" />
                            <label htmlFor='username'>mal-stats</label>
                            <a>Enter Your MyAnimeList Username</a>
                            <input type="text" name="username" autoComplete="off" onChange={handleChange} />
                        </form>
                    </Layout>
                </CoolContainer>
            </ColumnLayer>

        </main>
        </>
    );
}

export async function getStaticProps() {
    const quoteData = await fetch(`https://animechan.xyz/api/random`)
    .then(res => {
        return res.json();
    })

    const characterData = await fetch(`https://api.jikan.moe/v4/characters?q=${encodeURI(quoteData.character)}`)
    .then(res => {
        return res.json();
    })

    return {
        props: { quoteData, characterData },
    }
}
