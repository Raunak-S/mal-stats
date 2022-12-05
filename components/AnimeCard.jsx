import React from "react";
import styled from "styled-components";

const InfoCard = styled.div`
    display: flex;
	flex-direction: column;
    width: 40vh;
    height: 20vh;
    border: solid;
`

const ImageHeader = styled.img`


`

const AnimeHeader = styled.div`
    padding: 5px;
    display: flex;
    flex-direction: column;
`

const AnimeCard = ({animeData}) => {


    return (
        <InfoCard>
            <ImageHeader src="https://www.videoder.net/blog/wp-content/uploads/2017/07/anime.jpg" />
            <AnimeHeader>
                <h3>Anime</h3>
                <p>Watched</p>
            </AnimeHeader>
        </InfoCard>
    )

}

export default AnimeCard;