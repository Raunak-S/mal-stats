import styled from "styled-components";

const CharacterInfoWrapper = styled.div`
    display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
    padding: 10px;
`

const InfoCard = styled.div`
    display: flex;
	flex-direction: column;
`

const Wrapper = styled.div`
    display:flex;
    flex-direction: row;
    font-family: Inter;
    color: white;

`
const CharacterName = styled.div`
    font-weight: bold;
    font-size: 2em;
`

const KanjiName = styled.div`
    font-size: 1em;
    color: #AAAAAA;
`

const PaddedText = styled.div`
    padding-right: 1rem;
`

function truncate(str) {
    return str.length > 100 ? str.substring(0,900) + "..." : str;
}

const CharacterInfo = ({characterData, quoteAnime}) => {

    const characterImageURL = characterData.data[0] ? characterData.data[0].images.jpg.image_url : 'https://cdn.myanimelist.net/r/76x120/images/questionmark_50.gif?s=8e0400788aa6af2a2f569649493e2b0f';
    const characterInfo = characterData.data[0];

    return (
        <Wrapper style={{padding: '1rem'}}>
            <InfoCard>
                <InfoCard style={{height: '30%'}}>
                    <CharacterName>{characterInfo.name}</CharacterName>
                    <KanjiName>{characterInfo.name_kanji}</KanjiName>
                </InfoCard>
                <Wrapper style={{height: '70%'}}>
                    <PaddedText>FROM {quoteAnime}</PaddedText>
                    <PaddedText>{truncate(characterInfo.about)}</PaddedText>
                </Wrapper>
            </InfoCard>
            <img src={characterImageURL} />
            
        </Wrapper>
    )

}

export default CharacterInfo;