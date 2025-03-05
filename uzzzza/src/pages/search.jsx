import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RecyclableProductsList = () => {
    const navigate = useNavigate(); // 추가: navigate 가져오기
    const [searchKeyword, setSearchKeyword] = useState('');
    const [selectedFilter, setSelectedFilter] = useState('전체');
    const [selectedSort, setSelectedSort] = useState('최신순');
    
    // 추가: 제품 클릭 핸들러 함수
    const handleProductClick = (productId) => {
      navigate(`/product/${productId}`); // detail 페이지로 이동
    };
    
    // 추가: 플로팅 버튼 클릭 핸들러 함수
    const handleAddButtonClick = () => {
      navigate('/upload'); // upload 페이지로 이동
    };
  
  // 샘플 데이터
  const products = [
    {
      id: 1,
      title: "재활용 플라스틱 병 100개",
      company: "친환경주식회사",
      category: "플라스틱",
      condition: "A",
      quantity: "10kg",
      date: "2024-03-04",
      image: "/api/placeholder/80/80",
      status: "수거대기"
    },
    {
      id: 2,
      title: "헌 의류 - 티셔츠, 청바지 등",
      company: "그린리사이클",
      category: "섬유",
      condition: "B",
      quantity: "5kg",
      date: "2024-03-03",
      image: "/api/placeholder/80/80",
      status: "수거완료"
    },
    {
      id: 3,
      title: "폐지 및 종이류",
      company: "에코솔루션",
      category: "종이",
      condition: "A",
      quantity: "15kg",
      date: "2024-03-02",
      image: "/api/placeholder/80/80",
      status: "수거대기"
    },
    {
      id: 4,
      title: "알루미늄 캔 200개",
      company: "메탈리사이클",
      category: "금속",
      condition: "A",
      quantity: "4kg",
      date: "2024-03-01",
      image: "/api/placeholder/80/80",
      status: "진행중"
    }
  ];

  // 필터링된 제품 목록
  const filteredProducts = products.filter(product => 
    (selectedFilter === '전체' || product.status === selectedFilter) &&
    (product.title.includes(searchKeyword) || 
     product.company.includes(searchKeyword) ||
     product.category.includes(searchKeyword))
  );
  
  const styles = {
    container: {
      maxWidth: '480px',
      margin: '0 auto',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
      backgroundColor: '#f5f5f5',
      color: '#333',
      paddingBottom: '80px', // 플로팅 버튼 공간 확보
      minHeight: '100vh',
    },
    formHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: '15px',
      backgroundColor: '#fff',
      position: 'sticky',
      top: 0,
      zIndex: 10,
      borderBottom: '1px solid #eee'
    },
    backButton: {
      background: 'none',
      border: 'none',
      fontSize: '18px',
      marginRight: '10px',
      cursor: 'pointer'
    },
    headerTitle: {
      fontSize: '18px',
      margin: 0,
      fontWeight: 500
    },
    searchContainer: {
      padding: '15px',
    },
    searchInputContainer: {
      position: 'relative',
    },
    searchInput: {
      width: '100%',
      padding: '12px',
      paddingRight: '40px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      fontSize: '14px',
      boxSizing: 'border-box',
    },
    searchButton: {
      position: 'absolute',
      right: '10px',
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'none',
      border: 'none',
      fontSize: '18px',
      cursor: 'pointer',
    },
    filterContainer: {
      padding: '0 15px',
      marginBottom: '15px',
    },
    buttonGroup: {
      display: 'flex',
      gap: '8px',
      marginBottom: '8px',
      flexWrap: 'wrap',
    },
    button: {
      flex: 1,
      padding: '10px 0',
      border: '1px solid #ddd',
      backgroundColor: '#fff',
      borderRadius: '4px',
      fontSize: '14px',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
    },
    selectedButton: {
      backgroundColor: '#00c471',
      color: 'white',
      borderColor: '#00c471',
    },
    sortContainer: {
      padding: '0 15px',
      marginBottom: '15px',
    },
    toggleButtons: {
      display: 'flex',
      border: '1px solid #ddd',
      borderRadius: '4px',
      overflow: 'hidden',
    },
    toggleButton: {
      flex: 1,
      padding: '10px 0',
      border: 'none',
      backgroundColor: '#fff',
      fontSize: '14px',
      cursor: 'pointer',
    },
    productsList: {
      padding: '0 15px',
    },
    productCard: {
      display: 'flex',
      backgroundColor: '#fff',
      borderRadius: '8px',
      marginBottom: '15px',
      padding: '15px',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
    },
    productImage: {
      width: '80px',
      height: '80px',
      marginRight: '15px',
      borderRadius: '4px',
      overflow: 'hidden',
    },
    productInfo: {
      flex: 1,
    },
    productTitle: {
      fontSize: '16px',
      fontWeight: 500,
      margin: '0 0 8px',
    },
    productMeta: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '8px',
      fontSize: '12px',
      color: '#777',
    },
    productDetails: {
      fontSize: '13px',
      marginBottom: '8px',
    },
    detailItem: {
      marginBottom: '3px',
    },
    detailLabel: {
      color: '#777',
      marginRight: '5px',
    },
    productStatus: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    statusBadge: {
      display: 'inline-block',
      padding: '4px 8px',
      borderRadius: '4px',
      fontSize: '12px',
      fontWeight: 500,
    },
    waitingBadge: {
      backgroundColor: '#FFE0B2',
      color: '#E65100',
    },
    progressBadge: {
      backgroundColor: '#B3E5FC',
      color: '#01579B',
    },
    completedBadge: {
      backgroundColor: '#C8E6C9',
      color: '#2E7D32',
    },
    noResults: {
      textAlign: 'center',
      padding: '30px 0',
      color: '#777',
    },
    floatingButtonContainer: {
      position: 'fixed',
      bottom: '20px',
      right: '20px',
    },
    addButton: {
      width: '56px',
      height: '56px',
      borderRadius: '50%',
      backgroundColor: '#00c471',
      color: 'white',
      fontSize: '24px',
      border: 'none',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.formHeader}>
        <h2 style={styles.headerTitle}>재활용품 조회</h2>
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
        <div style={styles.buttonGroup}>
          <button 
            type="button"
            style={{
              ...styles.button,
              ...(selectedFilter === '전체' ? styles.selectedButton : {})
            }}
            onClick={() => setSelectedFilter('전체')}
          >
            전체
          </button>
          <button 
            type="button"
            style={{
              ...styles.button,
              ...(selectedFilter === '수거대기' ? styles.selectedButton : {})
            }}
            onClick={() => setSelectedFilter('수거대기')}
          >
            수거대기
          </button>
          <button 
            type="button"
            style={{
              ...styles.button,
              ...(selectedFilter === '진행중' ? styles.selectedButton : {})
            }}
            onClick={() => setSelectedFilter('진행중')}
          >
            진행중
          </button>
          <button 
            type="button"
            style={{
              ...styles.button,
              ...(selectedFilter === '수거완료' ? styles.selectedButton : {})
            }}
            onClick={() => setSelectedFilter('수거완료')}
          >
            수거완료
          </button>
        </div>
      </div>
      
      {/* 정렬 옵션 */}
      <div style={styles.sortContainer}>
        <div style={styles.toggleButtons}>
          <button 
            type="button"
            style={{
              ...styles.toggleButton,
              ...(selectedSort === '최신순' ? styles.selectedButton : {})
            }}
            onClick={() => setSelectedSort('최신순')}
          >
            최신순
          </button>
          <button 
            type="button"
            style={{
              ...styles.toggleButton,
              ...(selectedSort === '무게순' ? styles.selectedButton : {})
            }}
            onClick={() => setSelectedSort('무게순')}
          >
            무게순
          </button>
          <button 
            type="button"
            style={{
              ...styles.toggleButton,
              ...(selectedSort === '상태순' ? styles.selectedButton : {})
            }}
            onClick={() => setSelectedSort('상태순')}
          >
            상태순
          </button>
        </div>
      </div>
      
      {/* 제품 목록 */}
      <div style={styles.productsList}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <div key={product.id} style={styles.productCard} onClick={() => handleProductClick(product.id)}>
              <div style={styles.productImage}>
                <img src={product.image} alt={product.title} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
              </div>
              <div style={styles.productInfo}>
                <h3 style={styles.productTitle}>{product.title}</h3>
                <div style={styles.productMeta}>
                  <span>{product.company}</span>
                  <span>{product.date}</span>
                </div>
                <div style={styles.productDetails}>
                  <div style={styles.detailItem}>
                    <span style={styles.detailLabel}>카테고리:</span>
                    <span>{product.category}</span>
                  </div>
                  <div style={styles.detailItem}>
                    <span style={styles.detailLabel}>등급:</span>
                    <span>{product.condition}</span>
                  </div>
                  <div style={styles.detailItem}>
                    <span style={styles.detailLabel}>수량:</span>
                    <span>{product.quantity}</span>
                  </div>
                </div>
                <div style={styles.productStatus}>
                  <span style={{
                    ...styles.statusBadge,
                    ...(product.status === '수거대기' ? styles.waitingBadge : 
                       product.status === '진행중' ? styles.progressBadge : 
                       styles.completedBadge)
                  }}>
                    {product.status}
                  </span>
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
        <button style={styles.addButton} onClick={handleAddButtonClick}>+</button>
      </div>
    </div>
  );
};

export default RecyclableProductsList;