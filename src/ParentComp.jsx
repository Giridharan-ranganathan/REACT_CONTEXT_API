import { ChildComp } from "./assets/ChildComp"

export const ParentCompount = () => {
    const onClick = () => {
        console.log("hello in ");
    }

    return (
        <div className="box">
            <h2>ParentCompount Page</h2>
            <ChildComp onClick={onClick}/>
        </div>
    )
}