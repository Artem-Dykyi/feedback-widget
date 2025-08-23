export const Btns = ({onLeave}) =>{
   
    return (
    <div>
        <button onClick={()=>onLeave("good")}>Good</button>
        <button onClick={()=>onLeave("neutral")}>Neutral</button>
        <button onClick={()=>onLeave("bad")}>Bad</button>
    </div>
        
    )
}