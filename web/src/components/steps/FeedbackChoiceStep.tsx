import { FeedbackType, feedbackTypes } from "../WidgetForm";

interface FeedbackChoiceStepProps { 
    onFeedbackChoosen: (type: FeedbackType) => void,
}
export function FeedbackChoiceStep({onFeedbackChoosen}: FeedbackChoiceStepProps) {
    return(
        <>  
        <header className="">
            <span className="text-xl leading-6">Deixe seu feedback</span>
        </header>
        <div className="flex py-8 gap-2 w-full">
            {Object.entries(feedbackTypes).map(([key, value]) => {
                return(
                    <button className="bg-slate-500 rounded-md  flex flex-1 flex-col w-24 py-2 gap-2 align-center justify-center items-center border-2 border-transparent hover:border-green-600 focus:outline-none focus:border-green-600"
                        onClick={() => onFeedbackChoosen(key as FeedbackType)}
                    >
                        <img src={value.image.url} alt={value.image.alt} />
                        <span>{value.title}</span>
                    </button>
                );
            })}
        </div>
    </>
    ); 
       
}