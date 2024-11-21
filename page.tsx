// "use client"; // Ensure this is a client component
// import React, { useState } from 'react';

// interface AssessmentResult {
//   strengths: string;
//   areasToFocus: string;
//   resources: string[];
//   oopHours?: number;
//   cnHours?: number;
//   dbmsHours?: number;
//   osHours?: number;
//   dsaHours?: number;
// }

// const Assess = () => {
//   const [oops, setOops] = useState('');
//   const [cn, setCn] = useState('');
//   const [dbms, setDbms] = useState('');
//   const [os, setOs] = useState('');
//   const [dsa, setDsa] = useState('');
//   const [result, setResult] = useState<AssessmentResult | null>(null); // Store prediction result
//   const [loading, setLoading] = useState(false); // Loading state

//   // Handle form submission
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true); // Start loading

//     // Prepare the data to send to the ML model
//     const userSkills = {
//       oops: parseInt(oops, 10),
//       cn: parseInt(cn, 10),
//       dbms: parseInt(dbms, 10),
//       os: parseInt(os, 10),
//       dsa: parseInt(dsa, 10),
//     };

//     try {
//       const response = await fetch('http://localhost:5000/predict', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(userSkills),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to fetch data from the ML model');
//       }

//       const data: AssessmentResult = await response.json();
//       setResult(data); // Store the result for display
//     } catch (error) {
//       console.error('Error connecting to the ML model:', error);
//       // You may want to set an error state here to display an error message
//     } finally {
//       setLoading(false); // End loading
//     }
//   };

//   return (
//     <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
//       <h2 className="text-2xl font-bold text-center mb-6">Skill Assessment Form</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div className="flex flex-col">
//           <label className="text-lg font-semibold mb-2">
//             OOPs (1-Basic, 2-Moderate, 3-Advanced):
//           </label>
//           <input
//             type="number"
//             value={oops}
//             onChange={(e) => setOops(e.target.value)}
//             min="1"
//             max="3"
//             required
//             className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div className="flex flex-col">
//           <label className="text-lg font-semibold mb-2">
//             Computer Networks (1-Basic, 2-Moderate, 3-Advanced):
//           </label>
//           <input
//             type="number"
//             value={cn}
//             onChange={(e) => setCn(e.target.value)}
//             min="1"
//             max="3"
//             required
//             className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div className="flex flex-col">
//           <label className="text-lg font-semibold mb-2">
//             DBMS (1-Basic, 2-Moderate, 3-Advanced):
//           </label>
//           <input
//             type="number"
//             value={dbms}
//             onChange={(e) => setDbms(e.target.value)}
//             min="1"
//             max="3"
//             required
//             className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div className="flex flex-col">
//           <label className="text-lg font-semibold mb-2">
//             OS (1-Basic, 2-Moderate, 3-Advanced):
//           </label>
//           <input
//             type="number"
//             value={os}
//             onChange={(e) => setOs(e.target.value)}
//             min="1"
//             max="3"
//             required
//             className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div className="flex flex-col">
//           <label className="text-lg font-semibold mb-2">
//             DSA (1-Basic, 2-Moderate, 3-Advanced):
//           </label>
//           <input
//             type="number"
//             value={dsa}
//             onChange={(e) => setDsa(e.target.value)}
//             min="1"
//             max="3"
//             required
//             className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-700"
//         >
//           {loading ? 'Assessing...' : 'Assess My Skills'} {/* Change button text based on loading state */}
//         </button>
//       </form>

//       {result && (
//         <div className="mt-6 p-4 border border-gray-300 rounded-md">
//           <h3 className="text-xl font-semibold">Assessment Result:</h3>
//           <p><strong>Strengths:</strong> {result.strengths}</p>
//           <p><strong>Areas to Focus:</strong> {result.areasToFocus}</p>
//           <p><strong>Recommended Resources:</strong></p>
//           <ul>
//             {result.resources.map((resource, index) => (
//               <li key={index}>{resource}</li>
//             ))}
//           </ul>
//           {result.oopHours && <p><strong>OOP Hours:</strong> {result.oopHours}</p>}
//           {result.cnHours && <p><strong>CN Hours:</strong> {result.cnHours}</p>}
//           {result.dbmsHours && <p><strong>DBMS Hours:</strong> {result.dbmsHours}</p>}
//           {result.osHours && <p><strong>OS Hours:</strong> {result.osHours}</p>}
//           {result.dsaHours && <p><strong>DSA Hours:</strong> {result.dsaHours}</p>}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Assess;

