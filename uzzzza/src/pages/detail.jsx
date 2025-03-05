import React, { useState } from 'react';

const RecyclableProductDetail = () => {
  // 상품 상세 정보 (실제 구현에서는 API에서 받아올 것)
  const product = {
    id: 1,
    title: "재활용 플라스틱 병 100개",
    description: "깨끗하게 세척된 음료 플라스틱 병 100개입니다. 라벨은 제거되었으며, 뚜껑도 포함되어 있습니다.",
    company: "친환경주식회사",
    contact: "010-0000-0000",
    manager: "김환경",
    address: "서울시 강남구 에코로 123",
    category: "플라스틱",
    condition: "A",
    quantity: "10kg",
    date: "2024-03-04",
    pickupPeriod: {
      startDate: "2024-03-10",
      endDate: "2024-03-20"
    },
    cleaningStatus: "세척 완료",
    includePackaging: "포함",
    visitPickup: "가능",
    delivery: "가능",
    status: "수거대기"
  };

  // 이미지 갤러리를 위한 상태
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 전화 걸기 기능
  const handleCall = () => {
    window.location.href = `tel:${product.contact}`;
  };
  
  const styles = {
    container: {
      maxWidth: '480px',
      margin: '0 auto',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
      backgroundColor: '#f5f5f5',
      color: '#333',
      paddingBottom: '70px'
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
    imageGallery: {
      background: 'white',
      padding: '15px'
    },
    mainImage: {
      width: '100%',
      height: '250px',
      borderRadius: '8px',
      overflow: 'hidden',
      marginBottom: '10px'
    },
    mainImageImg: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    thumbnails: {
      display: 'flex',
      gap: '10px'
    },
    thumbnail: {
      width: '60px',
      height: '60px',
      borderRadius: '4px',
      overflow: 'hidden',
      padding: 0,
      border: '2px solid transparent',
      cursor: 'pointer',
      background: 'none'
    },
    activeThumbnail: {
      borderColor: '#00c471'
    },
    thumbnailImg: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    productHeader: {
      background: 'white',
      padding: '15px',
      marginTop: '10px'
    },
    productTitle: {
      fontSize: '20px',
      margin: '0 0 10px',
      fontWeight: 600
    },
    statusBadgeContainer: {
      marginTop: '10px'
    },
    statusBadge: {
      display: 'inline-block',
      padding: '4px 8px',
      borderRadius: '4px',
      fontSize: '12px',
      fontWeight: 500
    },
    waitingBadge: {
      backgroundColor: '#FFE0B2',
      color: '#E65100'
    },
    progressBadge: {
      backgroundColor: '#B3E5FC',
      color: '#01579B'
    },
    completedBadge: {
      backgroundColor: '#C8E6C9',
      color: '#2E7D32'
    },
    detailSection: {
      background: 'white',
      padding: '15px',
      marginTop: '10px'
    },
    sectionTitle: {
      fontSize: '16px',
      fontWeight: 500,
      margin: '0 0 15px'
    },
    detailGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '12px'
    },
    detailItem: {
      display: 'flex',
      flexDirection: 'column'
    },
    detailLabel: {
      fontSize: '12px',
      color: '#777',
      marginBottom: '3px'
    },
    detailValue: {
      fontSize: '14px'
    },
    productDescription: {
      fontSize: '14px',
      lineHeight: 1.5,
      margin: 0
    },
    callButtonContainer: {
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      background: 'white',
      padding: '10px 15px',
      boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.1)'
    },
    callButton: {
      width: '100%',
      padding: '12px 0',
      backgroundColor: '#00c471',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      fontSize: '16px',
      fontWeight: 500,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    callIcon: {
      marginRight: '8px',
      fontSize: '18px'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formHeader}>
        <button style={styles.backButton}>←</button>
        <h2 style={styles.headerTitle}>재활용품 상세</h2>
      </div>
      
      {/* 이미지 갤러리 */}
      <div style={styles.imageGallery}>
        <div style={styles.mainImage}>
          <img 
            src="/api/placeholder/400/250" 
            alt={product.title} 
            style={styles.mainImageImg}
          />
        </div>
        <div style={styles.thumbnails}>
          <button 
            style={{
              ...styles.thumbnail,
              ...(currentImageIndex === 0 ? styles.activeThumbnail : {})
            }}
            onClick={() => setCurrentImageIndex(0)}
          >
            <img 
              src="/api/placeholder/100/100" 
              alt="썸네일 1" 
              style={styles.thumbnailImg}
            />
          </button>
          <button 
            style={{
              ...styles.thumbnail,
              ...(currentImageIndex === 1 ? styles.activeThumbnail : {})
            }}
            onClick={() => setCurrentImageIndex(1)}
          >
            <img 
              src="/api/placeholder/100/100" 
              alt="썸네일 2" 
              style={styles.thumbnailImg}
            />
          </button>
        </div>
      </div>
      
      {/* 제품 제목 및 상태 */}
      <div style={styles.productHeader}>
        <h1 style={styles.productTitle}>{product.title}</h1>
        <div style={styles.statusBadgeContainer}>
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
      
      {/* 기본 정보 */}
      <div style={styles.detailSection}>
        <h3 style={styles.sectionTitle}>기본 정보</h3>
        <div style={styles.detailGrid}>
          <div style={styles.detailItem}>
            <span style={styles.detailLabel}>카테고리</span>
            <span style={styles.detailValue}>{product.category}</span>
          </div>
          <div style={styles.detailItem}>
            <span style={styles.detailLabel}>물품 등급</span>
            <span style={styles.detailValue}>{product.condition}</span>
          </div>
          <div style={styles.detailItem}>
            <span style={styles.detailLabel}>수량</span>
            <span style={styles.detailValue}>{product.quantity}</span>
          </div>
          <div style={styles.detailItem}>
            <span style={styles.detailLabel}>등록일</span>
            <span style={styles.detailValue}>{product.date}</span>
          </div>
        </div>
      </div>
      
      {/* 제품 설명 */}
      <div style={styles.detailSection}>
        <h3 style={styles.sectionTitle}>제품 설명</h3>
        <p style={styles.productDescription}>{product.description}</p>
      </div>
      
      {/* 기관/담체 정보 */}
      <div style={styles.detailSection}>
        <h3 style={styles.sectionTitle}>기관/담체 정보</h3>
        <div style={styles.detailGrid}>
          <div style={styles.detailItem}>
            <span style={styles.detailLabel}>기관명</span>
            <span style={styles.detailValue}>{product.company}</span>
          </div>
          <div style={styles.detailItem}>
            <span style={styles.detailLabel}>담당자</span>
            <span style={styles.detailValue}>{product.manager}</span>
          </div>
          <div style={styles.detailItem}>
            <span style={styles.detailLabel}>연락처</span>
            <span style={styles.detailValue}>{product.contact}</span>
          </div>
          <div style={styles.detailItem}>
            <span style={styles.detailLabel}>주소</span>
            <span style={styles.detailValue}>{product.address}</span>
          </div>
        </div>
      </div>
      
      {/* 수거 정보 */}
      <div style={styles.detailSection}>
        <h3 style={styles.sectionTitle}>수거 정보</h3>
        <div style={styles.detailGrid}>
          <div style={styles.detailItem}>
            <span style={styles.detailLabel}>희망 수령 기간</span>
            <span style={styles.detailValue}>
              {product.pickupPeriod.startDate} ~ {product.pickupPeriod.endDate}
            </span>
          </div>
          <div style={styles.detailItem}>
            <span style={styles.detailLabel}>세척 여부</span>
            <span style={styles.detailValue}>{product.cleaningStatus}</span>
          </div>
          <div style={styles.detailItem}>
            <span style={styles.detailLabel}>포장재 포함</span>
            <span style={styles.detailValue}>{product.includePackaging}</span>
          </div>
          <div style={styles.detailItem}>
            <span style={styles.detailLabel}>방문 수령</span>
            <span style={styles.detailValue}>{product.visitPickup}</span>
          </div>
          <div style={styles.detailItem}>
            <span style={styles.detailLabel}>택배/배송</span>
            <span style={styles.detailValue}>{product.delivery}</span>
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
  );
};

export default RecyclableProductDetail;