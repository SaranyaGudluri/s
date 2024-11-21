// "use client"
// import { chatSession } from '@/utils/AiModel';
// import React, { useState } from 'react';

// function QuizMeCard() {
//   const [subject, setSubject] = useState('');
//   const [numQuestions, setNumQuestions] = useState(1);
//   const [quizType, setQuizType] = useState('Multiple Choice');
//   const [loading, setLoading] = useState(false);
//   const [aiOutput, setAiOutput] = useState<any[]>([]);
//   const [showQuiz, setShowQuiz] = useState(false);
//   const [quizAnswers, setQuizAnswers] = useState<any>({});
//   const [result, setResult] = useState<string | null>(null);
//   const [storedNumQuestions, setStoredNumQuestions] = useState<number>(1); // New state to store numQuestions

//   const subjects = ['Computer Networks', 'Data Science', 'OOPS', 'DSA', 'DBMS'];
//   const questionOptions = [5, 10, 15, 20];

//   const correctAnswers = ['A', 'B', 'C', 'D']; // Update this based on generated quiz content

//   const GenerateAIContent = async (formData: any) => {
//     setLoading(true);
//     const selectedPrompt = `Generate a quiz with ${formData.numQuestions} questions on ${formData.subject}. It should be a multiple choice type quiz. 
//     Each question should contain 4 options in each line as (A, B, C, D) in which only one option is correct. Directly start with questions. don give any additional info. 
//     The format is question on first line and 4 different options on next 4 lines. 
//     example: 
//     What is the value of 2^3?
// A. 8
// B. 9
// C. 10
// D. 3`;

//     try {
//       const result = await chatSession.sendMessage(selectedPrompt);
//       const quizContent = await result?.response.text();

//       const quizArray = quizContent.split('\n').map((question:any, index:any) => {
//         const options = ['A', 'B', 'C', 'D'].map(option => `${option}. Option ${index + 1} ${question}`);
//         return { question, options, correctAnswer: correctAnswers[index] };
//       });

//       setAiOutput(quizArray);
//       setShowQuiz(true);
//       setStoredNumQuestions(formData.numQuestions);
//     } catch (error) {
//       console.error('Error generating quiz:', error);
//       setAiOutput([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     const formData = {
//       subject,
//       numQuestions,
//       quizType,
//     };

//     GenerateAIContent(formData);
//   };

//   const handleAnswerChange = (questionIndex: number, answer: string) => {
//     setQuizAnswers({ ...quizAnswers, [questionIndex]: answer });
//   };

//   const evaluateQuiz = () => {
//     let score = 0;

//     Object.keys(quizAnswers).forEach((questionIndex) => {
//       if (quizAnswers[questionIndex] === correctAnswers[parseInt(questionIndex)]) {
//         score += 1;
//       }
//     });

//     // Set result based on stored numQuestions
//     setResult(`Your score is ${score}/${storedNumQuestions}`); 
//   };

//   const handleBack = () => {
//     setShowQuiz(false);
//     setResult(null);
//     setQuizAnswers({});
//   };

//   return (
//     <div className='hover:cursor-pointer hover:opacity-90 p-4 shadow-md rounded-md bg-white'>
//       {!showQuiz ? (
//         <div className='flex flex-col items-start justify-between space-y-4'>
//           <div className='text-2xl font-bold'>Take a Quiz</div>
//           <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
//             <div>
//               <label className='block mb-1 text-lg font-semibold'>Subject</label>
//               <select
//                 value={subject}
//                 onChange={(e) => setSubject(e.target.value)}
//                 className='w-full p-2 border border-gray-300 rounded-md'
//                 required
//               >
//                 <option value='' disabled>
//                   Select a subject
//                 </option>
//                 {subjects.map((subj) => (
//                   <option key={subj} value={subj}>
//                     {subj}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div>
//               <label className='block mb-1 text-lg font-semibold'>Number of Questions</label>
//               <select
//                 value={numQuestions}
//                 onChange={(e) => setNumQuestions(parseInt(e.target.value))}
//                 className='w-full p-2 border border-gray-300 rounded-md'
//                 required
//               >
//                 {questionOptions.map((num) => (
//                   <option key={num} value={num}>
//                     {num} Questions
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <button type='submit' className='w-full py-2 bg-green-500 text-white rounded-md mt-4'>
//               {loading ? 'Generating Quiz...' : 'Start Quiz'}
//             </button>
//           </form>
//         </div>
//       ) : (
//         <div>
//   <h3 className='font-bold text-xl mb-4'>Quiz: Science</h3>
//   {aiOutput.length > 0 ? (
//     <div>
//       <div className='space-y-4'>
//         {aiOutput.map((item, index) => (
//           <div key={index} className='p-2 border rounded-md'>
//             <p>{item.question}</p>
//             <div className='flex flex-col'>
//               {item.options.map((option: string, optionIndex: number) => (
//                 <label key={`${index}-${optionIndex}`} className='flex items-center'>
//                   <input
//                     type='radio'
//                     name={`question-${index}`} // Unique name for each question
//                     value={option} // Directly use option as the value
//                     onChange={() => handleAnswerChange(index, option)} // Handle answer change
//                     className='mr-2'
//                   />
//                           {option}
//                         </label>
//                       ))}
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <button
//                 onClick={evaluateQuiz}
//                 className='w-full py-2 bg-blue-500 text-white rounded-md mt-4'
//               >
//                 Evaluate
//               </button>

//               {result && <p className='mt-4 text-lg font-semibold'>{result}</p>}

//               <button
//                 onClick={handleBack}
//                 className='w-full py-2 bg-gray-500 text-white rounded-md mt-4'
//               >
//                 Back to Form
//               </button>
//             </div>
//           ) : (
//             <p>No quiz available</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default QuizMeCard;