// "use client"; // This is necessary for client components in Next.js
// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';

// // InputField component for each skill input
// const InputField: React.FC<{
//   label: string;
//   value: string;
//   onChange: (value: string) => void;
// }> = ({ label, value, onChange }) => (
//   <div className="flex flex-col">
//     <label className="text-lg font-semibold mb-2">{label}</label>
//     <input
//       type="number"
//       value={value}
//       onChange={(e) => onChange(e.target.value)}
//       min="1"
//       max="3"
//       required
//       className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//     />
//   </div>
// );

// const Assess = () => {
//   const [oops, setOops] = useState('');
//   const [cn, setCn] = useState('');
//   const [dbms, setDbms] = useState('');
//   const [os, setOs] = useState('');
//   const [dsa, setDsa] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null); // Error state
//   const router = useRouter();

//   // Handle form submission
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null); // Reset error state on new submission

//     // Prepare the data to send to the ML model
//     const userSkills = {
//       oops: parseInt(oops, 10),
//       cn: parseInt(cn, 10),
//       dbms: parseInt(dbms, 10),
//       os: parseInt(os, 10),
//       dsa: parseInt(dsa, 10),
//     };

//     try {
//       const response = await fetch('http://localhost:5000/predict', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(userSkills),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to fetch data from the ML model');
//       }

//       const data = await response.json();
//       // Construct query parameters using URLSearchParams
//       const params = new URLSearchParams();
//       params.set('result', JSON.stringify(data)); // Set the result

//       // Redirect to the results page with the assessment data
//       router.push(`/assess/result?${params.toString()}`); // Update the push to use a string
//     } catch (error) {
//       setError('Error connecting to the ML model. Please try again later.');
//       console.error('Error connecting to the ML model:', error);
//     } finally {
//       setLoading(false); // End loading
//     }
//   };

//   return (
//     <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
//       <h2 className="text-2xl font-bold text-center mb-6">Skill Assessment Form</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <InputField
//           label="OOPs (1-Basic, 2-Moderate, 3-Advanced):"
//           value={oops}
//           onChange={setOops}
//         />
//         <InputField
//           label="Computer Networks (1-Basic, 2-Moderate, 3-Advanced):"
//           value={cn}
//           onChange={setCn}
//         />
//         <InputField
//           label="DBMS (1-Basic, 2-Moderate, 3-Advanced):"
//           value={dbms}
//           onChange={setDbms}
//         />
//         <InputField
//           label="OS (1-Basic, 2-Moderate, 3-Advanced):"
//           value={os}
//           onChange={setOs}
//         />
//         <InputField
//           label="DSA (1-Basic, 2-Moderate, 3-Advanced):"
//           value={dsa}
//           onChange={setDsa}
//         />
        
//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-700"
//         >
//           {loading ? 'Assessing...' : 'Assess My Skills'}
//         </button>

//         {error && <div className="text-red-500 mt-2">{error}</div>} {/* Display error if any */}
//       </form>
//     </div>
//   );
// };

// export default Assess;

// "use client"
// import React, { useState } from 'react';
// import { Bar, Pie, Doughnut } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// // Register chart.js components
// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

// // Define the type for the assessment result
// interface AssessmentResult {
//   Areas_to_Focus: string;
//   CN_Hours: string;
//   DBMS_Hours: string;
//   DSA_Hours: string;
//   OOP_Hours: string;
//   OS_Hours: string;
//   Recommended_Resources: string;
//   Strengths: string;
// }

// const ResultVisualization = () => {
//   const [formData, setFormData] = useState({
//     OOP_Hours: '',
//     CN_Hours: '',
//     DBMS_Hours: '',
//     DSA_Hours: '',
//     OS_Hours: '',
//   });

//   const [result, setResult] = useState<AssessmentResult | null>(null);
//   const [warning, setWarning] = useState<string>(''); // State to store the warning message

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;

//     // Ensure the value is between 1 and 3
//     if (value === '' || /^[1-3]?$/.test(value)) {
//       setFormData({
//         ...formData,
//         [name]: value
//       });
//       setWarning(''); // Reset warning if valid input
//     } else {
//       setWarning('Please enter a number between 1 and 3');
//     }
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     const { OOP_Hours, CN_Hours, DBMS_Hours, DSA_Hours, OS_Hours } = formData;

