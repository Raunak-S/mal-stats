import React, { useState, useEffect, Component } from "react";
import PropTypes from 'prop-types';
import Router, { useRouter } from 'next/router';
import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout";

const JWrapper = require('../../jikan-wrapper/index.js');

export default function Home() {
    
    const [userData, setUserData] = useState(null);
    const router = useRouter();
    const username = router.query.id;

    const getUserData = () => {
        const api = new JWrapper();
        api.getUser(username).then(data => setUserData(data));
    }


    useEffect(() => {
        getUserData();
    }, []);
    

    if (!userData) {
        return <div>Waiting for data...</div>
    }
    return (
        <main>
            <Head>
                <title>Anime-ted | {username}</title>
            </Head>
            <pre>{JSON.stringify(userData, null, '\t')}</pre>
            <Layout>Last Joined: {new Date(userData.joined).toString()}</Layout>
        </main>
    )

}
