import React from "react";
import Layout from "../components/layout"
import styled from "styled-components";

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
	justify-content: center;
	align-items: center;
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

const BasicInfo = ({userData}) => {

  const username = userData.username;
  const imageURL = userData.image_url ? userData.image_url : 'https://cdn.myanimelist.net/r/76x120/images/questionmark_50.gif?s=8e0400788aa6af2a2f569649493e2b0f';

  return (
	<main>
		<StyledContainer>
			<img src={imageURL} />
		</StyledContainer>
		<StyledContainer>
			<div>{username}</div>
		</StyledContainer>
	{	userData && username && 
	  	<AboutContainer>
			Joined: {new Date(userData.joined).toString()}
			<br />
			About: 
			<div dangerouslySetInnerHTML={{__html: userData.about}} />
		</AboutContainer>   
	}
	</main>
  )
}

export default BasicInfo;