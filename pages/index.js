import React, { useState, Component } from "react";
import Head from "next/head";
import Layout from "../components/layout";
import styled from "styled-components";
import Router from 'next/router';

const CoolContainer = styled.div`
    width: 300px;
    height: 100px;
    padding: 20px;
    position: absolute;
    top: 45%;
    left: 50%;
    margin: -70px 0 0 -170px;

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
        <main>
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
        </main>
    );
}