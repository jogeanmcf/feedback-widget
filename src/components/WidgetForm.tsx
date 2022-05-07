import { X } from "phosphor-react";
import { useState } from "react";
import bugImage from '../assets/bug.svg'
import ideaImage from '../assets/idea.svg'
import thoughtImage from '../assets/thought.svg'
import { CloseButton } from "./CloseButton";

const feedbackTypes = {

    BUG: {
        title: 'Problema',
        image: {
            url: bugImage,
            alt: 'imagem de um inceto'
        }
    },
    IDEA: {
        title: 'Idea',
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
type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm(){
    const [feedbackChoice, setFeedbackChoice] = useState<FeedbackType | null>(null);
    
    return(

        <div className="bg-slate-600 rounded-md p-8 gap-2 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
             <header className="">
                <span className="text-xl leading-6">Deixe seu feedback</span>
                <CloseButton/>
            </header>
            {!feedbackChoice ?
                <div className="flex py-8 gap-2 w-full">
                {Object.entries(feedbackTypes).map(([key, value]) => {
                    return(
                        <button className="bg-slate-500 rounded-md  flex flex-1 flex-col w-24 py-2 gap-2 align-center justify-center items-center border-2 border-transparent hover:border-green-600 focus:outline-none focus:border-green-600"
                            onClick={() => setFeedbackChoice(key as FeedbackType)}
                        >
                            <img src={value.image.url} alt={value.image.alt} />
                            <span>{value.title}</span>
                        </button>
                    );
                })}
                </div>
            : 
            <h1>{feedbackTypes[feedbackChoice].title}</h1>
        }
            <footer>
                Feito com ♥ pela <a className="underline underline-offset-4">Rocketseat</a>
            </footer>
        </div>
        
    );
}