//     // Check if all values are in the valid range
//     if (
//       [OOP_Hours, CN_Hours, DBMS_Hours, DSA_Hours, OS_Hours].some(
//         (value) => parseInt(value) < 1 || parseInt(value) > 3
//       )
//     ) {
//       setWarning('Please enter values between 1 and 3 for all fields');
//       return; // Do not proceed if any value is out of range
//     }

//     // Define the result based on form data
//     const assessmentResult: AssessmentResult = {
//       Areas_to_Focus: "Algorithm Optimization",
//       CN_Hours,
//       DBMS_Hours,
//       DSA_Hours,
//       OOP_Hours,
//       OS_Hours,
//       Recommended_Resources: "Data Structures - Intermediate",
//       Strengths: "Proficient in database management"
//     };

//     // Update the state with the result
//     setResult(assessmentResult);
//   };

//   const handleReset = () => {
//     setFormData({
//       OOP_Hours: '',
//       CN_Hours: '',
//       DBMS_Hours: '',
//       DSA_Hours: '',
//       OS_Hours: '',
//     });
//     setResult(null); // Reset the result
//     setWarning(''); // Reset the warning message
//   };

//   const skillData = {
//     OOP: parseInt(result?.OOP_Hours || '0'),
//     CN: parseInt(result?.CN_Hours || '0'),
//     DBMS: parseInt(result?.DBMS_Hours || '0'),
//     DSA: parseInt(result?.DSA_Hours || '0'),
//     OS: parseInt(result?.OS_Hours || '0')
//   };

//   // Bar Chart Data
//   const barChartData = {
//     labels: ['OOP', 'CN', 'DBMS', 'DSA', 'OS'],
//     datasets: [{
//       label: 'Skill Proficiency (Hours)',
//       data: [skillData.OOP, skillData.CN, skillData.DBMS, skillData.DSA, skillData.OS],
//       backgroundColor: ['#36A2EB', '#FF6384', '#FF9F40', '#4BC0C0', '#9966FF'],
//       borderColor: ['#36A2EB', '#FF6384', '#FF9F40', '#4BC0C0', '#9966FF'],
//       borderWidth: 1
//     }]
//   };

//   // Pie Chart Data
//   const pieChartData = {
//     labels: ['OOP', 'CN', 'DBMS', 'DSA', 'OS'],
//     datasets: [{
//       data: [skillData.OOP, skillData.CN, skillData.DBMS, skillData.DSA, skillData.OS],
//       backgroundColor: ['#36A2EB', '#FF6384', '#FF9F40', '#4BC0C0', '#9966FF'],
//       hoverOffset: 4
//     }]
//   };

//   // Doughnut Chart Data (Donut)
//   const doughnutChartData = {
//     labels: ['OOP', 'CN', 'DBMS', 'DSA', 'OS'],
//     datasets: [{
//       data: [skillData.OOP, skillData.CN, skillData.DBMS, skillData.DSA, skillData.OS],
//       backgroundColor: ['#36A2EB', '#FF6384', '#FF9F40', '#4BC0C0', '#9966FF'],
//       hoverOffset: 4
//     }]
//   };

