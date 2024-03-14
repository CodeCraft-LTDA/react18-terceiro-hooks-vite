import { useEffect } from "react";

export const Card = () => {
    useEffect(() => {
        console.log("componentDidMount");
        return () => {
            console.log("componentWillUnmount");
        }
    }, [])

    return (
        <div>
            <h1>Card</h1>
        </div>
    );

};