import React, { Component } from "react";
import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout";
import styled from "styled-components";

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
    return ( 
        <main>
            <Head>
                <title>Homepage</title>
            </Head>
            <CoolContainer>
            <Layout>
                <h1>Anime-ted</h1>
                <input type="text" name="username"></input>
            </Layout>
            </CoolContainer>
        </main>
    );
}