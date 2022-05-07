import { ArrowLeft, Camera } from "phosphor-react";
import { feedbackTypes, FeedbackType } from "./WidgetForm";

interface FeedbackContentStepProps {
    feedbackChoice: FeedbackType
}
export function FeedbackContentStep({ feedbackChoice }: FeedbackContentStepProps) {
    return (
        <>
            <header className="flex">
                <button className="top-5 left-5 absolute"><ArrowLeft/></button>
                <span className="flex gap-2 leading-6 items-center">
                    <img src={feedbackTypes[feedbackChoice].image.url} alt={feedbackTypes[feedbackChoice].image.alt} className="w-6 h-6"/>
                    {feedbackTypes[feedbackChoice].title}
                </span>
            </header>
            
            <form className="flex flex-col gap-2">
                <textarea 
                    placeholder="Digite aqui seu comentário."
                    className="bg-transparent w-full min-h-[112px] rounded-md focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 scrollbar-track-transparent scrollbar-thin scrollbar-thumb-slate-500"
                />
                <div className="flex justify-center gap-2">
                <button className="rounded-md p-2 w-12 h-12 focus:outline-none ring-2 focus:ring-green-600 focus:ring-offset-slate-600 focus:ring-offset-2"><Camera/></button>
                <button className="rounded-md p-2 w-full  bg-green-600 focus:outline-none ring-2 focus:ring-green-600 focus:ring-offset-slate-600 focus:ring-offset-2">Enviar feedback</button>
                </div>  
            </form>
        </>
    );
}