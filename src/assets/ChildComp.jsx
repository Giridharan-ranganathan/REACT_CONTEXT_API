import { useContext } from "react"
import { GrandContext } from "../GrandParentComp"

export const ChildComp = (props) => {
    const aa = useContext(GrandContext)
    return (
        <div className="box">
            <h3>ChildComp page</h3>
            <p>{aa}</p>
            <button onClick={props.onClick}>click</button>
        </div>
    )
}