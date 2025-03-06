import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const SurveyDescriptive = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const mcqScores = location.state?.mcqScore || {};
    const [currentPage, setCurrentPage] = useState(0);
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);

    // ✅ CSS 애니메이션 추가
    const globalStyles = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        `;

    // ✅ 스타일을 문서에 추가하는 함수
    const addGlobalStyle = () => {
        const styleTag = document.createElement("style");
        styleTag.innerHTML = globalStyles;
        document.head.appendChild(styleTag);
    };

    // ✅ 애니메이션 스타일을 한 번만 추가
    addGlobalStyle();

    const Modal = ({ show }) => {
        if (!show) return null;

        return (
            <div style={styles.modalOverlay}>
                <div style={styles.modalContent}>
                    <div style={styles.spinner}></div>

                    <p style={styles.loadingText}>🍃 응답을 전송 중입니다...</p>
                </div>
            </div>
        );
    };

    // Descriptive answers state
    const [answers, setAnswers] = useState({
        challenges: "",
        successStories: "",
        futureGoals: "",
        resources: "",
        improvements: "",
        feedback: "",
        mcqScores: mcqScores,
    });

    // Load questions from JSON file
    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await fetch("/data/surveys_des.json");
                const data = await response.json();

                // Divide questions into pages (2 questions per page)
                const pagesOfQuestions = [];
                for (let i = 0; i < data.questions.length; i += 2) {
                    pagesOfQuestions.push(data.questions.slice(i, i + 2));
                }

                setQuestions(pagesOfQuestions);
                setLoading(false);
            } catch (error) {
                console.error(
                    "Error loading descriptive survey questions:",
                    error
                );
                setLoading(false);
            }
        };

        fetchQuestions();
    }, []);

    // Get current page questions
    const currentQuestions = questions[currentPage] || [];

    // Handle text input change
    const handleInputChange = (questionId, value) => {
        setAnswers({
            ...answers,
            [questionId]: value,
        });
    };

    // Navigate to previous page
    const handleBackClick = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        } else {
            // Go back to multiple choice
            navigate(-1);
        }
    };

    // Navigate to next page or submit all answers
    const handleNextClick = async () => {
        if (currentPage < questions.length - 1) {
            setCurrentPage(currentPage + 1);
        } else {
            // Combine all answers and submit
            // const allAnswers = {
            //     ...multipleChoiceAnswers,
            //     ...answers,
            // };

            // Here you would typically submit the answers to your backend
            console.log("Survey completed:", answers);

            try {
                setSubmitting(true);
                const response = await fetch(
                    "https://vvuoi7fvm6yb6fp2nxwx4rk53y0bmxef.lambda-url.us-east-1.on.aws/",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(answers),
                    }
                );

                if (!response.ok) {
                    throw new Error(`서버 응답 오류: ${response.status}`);
                }

                const result = await response.json();
                console.log("응답 제출 성공:", result);

                localStorage.setItem("environment_id", result.id);
                console.log(localStorage);

                alert("설문이 완료되었습니다! 참여해 주셔서 감사합니다.");
                navigate("/"); // Navigate to home or completion page
            } catch (error) {
                console.error("응답 제출 실패:", error);
                alert("응답 제출 중 오류가 발생했습니다.");
            } finally {
                setSubmitting(false);
            }
        }
    };

    // Check if current page inputs have been touched
    const isCurrentPageComplete = () => {
        return currentQuestions.every((q) => answers[q.id].length > 0);
    };

    // Styles
    const styles = {
        container: {
            maxWidth: "480px",
            margin: "0 auto",
            fontFamily:
                '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
            backgroundColor: "#f7f9fc",
            color: "#333",
            paddingBottom: "80px",
            minHeight: "100vh",
        },
        formHeader: {
            display: "flex",
            alignItems: "center",
            padding: "18px 15px",
            backgroundColor: "#fff",
            position: "sticky",
            top: 0,
            zIndex: 10,
            borderBottom: "1px solid #f0f0f0",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
        },
        backButton: {
            background: "#f5f7fa",
            border: "none",
            fontSize: "18px",
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "12px",
            cursor: "pointer",
            color: "#555",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.05)",
        },
        headerTitle: {
            fontSize: "18px",
            margin: 0,
            fontWeight: 600,
            flexGrow: 1,
        },
        pageIndicator: {
            fontSize: "14px",
            color: "#7f8c8d",
        },
        form: {
            padding: "15px",
        },
        formGroup: {
            background: "white",
            padding: "20px",
            marginTop: "8px",
            borderRadius: "16px",
            margin: "16px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
        questionTitle: {
            fontSize: "16px",
            fontWeight: 600,
            marginBottom: "15px",
            color: "#2c3e50",
            display: "flex",
            alignItems: "center",
        },
        questionIcon: {
            marginRight: "8px",
            fontSize: "20px",
            color: "#4cd686",
        },
        inputCounter: {
            position: "relative",
        },
        textarea: {
            width: "100%",
            padding: "12px",
            border: "1px solid #e0e6ed",
            borderRadius: "12px",
            fontSize: "14px",
            boxSizing: "border-box",
            minHeight: "120px",
            resize: "none",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.03)",
            marginBottom: "5px",
        },
        counter: {
            position: "absolute",
            right: "12px",
            bottom: "-20px",
            fontSize: "12px",
            color: "#7f8c8d",
        },
        buttonContainer: {
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            display: "flex",
            gap: "10px",
            background: "white",
            padding: "12px 15px",
            boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.1)",
            borderTopLeftRadius: "16px",
            borderTopRightRadius: "16px",
        },
        button: {
            flex: 1,
            padding: "14px 0",
            border: "none",
            borderRadius: "30px",
            fontSize: "16px",
            fontWeight: 600,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
        backBtn: {
            backgroundColor: "#f5f7fa",
            color: "#555",
        },
        nextBtn: {
            backgroundColor: "#4cd686",
            color: "white",
            boxShadow: "0 4px 10px rgba(76, 214, 134, 0.3)",
        },
        disabledBtn: {
            opacity: 0.5,
            cursor: "not-allowed",
        },
        buttonIcon: {
            marginRight: "8px",
            fontSize: "18px",
        },
        loadingContainer: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
            flexDirection: "column",
        },
        modalOverlay: {
            position: "fixed",
            top: 0,
            zIndex: 99,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },

        modalContent: {
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "12px",
            textAlign: "center",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            display: "flex",
            flexDirection: "column", // ✅ 세로 정렬 추가
            alignItems: "center",
            justifyContent: "center",
            width: "200px", // ✅ 가로 크기 지정
        },

        spinner: {
            width: "40px",
            height: "40px",
            border: "4px solid #ccc",
            borderTop: "4px solid #4cd686",
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
            marginBottom: "10px", // ✅ 텍스트와 간격 추가
        },

        loadingText: {
            fontSize: "16px",
            color: "#555",
            marginTop: "5px",
        },
    };

    if (loading) {
        return (
            <div style={styles.container}>
                <div style={styles.formHeader}>
                    <button style={styles.backButton} onClick={handleBackClick}>
                        ←
                    </button>
                    <h2 style={styles.headerTitle}>서술형 문항</h2>
                </div>
                <div style={styles.loadingContainer}>
                    <div>로딩 중...</div>
                    <div style={styles.loadingText}>
                        서술형 문항을 불러오는 중입니다
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div style={styles.container}>
            <Modal show={submitting} />
            <div style={styles.formHeader}>
                <button style={styles.backButton} onClick={handleBackClick}>
                    ←
                </button>
                <h2 style={styles.headerTitle}>서술형 문항</h2>
                <span style={styles.pageIndicator}>
                    {currentPage + 1}/{questions.length}
                </span>
            </div>

            <form style={styles.form}>
                {currentQuestions.map((question) => (
                    <div key={question.id} style={styles.formGroup}>
                        <h3 style={styles.questionTitle}>
                            <span style={styles.questionIcon}>✏️</span>
                            {question.question}
                        </h3>
                        <div style={styles.inputCounter}>
                            <textarea
                                style={styles.textarea}
                                placeholder={question.placeholder}
                                value={answers[question.id]}
                                onChange={(e) =>
                                    handleInputChange(
                                        question.id,
                                        e.target.value
                                    )
                                }
                                maxLength={question.maxLength}
                            />
                            <span style={styles.counter}>
                                {answers[question.id].length}/
                                {question.maxLength}자
                            </span>
                        </div>
                    </div>
                ))}
            </form>

            <div style={styles.buttonContainer}>
                <button
                    style={{
                        ...styles.button,
                        ...styles.backBtn,
                    }}
                    onClick={handleBackClick}
                >
                    <span style={styles.buttonIcon}>◀</span>
                    이전
                </button>
                <button
                    style={{
                        ...styles.button,
                        ...styles.nextBtn,
                    }}
                    onClick={handleNextClick}
                >
                    {currentPage < questions.length - 1 ? "다음" : "제출하기"}
                    <span
                        style={{
                            ...styles.buttonIcon,
                            marginLeft: "8px",
                            marginRight: 0,
                        }}
                    >
                        ▶
                    </span>
                </button>
            </div>
        </div>
    );
};

export default SurveyDescriptive;
