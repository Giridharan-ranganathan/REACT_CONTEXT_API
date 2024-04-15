import { createContext } from "react";
import { ParentCompount } from "./ParentComp"

export const GrandContext = createContext(); // sTEP ONE

export const Grandparentcomponent = () => {
    const data = "Hello giri ddddd";
    return (
        <div className="box">
            <h1>GrandParentcompount page</h1>
            <GrandContext.Provider value={data}> // Step two 
            <ParentCompount/>
            </GrandContext.Provider>
        </div>
    )
}