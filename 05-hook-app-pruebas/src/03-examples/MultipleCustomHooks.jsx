import { useCounter, useFech } from "../hooks";
import { LoadingQuote } from "./LoadingQuote";
import { Quote } from "./Quote";

export const MultipleCustomHooks = () => {
    const { counter, increment } = useCounter(1);
    const {
        data,
        isLoading,
        hasError,
    } = useFech(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);
    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />
            {
                isLoading
                    ? <LoadingQuote />
                    : <Quote data={data} />
            }
            <button className='btn btn-primary' disabled={isLoading} onClick={() => increment()}>Next quote</button>
        </>
    )
}
