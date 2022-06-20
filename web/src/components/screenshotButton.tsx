import html2canvas from "html2canvas";
import { Camera, Trash } from "phosphor-react";
import { useState } from "react";
import { Spinner } from "./Spinner";


interface ScreenShotButtonProps{
    
    screenshot: string | null;
    onScrenshotTook: (screenshot: string | null) => void;
}

export function ScreenShotButton({screenshot, onScrenshotTook}:ScreenShotButtonProps){
    const [isTakingScreenshot, setIsTakingScreenshot] = useState<boolean>(false)
    

    async function handleTakingScreenshot(){
        if(screenshot){
            onScrenshotTook(null)
        } else{
            setIsTakingScreenshot(true)
            html2canvas(document.querySelector('html')!)
            .then((canvas)=> {
                const base64image= canvas.toDataURL('image/png');
                onScrenshotTook(base64image);
                setIsTakingScreenshot(false)
            });
        }
    }
    if (screenshot) {
        return (
            <button
                type="button"
                className="flex justify-end place-items-end rounded-md p-1 w-12 h-12 border-transparent focus:outline-none ring-2 focus:ring-green-600 focus:ring-offset-slate-600 focus:ring-offset-2"
                onClick={() => handleTakingScreenshot()}
                style={{
                    backgroundImage: `url(${screenshot})`
                }}
            >
            <Trash/>
            </button>
            
        );
    }
    
    return (
        <button 
        type="button"
        onClick={() => handleTakingScreenshot()}
        className="flex justify-center items-center rounded-md p-2 w-12 h-12 border-transparent focus:outline-none ring-2 focus:ring-green-600 focus:ring-offset-slate-600 focus:ring-offset-2">
        {isTakingScreenshot ? <Spinner/> : <Camera/> }
        </button>
    );
}