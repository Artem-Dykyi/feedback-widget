import styled from "styled-components";


const Text = styled.p`
  color: rgb(197, 138, 60);
`
const BoxS = styled.div`
  background-color: rgb(255, 153, 122);
  width:
`


export const Statistics = ({good, neutral, bad})=>{
    return(
         < BoxS>
            <h2>Statistics</h2>
            <Text>Good: {good}</Text>
            <Text>Neutral: {neutral}</Text>
            <Text>Bad: {bad}</Text>
           
        </ BoxS>
  );
    
}