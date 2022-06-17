import { ArrowLeft } from "phosphor-react";
import { ScreenShotButton } from "../screenshotButton";
import { feedbackTypes, FeedbackType } from "../WidgetForm";
import { FormEvent, useState } from 'react'

interface FeedbackContentStepProps {
    onFeedbackSent: ()=> void;
    resetFeedbackChoice: () => void,
    feedbackChoice: FeedbackType
}
export function FeedbackContentStep({ feedbackChoice, resetFeedbackChoice, onFeedbackSent}: FeedbackContentStepProps) {

    const [screenshot, setScreenshot] = useState<string |null>(null);

    function handleSubmitFeedback(event: FormEvent){
        event.preventDefault();
        console.log("foi submetido")
    }

    return (
        <>
            <header className="flex" >
                <button className="top-5 left-5 absolute" onClick={resetFeedbackChoice}><ArrowLeft/></button>
                <span className="flex gap-2 leading-6 items-center">
                    <img src={feedbackTypes[feedbackChoice].image.url} alt={feedbackTypes[feedbackChoice].image.alt} className="w-6 h-6"/>
                    {feedbackTypes[feedbackChoice].title}
                </span>
            </header>
            
            <form className="flex flex-1 flex-col gap-2 w-full" onSubmit={handleSubmitFeedback}>
                <textarea 
                    placeholder="Digite aqui seu comentário."
                    className="bg-transparent  min-w-[304] w-full min-h-[112px] rounded-md focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 scrollbar-track-transparent scrollbar-thin scrollbar-thumb-slate-500"
                />
                <footer className="flex justify-center gap-2">
                    <ScreenShotButton screenshot={screenshot} onScrenshotTook={setScreenshot}/>
                    <button
                    type="submit"
                    onClick={onFeedbackSent}
                    className="rounded-md p-2 w-full  bg-green-600 border-transparent focus:outline-none ring-2 focus:ring-green-600 focus:ring-offset-slate-600 focus:ring-offset-2">
                        Enviar feedback
                    </button>
                </footer>  
            </form>
        </>
    );
}