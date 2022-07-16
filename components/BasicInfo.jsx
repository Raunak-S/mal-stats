import React, {useEffect, useRef} from "react";
import Layout from "./Layout"
import styled from "styled-components";
import ChartWrapper from "./ChartWrapper"

// about
// anime_stats
// image_url
// joined
// last_online
// username

/*
userData Prototype
{
	about: string,
	anime_stats: anime_stats object,
	manga_stats: manga_stats object,
	image_url: string,
	joined: string,
	last_online: string,
	username: string
}
*/

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	div.username {
		font-size: 2rem;
		font-weight: bold;
	}
`
const AboutContainer = styled.div`
	width: 800px;
    padding: 0 1rem;
    margin: auto;
	border: 4px solid black;
	font-family: Verdana,Arial;
	font-size: 11px;
	text-align: center;
`

const BasicInfo = ({userData, animeData}) => {

  const imageURL = userData.images.jpg.image_url ? userData.images.jpg.image_url : 'https://cdn.myanimelist.net/r/76x120/images/questionmark_50.gif?s=8e0400788aa6af2a2f569649493e2b0f';
	
  return (
	<StyledContainer>
		<img className='pfp' src={imageURL} />
		<div className='username'>{userData.username}</div>
		<div className='joined'>Joined: {new Date(userData.joined).toString()}</div>
		<div className='lastonline'>Last Online: {new Date(userData.last_online).toString()}</div>
	{	userData && userData.about && 
	  	<AboutContainer>
			About: 
			<div dangerouslySetInnerHTML={{__html: userData.about}} />
		</AboutContainer>   
	}
	<ChartWrapper animeData={animeData.anime} mangaData={animeData.manga} />
	</StyledContainer>
  )
}

export default BasicInfo;