import checkImage from '../../assets/check.svg';

export function FeedbackSuccessStep() {

    return(
        <>
            <img src={checkImage}/>
            <h1>Agradecemo seu feedback!</h1>
            <button>Quero enviar outro</button>

        </>
    );
        
}