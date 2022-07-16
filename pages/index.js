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
    font-family: 'Bangers';
    flex-direction: row;
`

const LeftCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: black;
    background-color: #2e51a2;
    font-family: 'Bangers';
    flex-direction: column;
    width: 50%;
    border-radius: 4px;
    border: solid 1px;
`

const CoolContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: black;
    background-color: white;
    font-family: 'Bangers';
    flex-direction: column;
    width: 50%;
    border-radius: 4px;
    border: solid 1px;

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
        background-color: #3498db;
        text-align: center;
    }
`

// TODO: Create quote component for random anime quote (have links for character and anime)

export default function Home({quoteData, characterData}) {
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
            <ColumnLayer>
                <LeftCard>
                    <div>{quoteData.anime + ': ' + quoteData.quote + ' - ' + quoteData.character}</div>
                    <CharacterInfo characterData={characterData} />
                </LeftCard>
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
                </CoolContainer>
            </ColumnLayer>

        </main>
        </>
    );
}

export async function getStaticProps() {
    const quoteData = await fetch(`https://animechan.vercel.app/api/random`)
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