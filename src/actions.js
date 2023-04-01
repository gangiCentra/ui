export const Action = Object.freeze({
    ShowModal: "ShowModal",
    HideModal: "HideModal",
    // ShowAccordian0: "ShowAccordian0",
    // HideAccordian0: "HideAccordian0",
    // ShowAccordian01: "ShowAccordian01",
    // HideAccordian01: "HideAccordian01",
    // ShowAccordian1: "ShowAccordian1",
    // HideAccordian1: "HideAccordian1",
    // ShowAccordian2: "ShowAccordian2",
    // HideAccordian2: "HideAccordian2",
    // ShowAccordian3: "ShowAccordian3",
    // HideAccordian3: "HideAccordian3",
    // ShowAccordian4: "ShowAccordian4",
    // HideAccordian4: "HideAccordian4",
    // ShowAccordian5: "ShowAccordian5",
    // HideAccordian5: "HideAccordian5"
});

export function ShowModal() {
    return {type: Action.ShowModal};
}

export function HideModal() {
return {type: Action.HideModal};
} 

// export function ShowAccordian0() {
//     return {type: Action.ShowAccordian0,
//         type: Action.HideAccordian01,
//         type: Action.HideAccordian1,
//         type: Action.HideAccordian2,
//         type: Action.HideAccordian3,
//         type: Action.HideAccordian4,
//         type: Action.HideAccordian5};
// }

// export function HideAccordian0() {
//     return {type: Action.HideAccordian0};
// } 
// export function HideAccordian01() {
//     return {type: Action.HideAccordian01};
// } 
// export function ShowAccordian01() {
//     return {type: Action.ShowAccordian01};
// }

// export function ShowAccordian1() {
//     return {type: Action.ShowAccordian1};
// }

// export function HideAccordian1() {
//     return {type: Action.HideAccordian1};
// } 
// export function ShowAccordian2() {
//     return {type: Action.ShowAccordian2};
// }

// export function HideAccordian2() {
//     return {type: Action.HideAccordian2};
// } 
// export function ShowAccordian3() {
//     return {type: Action.ShowAccordian3};
// }

// export function HideAccordian3() {
//     return {type: Action.HideAccordian3};
// } 
// export function ShowAccordian4() {
//     return {type: Action.ShowAccordian4};
// }

// export function HideAccordian4() {
//     return {type: Action.HideAccordian4};
// } 
// export function ShowAccordian5() {
//     return {type: Action.ShowAccordian5};
// }
// export function HideAccordian5() {
//     return {type: Action.HideAccordian5};
// } 

export function sendEmail(fName, lName, budget, message, email, service) {
    console.log("Adding contact", fName);
    return (dispatch) => {
      const contactForm = {
        fName, lName, budget, message, email, service
      };
      const body = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactForm),
      };
      console.log("contact form:", contactForm);
    //   dispatch(showProgress());
      // fetch(`https://project2.kylelacanna.me:8443/sendEmail`, body) 
      // fetch(`http://localhost:5001/sendEmail`, body)
      fetch(`http://centra-web-service-env.eba-dpfupnxv.us-east-1.elasticbeanstalk.com/sendEmail`, body)
        .then((response) => response.json())
        .then((ok) => {
              //dispatch(hideProgress());
              //dispatch(fetchCars());
              //dispatch(doneAdd());
        })
        .catch(rejected => {
          console.log(rejected);
      });
    };
  }