//   // Stacked Bar Chart Data
//   const stackedBarChartData = {
//     labels: ['OOP', 'CN', 'DBMS', 'DSA', 'OS'],
//     datasets: [
//       {
//         label: 'Basic',
//         data: [skillData.OOP < 5 ? skillData.OOP : 0, skillData.CN < 5 ? skillData.CN : 0, skillData.DBMS < 5 ? skillData.DBMS : 0, skillData.DSA < 5 ? skillData.DSA : 0, skillData.OS < 5 ? skillData.OS : 0],
//         backgroundColor: '#FF6384',
//       },
//       {
//         label: 'Moderate',
//         data: [skillData.OOP >= 5 && skillData.OOP < 8 ? skillData.OOP : 0, skillData.CN >= 5 && skillData.CN < 8 ? skillData.CN : 0, skillData.DBMS >= 5 && skillData.DBMS < 8 ? skillData.DBMS : 0, skillData.DSA >= 5 && skillData.DSA < 8 ? skillData.DSA : 0, skillData.OS >= 5 && skillData.OS < 8 ? skillData.OS : 0],
//         backgroundColor: '#FF9F40',
//       },
//       {
//         label: 'Advanced',
//         data: [skillData.OOP >= 8 ? skillData.OOP : 0, skillData.CN >= 8 ? skillData.CN : 0, skillData.DBMS >= 8 ? skillData.DBMS : 0, skillData.DSA >= 8 ? skillData.DSA : 0, skillData.OS >= 8 ? skillData.OS : 0],
//         backgroundColor: '#36A2EB',
//       }
//     ]
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-6">Assessment Form</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block text-sm font-semibold">OOP Hours (1 to 3):</label>
//           <input
//             type="number"
//             name="OOP_Hours"
//             value={formData.OOP_Hours}
//             onChange={handleInputChange}
//             className="border border-gray-300 p-2 rounded-md w-full"
//             min="1"
//             max="3"
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-semibold">CN Hours (1 to 3):</label>
//           <input
//             type="number"
//             name="CN_Hours"
//             value={formData.CN_Hours}
//             onChange={handleInputChange}
//             className="border border-gray-300 p-2 rounded-md w-full"
//             min="1"
//             max="3"
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-semibold">DBMS Hours (1 to 3):</label>
//           <input
//             type="number"
//             name="DBMS_Hours"
//             value={formData.DBMS_Hours}
//             onChange={handleInputChange}
//             className="border border-gray-300 p-2 rounded-md w-full"
//             min="1"
//             max="3"
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-semibold">DSA Hours (1 to 3):</label>
//           <input
//             type="number"
//             name="DSA_Hours"
//             value={formData.DSA_Hours}
//             onChange={handleInputChange}
//             className="border border-gray-300 p-2 rounded-md w-full"
//             min="1"
//             max="3"
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-semibold">OS Hours (1 to 3):</label>
//           <input
//             type="number"
//             name="OS_Hours"
//             value={formData.OS_Hours}
//             onChange={handleInputChange}
//             className="border border-gray-300 p-2 rounded-md w-full"
//             min="1"
//             max="3"
//             required
//           />
//         </div>

//         {warning && <div className="text-red-500 text-sm">{warning}</div>}

//         <div className="flex space-x-4 mt-4">
//           <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Submit</button>
//           <button type="button" onClick={handleReset} className="bg-gray-500 text-white px-4 py-2 rounded-md">Reset</button>
//         </div>
//       </form>

//       {/* Result Display */}
//       {result && (
//         <div className="mt-6">
//           <h3 className="text-xl font-semibold">Assessment Results</h3>
//           <ul className="list-disc ml-6">
//             <li>Areas to Focus: {result.Areas_to_Focus}</li>
//             <li>CN Hours: {result.CN_Hours}</li>
//             <li>DBMS Hours: {result.DBMS_Hours}</li>
//             <li>DSA Hours: {result.DSA_Hours}</li>
//             <li>OOP Hours: {result.OOP_Hours}</li>
//             <li>OS Hours: {result.OS_Hours}</li>
//             <li>Recommended Resources: {result.Recommended_Resources}</li>
//             <li>Strengths: {result.Strengths}</li>
//           </ul>

//           {/* Chart Visualization */}
//           <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div className="col-span-1">
//               <h4 className="text-center">Bar Chart</h4>
//               <Bar data={barChartData} />
//             </div>
//             <div className="col-span-1">
//               <h4 className="text-center">Pie Chart</h4>
//               <Pie data={pieChartData} />
//             </div>
//             <div className="col-span-1">
//               <h4 className="text-center">Doughnut Chart</h4>
//               <Doughnut data={doughnutChartData} />
//             </div>
//           </div>

//           {/* Stacked Bar Chart */}
//           <div className="mt-6">
//             <h4 className="text-center">Stacked Bar Chart</h4>
//             <Bar data={stackedBarChartData} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ResultVisualization;

