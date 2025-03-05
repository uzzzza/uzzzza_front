import React, { useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProductUploadForm = () => {
    const navigate = useNavigate(); // 네비게이션 훅 추가
    const today = new Date().toISOString().split("T")[0];
    const [startDate, setStartDate] = useState(today);
    const [endDate, setEndDate] = useState("");
    const [image, setImage] = useState(null);
    const fileInputRef = useRef(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("중고");
    const [selectedCondition, setSelectedCondition] = useState("A");
    const [weight, setWeight] = useState("");
    const [cleaningStatus, setCleaningStatus] = useState("세척 완료");
    const [includePackaging, setIncludePackaging] = useState("포함");
    const [isVisitPickup, setIsVisitPickup] = useState(true);
    const [isDeliveryPossible, setIsDeliveryPossible] = useState(true);
    const handleBackClick = () => {
        navigate("/"); // 메인 페이지로 이동
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        // 여기에 데이터 저장 로직이 들어갈 수 있음

        // 저장 후 메인 페이지로 이동
        navigate("/");
    };
    const openFilePicker = () => {
        fileInputRef.current.click();
    };
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    // 스타일: detail.jsx와 동일한 스타일 적용
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
        label: {
            display: "block",
            fontSize: "15px",
            fontWeight: 600,
            marginBottom: "12px",
            color: "#2c3e50",
        },
        required: {
            color: "#4cd686",
            marginLeft: "4px",
        },
        inputCounter: {
            position: "relative",
        },
        input: {
            width: "100%",
            padding: "12px",
            border: "1px solid #e0e6ed",
            borderRadius: "12px",
            fontSize: "14px",
            boxSizing: "border-box",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.03)",
        },
        counter: {
            position: "absolute",
            right: "12px",
            bottom: "12px",
            fontSize: "12px",
            color: "#7f8c8d",
        },
        sectionHeader: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "15px",
            fontSize: "17px",
            fontWeight: 600,
            color: "#2c3e50",
        },
        sectionIcon: {
            marginRight: "8px",
            fontSize: "20px",
            color: "#4cd686",
        },
        infoButton: {
            background: "none",
            border: "none",
            color: "#7f8c8d",
            fontSize: "18px",
            cursor: "pointer",
        },
        formRow: {
            display: "flex",
            padding: "12px",
            borderBottom: "1px solid #f0f0f0",
            background: "#f8fbfd",
            borderRadius: "12px",
            marginBottom: "8px",
        },
        formLabel: {
            width: "80px",
            color: "#7f8c8d",
            fontSize: "13px",
        },
        formValue: {
            flex: 1,
            fontSize: "15px",
            fontWeight: "500",
            color: "#34495e",
        },
        buttonGroup: {
            display: "flex",
            gap: "8px",
            marginBottom: "8px",
            flexWrap: "wrap",
            justifyContent: "center",
        },
        button: {
            flex: "1 1 120px",
            padding: "12px 0",
            border: "1px solid #e0e6ed",
            backgroundColor: "#fff",
            borderRadius: "12px",
            fontSize: "14px",
            cursor: "pointer",
            transition: "all 0.2s ease",
            fontWeight: 500,
        },
        selectedButton: {
            backgroundColor: "#4cd686",
            color: "white",
            borderColor: "#4cd686",
            boxShadow: "0 4px 10px rgba(76, 214, 134, 0.3)",
        },
        toggleButtons: {
            display: "flex",
            border: "1px solid #e0e6ed",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.03)",
        },
        weightInput: {
            display: "flex",
            alignItems: "center",
        },
        unitSelector: {
            width: "60px",
            padding: "12px 0",
            textAlign: "center",
            backgroundColor: "#f5f7fa",
            border: "1px solid #e0e6ed",
            borderLeft: "none",
            borderRadius: "0 12px 12px 0",
            fontSize: "14px",
            fontWeight: 500,
            color: "#34495e",
        },
        dateRange: {
            display: "flex",
            alignItems: "center",
        },
        dateSeparator: {
            margin: "0 10px",
            color: "#7f8c8d",
        },
        imageUpload: {
            marginTop: "10px",
            width: "100%",
            height: "180px",
            position: "relative",
            overflow: "hidden",
            borderRadius: "12px",
            cursor: "pointer",
            boxShadow: "0 3px 8px rgba(0, 0, 0, 0.06)",
        },
        uploadPlaceholder: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "180px",
            border: "1px dashed #e0e6ed",
            borderRadius: "12px",
            cursor: "pointer",
            backgroundColor: "#f8fbfd",
        },
        plusIcon: {
            fontSize: "32px",
            color: "#4cd686",
            marginBottom: "10px",
        },
        uploadText: {
            fontSize: "14px",
            color: "#7f8c8d",
        },
        submitButton: {
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
        submitButtonIcon: {
            marginRight: "8px",
            fontSize: "20px",
        },
        textarea: {
            width: "100%",
            padding: "12px",
            border: "1px solid #e0e6ed",
            borderRadius: "12px",
            fontSize: "14px",
            boxSizing: "border-box",
            minHeight: "100px",
            resize: "none",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.03)",
        },
        inputFile: {
            display: "none",
        },
        previewImage: {
            width: "100%",
            height: "180px",
            objectFit: "cover",
            borderRadius: "12px",
        },
        submitButtonContainer: {
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
    };

    return (
        <div style={styles.container}>
            <div style={styles.formHeader}>
                <button style={styles.backButton} onClick={handleBackClick}>
                    ←
                </button>
                <h2 style={styles.headerTitle}>제품등록 업로드</h2>
            </div>

            <form style={styles.form} onSubmit={handleSubmit}>
                {/* Product Title */}
                <div style={styles.formGroup}>
                    <label style={styles.label}>
                        제목 <span style={styles.required}>*</span>
                    </label>
                    <div style={styles.inputCounter}>
                        <input
                            style={styles.input}
                            type="text"
                            placeholder="제목을 입력해 주세요"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            maxLength={25}
                        />
                        <span style={styles.counter}>{title.length}/25자</span>
                    </div>
                </div>

                {/* Business/Shop Info Section */}
                <div style={styles.formGroup}>
                    <div style={styles.sectionHeader}>
                        <div>
                            <span style={styles.sectionIcon}>🏢</span>
                            기관 정보
                        </div>
                        <button type="button" style={styles.infoButton}>
                            ⓘ
                        </button>
                    </div>

                    <div style={styles.formRow}>
                        <div style={styles.formLabel}>기관명</div>
                        <div style={styles.formValue}>도매</div>
                    </div>

                    <div style={styles.formRow}>
                        <div style={styles.formLabel}>담당자</div>
                        <div style={styles.formValue}>김앤대</div>
                    </div>

                    <div style={styles.formRow}>
                        <div style={styles.formLabel}>연락처</div>
                        <div style={styles.formValue}>010-0000-0000</div>
                    </div>

                    <div style={styles.formRow}>
                        <div style={styles.formLabel}>주소</div>
                        <div style={styles.formValue}>-</div>
                    </div>
                </div>

                {/* Category Selection */}
                <div style={styles.formGroup}>
                    <label style={styles.label}>
                        <span style={styles.sectionIcon}>📋</span>
                        카테고리 <span style={styles.required}>*</span>
                    </label>
                    <div style={styles.buttonGroup}>
                        <button
                            type="button"
                            style={{
                                ...styles.button,
                                ...(selectedCategory === "종이"
                                    ? styles.selectedButton
                                    : {
                                          border: "1px solid #ddd",
                                          backgroundColor: "#fff",
                                          color: "#333",
                                      }),
                            }}
                            onClick={() => setSelectedCategory("종이")}
                        >
                            종이
                        </button>
                        <button
                            type="button"
                            style={{
                                ...styles.button,
                                ...(selectedCategory === "플라스틱"
                                    ? styles.selectedButton
                                    : {
                                          border: "1px solid #ddd",
                                          backgroundColor: "#fff",
                                          color: "#333",
                                      }),
                            }}
                            onClick={() => setSelectedCategory("플라스틱")}
                        >
                            플라스틱
                        </button>
                        <button
                            type="button"
                            style={{
                                ...styles.button,
                                ...(selectedCategory === "금속"
                                    ? styles.selectedButton
                                    : {
                                          border: "1px solid #ddd",
                                          backgroundColor: "#fff",
                                          color: "#333",
                                      }),
                            }}
                            onClick={() => setSelectedCategory("금속")}
                        >
                            금속
                        </button>
                        <button
                            type="button"
                            style={{
                                ...styles.button,
                                ...(selectedCategory === "유리"
                                    ? styles.selectedButton
                                    : {
                                          border: "1px solid #ddd",
                                          backgroundColor: "#fff",
                                          color: "#333",
                                      }),
                            }}
                            onClick={() => setSelectedCategory("유리")}
                        >
                            유리
                        </button>
                        <button
                            type="button"
                            style={{
                                ...styles.button,
                                ...(selectedCategory === "전자제품"
                                    ? styles.selectedButton
                                    : {
                                          border: "1px solid #ddd",
                                          backgroundColor: "#fff",
                                          color: "#333",
                                      }),
                            }}
                            onClick={() => setSelectedCategory("전자제품")}
                        >
                            전자제품
                        </button>
                        <button
                            type="button"
                            style={{
                                ...styles.button,
                                ...(selectedCategory === "기타"
                                    ? styles.selectedButton
                                    : {
                                          border: "1px solid #ddd",
                                          backgroundColor: "#fff",
                                          color: "#333",
                                      }),
                            }}
                            onClick={() => setSelectedCategory("기타")}
                        >
                            기타
                        </button>
                    </div>
                </div>

                {/* Condition Selection */}
                <div style={styles.formGroup}>
                    <label style={styles.label}>
                        <span style={styles.sectionIcon}>🔍</span>
                        물품 등급 <span style={styles.required}>*</span>
                    </label>
                    <div style={styles.buttonGroup}>
                        <button
                            type="button"
                            style={{
                                ...styles.button,
                                ...(selectedCondition === "A"
                                    ? styles.selectedButton
                                    : {
                                          border: "1px solid #ddd",
                                          backgroundColor: "#fff",
                                          color: "#333",
                                      }),
                            }}
                            onClick={() => setSelectedCondition("A")}
                        >
                            A
                        </button>
                        <button
                            type="button"
                            style={{
                                ...styles.button,
                                ...(selectedCondition === "B"
                                    ? styles.selectedButton
                                    : {
                                          border: "1px solid #ddd",
                                          backgroundColor: "#fff",
                                          color: "#333",
                                      }),
                            }}
                            onClick={() => setSelectedCondition("B")}
                        >
                            B
                        </button>
                        <button
                            type="button"
                            style={{
                                ...styles.button,
                                ...(selectedCondition === "C"
                                    ? styles.selectedButton
                                    : {
                                          border: "1px solid #ddd",
                                          backgroundColor: "#fff",
                                          color: "#333",
                                      }),
                            }}
                            onClick={() => setSelectedCondition("C")}
                        >
                            C
                        </button>
                    </div>
                </div>

                {/* Weight Input */}
                <div style={styles.formGroup}>
                    <label style={styles.label}>
                        <span style={styles.sectionIcon}>⚖️</span>
                        무게 <span style={styles.required}>*</span>
                    </label>
                    <div style={styles.weightInput}>
                        <input
                            type="number"
                            style={{
                                ...styles.input,
                                borderRadius: "12px 0 0 12px",
                            }}
                            min={0}
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            placeholder="0"
                        />
                        <div style={styles.unitSelector}>KG</div>
                    </div>
                </div>

                {/* Date Range Selection */}
                <div style={styles.formGroup}>
                    <label style={styles.label}>
                        <span style={styles.sectionIcon}>📅</span>
                        희망 수령 기간 <span style={styles.required}>*</span>
                    </label>
                    <div style={styles.dateRange}>
                        <input
                            type="date"
                            style={styles.input}
                            value={startDate}
                            min={today}
                            disabled
                        />
                        <span style={styles.dateSeparator}>-</span>
                        <input
                            type="date"
                            style={styles.input}
                            placeholder="종료일"
                            min={startDate}
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                        />
                    </div>
                </div>

                {/* Cleaning Status */}
                <div style={styles.formGroup}>
                    <label style={styles.label}>
                        <span style={styles.sectionIcon}>🧹</span>
                        세척 여부 <span style={styles.required}>*</span>
                    </label>
                    <div style={styles.toggleButtons}>
                        <button
                            type="button"
                            style={{
                                ...styles.button,
                                flex: 1,
                                borderRadius: 0,
                                border: "none",
                                ...(cleaningStatus === "세척 완료"
                                    ? styles.selectedButton
                                    : {}),
                            }}
                            onClick={() => setCleaningStatus("세척 완료")}
                        >
                            세척 완료
                        </button>
                        <button
                            type="button"
                            style={{
                                ...styles.button,
                                flex: 1,
                                borderRadius: 0,
                                border: "none",
                                ...(cleaningStatus === "세척 전"
                                    ? styles.selectedButton
                                    : {}),
                            }}
                            onClick={() => setCleaningStatus("세척 전")}
                        >
                            세척 전
                        </button>
                    </div>
                </div>

                {/* Include Packaging */}
                <div style={styles.formGroup}>
                    <label style={styles.label}>
                        <span style={styles.sectionIcon}>📦</span>
                        혼합 재질 포함 여부{" "}
                        <span style={styles.required}>*</span>
                    </label>
                    <div style={styles.toggleButtons}>
                        <button
                            type="button"
                            style={{
                                ...styles.button,
                                flex: 1,
                                borderRadius: 0,
                                border: "none",
                                ...(includePackaging === "포함"
                                    ? styles.selectedButton
                                    : {}),
                            }}
                            onClick={() => setIncludePackaging("포함")}
                        >
                            포함
                        </button>
                        <button
                            type="button"
                            style={{
                                ...styles.button,
                                flex: 1,
                                borderRadius: 0,
                                border: "none",
                                ...(includePackaging === "미포함"
                                    ? styles.selectedButton
                                    : {}),
                            }}
                            onClick={() => setIncludePackaging("미포함")}
                        >
                            미포함
                        </button>
                    </div>
                </div>

                {/* Product Description */}
                <div style={styles.formGroup}>
                    <label style={styles.label}>
                        <span style={styles.sectionIcon}>📝</span>
                        배출 사유
                    </label>
                    <div style={styles.inputCounter}>
                        <textarea
                            style={styles.textarea}
                            placeholder="내용을 입력해 주세요"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            maxLength={50}
                        />
                        <span style={styles.counter}>
                            {description.length}/50자
                        </span>
                    </div>
                </div>

                {/* Image Upload */}
                <div style={styles.formGroup}>
                    <label style={styles.label}>
                        <span style={styles.sectionIcon}>🖼️</span>
                        상세 사진
                    </label>
                    <div style={styles.imageUpload} onClick={openFilePicker}>
                        {image ? (
                            <img
                                src={image}
                                alt="미리보기"
                                style={styles.previewImage}
                            />
                        ) : (
                            <div style={styles.uploadPlaceholder}>
                                <span style={styles.plusIcon}>+</span>
                                <span style={styles.uploadText}>
                                    사진을 추가해 주세요
                                </span>
                            </div>
                        )}
                        <input
                            type="file"
                            accept="image/*"
                            style={styles.inputFile}
                            ref={fileInputRef}
                            onChange={handleImageChange}
                        />
                    </div>
                </div>

                {/* Visit Pickup */}
                <div style={styles.formGroup}>
                    <label style={styles.label}>
                        <span style={styles.sectionIcon}>🚶</span>
                        방문 수령 <span style={styles.required}>*</span>
                    </label>
                    <div style={styles.toggleButtons}>
                        <button
                            type="button"
                            style={{
                                ...styles.button,
                                flex: 1,
                                borderRadius: 0,
                                border: "none",
                                ...(isVisitPickup ? styles.selectedButton : {}),
                            }}
                            onClick={() => setIsVisitPickup(true)}
                        >
                            가능
                        </button>
                        <button
                            type="button"
                            style={{
                                ...styles.button,
                                flex: 1,
                                borderRadius: 0,
                                border: "none",
                                ...(!isVisitPickup
                                    ? styles.selectedButton
                                    : {}),
                            }}
                            onClick={() => setIsVisitPickup(false)}
                        >
                            불가능
                        </button>
                    </div>
                </div>

                {/* Delivery Possible */}
                <div style={styles.formGroup}>
                    <label style={styles.label}>
                        <span style={styles.sectionIcon}>🚚</span>
                        택배/화물 <span style={styles.required}>*</span>
                    </label>
                    <div style={styles.toggleButtons}>
                        <button
                            type="button"
                            style={{
                                ...styles.button,
                                flex: 1,
                                borderRadius: 0,
                                border: "none",
                                ...(isDeliveryPossible
                                    ? styles.selectedButton
                                    : {}),
                            }}
                            onClick={() => setIsDeliveryPossible(true)}
                        >
                            가능
                        </button>
                        <button
                            type="button"
                            style={{
                                ...styles.button,
                                flex: 1,
                                borderRadius: 0,
                                border: "none",
                                ...(!isDeliveryPossible
                                    ? styles.selectedButton
                                    : {}),
                            }}
                            onClick={() => setIsDeliveryPossible(false)}
                        >
                            불가능
                        </button>
                    </div>
                </div>
            </form>

            {/* Submit Button - Fixed at bottom like the call button in detail.jsx */}
            <div style={styles.submitButtonContainer}>
                <button onClick={handleSubmit} style={styles.submitButton}>
                    <span style={styles.submitButtonIcon}>💾</span>
                    <span>저장하기</span>
                </button>
            </div>
        </div>
    );
};

export default ProductUploadForm;
