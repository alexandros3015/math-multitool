"use client";
import { useState } from "react";
import { evaluate } from "mathjs";

export default function Calculator() {
    const [input, setInput] = useState("");

    const handleInput = (value: string) => {
        setInput(input + value);
    };

    const handleClear = () => {
        setInput("");
    };

    const handleDelete = () => {
        setInput(input.slice(0, -1));
    };

    const handleEvaluate = () => {
        try {
            setInput(evaluate(input).toString()); 
        } catch (error: unknown) {
            if (error instanceof Error) {
                setInput("Error: "+ error.message);
            }
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
            <div
            className="absolute top-0 left-0 p-4"
            >
                <button
                    className="bg-red-500 text-white p-4 rounded-md text-lg font-bold
                    active:bg-red-700
                    active:scale-85
                    hover:bg-red-600
                    hover:scale-95
                    transition
                    "
                    onClick={() => window.location.href = "/"}
                >
                    Back
                </button>
            </div>

            {/* Display Area */}
            <div className="bg-gray-800 text-white text-right p-4 rounded-md w-96 mb-4">
                <div className="text-lg">{input || "0"}</div>
            </div>

            {/* Button Grid */}
            <div className="grid grid-cols-5 gap-2 w-96">
                {/* Row 1 */}
                <button
                    className="bg-red-500 text-white p-4 rounded-md text-lg font-bold"
                    onClick={handleClear}
                >
                    AC
                </button>
                <button
                    className="bg-yellow-500 text-white p-4 rounded-md text-lg font-bold"
                    onClick={() => handleInput("(")}
                >
                    (
                </button>
                <button
                    className="bg-yellow-500 text-white p-4 rounded-md text-lg font-bold"
                    onClick={() => handleInput(")")}
                >
                    )
                </button>
                <button
                    className="bg-gray-500 text-white p-4 rounded-md text-lg font-bold"
                    onClick={() => handleInput("/")}
                >
                    ÷
                </button>
                <button
                    className="bg-gray-500 text-white p-4 rounded-md text-lg font-bold"
                    onClick={() => handleInput("*")}
                >
                    ×
                </button>

                {/* Row 2 */}
                <button
                    className="bg-blue-500 text-white p-4 rounded-md text-lg font-bold"
                    onClick={() => handleInput("7")}
                >
                    7
                </button>
                <button
                    className="bg-blue-500 text-white p-4 rounded-md text-lg font-bold"
                    onClick={() => handleInput("8")}
                >
                    8
                </button>
                <button
                    className="bg-blue-500 text-white p-4 rounded-md text-lg font-bold"
                    onClick={() => handleInput("9")}
                >
                    9
                </button>
                <button
                    className="bg-gray-500 text-white p-4 rounded-md text-lg font-bold"
                    onClick={() => handleInput("-")}
                >
                    −
                </button>
                <button
                    className="bg-gray-500 text-white p-4 rounded-md text-lg font-bold"
                    onClick={() => handleInput("+")}
                >
                    +
                </button>

                {/* Row 3 */}
                <button
                    className="bg-blue-500 text-white p-4 rounded-md text-lg font-bold"
                    onClick={() => handleInput("4")}
                >
                    4
                </button>
                <button
                    className="bg-blue-500 text-white p-4 rounded-md text-lg font-bold"
                    onClick={() => handleInput("5")}
                >
                    5
                </button>
                <button
                    className="bg-blue-500 text-white p-4 rounded-md text-lg font-bold"
                    onClick={() => handleInput("6")}
                >
                    6
                </button>
                <button
                    className="bg-gray-500 text-white p-4 rounded-md text-lg font-bold"
                    onClick={() => handleInput("%")}
                >
                    %
                </button>
                <button
                    className="bg-gray-500 text-white p-4 rounded-md text-lg font-bold"
                    onClick={() => handleInput("^")}
                >
                    ^
                </button>

                {/* Row 4 */}
                <button
                    className="bg-blue-500 text-white p-4 rounded-md text-lg font-bold"
                    onClick={() => handleInput("1")}
                >
                    1
                </button>
                <button
                    className="bg-blue-500 text-white p-4 rounded-md text-lg font-bold"
                    onClick={() => handleInput("2")}
                >
                    2
                </button>
                <button
                    className="bg-blue-500 text-white p-4 rounded-md text-lg font-bold"
                    onClick={() => handleInput("3")}
                >
                    3
                </button>
                <button
                    className="bg-purple-500 text-white p-4 rounded-md text-lg font-bold"
                    onClick={() => handleInput("sqrt(")}
                >
                    √
                </button>
                <button
                    className="bg-green-500 text-white p-4 rounded-md text-lg font-bold"
                    onClick={handleEvaluate}
                >
                    =
                </button>

                {/* Row 5 */}
                <button
                    className="col-span-2 bg-blue-500 text-white p-4 rounded-md text-lg font-bold"
                    onClick={() => handleInput("0")}
                >
                    0
                </button>
                <button
                    className="bg-blue-500 text-white p-4 rounded-md text-lg font-bold"
                    onClick={() => handleInput(".")}
                >
                    .
                </button>
                <button
                    className="bg-purple-500 text-white p-4 rounded-md text-lg font-bold"
                    onClick={() => handleInput("log")}
                >
                    log
                </button>
                <button
                    className="bg-purple-500 text-white p-4 rounded-md text-lg font-bold"
                    onClick={() => handleInput("log10(")}
                >
                    log₁₀
                </button>

                {/* Row 6 */}
                <button
                    className="bg-purple-500 text-white p-4 rounded-md text-lg font-bold"
                    onClick={() => handleInput("sin(")}
                >
                    sin
                </button>
                <button
                    className="bg-purple-500 text-white p-4 rounded-md text-lg font-bold"
                    onClick={() => handleInput("cos(")}
                >
                    cos
                </button>
                <button
                    className="bg-purple-500 text-white p-4 rounded-md text-lg font-bold"
                    onClick={() => handleInput("tan(")}
                >
                    tan
                </button>
                <button
                    className="bg-red-500 text-white p-4 rounded-md text-lg font-bold"
                    onClick={handleDelete}
                >
                    ⌫
                </button>
            </div>
        </div>
    );
}
