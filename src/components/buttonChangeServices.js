// import react, { useState, useEffect } from "react";


// const [servicesPhases, setServicesPhases] = useState({
//     HTTOAVGP1: `Click to read`,
//     HTTOAVGP2: `Click to read`,
//     HTTOAVGP3: `Click to read`,
    

// })

// const [buttonClicked1, setButtonClicked1] = useState(false)
// const [buttonClicked2, setButtonClicked2] = useState(false)

// const httoavgp = {
//     HTTOAVGP1: {
//         beforeButtonClicked: `Click to read`,
//         afterButtonClicked: `Introduction to program, What are we designed to eat, What happens when we eat what we should not, How to deal with conflicting studies, How to read a scientific study`
//     }
// }


// function buttonChangeServices({ buttonClicked1, httoavgp, setButtonClicked1, setServicesPhases }) {
//     setButtonClicked1(prevState => !prevState);

//     if (buttonClicked1) {
//         setServicesPhases({ httoavgp });
//     }
//     else {
//         setServicesPhases({
//             HTTOAVGP1: `Introduction to program, What are we designed to eat, What happens when we eat what we should not, How to deal with conflicting studies, How to read a scientific study`,
//         });
//     }
// }

// export default buttonChangeServices