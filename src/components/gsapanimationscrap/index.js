{/* <>
// import React, { useEffect, useRef } from "react";
// import "./Signoutsection.scss";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// import Signoutvideo from "../../../assets/video/simple-signup.mp4";
// import Trueicon from "../../../assets/svg/Trueicon";

// gsap.registerPlugin(ScrollTrigger);

// export default function Homesignout() {
//     const textRef1 = useRef(null);
//     const textRef2 = useRef(null);
//     const markerRef1 = useRef(null);
//     const markerRef2 = useRef(null);
//     const markerRef3 = useRef(null);

//     useEffect(() => {
//         const text1 = textRef1.current;
//         const text2 = textRef2.current;
//         const marker1 = markerRef1.current;
//         const marker2 = markerRef2.current;
//         const marker3 = markerRef3.current;

//         gsap.set([text1, text2], { color: "#78787840" });
//         gsap.set([marker1, marker2, marker3], { color: "#787878" });

//         gsap.to(text1, {
//             color: "#e3afbe",
//             duration: 1,
//             scrollTrigger: {
//                 trigger: text1,
//                 start: "top 80%",
//                 end: "bottom 20%",
//                 scrub: true,
//             },
//         });

//         gsap.to(text2, {
//             color: "#e3afbe",
//             duration: 1,
//             scrollTrigger: {
//                 trigger: text2,
//                 start: "top 80%",
//                 end: "bottom 20%",
//                 scrub: true,
//             },
//         });

//         [marker1, marker2, marker3].forEach((marker) => {
//             gsap.to(marker.querySelector('p'), {
//                 color: "#e3afbe",
//                 duration: 1,
//                 scrollTrigger: {
//                     trigger: marker,
//                     start: "top 80%",
//                     end: "bottom 20%",
//                     scrub: true,
//                 },
//             });
//             gsap.to(marker.querySelector('svg'), {
//                 fill: "#e3afbe",
//                 duration: 1,
//                 scrollTrigger: {
//                     trigger: marker,
//                     start: "top 80%",
//                     end: "bottom 20%",
//                     scrub: true,
//                 },
//             });
//         });
//     }, []);

//     return (
//         <div className="home-signout-section-main">
//             <div className="container2">
//                 <div className="home-signout-fl-main">
//                     <div className="home-signout-text-main">
//                         <span>[001. Simple Signup]</span>
//                         <div className="home-signout-text-pera-main">
//                             <p ref={textRef1}>Stop new user drop off with just a few lines of code.</p>
//                             <p ref={textRef2}>
//                                 Reduce churn and empower new users to start transacting without
//                                 leaving your platform.
//                             </p>
//                         </div>
//                         <div className="home-signout-mrkers-div-main">
//                             <div className="home-signout-mrkers-div" ref={markerRef1}>
//                                 <Trueicon />
//                                 <p>New users create and fund their self-custodial Passkeys wallet directly on your website.</p>
//                             </div>
//                             <div className="home-signout-mrkers-div" ref={markerRef2}>
//                                 <Trueicon />
//                                 <p>No seed phrase, no browser extension, and no email verification required.
//                                 </p>
//                             </div>
//                             <div className="home-signout-mrkers-div" ref={markerRef3}>
//                                 <Trueicon />
//                                 <p>Authentication through biometrics provides users with a secure, seamless and familiar experience.</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="home-signout-video-main">
//                         <video autoPlay loop muted playsInline preload="auto">
//                             <source src={Signoutvideo} type="video/mp4" />
//                         </video>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }


// import React, { useEffect, useRef } from "react";
// import "./Signoutsection.scss";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// import Signoutvideo from "../../../assets/video/simple-signup.mp4";
// import Trueicon from "../../../assets/svg/Trueicon";

// gsap.registerPlugin(ScrollTrigger);

// export default function Homesignout() {
//     const textRef1 = useRef(null);
//     const textRef2 = useRef(null);
//     const markerRef1 = useRef(null);
//     const markerRef2 = useRef(null);
//     const markerRef3 = useRef(null);

//     useEffect(() => {
//         const splitTextIntoWords = (element) => {
//             const words = element.innerText.split(" ");
//             element.innerHTML = words.map(word => `<span>${word}</span>`).join(" ");
//         };

//         // Split the text into individual words
//         splitTextIntoWords(textRef1.current);
//         splitTextIntoWords(textRef2.current);

//         const animateWords = (textElement) => {
//             const words = textElement.querySelectorAll("span");
//             gsap.set(words, { opacity: 0, y: 50 });

//             gsap.to(words, {
//                 opacity: 1,
//                 y: 0,
//                 duration: 0.5,
//                 stagger: 0.05,
//                 scrollTrigger: {
//                     trigger: textElement,
//                     start: "top 80%",
//                     end: "bottom 20%",
//                     scrub: true,
//                 },
//             });
//         };

//         // Animate the words for both text blocks
//         animateWords(textRef1.current);
//         animateWords(textRef2.current);

//         const marker1 = markerRef1.current;
//         const marker2 = markerRef2.current;
//         const marker3 = markerRef3.current;

//         [marker1, marker2, marker3].forEach((marker) => {
//             gsap.to(marker.querySelector('p'), {
//                 color: "#e3afbe",
//                 duration: 1,
//                 scrollTrigger: {
//                     trigger: marker,
//                     start: "top 80%",
//                     end: "bottom 20%",
//                     scrub: true,
//                 },
//             });
//             gsap.to(marker.querySelector('svg'), {
//                 fill: "#e3afbe",
//                 duration: 1,
//                 scrollTrigger: {
//                     trigger: marker,
//                     start: "top 80%",
//                     end: "bottom 20%",
//                     scrub: true,
//                 },
//             });
//         });
//     }, []);

//     return (
//         <div className="home-signout-section-main">
//             <div className="container2">
//                 <div className="home-signout-fl-main">
//                     <div className="home-signout-text-main">
//                         <span>[001. Simple Signup]</span>
//                         <div className="home-signout-text-pera-main">
//                             <p ref={textRef1}>Stop new user drop off with just a few lines of code.</p>
//                             <p ref={textRef2}>
//                                 Reduce churn and empower new users to start transacting without
//                                 leaving your platform.
//                             </p>
//                         </div>
//                         <div className="home-signout-mrkers-div-main">
//                             <div className="home-signout-mrkers-div" ref={markerRef1}>
//                                 <Trueicon />
//                                 <p>New users create and fund their self-custodial Passkeys wallet directly on your website.</p>
//                             </div>
//                             <div className="home-signout-mrkers-div" ref={markerRef2}>
//                                 <Trueicon />
//                                 <p>No seed phrase, no browser extension, and no email verification required.
//                                 </p>
//                             </div>
//                             <div className="home-signout-mrkers-div" ref={markerRef3}>
//                                 <Trueicon />
//                                 <p>Authentication through biometrics provides users with a secure, seamless and familiar experience.</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="home-signout-video-main">
//                         <video autoPlay loop muted playsInline preload="auto">
//                             <source src={Signoutvideo} type="video/mp4" />
//                         </video>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
</> */}
