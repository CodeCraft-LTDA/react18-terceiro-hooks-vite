import { useEffect, useState } from "react";

export const Dialog = () => {
    const [fisrtName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [fullName, setFullName] = useState("");


    useEffect(() => {
        setFullName(`${fisrtName} ${lastName}`);

        return () => {
            console.log("componentWillUnmount useEffect utilizado");
        }
    }, [fisrtName, lastName]);

    return (
        <div>
            <input type="text" value={fisrtName} onChange={e => setFirstName(e.target.value)}/>

            <input type="text" value={lastName} onChange={e => setLastName(e.target.value)}/>

            <strong>Meu nome completo {fullName}</strong>
        </div>
    );
}