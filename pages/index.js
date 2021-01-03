import React, { useState, Component } from "react";
import Head from "next/head";
import Layout from "../components/layout";
import styled from "styled-components";
import Router from 'next/router';

const CoolContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: black;
    background-image: linear-gradient(rgb(26, 30, 34) 0%, #5a79c1 100%);
    font-family: 'Bangers';

    input {
        padding: 12px 20px;
        margin: 8px 0;
        box-sizing: border-box;
        border: 2px solid red;
        border-radius: 4px;
    }
`;


// TODO: Integrate anime_acc_bb font into the user input box

export default function Home() {
    const [username, setUsername] = useState("");
    const handleChange = e => setUsername(e.target.value);

    return ( 
        <div>
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
                <h1>Anime-ted</h1>
                <input type="text" name="username" autoComplete="off" onChange={handleChange} />
            </form>
            </Layout>
            </CoolContainer>
        <style global jsx>{`
            html,
            body,
            body > div:first-child,
            div#__next,
            div#__next > div,
            div#__next > div > div {
            height: 100%;
            margin: 0px;
            }
        `}</style>
        </div>
        
    );
}