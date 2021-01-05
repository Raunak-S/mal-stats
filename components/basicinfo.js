import React, {useEffect, useRef} from "react";
import Layout from "../components/layout"
import styled from "styled-components";
import ChartWrapper from "./chart"

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

const ChartContainer = styled.div`
	display: flex;
	flex-direction: row
`

const BasicInfo = ({userData}) => {

  const username = userData.username;
  const imageURL = userData.image_url ? userData.image_url : 'https://cdn.myanimelist.net/r/76x120/images/questionmark_50.gif?s=8e0400788aa6af2a2f569649493e2b0f';
  const animeData = userData.anime_stats;

  return (
	<StyledContainer>
		<img className='pfp' src={imageURL} />
		<div className='username'>{username}</div>
		<div className='joined'>Joined: {new Date(userData.joined).toString()}</div>
		<div className='lastonline'>Last Online: {new Date(userData.last_online).toString()}</div>
	{	userData && username && 
	  	<AboutContainer>
			About: 
			<div dangerouslySetInnerHTML={{__html: userData.about}} />
		</AboutContainer>   
	}
	<ChartContainer>
	<ChartWrapper animeData={animeData}/>
	</ChartContainer>
	</StyledContainer>
  )
}

export default BasicInfo;