import "./App.css";
import questions from "./quizQuestions";
import { useState, useEffect, useRef } from "react";

export default function App() {
  const [fans, setFans] = useState(0);
  const [nextQues, setNextQues] = useState(0);
  const [ans, setAns] = useState(-1);
  const [correctAns, setCorrectAns] = useState(0);
  // const initialRender = useRef(true); // Create a ref to track the initial render
  // const [optionClasses, setOptionClasses] = useState(["", "", "", ""]);
  // Load data from localStorage on component mount
  let optionClass = "";
  const getStarRating = (difficulty) => {
    switch (difficulty) {
      case "Easy":
        return (
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              color="yellow"
              fill="currentColor"
              className="bi bi-star-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-star"
              viewBox="0 0 16 16"
            >
              <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-star"
              viewBox="0 0 16 16"
            >
              <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
            </svg>
          </div>
        );
      case "Medium":
        return (
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              color="yellow"
              fill="currentColor"
              className="bi bi-star-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              color="yellow"
              fill="currentColor"
              className="bi bi-star-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-star"
              viewBox="0 0 16 16"
            >
              <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
            </svg>
          </div>
        );
      case "Difficult":
        return (
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              color="yellow"
              fill="currentColor"
              className="bi bi-star-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              color="yellow"
              fill="currentColor"
              className="bi bi-star-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              color="yellow"
              fill="currentColor"
              className="bi bi-star-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
          </div>
        );
      default:
        return "";
    }
  };
  useEffect(() => {
    // if (initialRender.current) {
    //   initialRender.current = false;
    //   return;
    // }

    const savedNextQues = localStorage.getItem("nextQuestionIndex");
    const savedAns = localStorage.getItem("selectedAnswer");
    const savedCorrectAns = localStorage.getItem("correctAnswers");
    console.log(localStorage.getItem("correctAnswers"));
    if (savedNextQues !== null) {
      setNextQues(parseInt(savedNextQues, 10));
    }

    if (savedAns !== null) {
      setAns(parseInt(savedAns, 10));
    }

    if (savedCorrectAns !== null) {
      setCorrectAns(parseInt(savedCorrectAns, 10));
    }
  }, []);

  // Save data to localStorage on state change
  useEffect(
    () => {
      if (nextQues !== 0 && ans !== -1 && correctAns !== 0) {
        localStorage.setItem("nextQuestionIndex", nextQues);
        localStorage.setItem("selectedAnswer", ans);
        localStorage.setItem("correctAnswers", correctAns);
      }
    },
    [nextQues, ans, correctAns, fans]
  );
  const playAgain = () => {
    localStorage.setItem("nextQuestionIndex", 0);
    localStorage.setItem("selectedAnswer", -1);
    localStorage.setItem("correctAnswers", 0);
    localStorage.setItem("correctAns", -1);
    setNextQues(0);
    setAns(-1);
    setFans(-1);
    setCorrectAns(0);
  };
  let ind = -1;
  const result = (index) => {
    if (ans === -1) {
      setAns(index);
      setFans(1);

      ind = index;
      console.log(ans);
      if (questions[nextQues].options[index] === questions[nextQues].answer) {
        setCorrectAns((prevCorrectAns) => prevCorrectAns + 1);
      }
      optionClass =
        questions[nextQues].options[index] === questions[nextQues].answer
          ? "correct-answer"
          : "wrong-answer";
    }
  };

  const QuesNum = () => {
    setNextQues(nextQues + 1);
    setFans(0);
    setAns(-1);
  };

  const progressPercentage = ((nextQues + 1) / questions.length) * 100;

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <div className="progress-bar-container">
        <div
          className="progress-bar"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
      <div className="quiz">
        {nextQues < questions.length ? (
          <div>
            <h2>
              Question {nextQues + 1} of {questions.length}
            </h2>
            <div>{getStarRating(questions[nextQues].rating)}</div>
            <h2>{questions[nextQues].question}</h2>
            <div className="options">
              <div className="option-t">
                <div
                  className={`option ${
                    ans === 0
                      ? questions[nextQues].options[0] ===
                        questions[nextQues].answer
                        ? "correct-answer"
                        : "wrong-answer"
                      : ""
                  }`}
                  onClick={() => result(0)}
                >
                  {questions[nextQues].options[0]}
                </div>

                {/* Option 2 */}
                <div
                  className={`option ${
                    ans === 1
                      ? questions[nextQues].options[1] ===
                        questions[nextQues].answer
                        ? "correct-answer"
                        : "wrong-answer"
                      : ""
                  }`}
                  onClick={() => result(1)}
                >
                  {questions[nextQues].options[1]}
                </div>
              </div>
              {/* Option 3 */}
              <div className="option-b">
                <div
                  className={`option ${
                    ans === 2
                      ? questions[nextQues].options[2] ===
                        questions[nextQues].answer
                        ? "correct-answer"
                        : "wrong-answer"
                      : ""
                  }`}
                  onClick={() => result(2)}
                >
                  {questions[nextQues].options[2]}
                </div>

                {/* Option 4 */}
                <div
                  className={`option ${
                    ans === 3
                      ? questions[nextQues].options[3] ===
                        questions[nextQues].answer
                        ? "correct-answer"
                        : "wrong-answer"
                      : ""
                  }`}
                  onClick={() => result(3)}
                >
                  {questions[nextQues].options[3]}
                </div>
              </div>
            </div>
            {fans === 1 && (
              <div>
                {questions[nextQues].options[ans] ===
                questions[nextQues].answer ? (
                  <div>
                    <h3 style={{ color: "green" }}>Correct answer!!</h3>
                  </div>
                ) : (
                  <div>
                    <h3 style={{ color: "red" }}>Wrong answer...</h3>
                  </div>
                )}
              </div>
            )}
            {ans !== -1 && (
              <button className="nextQues" onClick={() => QuesNum()}>
                Next Question
              </button>
            )}
          </div>
        ) : (
          <div className="result"style={{ color: "green" }}>
            <div>Quiz Completed!</div>
            <div>You have scored: {correctAns * 5}%</div>
          </div>
        )}
        {nextQues < questions.length && ans !== -1 ? (
          <div>
            <h3 style={{ color: "green" }}>
              Correct answer is : {questions[nextQues].answer}
            </h3>
          </div>
        ) : (
          <div />
        )}
        <button
          className="playAgain"
          onClick={() => {
            playAgain();
          }}
        >
          Play again
        </button>
      </div>
    </div>
  );
}
