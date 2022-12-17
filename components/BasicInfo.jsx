import React, {useEffect, useRef} from "react";
import Layout from "./Layout"
import styled from "styled-components";
import CardContainer from "./CardContainer";
import Link from "next/link";

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
`
const UserProfileHeader = styled(StyledContainer)`
	margin-bottom: 30px;
	background-color: #1A1E22;
	color: white;
	padding: 3rem 5rem 10rem;

	.link {
		position: absolute;
		margin-left: -90%;
		margin-top: -25%;
	}

	.pfp {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 1.5rem;
		border: 0.5rem solid blue; 
		border-radius: 100%;
		height: 150px;
		width: 150px;

		img {
			border-radius: 100%;
			max-width: 100%;
		}
	}

	.info {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;

		&__item {
			margin: 0px 1rem 0.5rem
		}
	}

	.stats {
		display: grid;
		grid-template-columns: repeat(3, minmax(100px, 180px));
		grid-gap: 0.5rem;
		justify-content: center;
		margin-top: 2rem;

		&__item {
			display: flex;
			flex-direction: column;
			border-radius: 0.25rem;
			padding: 1rem;
			background-color: #24292E;
			align-items: center;
			justify-content: center;
		}

		.num {
			font-size: 1.5rem;
		}

		.num-label {
			font-size: 0.75rem;
			letter-spacing: 1px;
			margin-top: 0.75rem;
		}
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
	<UserProfileHeader>
		<span className="link">
			<Link href="/">Find Another User</Link>
		</span>
		<div className="pfp">
			<img src={imageURL} alt="avatar" />
		</div>
		<h1>{userData.username}</h1>
		<div className="info">
			<span className='info__item'>Location: {userData.location ? userData.location : 'N/A'}</span>
			<span className='info__item'>Joined: {new Date(userData.joined).toDateString()}</span>
		</div>
		<div className="stats">
			{/* TODO: Implement receiving/displaying the following InfoCard info (recommendations, clubs, reviews) */}
			<div className="stats__item">
				<span className="num">0</span>
				<span className="num-label">REVIEWS</span>
			</div>
			<div className="stats__item">
				<span className="num">0</span>
				<span className="num-label">RECOMMENDATIONS</span>
			</div>
			<div className="stats__item">
				<span className="num">0</span>
				<span className="num-label">CLUBS</span>
			</div>
		</div>
	</UserProfileHeader>
	// {/* TODO: Replace userData.about with separate call, about section is no longer sent with receiving userData */}
	// {/* {	userData && userData.about && 
	//   	<AboutContainer>
	// 		About: 
	// 		<div dangerouslySetInnerHTML={{__html: userData.about}} />
	// 	</AboutContainer>   
	// } */}
	// {/* TODO: Implement CardContainer which includes anime and manga list data
	// <CardContainer></CardContainer> */}
  )
}

export default BasicInfo;