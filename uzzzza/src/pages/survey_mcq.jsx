import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SurveyMultipleChoice = () => {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(0);
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);

    // Initialize answers state with empty values
    const [answers, setAnswers] = useState({
        environmentalPolicy: "",
        wasteReduction: "",
        renewableEnergy: "",
        employeeTraining: "",
        supplyChain: "",
        carbonFootprint: "",
        wasteManagement: "",
        sustainabilityReport: "",
    });

    // Load questions from JSON file
    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await fetch("/data/surveys_mcq.json");
                const data = await response.json();
                setQuestions(data.questions);
                setLoading(false);
            } catch (error) {
                console.error("Error loading survey questions:", error);
                setLoading(false);
            }
        };

        fetchQuestions();
    }, []);

    // Get current page questions
    const currentQuestions = questions[currentPage] || [];

    // Handle answer change
    const handleAnswerChange = (questionId, value) => {
        setAnswers({
            ...answers,
            [questionId]: value,
        });
    };

    // Navigate to previous page or back to home
    const handleBackClick = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        } else {
            navigate(-1); // Go back to previous screen
        }
    };

    // Navigate to next page or to descriptive questions
    const handleNextClick = () => {
        if (currentPage < questions.length - 1) {
            setCurrentPage(currentPage + 1);
        } else {
            // Navigate to descriptive questions page
            navigate("/descriptive", { state: { answers } });
        }
    };

    // Check if current page is complete
    const isCurrentPageComplete = () => {
        return currentQuestions.every((q) => answers[q.id] !== "");
    };

    // Styles from company.jsx
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
        optionsContainer: {
            marginTop: "15px",
        },
        optionButton: {
            width: "100%",
            padding: "12px 15px",
            margin: "8px 0",
            backgroundColor: "#fff",
            border: "1px solid #e0e6ed",
            borderRadius: "12px",
            fontSize: "14px",
            textAlign: "left",
            cursor: "pointer",
            transition: "all 0.2s ease",
            display: "flex",
            alignItems: "center",
        },
        selectedOption: {
            backgroundColor: "#4cd686",
            color: "white",
            borderColor: "#4cd686",
            boxShadow: "0 4px 10px rgba(76, 214, 134, 0.3)",
        },
        radioCircle: {
            width: "18px",
            height: "18px",
            borderRadius: "50%",
            border: "2px solid #e0e6ed",
            marginRight: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
        },
        radioCircleSelected: {
            border: "2px solid white",
        },
        radioInner: {
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            backgroundColor: "white",
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
        loadingText: {
            marginTop: "15px",
            color: "#555",
            fontSize: "16px",
        },
    };

    if (loading) {
        return (
            <div style={styles.container}>
                <div style={styles.formHeader}>
                    <button style={styles.backButton} onClick={handleBackClick}>
                        ←
                    </button>
                    <h2 style={styles.headerTitle}>기업 환경 실천 조사</h2>
                </div>
                <div style={styles.loadingContainer}>
                    <div>로딩 중...</div>
                    <div style={styles.loadingText}>
                        설문 질문을 불러오는 중입니다
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div style={styles.container}>
            <div style={styles.formHeader}>
                <button style={styles.backButton} onClick={handleBackClick}>
                    ←
                </button>
                <h2 style={styles.headerTitle}>기업 환경 실천 조사</h2>
                <span style={styles.pageIndicator}>
                    {currentPage + 1}/{questions.length}
                </span>
            </div>

            <form style={styles.form}>
                {currentQuestions.map((question) => (
                    <div key={question.id} style={styles.formGroup}>
                        <h3 style={styles.questionTitle}>
                            <span style={styles.questionIcon}>❓</span>
                            {question.question}
                        </h3>
                        <div style={styles.optionsContainer}>
                            {question.options.map((option) => (
                                <button
                                    key={option}
                                    type="button"
                                    style={{
                                        ...styles.optionButton,
                                        ...(answers[question.id] === option
                                            ? styles.selectedOption
                                            : {
                                                  border: "1px solid #ddd",
                                                  backgroundColor: "#fff",
                                                  color: "#333",
                                              }),
                                    }}
                                    onClick={() =>
                                        handleAnswerChange(question.id, option)
                                    }
                                >
                                    <div
                                        style={{
                                            ...styles.radioCircle,
                                            ...(answers[question.id] === option
                                                ? styles.radioCircleSelected
                                                : {
                                                      border: "1px solid #ddd",
                                                      backgroundColor: "#fff",
                                                      color: "#333",
                                                  }),
                                        }}
                                    >
                                        {answers[question.id] === option && (
                                            <div
                                                style={styles.radioInner}
                                            ></div>
                                        )}
                                    </div>
                                    {option}
                                </button>
                            ))}
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
                        ...(isCurrentPageComplete() ? {} : styles.disabledBtn),
                    }}
                    onClick={handleNextClick}
                    disabled={!isCurrentPageComplete()}
                >
                    {currentPage < questions.length - 1
                        ? "다음"
                        : "서술형 문항으로"}
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

export default SurveyMultipleChoice;
