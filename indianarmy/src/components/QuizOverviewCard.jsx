import React from 'react';
import { Link } from 'react-router-dom';

export default function QuizOverviewCard() {
  return (
    <div className="max-w-xl mx-auto p-6 bg-white border border-green-300 rounded-xl shadow-lg text-center">
      <h2 className="text-3xl font-bold text-green-700 mb-6">
        Test Your Patriotism!
      </h2>

      <Link to="/quiz">
        <button className="px-6 py-3 bg-green-600 text-white rounded-lg text-lg hover:bg-green-700 transition">
          Start Quiz
        </button>
      </Link>
    </div>
  );
}
