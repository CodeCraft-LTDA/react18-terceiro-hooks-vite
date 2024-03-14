import { useEffect, useState } from "react";

export const Card = () => {
    const [count, setCount] = useState(0);
    

    // useEffect(() => {
    //     console.log("componentDidMount");

    //     const intervalId = setInterval(() => {
    //         setCount(count + 1);

    //         console.log("Executei o count é:", count);
    //     }, 1000);

    //     return () => {
    //         console.log("componentWillUnmount");
    //         clearInterval(intervalId);
    //     }
    // }, [count])

    useEffect(() => {
        const handleWindowClick = () => {
            console.log("Clicou na janela");
        }

        window.addEventListener("click", handleWindowClick);

        return () => window.removeEventListener("click", handleWindowClick);
    }, [])

    return (
        <div>
            <h1>Card</h1>
            <h2>A quantidade é {count}</h2>
        </div>
    );

};