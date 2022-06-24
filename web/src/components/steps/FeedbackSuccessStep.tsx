import checkImage from '../../assets/check.svg';

interface FeedbackSuccessStepProps {
    resetFeedbackChoice: () => void;
}

export function FeedbackSuccessStep({resetFeedbackChoice}: FeedbackSuccessStepProps) {

    return(
        <>
            <div className='flex flex-col items-center w-[304px] py-6 gap-5'>
                <img src={checkImage} width={25} height={25}/>
                <h1>Agradecemo seu feedback!</h1>
                <button
                    className=' rounded-md px-6 py-4 bg-green-600'
                    onClick={resetFeedbackChoice}
                >
                    Quero enviar outro
                </button>
            </div>

        </>
    );
        
}