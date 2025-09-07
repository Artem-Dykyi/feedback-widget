import styled from "styled-components";
const Box = styled.div`
    display: flex;
    gap: 25px;

    justify-content: center;
`
const Btn = styled.button`
  background-color: lightsalmon;
    width: 250px;
    height: 50px;
    border-top-right-radius: 40px;

    border-bottom-left-radius: 30px;
    padding: 15px;
    border-color: rgb(255, 45, 90);
    color: red;
    

    &:hover {
        background-color: rgb(255, 231, 122);
        border-top-left-radius: 30px;
        border-bottom-right-radius: 30px;
        color: green;
    }
`


export const Btns = ({onLeave}) =>{
   

    return (
    <Box>
        <Btn onClick={()=>onLeave("good")}>Good</Btn>
        <Btn onClick={()=>onLeave("neutral")}>Neutral</Btn>
        <Btn onClick={()=>onLeave("bad")}>Bad</Btn>
    </Box>
        
    )
}