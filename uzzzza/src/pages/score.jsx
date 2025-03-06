import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const EcoScoreGauge = ({ onBackClick }) => {
    // Hook for navigation
    const navigate = useNavigate();

    // Example data - in a real app, these would be props
    const companyName = "기업 이름";
    const score = 70;
    const maxScore = 100;
    const greenhouseGasReduction = "70 ym~";
    const fossilFuelReduction = "80 kg";

    // Calculate the angle for the gauge meter based on the score
    const calculateGaugeRotation = () => {
        // Convert score to percentage of max score
        const percentage = score / maxScore;
        // Convert percentage to angle (-90 to 90 degrees for a semicircle)
        return -90 + percentage * 180;
    };

    useEffect(() => {
        // Set gauge needle position after component renders
        const needle = document.getElementById("gauge-needle");
        if (needle) {
            needle.style.transform = `rotate(${calculateGaugeRotation()}deg)`;
        }
    }, [score, maxScore]);

    // Handle back button click
    const handleBackClick = () => {
        if (onBackClick) {
            onBackClick();
        } else {
            // If no onBackClick prop is provided, default to navigating to home
            navigate("/");
        }
    };

    // Handle update button click
    const handleUpdateClick = () => {
        navigate("/company");
    };

    // Styles based on detail.jsx but adapted for this component
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
        gaugeTicks: {
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%",
            height: "180px",
            zIndex: 2,
        },
        tick: {
            position: "absolute",
            top: "10px",
            left: "50%",
            height: "15px",
            width: "3px",
            backgroundColor: "white",
            transform: "rotate(0deg) translateX(-50%)",
            transformOrigin: "bottom center",
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
        detailGrid: {
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "15px",
        },
        detailItem: {
            display: "flex",
            flexDirection: "column",
            background: "#f8fbfd",
            padding: "12px",
            borderRadius: "12px",
        },
        detailLabel: {
            fontSize: "13px",
            color: "#7f8c8d",
            marginBottom: "5px",
        },
        detailValue: {
            fontSize: "15px",
            fontWeight: "500",
            color: "#34495e",
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

    // Create tick marks for the gauge
    const renderTicks = () => {
        const ticks = [];
        const tickCount = 9; // Number of tick marks we want

        for (let i = 0; i < tickCount; i++) {
            const angle = -90 + (i * 180) / (tickCount - 1);
            const tickStyle = {
                ...styles.tick,
                transform: `rotate(${angle}deg) translateX(-50%)`,
            };
            ticks.push(<div key={i} style={tickStyle}></div>);
        }

        return ticks;
    };

    return (
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
                        {score}
                        <span style={styles.scoreUnit}>점</span>
                    </div>
                </div>

                <div style={styles.minMaxValues}>
                    <span>1</span>
                    <span>{maxScore}</span>
                </div>
            </div>

            {/* Greenhouse Gas Reduction Section */}
            <div style={styles.detailSection}>
                <h3 style={styles.sectionTitle}>
                    <span style={styles.sectionIcon}>🌿</span>
                    온실가스 배출 감소량
                </h3>
                <div style={styles.detailItem}>
                    <span style={styles.detailValue}>
                        {greenhouseGasReduction}
                    </span>
                </div>
            </div>

            {/* Fossil Fuel Reduction Section */}
            <div style={styles.detailSection}>
                <h3 style={styles.sectionTitle}>
                    <span style={styles.sectionIcon}>⚡</span>
                    화석연료 소비 감소량
                </h3>
                <div style={styles.detailItem}>
                    <span style={styles.detailValue}>
                        {fossilFuelReduction}
                    </span>
                </div>
            </div>

            {/* Update Button */}
            <div style={styles.updateButtonContainer}>
                <button style={styles.updateButton} onClick={handleUpdateClick}>
                    업데이트
                </button>
            </div>
        </div>
    );
};

export default EcoScoreGauge;
