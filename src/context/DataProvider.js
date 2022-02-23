import React,{ createContext, useEffect, useState } from "react";
import { DatabaseProvider } from "reactfire";

export let DataProvider = (props) => {
    const [confirmNumber, setConfirmNumber] = useState('');
    const [checkoutSignIn, setCheckoutSignIn] = useState(false);

    return (
        <DataContext.Provider value={{'confirmNumber': confirmNumber, 'setConfirmNumber': setConfirmNumber, 'checkoutSignin': checkoutSignIn, 'setCheckoutSignIn': setCheckoutSignIn }}>
            {props.children}
        </DataContext.Provider>
    )
};

export let DataContext = createContext();
