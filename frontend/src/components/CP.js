// import React, { useState } from "react";
// import "./CP.css"; // Import styles
// import { FaStar, FaStarHalfAlt, FaTrophy } from "react-icons/fa";

// const CompetitiveProgramming = () => {
//   // Sample Challenges Data
//   const [challenges] = useState([
//     {
//       id: 1,
//       title: "Two Sum Problem",
//       difficulty: "Easy",
//       tags: ["Array", "HashMap"],
//       description: "Find two numbers that add up to a target value.",
//     },
//     {
//       id: 2,
//       title: "Reverse a Linked List",
//       difficulty: "Medium",
//       tags: ["Linked List", "Recursion"],
//       description: "Reverse a singly linked list.",
//     },
//     {
//       id: 3,
//       title: "Longest Palindromic Substring",
//       difficulty: "Hard",
//       tags: ["String", "Dynamic Programming"],
//       description: "Find the longest palindromic substring in a given string.",
//     },
//   ]);

//   const [selectedChallenge, setSelectedChallenge] = useState(null);
//   const [solution, setSolution] = useState("");

//   // Function to select a challenge
//   const handleSelectChallenge = (challenge) => {
//     setSelectedChallenge(challenge);
//     setSolution("");
//   };

//   // Function to handle solution submission
//   const handleSubmitSolution = () => {
//     alert(`Solution submitted for: ${selectedChallenge.title}`);
//     setSolution("");
//   };

//   return (
//     <div className="competitive-programming">
//       <h2>🏆 Competitive Programming Challenges</h2>

//       {/* Challenge List */}
//       <div className="challenge-list">
//         {challenges.map((challenge) => (
//           <div
//             key={challenge.id}
//             className="challenge-card"
//             onClick={() => handleSelectChallenge(challenge)}
//           >
//             <h3>{challenge.title}</h3>
//             <p>Difficulty: <span className={challenge.difficulty.toLowerCase()}>{challenge.difficulty}</span></p>
//             <p>Tags: {challenge.tags.join(", ")}</p>
//           </div>
//         ))}
//       </div>

//       {/* Challenge Details & Solution Submission */}
//       {selectedChallenge && (
//         <div className="challenge-details">
//           <h3>{selectedChallenge.title}</h3>
//           <p>{selectedChallenge.description}</p>
//           <textarea
//             placeholder="Write your solution here..."
//             value={solution}
//             onChange={(e) => setSolution(e.target.value)}
//           />
//           <button onClick={handleSubmitSolution} className="submit-btn">
//             🚀 Submit Solution
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CompetitiveProgramming;

import React, { useState } from "react";
import "./CP.css"; // Import new styles
import { FaStar, FaStarHalfAlt, FaTrophy } from "react-icons/fa"; // Icons for difficulty

const CP = () => {
  const [challenges, setChallenges] = useState([
    {
      id: 1,
      title: "Two Sum Problem",
      description: "Find two numbers in an array that sum up to a target.",
      difficulty: "Easy",
      tags: ["Arrays", "HashMap"],
    },
    {
      id: 2,
      title: "Longest Substring Without Repeating Characters",
      description: "Find the length of the longest substring without repeating characters.",
      difficulty: "Medium",
      tags: ["Sliding Window", "HashSet"],
    },
    {
      id: 3,
      title: "Binary Tree Zigzag Level Order Traversal",
      description: "Traverse a binary tree in a zigzag pattern.",
      difficulty: "Hard",
      tags: ["Binary Tree", "BFS"],
    },
  ]);

  // Function to get difficulty icons
  const getDifficultyIcon = (difficulty) => {
    if (difficulty === "Easy") return <FaStar className="easy" />;
    if (difficulty === "Medium") return <FaStarHalfAlt className="medium" />;
    if (difficulty === "Hard") return <FaTrophy className="hard" />;
  };

  return (
    <div className="cp-board">
      <h2 className="cp-title">🏆 Competitive Programming Challenges</h2>

      <div className="challenge-grid">
        {challenges.map((challenge) => (
          <div key={challenge.id} className="challenge-card">
            <h3>{challenge.title}</h3>
            <p className="challenge-desc">{challenge.description}</p>
            
            <div className="difficulty">
              <strong>Difficulty: </strong> {getDifficultyIcon(challenge.difficulty)}
              <span className={challenge.difficulty.toLowerCase()}>{challenge.difficulty}</span>
            </div>

            <p className="challenge-tags">
              <strong>Tags:</strong> {challenge.tags.map((tag) => `#${tag} `)}
            </p>

            <button className="solve-btn">🔥 Solve Challenge</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CP;

