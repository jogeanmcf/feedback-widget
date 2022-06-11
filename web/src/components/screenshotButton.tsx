import { Camera, Trash } from "phosphor-react";
import { useState } from "react";
import { Spinner } from "./Spinner";

interface ScreenShotButtonProps{
    screenshot: string | null;
    onScrenshotTook: () => void;
}

export function ScreenShotButton({screenshot, onScrenshotTook}:ScreenShotButtonProps){
    const [hasScreenShot, setScreenShot] = useState<boolean>(false)

    function takeScreenShot(){
        // setTimeout(()=>{
            setScreenShot(true);
        // }, 5000)
    }
    // if (screenshot) {
    //     return (
    //         <div>
    //         <img src=""/>
    //         <button><Trash/></button>
    //         </div>
            
    //     );
    // }
    
    return (
        <button 
        onClick={()=> takeScreenShot()}
        className="flex justify-center items-center rounded-md p-2 w-12 h-12 border-transparent focus:outline-none ring-2 focus:ring-green-600 focus:ring-offset-slate-600 focus:ring-offset-2">
        {hasScreenShot ?  <Spinner/> : <Camera/>}
    </button>
    );
}