import React from "react";
import Layout from "../components/layout"
import styled from "styled-components";

// about
// anime_stats
// image_url
// joined
// last_online
// username

const StyledContainer = styled.div`
	display: flex;
  justify-context: center;
  align-items: center;
`

const BasicInfo = ({userData}) => {

  const username = userData.username;

  
  return (
	<main>
		<StyledContainer>
			Raunak
			<div>
				{userData.image ? <img src={userData.image}></img> : <img src="https://cdn.myanimelist.net/r/76x120/images/questionmark_50.gif?s=8e0400788aa6af2a2f569649493e2b0f"></img>}
			</div>
		</StyledContainer>
	  { userData && username && <Layout>Joined: {new Date(userData.joined).toString()}</Layout> }
	</main>
  )
}

export default BasicInfo;