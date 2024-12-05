import React, { useState } from "react";

type TopicQuestion = {
  topic: string;
  questions: number;
};

const topics: string[] = [
  "Sorting",
  "2 Pointers",
  "Prefix Sum",
  "Matrix",
  "Hashing",
  "Sliding Window",
  "Linked List",
  "Stack",
  "Queue",
  "Binary Search",
  "Bit Manipulation",
  "Recursion & Backtracking",
  "Binary Tree",
  "Binary Search Tree",
  "Heap (Priority Queue)",
  "Tries",
  "Greedy",
  "Dynamic Programming Level 1",
  "Graphs",
  "Combinatorics & Geometry",
  "Game Theory",
  "Dynamic Programming Level 2",
  "String Matching Algos",
  "Advance algorithm",
];

function App() {
  const [selectedQuestions, setSelectedQuestions] = useState<TopicQuestion[]>(
    []
  );

  const handleGenerateQuestions = (): void => {
    const shuffledTopics = [...topics].sort(() => 0.5 - Math.random());
    const selectedTopics = shuffledTopics.slice(0, 3);

    // Assign questions ensuring total = 5
    let remainingQuestions = 5;
    const topicQuestions: TopicQuestion[] = selectedTopics.map(
      (topic, index) => {
        const maxQuestions =
          remainingQuestions - (selectedTopics.length - index - 1);
        const questions = Math.max(1, Math.floor(Math.random() * maxQuestions));
        remainingQuestions -= questions;
        return { topic, questions };
      }
    );

    setSelectedQuestions(topicQuestions);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 to-blue-500 p-4">
      <h1 className="text-4xl font-bold text-white mb-6">
        DSA Practice Picker
      </h1>
      <button
        onClick={handleGenerateQuestions}
        className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg shadow-lg hover:bg-purple-600 hover:text-white transition-all"
      >
        Tell What Should I Do Today
      </button>

      {selectedQuestions.length > 0 && (
        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Your Topics for Today
          </h2>
          <ul className="space-y-4">
            {selectedQuestions.map((item, index) => (
              <li key={index} className="p-4 bg-purple-100 rounded-lg shadow">
                <span className="font-bold text-purple-600">{item.topic}</span>:{" "}
                {item.questions} questions
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
