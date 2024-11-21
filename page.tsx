// import { Button } from "@/components/ui/button";
// import Image from "next/image";

// export default function Home() {
//   return (
//     <div>
//       <h2>Subscribe to Quizzes !!</h2>
//       <Button>Subscribe</Button>
//     </div>
//   );
// }

// "use client"; 
// import React, { useState } from 'react';
// import SearchSection from './dashboard/_components/SearchSection'; 
// import TemplateListSection from './dashboard/_components/TemplateListSection';

// function Home() {
//   const [userSearchInput, setUserSearchInput] = useState<string>(''); 

//   return (
//     <div>
//       {/* Search Section */}
//       <SearchSection onSearchInput={(value: string) => setUserSearchInput(value)} />
//       {/* Template List Section */}
//       <TemplateListSection userSearchInput={userSearchInput} />
//     </div>
//   );
// }

//export default Home;

// "use client"; 
// import { Button } from "@/components/ui/button";
// import { useState } from "react";

// export default function Home() {
//   const [responseMessage, setResponseMessage] = useState("");

//   const handleSubscribe = async () => {
//     try {
//       const response = await fetch("http://localhost:5000/predict", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ }),
//       });

//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }

//       const data = await response.json();
//       setResponseMessage(data.message);
//     } catch (error) {
//       console.error("Error connecting to the ML model:", error);
//       setResponseMessage("Error connecting to the ML model.");
//     }
//   };

//   return (
//     <div>
//       <h2>Subscribe to Quizzes !!</h2>
//       <Button onClick={handleSubscribe}>Subscribe</Button>
//       {responseMessage && <p>{responseMessage}</p>} {/* Display the response message */}
//     </div>
//   );
// }
"use client"; 
import { Button } from "@/components/ui/button"; // Ensure this path is correct
import { useRouter } from "next/navigation"; // Use next/navigation for Next.js

export default function Home() {
  const router = useRouter(); // Use the Next.js router

  const handleSubscribeClick = () => {
    router.push('/subscribe'); // Use push for navigation
  };

  return (
    <div>
      <h2>Subscribe to Quizzes !!</h2>
      <Button onClick={handleSubscribeClick}>Subscribe</Button>
    </div>
  );
}
