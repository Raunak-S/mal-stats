import React, { useState, Component } from "react";
import Head from "next/head";
import Layout from "../components/layout";
import styled from "styled-components";
import Router from 'next/router';

const CoolContainer = styled.div`
    display: flex;
    justify-context: center;
    align-items: center;
    height: 100vh;
    color: white;
    background-image: linear-gradient(rgb(26, 30, 34) 0%, #5a79c1 100%);

    input {
        padding: 12px 20px;
        margin: 8px 0;
        box-sizing: border-box;
        border: 2px solid red;
        border-radius: 4px;
    }
`;


export default function Home() {
    const [username, setUsername] = useState("");
    const handleChange = e => setUsername(e.target.value);


    return ( 
        <div>
            <Head>
                <title>Homepage</title>
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