import { ArrowLeft } from "phosphor-react";
import { ScreenShotButton } from "../screenshotButton";
import { feedbackTypes, FeedbackType } from "../WidgetForm";
import { FormEvent, useState } from 'react'
import { Spinner } from "../Spinner";
import axios from "axios";


interface FeedbackContentStepProps {
    onFeedbackSent: ()=> void;
    resetFeedbackChoice: () => void,
    feedbackChoice: FeedbackType
}
export function FeedbackContentStep({ feedbackChoice, resetFeedbackChoice, onFeedbackSent}: FeedbackContentStepProps) {

    const [screenshot, setScreenshot] = useState<string |null>(null);
    const [isSendingFeedback, setIsSendingFeedback] = useState<boolean>(false);
    const [comment, setComment] = useState<string>("")

    async function handleSubmitFeedback(event: FormEvent){
        event.preventDefault();

        setIsSendingFeedback(true)

        setTimeout(()=> {
            setIsSendingFeedback(false)
            onFeedbackSent()
            setIsSendingFeedback(true)
        }, 2000);

        // Uncoment the code below whe the server is up and runign
        // axios.post('http://localhost:8080/post/feedback',{
        //     type: feedbackChoice,
        //     comment,
        //     screenshot
        // }).then(()=> {
        //     setIsSendingFeedback(false)
        //     onFeedbackSent()
        // }).catch((e) => console.log(e))
        
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
            
            <form className="flex flex-1 flex-col gap-2 w-[304px]" onSubmit={handleSubmitFeedback}>
                <textarea
                    onChange={(e)=> setComment(e.target.value)} 
                    placeholder="Digite aqui seu comentário."
                    className="bg-transparent w-full min-h-[104px] rounded-md focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 scrollbar-track-transparent scrollbar-thin scrollbar-thumb-slate-500"
                />
                <footer className="flex justify-center gap-2">
                    <ScreenShotButton
                        //TODO: desabilitar o botão de screenshot enquanto estiver enviando 
                        screenshot={screenshot} 
                        onScrenshotTook={setScreenshot}
                    />
                    <button
                        type="submit"
                        onClick={handleSubmitFeedback}
                        disabled={isSendingFeedback || (comment == "" && screenshot == null)}
                        className="rounded-md p-2 w-full flex items-center justify-center bg-green-600 border-transparent focus:outline-none ring-2 focus:ring-green-600 focus:ring-offset-slate-600 focus:ring-offset-2 disabled:opacity-60">
                        {isSendingFeedback ? <Spinner/> : <span>Enviar feedback</span>}
                    </button>
                </footer>  
            </form>
        </>
    );
}