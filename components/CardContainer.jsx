import React, {useEffect, useRef, useState} from "react";
import Layout from "./Layout"
import styled from "styled-components";
import AnimeCard from "./AnimeCard";

const CardContainer = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        
        fetch('http://localhost:3001/getAnimeList')
            .then(res => {
                return res.json();
            })
            .then(res => {
                console.log(res);
                setData(res.data);
            })
    }, []);

    if (!data) {
        return <div>Loading data...</div>
    } else {
        return <AnimeCard></AnimeCard>
    }
}

export default CardContainer;