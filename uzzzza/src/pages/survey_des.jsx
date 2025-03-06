import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const SurveyDescriptive = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const multipleChoiceAnswers = location.state?.answers || {};
    const [currentPage, setCurrentPage] = useState(0);
    
    // Descriptive answers state
    const [answers, setAnswers] = useState({
        challenges: "",
        successStories: "",
        futureGoals: "",
        resources: "",
        improvements: "",
        feedback: ""
    });
    
    // Questions divided into pages (2 questions per page)
    const questions = [
        // Page 1
        [
            {
                id: "challenges",
                question: "귀사가 친환경 정책을 구현하는 데 있어 주요 어려움은 무엇입니까?",
                placeholder: "직면한 주요 도전 과제들을 설명해 주세요...",
                maxLength: 500
            },
            {
                id: "successStories",
                question: "환경 보호와 관련하여 귀사의 가장 큰 성공 사례는 무엇입니까?",
                placeholder: "성공적인 환경 이니셔티브나 프로젝트를 설명해 주세요...",
                maxLength: 500
            }
        ],
        // Page 2
        [
            {
                id: "futureGoals",
                question: "향후 3년간 귀사의 환경 관련 목표는 무엇입니까?",
                placeholder: "친환경 관련 주요 목표와 달성 방법을 설명해 주세요...",
                maxLength: 500
            },
            {
                id: "resources",
                question: "친환경 정책 구현을 위해 추가로 필요한 자원이나 지원은 무엇입니까?",
                placeholder: "필요한 자원, 기술, 지원 등을 설명해 주세요...",
                maxLength: 500
            }
        ],
        // Page 3
        [
            {
                id: "improvements",
                question: "귀사의 산업 분야에서 환경 문제를 해결하기 위한 혁신적인 아이디어가 있다면 무엇입니까?",
                placeholder: "혁신적인 아이디어나 접근 방식을 공유해 주세요...",
                maxLength: 500
            },
            {
                id: "feedback",
                question: "환경 정책과 관련하여 정부나 규제 기관에 제안하고 싶은 개선사항이 있으십니까?",
                placeholder: "규제, 인센티브, 지원 프로그램 등에 대한 의견을 작성해 주세요...",
                maxLength: 500
            }
        ]
    ];

    // Get current page questions
    const currentQuestions = questions[currentPage];

    // Handle text input change
    const handleInputChange = (questionId, value) => {
        setAnswers({
            ...answers,
            [questionId]: value
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
    const handleNextClick = () => {
        if (currentPage < questions.length - 1) {
            setCurrentPage(currentPage + 1);
        } else {
            // Combine all answers and submit
            const allAnswers = {
                ...multipleChoiceAnswers,
                ...answers
            };
            
            // Here you would typically submit the answers to your backend
            console.log("Survey completed:", allAnswers);
            
            // Navigate to completion page or back to home
            alert("설문이 완료되었습니다! 참여해 주셔서 감사합니다.");
            navigate("/"); // Navigate to home or completion page
        }
    };

    // Check if current page inputs have been touched
    const isCurrentPageComplete = () => {
        return currentQuestions.every(q => answers[q.id].length > 0);
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
    };

    return (
        <div style={styles.container}>
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
                                onChange={(e) => handleInputChange(question.id, e.target.value)}
                                maxLength={question.maxLength}
                            />
                            <span style={styles.counter}>
                                {answers[question.id].length}/{question.maxLength}자
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
                    <span style={{
                        ...styles.buttonIcon,
                        marginLeft: "8px",
                        marginRight: 0
                    }}>▶</span>
                </button>
            </div>
        </div>
    );
};

export default SurveyDescriptive;