import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RecyclableProductsList = () => {
    const navigate = useNavigate();
    const [searchKeyword, setSearchKeyword] = useState("");
    const [selectedFilter, setSelectedFilter] = useState("전체");
    const [selectedCategory, setSelectedCategory] = useState("전체");
    const [products, setProducts] = useState([]);
    const [isFilterExpanded, setIsFilterExpanded] = useState(false);

    useEffect(() => {
        fetch("https://4j7js6hq4r5ohq6szekclolxbe0fepyn.lambda-url.ap-northeast-2.on.aws/items")
          .then((response) => response.json())
          .then((data) => {
            // data.items에 실제 상품 데이터가 들어있습니다.
            setProducts(data.items);
          })
          .catch((error) => console.error("Error fetching items:", error));
      }, []);
    
    const company = "친환경주식회사";

    const handleProductClick = (productId) => {
        navigate(`/product/${productId}`);
    };

    const handleAddButtonClick = () => {
        navigate("/upload");
    };

    // 마이페이지(에코스코어) 페이지로 이동하는 핸들러 추가
    const handleMyPageClick = () => {
        navigate("/score");
    };

    const toggleFilterSection = () => {
        setIsFilterExpanded(!isFilterExpanded);
    };

    // 필터링된 제품 목록
    const filteredProducts = products.filter(
        (product) =>
            (selectedFilter === "전체" || product.status === selectedFilter) &&
            (selectedCategory === "전체" || product.category === selectedCategory) &&
            (
                product.title?.includes(searchKeyword) ||
                product.company?.includes(searchKeyword) ||
                product.category?.includes(searchKeyword)
            )
    );

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
        headerTitle: {
            fontSize: "18px",
            margin: 0,
            fontWeight: 600,
            flexGrow: 1,
        },
        searchContainer: {
            padding: "15px",
        },
        searchInputContainer: {
            position: "relative",
            backgroundColor: "#fff",
            borderRadius: "16px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
        searchInput: {
            width: "100%",
            padding: "16px",
            paddingRight: "40px",
            border: "1px solid #e0e6ed",
            borderRadius: "16px",
            fontSize: "14px",
            boxSizing: "border-box",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.03)",
        },
        searchButton: {
            position: "absolute",
            right: "16px",
            top: "50%",
            transform: "translateY(-50%)",
            background: "none",
            border: "none",
            fontSize: "18px",
            cursor: "pointer",
            color: "#4cd686",
        },
        filterContainer: {
            backgroundColor: "#fff",
            padding: "12px",
            marginTop: "8px",
            borderRadius: "16px",
            margin: "16px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
        sectionHeader: {
            fontSize: "17px",
            fontWeight: 600,
            color: "#2c3e50",
            display: "flex",
            alignItems: "center",
            margin: "8px 0px 6px 0px",
            justifyContent: "space-between",
            cursor: "pointer",
        },
        sectionIcon: {
            marginRight: "8px",
            fontSize: "20px",
            color: "#4cd686",
        },
        collapsedButtonGroup: {
            maxHeight: "0",
            overflow: "hidden",
        },
        selectedFilterDisplay: {
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
            margin: "8px 0",
        },
        selectedFilterBadge: {
            padding: "6px 12px",
            borderRadius: "20px",
            fontSize: "13px",
            backgroundColor: "#e9f7f0",
            color: "#4cd686",
            fontWeight: 500,
        },
        buttonGroup: {
            display: "flex",
            gap: "8px",
            marginBottom: "8px",
            flexWrap: "wrap",
            overflow: "hidden", // 부드러운 애니메이션을 위해
            maxHeight: "1000px", // 모든 버튼을 수용할 큰 값
            transition: "max-height 0.3s ease",
        },
        button: {
            flex: 1,
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
        sortContainer: {
            backgroundColor: "#fff",
            padding: "20px",
            marginTop: "8px",
            borderRadius: "16px",
            margin: "16px 16px 0 16px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
        productsList: {
            padding: "0 16px",
            marginTop: "16px",
        },
        productCard: {
            display: "flex",
            backgroundColor: "#fff",
            borderRadius: "16px",
            marginBottom: "16px",
            padding: "16px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
            cursor: "pointer",
            transition: "transform 0.2s, box-shadow 0.2s",
            ":hover": {
                transform: "translateY(-2px)",
                boxShadow: "0 6px 16px rgba(0, 0, 0, 0.1)",
            },
        },
        productImage: {
            width: "80px",
            height: "80px",
            marginRight: "16px",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 3px 8px rgba(0, 0, 0, 0.06)",
        },
        productInfo: {
            flex: 1,
        },
        productTitle: {
            fontSize: "16px",
            fontWeight: 600,
            margin: "0 0 8px",
            color: "#2c3e50",
        },
        productMeta: {
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "8px",
            fontSize: "13px",
            color: "#7f8c8d",
        },
        productDetails: {
            fontSize: "13px",
            marginBottom: "8px",
            background: "#f8fbfd",
            padding: "10px",
            borderRadius: "10px",
        },
        detailItem: {
            marginBottom: "5px",
            display: "flex",
        },
        detailLabel: {
            color: "#7f8c8d",
            marginRight: "5px",
            width: "70px",
        },
        detailValue: {
            fontWeight: "500",
            color: "#34495e",
        },
        productStatus: {
            display: "flex",
            justifyContent: "flex-end",
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
        noResults: {
            textAlign: "center",
            padding: "30px 0",
            color: "#7f8c8d",
            backgroundColor: "#fff",
            borderRadius: "16px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
        floatingButtonContainer: {
            position: "fixed",
            bottom: "20px",
            right: "20px",
        },
        addButton: {
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            backgroundColor: "#4cd686",
            color: "white",
            fontSize: "24px",
            border: "none",
            boxShadow: "0 4px 15px rgba(76, 214, 134, 0.4)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
        categoryButtonGroup: {
            display: "flex",
            gap: "8px",
            marginTop: "8px",
            flexWrap: "wrap",
            justifyContent: "center",
            overflow: "hidden",
            maxHeight: "1000px",
            transition: "max-height 0.3s ease",
        },
        categoryButton: {
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
        myPageButton: {
            background: "#f5f7fa",
            border: "none",
            fontSize: "14px",
            padding: "8px 12px",
            borderRadius: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "#555",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.05)",
        },
        myPageIcon: {
            marginRight: "4px",
        },
        toggleIcon: {
            fontSize: "20px",
            color: "#7f8c8d",
            transition: "transform 0.3s ease",
        },
        rotatedIcon: {
            transform: "rotate(180deg)",
        },
        filterLine: {
            color: "#7f8c8d",
            margin: "4px, 0px",
            overflow: "hidden",
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.formHeader}>
                <h2 style={styles.headerTitle}>재활용품 조회</h2>
                <button style={styles.myPageButton} onClick={handleMyPageClick}>
                    <span style={styles.myPageIcon}>👤</span>
                    마이페이지
                </button>
            </div>

            {/* 검색 영역 */}
            <div style={styles.searchContainer}>
                <div style={styles.searchInputContainer}>
                    <input
                        type="text"
                        style={styles.searchInput}
                        placeholder="검색어를 입력하세요"
                        value={searchKeyword}
                        onChange={(e) => setSearchKeyword(e.target.value)}
                    />
                    <button style={styles.searchButton}>🔍</button>
                </div>
            </div>

            {/* 필터 영역 */}
            <div style={styles.filterContainer}>
                <div style={styles.sectionHeader} onClick={toggleFilterSection}>
                    <div>
                        <span style={styles.sectionIcon}>📚</span>
                        카테고리
                    </div>
                    <span
                        style={{
                            ...styles.toggleIcon,
                            ...(isFilterExpanded ? styles.rotatedIcon : {}),
                        }}
                    >
                        ▼
                    </span>
                </div>

                {/* 카테고리 필터 (플라스틱, 의류 등) */}
                <div
                    style={{
                        ...styles.categoryButtonGroup,
                        ...(isFilterExpanded
                            ? {}
                            : styles.collapsedButtonGroup),
                    }}
                >
                    <button
                        type="button"
                        style={{
                            ...styles.categoryButton,
                            ...(selectedCategory === "전체"
                                ? styles.selectedButton
                                : {
                                      border: "1px solid #ddd",
                                      backgroundColor: "#fff",
                                      color: "#333",
                                  }),
                        }}
                        onClick={() => setSelectedCategory("전체")}
                    >
                        전체
                    </button>
                    <button
                        type="button"
                        style={{
                            ...styles.categoryButton,
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
                            ...styles.categoryButton,
                            ...(selectedCategory === "의류"
                                ? styles.selectedButton
                                : {
                                      border: "1px solid #ddd",
                                      backgroundColor: "#fff",
                                      color: "#333",
                                  }),
                        }}
                        onClick={() => setSelectedCategory("의류")}
                    >
                        의류
                    </button>
                    <button
                        type="button"
                        style={{
                            ...styles.categoryButton,
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
                            ...styles.categoryButton,
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
                            ...styles.categoryButton,
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

            {/* 제품 목록 */}
            <div style={styles.productsList}>
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <div
                            key={product.id}
                            style={styles.productCard}
                            onClick={() => handleProductClick(product.id)}
                        >
                            <div style={styles.productImage}>
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                    }}
                                />
                            </div>
                            <div style={styles.productInfo}>
                                <h3 style={styles.productTitle}>
                                    {product.title}
                                </h3>
                                <div style={styles.productMeta}>
                                    <span>{company}</span>
                                    <span>{product.date}</span>
                                </div>
                                <div style={styles.productDetails}>
                                    <div style={styles.detailItem}>
                                        <span style={styles.detailLabel}>
                                            카테고리:
                                        </span>
                                        <span style={styles.detailValue}>
                                            {product.category}
                                        </span>
                                    </div>
                                    <div style={styles.detailItem}>
                                        <span style={styles.detailLabel}>
                                            등급:
                                        </span>
                                        <span style={styles.detailValue}>
                                            {product.condition}
                                        </span>
                                    </div>
                                    <div style={styles.detailItem}>
                                        <span style={styles.detailLabel}>
                                            수량:
                                        </span>
                                        <span style={styles.detailValue}>
                                            {product.quantity}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div style={styles.noResults}>검색 결과가 없습니다.</div>
                )}
            </div>

            {/* 하단 플로팅 버튼 */}
            <div style={styles.floatingButtonContainer}>
                <button style={styles.addButton} onClick={handleAddButtonClick}>
                    +
                </button>
            </div>
        </div>
    );
};

export default RecyclableProductsList;
