import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const RecyclableProductDetail = ({ images = [] }) => {
    const { id } = useParams(); // URL에서 상품 ID 가져오기
    const navigate = useNavigate(); // 뒤로가기를 위한 네비게이션
    const [product, setProduct] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        fetch(
            `https://dcfpifdcyyqoqwgwjlgfaetw4a0oinlu.lambda-url.ap-northeast-2.on.aws/items/${id}`
        )
            .then((response) => {
                if (!response.ok) {
                    throw new Error("네트워크 응답이 올바르지 않습니다.");
                }
                return response.json();
            })
            .then((data) => {
                console.log(data.item); // 전체 아이템 목록 출력
                setProduct(data.item);
                // setProduct(foundProduct || null);
            })
            .catch((error) =>
                console.error("상품 데이터를 불러오는 중 오류 발생:", error)
            );
    }, [id]);

    // 추가: 뒤로가기 핸들러
    const handleBackClick = () => {
        navigate(-1); // 브라우저 히스토리에서 뒤로가기
    };

    // 이미지가 있는지 확인
    const hasImages = images && images.length > 0;

    // 전화 걸기 기능
    const handleCall = () => {
        window.location.href = `tel:${product.contact}`;
    };

    // 스타일: 더 둥글고 친근한 느낌의 디자인 적용
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
        imageGallery: {
            background: "white",
            padding: "18px",
            borderRadius: "16px",
            margin: "16px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
        mainImage: {
            width: "100%",
            height: "260px",
            borderRadius: "12px",
            overflow: "hidden",
            marginBottom: "12px",
            boxShadow: "0 3px 8px rgba(0, 0, 0, 0.06)",
        },
        mainImageImg: {
            width: "100%",
            height: "100%",
            objectFit: "cover",
        },
        thumbnails: {
            display: "flex",
            gap: "10px",
            justifyContent: "center",
        },
        thumbnail: {
            width: "65px",
            height: "65px",
            borderRadius: "8px",
            overflow: "hidden",
            padding: 0,
            border: "2px solid transparent",
            cursor: "pointer",
            background: "none",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.08)",
        },
        activeThumbnail: {
            borderColor: "#4cd686",
        },
        thumbnailImg: {
            width: "100%",
            height: "100%",
            objectFit: "cover",
        },
        productHeader: {
            background: "white",
            padding: "20px",
            marginTop: "8px",
            borderRadius: "16px",
            margin: "16px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
        productTitle: {
            fontSize: "22px",
            fontWeight: 600,
            color: "#2c3e50",
        },
        statusBadgeContainer: {
            marginTop: "12px",
        },
        statusBadge: {
            display: "inline-block",
            padding: "6px 12px",
            borderRadius: "20px",
            fontSize: "13px",
            fontWeight: 500,
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.06)",
        },
        waitingBadge: {
            backgroundColor: "#FFE8D4",
            color: "#E65100",
        },
        progressBadge: {
            backgroundColor: "#CCEAFF",
            color: "#0277BD",
        },
        completedBadge: {
            backgroundColor: "#DDFBE6",
            color: "#2E7D32",
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
        productDescription: {
            fontSize: "15px",
            lineHeight: 1.6,
            margin: 0,
            padding: "15px",
            background: "#f8fbfd",
            borderRadius: "12px",
            color: "#34495e",
        },
        callButtonContainer: {
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
        callButton: {
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
        callIcon: {
            marginRight: "8px",
            fontSize: "20px",
        },
    };

    return (
        product && (
            <div style={styles.container}>
                <div style={styles.formHeader}>
                    <button style={styles.backButton} onClick={handleBackClick}>
                        ←
                    </button>
                    <h2 style={styles.headerTitle}>재활용품 상세</h2>
                </div>

                {/* 이미지 갤러리 - 이미지가 있는 경우에만 렌더링 */}
                {hasImages && (
                    <div style={styles.imageGallery}>
                        <div style={styles.mainImage}>
                            <img
                                src={
                                    images[currentImageIndex]?.url ||
                                    "/api/placeholder/400/250"
                                }
                                alt={product.title}
                                style={styles.mainImageImg}
                            />
                        </div>
                        {images.length > 1 && (
                            <div style={styles.thumbnails}>
                                {images.map((image, index) => (
                                    <button
                                        key={index}
                                        style={{
                                            ...styles.thumbnail,
                                            ...(currentImageIndex === index
                                                ? styles.activeThumbnail
                                                : {}),
                                        }}
                                        onClick={() =>
                                            setCurrentImageIndex(index)
                                        }
                                    >
                                        <img
                                            src={
                                                image.url ||
                                                "/api/placeholder/100/100"
                                            }
                                            alt={`썸네일 ${index + 1}`}
                                            style={styles.thumbnailImg}
                                        />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                )}

                {/* 제품 제목 및 상태 */}
                <div style={styles.productHeader}>
                    <h1 style={styles.productTitle}>{product.title}</h1>
                </div>

                {/* 기본 정보 */}
                <div style={styles.detailSection}>
                    <h3 style={styles.sectionTitle}>
                        <span style={styles.sectionIcon}>📋</span>
                        기본 정보
                    </h3>
                    <div style={styles.detailGrid}>
                        <div style={styles.detailItem}>
                            <span style={styles.detailLabel}>카테고리</span>
                            <span style={styles.detailValue}>
                                {product.selectedCategory}
                            </span>
                        </div>
                        <div style={styles.detailItem}>
                            <span style={styles.detailLabel}>물품 등급</span>
                            <span style={styles.detailValue}>
                                {product.selectedCondition}
                            </span>
                        </div>
                        <div style={styles.detailItem}>
                            <span style={styles.detailLabel}>무게(KG)</span>
                            <span style={styles.detailValue}>
                                {product.weight}
                            </span>
                        </div>
                        <div style={styles.detailItem}>
                            <span style={styles.detailLabel}>등록일</span>
                            <span style={styles.detailValue}>
                                {product.startDate}
                            </span>
                        </div>
                    </div>
                </div>

                {/* 제품 설명 */}
                <div style={styles.detailSection}>
                    <h3 style={styles.sectionTitle}>
                        <span style={styles.sectionIcon}>📝</span>
                        제품 설명
                    </h3>
                    <p style={styles.productDescription}>
                        {product.description}
                    </p>
                </div>

                {/* 기관/담당자 정보 */}
                <div style={styles.detailSection}>
                    <h3 style={styles.sectionTitle}>
                        <span style={styles.sectionIcon}>🏢</span>
                        기관 / 담당자 정보
                    </h3>
                    <div style={styles.detailGrid}>
                        <div style={styles.detailItem}>
                            <span style={styles.detailLabel}>기관명</span>
                            <span style={styles.detailValue}>
                                {"친환경주식회사"}
                            </span>
                        </div>
                        <div style={styles.detailItem}>
                            <span style={styles.detailLabel}>담당자</span>
                            <span style={styles.detailValue}>{"김환경"}</span>
                        </div>
                        <div style={styles.detailItem}>
                            <span style={styles.detailLabel}>연락처</span>
                            <span style={styles.detailValue}>
                                {"010-5031-8728"}
                            </span>
                        </div>
                        <div style={styles.detailItem}>
                            <span style={styles.detailLabel}>주소</span>
                            <span style={styles.detailValue}>
                                {"서울시 강남구 에코로 123"}
                            </span>
                        </div>
                    </div>
                </div>

                {/* 수거 정보 */}
                <div style={styles.detailSection}>
                    <h3 style={styles.sectionTitle}>
                        <span style={styles.sectionIcon}>🚚</span>
                        수거 정보
                    </h3>
                    <div style={styles.detailGrid}>
                        <div style={styles.detailItem}>
                            <span style={styles.detailLabel}>
                                희망 수령 기간
                            </span>
                            <span style={styles.detailValue}>
                                {product.startDate} ~<br /> {product.endDate}
                            </span>
                        </div>
                        <div style={styles.detailItem}>
                            <span style={styles.detailLabel}>세척 여부</span>
                            <span style={styles.detailValue}>
                                {product.cleaningStatus}
                            </span>
                        </div>
                        <div style={styles.detailItem}>
                            <span style={styles.detailLabel}>
                                혼합 재질 포함
                            </span>
                            <span style={styles.detailValue}>
                                {product.includePackaging}
                            </span>
                        </div>
                        <div style={styles.detailItem}>
                            <span style={styles.detailLabel}>방문 수령</span>
                            <span style={styles.detailValue}>
                                {product.isVisitPickup ? "가능" : "불가능"}
                            </span>
                        </div>
                        <div style={styles.detailItem}>
                            <span style={styles.detailLabel}>택배/배송</span>
                            <span style={styles.detailValue}>
                                {product.isDeliveryPossible ? "가능" : "불가능"}
                            </span>
                        </div>
                    </div>
                </div>

                {/* 전화 연결 버튼 */}
                <div style={styles.callButtonContainer}>
                    <button style={styles.callButton} onClick={handleCall}>
                        <span style={styles.callIcon}>📞</span>
                        <span>전화 연결하기</span>
                    </button>
                </div>
            </div>
        )
    );
};

export default RecyclableProductDetail;