"use client"
import React, { useState } from 'react';
import { Bar, Pie, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

// Define the type for the assessment result
interface AssessmentResult {
  Areas_to_Focus: string;
  CN_Hours: string;
  DBMS_Hours: string;
  DSA_Hours: string;
  OOP_Hours: string;
  OS_Hours: string;
  Recommended_Resources: string;
  Strengths: string;
}

const ResultVisualization = () => {
  const [formData, setFormData] = useState({
    OOP_Hours: '',
    CN_Hours: '',
    DBMS_Hours: '',
    DSA_Hours: '',
    OS_Hours: '',
  });

  const [result, setResult] = useState<AssessmentResult | null>(null);
  const [warning, setWarning] = useState<string>(''); // State to store the warning message

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Ensure the value is between 1 and 3
    if (value === '' || /^[1-3]?$/.test(value)) {
      setFormData({
        ...formData,
        [name]: value
      });
      setWarning(''); // Reset warning if valid input
    } else {
      setWarning('Please enter a number between 1 and 3');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { OOP_Hours, CN_Hours, DBMS_Hours, DSA_Hours, OS_Hours } = formData;

    // Check if all values are in the valid range
    if (
      [OOP_Hours, CN_Hours, DBMS_Hours, DSA_Hours, OS_Hours].some(
        (value) => parseInt(value) < 1 || parseInt(value) > 3
      )
    ) {
      setWarning('Please enter values between 1 and 3 for all fields');
      return; // Do not proceed if any value is out of range
    }

    // Define the result based on form data
    const assessmentResult: AssessmentResult = {
      Areas_to_Focus: "Algorithm Optimization",
      CN_Hours,
      DBMS_Hours,
      DSA_Hours,
      OOP_Hours,
      OS_Hours,
      Recommended_Resources: "Data Structures - Intermediate",
      Strengths: "Proficient in database management"
    };

    // Update the state with the result
    setResult(assessmentResult);
  };

  const handleReset = () => {
    setFormData({
      OOP_Hours: '',
      CN_Hours: '',
      DBMS_Hours: '',
      DSA_Hours: '',
      OS_Hours: '',
    });
    setResult(null); // Reset the result
    setWarning(''); // Reset the warning message
  };

  const skillData = {
    OOP: parseInt(result?.OOP_Hours || '0'),
    CN: parseInt(result?.CN_Hours || '0'),
    DBMS: parseInt(result?.DBMS_Hours || '0'),
    DSA: parseInt(result?.DSA_Hours || '0'),
    OS: parseInt(result?.OS_Hours || '0')
  };

  // Bar Chart Data
  const barChartData = {
    labels: ['OOP', 'CN', 'DBMS', 'DSA', 'OS'],
    datasets: [{
      label: 'Skill Proficiency (Hours)',
      data: [skillData.OOP, skillData.CN, skillData.DBMS, skillData.DSA, skillData.OS],
      backgroundColor: ['#36A2EB', '#FF6384', '#FF9F40', '#4BC0C0', '#9966FF'],
      borderColor: ['#36A2EB', '#FF6384', '#FF9F40', '#4BC0C0', '#9966FF'],
      borderWidth: 1
    }]
  };

  // Pie Chart Data
  const pieChartData = {
    labels: ['OOP', 'CN', 'DBMS', 'DSA', 'OS'],
    datasets: [{
      data: [skillData.OOP, skillData.CN, skillData.DBMS, skillData.DSA, skillData.OS],
      backgroundColor: ['#36A2EB', '#FF6384', '#FF9F40', '#4BC0C0', '#9966FF'],
      hoverOffset: 4
    }]
  };

  // Doughnut Chart Data (Donut)
  const doughnutChartData = {
    labels: ['OOP', 'CN', 'DBMS', 'DSA', 'OS'],
    datasets: [{
      data: [skillData.OOP, skillData.CN, skillData.DBMS, skillData.DSA, skillData.OS],
      backgroundColor: ['#36A2EB', '#FF6384', '#FF9F40', '#4BC0C0', '#9966FF'],
      hoverOffset: 4
    }]
  };

  // Stacked Bar Chart Data
  const stackedBarChartData = {
    labels: ['OOP', 'CN', 'DBMS', 'DSA', 'OS'],
    datasets: [
      {
        label: 'Basic',
        data: [skillData.OOP < 5 ? skillData.OOP : 0, skillData.CN < 5 ? skillData.CN : 0, skillData.DBMS < 5 ? skillData.DBMS : 0, skillData.DSA < 5 ? skillData.DSA : 0, skillData.OS < 5 ? skillData.OS : 0],
        backgroundColor: '#FF6384',
      },
      {
        label: 'Moderate',
        data: [skillData.OOP >= 5 && skillData.OOP < 8 ? skillData.OOP : 0, skillData.CN >= 5 && skillData.CN < 8 ? skillData.CN : 0, skillData.DBMS >= 5 && skillData.DBMS < 8 ? skillData.DBMS : 0, skillData.DSA >= 5 && skillData.DSA < 8 ? skillData.DSA : 0, skillData.OS >= 5 && skillData.OS < 8 ? skillData.OS : 0],
        backgroundColor: '#FF9F40',
      },
      {
        label: 'Advanced',
        data: [skillData.OOP >= 8 ? skillData.OOP : 0, skillData.CN >= 8 ? skillData.CN : 0, skillData.DBMS >= 8 ? skillData.DBMS : 0, skillData.DSA >= 8 ? skillData.DSA : 0, skillData.OS >= 8 ? skillData.OS : 0],
        backgroundColor: '#36A2EB',
      }
    ]
  };

  return (
    <div className="p-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-white">Assessment Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
        <div>
          <label className="block text-sm font-semibold">OOP Hours (1 to 3):</label>
          <input
            type="number"
            name="OOP_Hours"
            value={formData.OOP_Hours}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 rounded-md w-full"
            min="1"
            max="3"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold">CN Hours (1 to 3):</label>
          <input
            type="number"
            name="CN_Hours"
            value={formData.CN_Hours}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 rounded-md w-full"
            min="1"
            max="3"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold">DBMS Hours (1 to 3):</label>
          <input
            type="number"
            name="DBMS_Hours"
            value={formData.DBMS_Hours}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 rounded-md w-full"
            min="1"
            max="3"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold">DSA Hours (1 to 3):</label>
          <input
            type="number"
            name="DSA_Hours"
            value={formData.DSA_Hours}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 rounded-md w-full"
            min="1"
            max="3"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold">OS Hours (1 to 3):</label>
          <input
            type="number"
            name="OS_Hours"
            value={formData.OS_Hours}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 rounded-md w-full"
            min="1"
            max="3"
            required
          />
        </div>

        <div className="flex space-x-4 mt-4">
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg">Submit</button>
          <button type="button" onClick={handleReset} className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg shadow-lg">Reset</button>
        </div>

        {warning && <p className="text-red-500 text-sm mt-2">{warning}</p>}
      </form>

        {result && (
    <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4 text-blue-500">Assessment Result</h3>
      <div className="space-y-2">
        <p><strong>Areas to Focus:</strong> {result.Areas_to_Focus}</p>
        <p><strong>Recommended Resources:</strong> {result.Recommended_Resources}</p>
        <p><strong>Strengths:</strong> {result.Strengths}</p>
      </div>

      {/* Grouping the Hours in a Styled Box */}
      <div className="mt-6 p-6 border border-gray-300 rounded-lg shadow-md bg-blue-100">
        <h4 className="font-bold text-lg mb-4 text-blue-500">Study Hours</h4>
        <div className="space-y-2">
          <p><strong>CN Hours:</strong> {result.CN_Hours}</p>
          <p><strong>DBMS Hours:</strong> {result.DBMS_Hours}</p>
          <p><strong>DSA Hours:</strong> {result.DSA_Hours}</p>
          <p><strong>OOP Hours:</strong> {result.OOP_Hours}</p>
          <p><strong>OS Hours:</strong> {result.OS_Hours}</p>
        </div>
      </div>

      {/* Display the Chart Sections */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <Bar data={barChartData} options={{ responsive: true }} />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <Pie data={pieChartData} options={{ responsive: true }} />
        </div>
      </div>

      {/* <div className="mt-6 bg-white p-4 rounded-lg shadow-md w-full sm:w-[400px]">
        <Doughnut data={doughnutChartData} options={{ responsive: true }} />
      </div> */}
      <div className="mt-6 flex justify-center bg-white p-4 rounded-lg shadow-md w-full sm:w-[500px] mx-auto">
        <Doughnut data={doughnutChartData} options={{ responsive: true }} />
      </div>

      <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
        <Bar data={stackedBarChartData} options={{
          responsive: true,
          scales: {
            x: { stacked: true },
            y: { stacked: true }
          }
        }} />
      </div>
    </div>
  )}
    </div>
  );
};

export default ResultVisualization;