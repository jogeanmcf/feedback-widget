import { X } from "phosphor-react";
import { useState } from "react";
import bugImage from '../assets/bug.svg'
import ideaImage from '../assets/idea.svg'
import thoughtImage from '../assets/thought.svg'
import { CloseButton } from "./CloseButton";
import { FeedbackChoiceStep } from "./FeedbackChoiceStep";
import { FeedbackContentStep } from "./FeedbackContentStep";

export const feedbackTypes = {

    BUG: {
        title: 'Problema',
        image: {
            url: bugImage,
            alt: 'imagem de um inceto'
        }
    },
    IDEA: {
        title: 'Ideia',
        image: {
            url: ideaImage,
            alt: 'imagem de uma lampada'
        }
    },
    OTHER:{
        title: 'Outro',
        image: {
            url: thoughtImage,
            alt: 'nuvem de pensamento'
        }
    }
}
export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm(){
    const [feedbackChoice, setFeedbackChoice] = useState<FeedbackType | null>(null);
    
    return(

        <div className="bg-slate-600 rounded-md p-8 gap-2 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            <CloseButton/>
            {!feedbackChoice 
                ? <FeedbackChoiceStep onFeedbackChoosen={setFeedbackChoice}/>
                : <FeedbackContentStep feedbackChoice={feedbackChoice}/> 
            }
            <footer>
                Feito com ♥ pela <a className="underline underline-offset-4">Rocketseat</a>
            </footer>
        </div>
        
    );
}