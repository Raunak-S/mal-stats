import styled from "styled-components";

const CharacterInfoWrapper = styled.div`
    display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`

const InfoCard = styled.div`
    display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

const CharacterInfo = ({characterData}) => {

    const characterImageURL = characterData.data[0] ? characterData.data[0].images.jpg.image_url : 'https://cdn.myanimelist.net/r/76x120/images/questionmark_50.gif?s=8e0400788aa6af2a2f569649493e2b0f';
    const characterInfo = characterData.data[0];

    return (
        <CharacterInfoWrapper>
            <InfoCard>
                <p>Name: {characterInfo.name}</p>
                <p>Kanji Name: {characterInfo.name_kanji}</p>
                <p>Anime: {characterInfo.about}</p>
            </InfoCard>
            <img src={characterImageURL} />
            
        </CharacterInfoWrapper>
    )

}

export default CharacterInfo;