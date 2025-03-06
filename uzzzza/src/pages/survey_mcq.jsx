import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SurveyMultipleChoice = () => {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(0);
    
    // Multiple choice answers state
    const [answers, setAnswers] = useState({
        environmentalPolicy: "",
        wasteReduction: "",
        renewableEnergy: "",
        employeeTraining: "",
        supplyChain: "",
        carbonFootprint: "",
        wasteManagement: "",
        sustainabilityReport: ""
    });
    
    // Questions divided into pages
    const questions = [
        // Page 1
        [
            {
                id: "environmentalPolicy",
                question: "귀사는 환경 정책이나 지속 가능성 정책을 가지고 있습니까?",
                options: ["예", "아니오", "개발 중", "모르겠음"]
            },
            {
                id: "wasteReduction",
                question: "폐기물 감소를 위한 프로그램을 시행하고 있습니까?",
                options: ["적극적으로 시행 중", "일부 시행 중", "계획 중", "시행하지 않음"]
            }
        ],
        // Page 2
        [
            {
                id: "renewableEnergy",
                question: "귀사는 재생 에너지를 사용하고 있습니까?",
                options: ["전체 에너지의 50% 이상", "일부 사용 중 (10-50%)", "소량 사용 중 (10% 미만)", "사용하지 않음"]
            },
            {
                id: "employeeTraining",
                question: "직원들에게 환경 관련 교육을 제공합니까?",
                options: ["정기적으로 제공", "가끔 제공", "제공 예정", "제공하지 않음"]
            }
        ],
        // Page 3
        [
            {
                id: "supplyChain",
                question: "친환경적인 공급망 관리를 하고 있습니까?",
                options: ["전체 공급망에 적용", "주요 공급업체에만 적용", "검토 중", "적용하지 않음"]
            },
            {
                id: "carbonFootprint",
                question: "탄소 발자국을 측정하고 있습니까?",
                options: ["정기적으로 측정", "가끔 측정", "측정 예정", "측정하지 않음"]
            }
        ],
        // Page 4
        [
            {
                id: "wasteManagement",
                question: "폐기물 관리 시스템이 있습니까?",
                options: ["포괄적인 시스템 있음", "기본적인 시스템 있음", "개발 중", "없음"]
            },
            {
                id: "sustainabilityReport",
                question: "지속가능성 보고서를 발행하고 있습니까?",
                options: ["매년 발행", "가끔 발행", "발행 예정", "발행하지 않음"]
            }
        ]
    ];

    // Get current page questions
    const currentQuestions = questions[currentPage];

    // Handle answer change
    const handleAnswerChange = (questionId, value) => {
        setAnswers({
            ...answers,
            [questionId]: value
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
        return currentQuestions.every(q => answers[q.id] !== "");
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
    };

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
                {currentQuestions.map((question, index) => (
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
                                            : {}),
                                    }}
                                    onClick={() => handleAnswerChange(question.id, option)}
                                >
                                    <div 
                                        style={{
                                            ...styles.radioCircle,
                                            ...(answers[question.id] === option
                                                ? styles.radioCircleSelected
                                                : {}),
                                        }}
                                    >
                                        {answers[question.id] === option && (
                                            <div style={styles.radioInner}></div>
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
                    {currentPage < questions.length - 1 ? "다음" : "서술형 문항으로"}
                    <span style={styles.buttonIcon}>▶</span>
                </button>
            </div>
        </div>
    );
};

export default SurveyMultipleChoice;