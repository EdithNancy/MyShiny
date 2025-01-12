import { useState } from 'react';
import Header from '../../components/Header/Header';

export default function Survey() {
    const [activeButton, setActiveButton] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const handleClick = (buttonId) => {
        setActiveButton(buttonId);
    };

    const goToNext = () => {
        if (currentQuestion < questions.length + 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    const goToPrevious = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const questions = [
        {
            id: 1,
            text: 'What is your name?',
        },
        {
            id: 2,
            text: 'Votre application doit-elle impérativement apparaître en premier dans les résultats de recherche ?',
        },
        {
            id: 3,
            text: 'HDDHYY?',
        },
        {
            id: 4,
            text: 'GGG?',
        },
    ];

    return (
        <>
            <Header />
            <div className="">
                <div className="flex flex-col items-center justify-center gap-5">
                    <h1 className="w-[100px] text-center border-b-2 border-blue-500 text-h1 font-poppinMedium">
                        Question {currentQuestion + 1}
                    </h1>
                    {questions[currentQuestion].text}
                </div>
                <div className="flex items-center justify-center gap-10 my-5">
                    <div
                        onClick={() => handleClick(1)}
                        className={`px-12 py-2 shadow-sm cursor-pointer rounded-xl  bg-fourthly ${
                            activeButton == 1
                                ? 'border-2 border-secondary opacity-80'
                                : 'border-2xl-fourthly'
                        }`}
                    >
                        Oui
                    </div>
                    <div
                        onClick={() => handleClick(2)}
                        className={`px-12 py-2 shadow-sm cursor-pointer rounded-xl  bg-fourthly ${
                            activeButton == 2
                                ? 'border-2 border-secondary opacity-80'
                                : 'border-2xl-fourthly'
                        }`}
                    >
                        Non
                    </div>
                </div>
                <div className="flex items-center justify-center gap-3 my-3">
                    <button
                        onClick={goToPrevious}
                        disabled={currentQuestion === 0}
                        className={`cursor-pointer hover:underline text-h1 hover:decoration-secondary hover:text-secondary ${
                            currentQuestion === 0
                                ? 'text-gray-400 cursor-default cursor hover:no-underline hover:text-gray-400 '
                                : 'text-black'
                        }`}
                    >
                        Précédent
                        {console.log(currentQuestion)}
                    </button>
                    <button
                        onClick={goToNext}
                        disabled={currentQuestion === questions.length - 1}
                        className={`cursor-pointer hover:underline text-h1 hover:decoration-secondary hover:text-secondary ${
                            currentQuestion === questions.length - 1
                                ? 'text-gray-400 cursor-default cursor hover:no-underline hover:text-gray-400 '
                                : 'text-black'
                        }`}
                    >
                        Suivant
                    </button>
                </div>
            </div>
        </>
    );
}
