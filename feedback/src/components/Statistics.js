import styled from "styled-components";


const Text = styled.p`
  color: rgba(73, 129, 9, 1);
`
const BoxS = styled.div`
  background-color: rgb(255, 153, 122);
  width: 800px;
  margin-left: auto;
  margin-right: auto;
  
`

const Title = styled.h2`
  color: rgba(73, 129, 9, 1);
`


export const Statistics = ({good, neutral, bad})=>{
    return(
         < BoxS>
            <Title>Statistics</Title>
            <Text>Good: {good}</Text>
            <Text>Neutral: {neutral}</Text>
            <Text>Bad: {bad}</Text>
           
        </ BoxS>
  );
    
}