import React, { useState } from 'react';
import './styles.css';

export default function App() {
	const questions = [
		{
			questionText: 'What is the capital of Nigeria?',
			answerOptions: [
				{ answerText: 'Lagos', isCorrect: false },
				{ answerText: 'Abuja', isCorrect: true },
				{ answerText: 'Kano', isCorrect: false },
				{ answerText: 'Rivers', isCorrect: false },
			],
		},
		{
			questionText: 'Who is the current President of Nigeria?',
			answerOptions: [
				{ answerText: 'Prof Osinbajo', isCorrect: false },
				{ answerText: 'Gen. Muhammadu Buhari', isCorrect: true },
				{ answerText: 'Babatunde Fashola', isCorrect: false },
				{ answerText: 'Atiku Abubakar', isCorrect: false },
			],
		},
		{
			questionText: 'How many States are in Nigeria?',
			answerOptions: [
				{ answerText: '40', isCorrect: false },
				{ answerText: '20', isCorrect: false },
				{ answerText: '38', isCorrect: false },
				{ answerText: '36', isCorrect: true },
			],
		},
		{
			questionText: 'How many months makes a year?',
			answerOptions: [
				{ answerText: '6', isCorrect: false },
				{ answerText: '10', isCorrect: false },
				{ answerText: '12', isCorrect: true },
				{ answerText: '5', isCorrect: false },
			],
    },
    {
			questionText: 'How many weeks makes a month?',
			answerOptions: [
				{ answerText: '4', isCorrect: true },
				{ answerText: '10', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '2', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
      <h1>Quiz App</h1>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}!
				</div>
			) : (
				<>
					<div className='question-wrapper'>
            <div className='question-texts'>
            <span className='question-count'>{currentQuestion + 1}.</span>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
  );
}