import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const companyName = "친환경주식회사";
const EcoScoreGauge = ({ onBackClick }) => {
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const id = localStorage.getItem("environment_id")
            ? localStorage.getItem("environment_id")
            : 23;
        fetch(
            `https://nf6pmxwscbliizl5j2ounfufz40wwndu.lambda-url.us-east-1.on.aws/?id=${id}`
        )
            .then((response) => response.json())
            .then((data) => {
                // 응답 형식이 항상 아래와 같이 단일 객체입니다.
                // { environment_id, score, problem, feedback }
                setProduct(data);
            })
            .catch((error) => console.error("Error fetching items:", error));
    }, []);

    // 게이지 회전을 계산하는 함수 (product가 유효할 때만 계산)
    const calculateGaugeRotation = () => {
        if (!product || product.score === undefined) return -90;
        const percentage = product.score / 100;
        return -90 + percentage * 180;
    };

    useEffect(() => {
        if (product) {
            const needle = document.getElementById("gauge-needle");
            if (needle) {
                needle.style.transform = `rotate(${calculateGaugeRotation()}deg)`;
            }
        }
    }, [product]);

    const handleBackClick = () => {
        if (onBackClick) {
            navigate("/");
        }
    };

    const handleUpdateClick = () => {
        navigate("/mcq");
    };

    // product가 로드되기 전까지는 로딩 메시지 표시
    // if (!product) {
    //     return <div>Loading...</div>;
    // }

    const styles = {
        container: {
            maxWidth: "480px",
            margin: "0 auto",
            fontFamily:
                '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
            backgroundColor: "#f7f9fc",
            color: "#333",
            paddingBottom: "80px",
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
        },
        scoreSection: {
            background: "white",
            padding: "20px",
            borderRadius: "16px",
            margin: "16px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        },
        scoreTitle: {
            fontSize: "20px",
            fontWeight: 600,
            marginBottom: "20px",
            color: "#2c3e50",
        },
        gaugeContainer: {
            position: "relative",
            width: "90%",
            height: "180px",
            marginBottom: "30px",
        },
        gaugeSemicircle: {
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%",
            height: "180px",
            borderRadius: "180px 180px 0 0",
            border: "12px solid #e0e0e0",
            borderBottom: "none",
            boxSizing: "border-box",
        },
        gaugeColoredSection: {
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%",
            height: "180px",
            borderRadius: "180px 180px 0 0",
            border: "12px solid #4cd686",
            borderBottom: "none",
            boxSizing: "border-box",
            clipPath: `polygon(50% 100%, 0 100%, 0 0, 100% 0, 100% 100%, 50% 100%)`,
        },
        needleContainer: {
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 4,
        },
        needle: {
            width: "2px",
            height: "140px",
            backgroundColor: "black",
            transformOrigin: "bottom center",
        },
        needleBase: {
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            backgroundColor: "black",
            position: "absolute",
            bottom: "-6px",
            left: "50%",
            transform: "translateX(-50%)",
        },
        scoreValue: {
            position: "absolute",
            bottom: "30px",
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: "60px",
            fontWeight: "bold",
            color: "#000",
            zIndex: 5,
        },
        scoreUnit: {
            fontSize: "20px",
            fontWeight: "normal",
            color: "#000",
            marginLeft: "2px",
        },
        minMaxValues: {
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            color: "#666",
            marginTop: "-10px",
        },
        detailSection: {
            background: "white",
            padding: "20px",
            marginTop: "8px",
            borderRadius: "16px",
            margin: "16px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
        sectionTitle: {
            fontSize: "17px",
            fontWeight: 600,
            margin: "0 0 16px",
            color: "#2c3e50",
            display: "flex",
            alignItems: "center",
        },
        sectionIcon: {
            marginRight: "8px",
            fontSize: "20px",
            color: "#4cd686",
        },
        detailItem: {
            display: "flex",
            flexDirection: "column",
            background: "#f8fbfd",
            padding: "12px",
            borderRadius: "12px",
        },
        detailValue: {
            fontSize: "15px",
            fontWeight: 500,
            color: "#34495e",
            whiteSpace: "pre-line",
        },
        updateButtonContainer: {
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            background: "white",
            padding: "12px 15px",
            boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.1)",
            borderTopLeftRadius: "16px",
            borderTopRightRadius: "16px",
        },
        updateButton: {
            width: "100%",
            padding: "14px 0",
            backgroundColor: "#4cd686",
            color: "white",
            border: "none",
            borderRadius: "30px",
            fontSize: "16px",
            fontWeight: 600,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 10px rgba(76, 214, 134, 0.3)",
        },
    };

    return (
      product && (
        <div style={styles.container}>
            {/* Header with back button */}
            <div style={styles.formHeader}>
                <button style={styles.backButton} onClick={handleBackClick}>
                    ←
                </button>
                <h2 style={styles.headerTitle}>{companyName}의 친환경 점수</h2>
            </div>

            {/* Score section with semicircle gauge */}
            <div style={styles.scoreSection}>
                <h3 style={styles.scoreTitle}>친환경 수치</h3>
                <div style={styles.gaugeContainer}>
                    <div style={styles.gaugeSemicircle}></div>
                    <div style={styles.gaugeColoredSection}></div>
                    <div style={styles.needleContainer}>
                        <div id="gauge-needle" style={styles.needle}></div>
                        <div style={styles.needleBase}></div>
                    </div>
                    <div style={styles.scoreValue}>
                        {product.score}
                        <span style={styles.scoreUnit}>점</span>
                    </div>
                </div>
                <div style={styles.minMaxValues}>
                    <span>0</span>
                    <span>100</span>
                </div>
            </div>

            {/* 문제점 Section */}
            <div style={styles.detailSection}>
                <h3 style={styles.sectionTitle}>
                    <span style={styles.sectionIcon}>🌿</span>
                    주요 문제점
                </h3>
                <div style={styles.detailItem}>
                    <span style={styles.detailValue}>{product.problem}</span>
                </div>
            </div>

            {/* 개선 필요 핵심 영역 Section */}
            <div style={styles.detailSection}>
                <h3 style={styles.sectionTitle}>
                    <span style={styles.sectionIcon}>⚡</span>
                    개선 필요 핵심 영역
                </h3>
                <div style={styles.detailItem}>
                    <span style={styles.detailValue}>{product.feedback}</span>
                </div>
            </div>

            {/* Update Button */}
            <div style={styles.updateButtonContainer}>
                <button style={styles.updateButton} onClick={handleUpdateClick}>
                    업데이트
                </button>
            </div>
        </div>
      )
    );
};

export default EcoScoreGauge;