"use client"
import { chatSession } from '@/utils/AiModel';
import React, { useState } from 'react';

function QuizMeCard() {
  const [subject, setSubject] = useState('');
  const [numQuestions, setNumQuestions] = useState(1);
  const [loading, setLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState<any[]>([]);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<any>({});
  const [result, setResult] = useState<string | null>(null);
  const [correctAnswers, setCorrectAnswers] = useState<string[]>([]);
  const [storedNumQuestions, setStoredNumQuestions] = useState<number>(1);

  const subjects = ['Computer Networks', 'Data Science', 'OOPS', 'DSA', 'DBMS'];
  const questionOptions = [5, 10, 15, 20];

  const GenerateAIContent = async (formData: any) => {
    setLoading(true);
    const selectedPrompt = `Generate ${formData.numQuestions} fill-in-the-blank questions on ${formData.subject}, including correct answers. Use this format:
Question: <question with blank>
Correct Answer: <answer>`;


// Generate ${formData.numQuestions} fill-in-the-blank questions on ${formData.subject}. 
//     Each question should contain a blank line for the user to fill in, and also provide the correct answer at the end of each question. 
//     Format each question as follows: 
//     Question: <question with blank>
//     Correct Answer: <correct answer> 
//     No additional info, directly start with questions.


    try {
      const result = await chatSession.sendMessage(selectedPrompt);
      const quizContent = await result?.response.text();

      // Split the output into questions
      const quizArray = quizContent.split('\n').reduce((acc: any[], line: string) => {
        if (line.startsWith("Question:")) {
          const questionText = line.replace("Question:", "").trim();
          acc.push({ question: questionText, correctAnswer: '', userAnswer: '' });
        } else if (line.startsWith("Correct Answer:")) {
          const correctAnswer = line.replace("Correct Answer:", "").trim();
          if (acc.length > 0) acc[acc.length - 1].correctAnswer = correctAnswer;
        }
        return acc;
      }, []);

      setAiOutput(quizArray);
      setCorrectAnswers(quizArray.map((item: any) => item.correctAnswer)); // Store correct answers
      setShowQuiz(true);
      setStoredNumQuestions(formData.numQuestions);
    } catch (error) {
      console.error('Error generating quiz:', error);
      setAiOutput([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      subject,
      numQuestions,
    };

    GenerateAIContent(formData);
  };

  const handleAnswerChange = (questionIndex: number, answer: string) => {
    const updatedAnswers = [...aiOutput];
    updatedAnswers[questionIndex].userAnswer = answer;
    setAiOutput(updatedAnswers);
  };

  const evaluateQuiz = () => {
    let score = 0;
    aiOutput.forEach((item, index) => {
      if (item.userAnswer.trim().toLowerCase() === item.correctAnswer.trim().toLowerCase()) {
        score += 1;
      }
    });
    setResult(`Your score is ${score}/${storedNumQuestions}`);
  };

  const handleBack = () => {
    setShowQuiz(false);
    setResult(null);
    setQuizAnswers({});
  };

  return (
    <div className='hover:cursor-pointer hover:opacity-90 p-4 shadow-md rounded-md bg-white'>
      {!showQuiz ? (
        <div className='flex flex-col items-start justify-between space-y-4'>
          <div className='text-2xl font-bold'>Take a Quiz</div>
          <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
            <div>
              <label className='block mb-1 text-lg font-semibold'>Subject</label>
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className='w-full p-2 border border-gray-300 rounded-md'
                required
              >
                <option value='' disabled>
                  Select a subject
                </option>
                {subjects.map((subj) => (
                  <option key={subj} value={subj}>
                    {subj}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className='block mb-1 text-lg font-semibold'>Number of Questions</label>
              <select
                value={numQuestions}
                onChange={(e) => setNumQuestions(parseInt(e.target.value))}
                className='w-full p-2 border border-gray-300 rounded-md'
                required
              >
                {questionOptions.map((num) => (
                  <option key={num} value={num}>
                    {num} Questions
                  </option>
                ))}
              </select>
            </div>
            <button type='submit' className='w-full py-2 bg-green-500 text-white rounded-md mt-4'>
              {loading ? 'Generating Quiz...' : 'Start Quiz'}
            </button>
          </form>
        </div>
      ) : (
        <div>
          <h3 className='font-bold text-xl mb-4'>Fill-in-the-Blanks Quiz</h3>
          {aiOutput.length > 0 ? (
            <div>
              <div className='space-y-4'>
                {aiOutput.map((item, index) => (
                  <div key={index} className='p-2 border rounded-md'>
                    <p>{item.question}</p>
                    <input
                      type='text'
                      placeholder='Type your answer here...'
                      value={item.userAnswer}
                      onChange={(e) => handleAnswerChange(index, e.target.value)}
                      className='w-full p-2 border border-gray-300 rounded-md mt-2'
                    />
                  </div>
                ))}
              </div>

              <button
                onClick={evaluateQuiz}
                className='w-full py-2 bg-blue-500 text-white rounded-md mt-4'
              >
                Evaluate
              </button>

              {result && (
                <div>
                  <p className='mt-4 text-lg font-semibold'>{result}</p>
                  <h4 className='font-bold mt-4'>Correct Answers:</h4>
                  {aiOutput.map((item, index) => (
                    <p key={index}>
                      Q{index + 1}: {item.correctAnswer}
                    </p>
                  ))}
                </div>
              )}

              <button
                onClick={handleBack}
                className='w-full py-2 bg-gray-500 text-white rounded-md mt-4'
              >
                Back to Form
              </button>
            </div>
          ) : (
            <p>No quiz available</p>
          )}
        </div>
      )}
    </div>
  );
}

export default QuizMeCard;