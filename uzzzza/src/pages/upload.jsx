import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProductUploadForm = () => {
    const navigate = useNavigate(); // 네비게이션 훅 추가
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('중고');
  const [selectedCondition, setSelectedCondition] = useState('A');
  const [weight, setWeight] = useState('');
  const [cleaningStatus, setCleaningStatus] = useState('세척 완료');
  const [includePackaging, setIncludePackaging] = useState('포함');
  const [isVisitPickup, setIsVisitPickup] = useState(true);
  const [isDeliveryPossible, setIsDeliveryPossible] = useState(true);
  const handleBackClick = () => {
    navigate('/'); // 메인 페이지로 이동
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 여기에 데이터 저장 로직이 들어갈 수 있음
    
    // 저장 후 메인 페이지로 이동
    navigate('/');
  };
  
  const formStyles = {
    container: {
      maxWidth: '480px',
      margin: '0 auto',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
      backgroundColor: '#f5f5f5',
      color: '#333',
      paddingBottom: '20px'
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
    form: {
      padding: '15px'
    },
    formGroup: {
      backgroundColor: '#fff',
      padding: '15px',
      marginBottom: '10px',
      borderRadius: '8px',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)'
    },
    label: {
      display: 'block',
      fontSize: '14px',
      fontWeight: 500,
      marginBottom: '10px'
    },
    required: {
      color: '#00c471',
      marginLeft: '2px'
    },
    inputCounter: {
      position: 'relative'
    },
    input: {
      width: '100%',
      padding: '12px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      fontSize: '14px',
      boxSizing: 'border-box'
    },
    counter: {
      position: 'absolute',
      right: '10px',
      bottom: '10px',
      fontSize: '12px',
      color: '#999'
    },
    sectionHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '15px'
    },
    infoButton: {
      background: 'none',
      border: 'none',
      color: '#999',
      fontSize: '16px',
      cursor: 'pointer'
    },
    formRow: {
      display: 'flex',
      padding: '8px 0',
      borderBottom: '1px solid #f0f0f0'
    },
    formLabel: {
      width: '80px',
      color: '#777',
      fontSize: '14px'
    },
    formValue: {
      flex: 1,
      fontSize: '14px'
    },
    buttonGroup: {
      display: 'flex',
      gap: '8px',
      marginBottom: '8px',
      flexWrap: 'wrap'
    },
    button: {
      flex: 1,
      padding: '10px 0',
      border: '1px solid #ddd',
      backgroundColor: '#fff',
      borderRadius: '4px',
      fontSize: '14px',
      cursor: 'pointer',
      transition: 'all 0.2s ease'
    },
    selectedButton: {
      backgroundColor: '#00c471',
      color: 'white',
      borderColor: '#00c471'
    },
    toggleButtons: {
      display: 'flex',
      border: '1px solid #ddd',
      borderRadius: '4px',
      overflow: 'hidden'
    },
    weightInput: {
      display: 'flex',
      alignItems: 'center'
    },
    unitSelector: {
      width: '60px',
      padding: '12px 0',
      textAlign: 'center',
      backgroundColor: '#f5f5f5',
      border: '1px solid #ddd',
      borderLeft: 'none',
      borderRadius: '0 4px 4px 0',
      fontSize: '14px'
    },
    dateRange: {
      display: 'flex',
      alignItems: 'center'
    },
    dateSeparator: {
      margin: '0 10px',
      color: '#777'
    },
    imageUpload: {
      marginTop: '10px'
    },
    uploadPlaceholder: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100px',
      border: '1px dashed #ddd',
      borderRadius: '4px',
      cursor: 'pointer'
    },
    plusIcon: {
      fontSize: '24px',
      color: '#999',
      marginBottom: '5px'
    },
    uploadText: {
      fontSize: '12px',
      color: '#999'
    },
    submitButton: {
      width: '100%',
      padding: '15px 0',
      backgroundColor: '#00c471',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      fontSize: '16px',
      fontWeight: 500,
      cursor: 'pointer',
      marginTop: '15px'
    },
    textarea: {
      width: '100%',
      padding: '12px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      fontSize: '14px',
      boxSizing: 'border-box',
      minHeight: '80px',
      resize: 'none'
    }
  };

  return (
    <div style={formStyles.container}>
      <div style={formStyles.formHeader}>
        <button style={formStyles.backButton} onClick={handleBackClick}>←</button>
        <h2 style={formStyles.headerTitle}>제품등록 업로드</h2>
      </div>
      
      <form style={formStyles.form} onSubmit={handleSubmit}>
        {/* Product Title */}
        <div style={formStyles.formGroup}>
          <label style={formStyles.label}>
            제목 <span style={formStyles.required}>*</span>
          </label>
          <div style={formStyles.inputCounter}>
            <input 
              style={formStyles.input}
              type="text" 
              placeholder="제목을 입력해 주세요" 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              maxLength={25}
            />
            <span style={formStyles.counter}>{title.length}/25자</span>
          </div>
        </div>
        
        {/* Business/Shop Info Section */}
        <div style={formStyles.formGroup}>
          <div style={formStyles.sectionHeader}>
            <span>기관/담체 정보</span>
            <button type="button" style={formStyles.infoButton}>ⓘ</button>
          </div>
          
          <div style={formStyles.formRow}>
            <div style={formStyles.formLabel}>기관명</div>
            <div style={formStyles.formValue}>도매</div>
          </div>
          
          <div style={formStyles.formRow}>
            <div style={formStyles.formLabel}>담당자</div>
            <div style={formStyles.formValue}>김앤대</div>
          </div>
          
          <div style={formStyles.formRow}>
            <div style={formStyles.formLabel}>연락처</div>
            <div style={formStyles.formValue}>010-0000-0000</div>
          </div>
          
          <div style={{...formStyles.formRow, borderBottom: 'none'}}>
            <div style={formStyles.formLabel}>주소</div>
            <div style={formStyles.formValue}>-</div>
          </div>
        </div>
        
        {/* Category Selection */}
        <div style={formStyles.formGroup}>
          <label style={formStyles.label}>
            카테고리 <span style={formStyles.required}>*</span>
          </label>
          <div style={formStyles.buttonGroup}>
            <button 
              type="button"
              style={{
                ...formStyles.button,
                ...(selectedCategory === '중고' ? formStyles.selectedButton : {})
              }}
              onClick={() => setSelectedCategory('중고')}
            >
              중고
            </button>
            <button 
              type="button"
              style={{
                ...formStyles.button,
                ...(selectedCategory === '비바스' ? formStyles.selectedButton : {})
              }}
              onClick={() => setSelectedCategory('비바스')}
            >
              비바스
            </button>
            <button 
              type="button"
              style={{
                ...formStyles.button,
                ...(selectedCategory === '공예' ? formStyles.selectedButton : {})
              }}
              onClick={() => setSelectedCategory('공예')}
            >
              공예
            </button>
            <button 
              type="button"
              style={{
                ...formStyles.button,
                ...(selectedCategory === '위탁' ? formStyles.selectedButton : {})
              }}
              onClick={() => setSelectedCategory('위탁')}
            >
              위탁
            </button>
          </div>
          <div style={formStyles.buttonGroup}>
            <button type="button" style={formStyles.button}>친자용품</button>
            <button type="button" style={formStyles.button}>기타</button>
          </div>
        </div>
        
        {/* Condition Selection */}
        <div style={formStyles.formGroup}>
          <label style={formStyles.label}>
            물품 등급 <span style={formStyles.required}>*</span>
          </label>
          <div style={formStyles.buttonGroup}>
            <button 
              type="button"
              style={{
                ...formStyles.button,
                ...(selectedCondition === 'A' ? formStyles.selectedButton : {})
              }}
              onClick={() => setSelectedCondition('A')}
            >
              A
            </button>
            <button 
              type="button"
              style={{
                ...formStyles.button,
                ...(selectedCondition === 'B' ? formStyles.selectedButton : {})
              }}
              onClick={() => setSelectedCondition('B')}
            >
              B
            </button>
            <button 
              type="button"
              style={{
                ...formStyles.button,
                ...(selectedCondition === 'C' ? formStyles.selectedButton : {})
              }}
              onClick={() => setSelectedCondition('C')}
            >
              C
            </button>
          </div>
        </div>
        
        {/* Weight Input */}
        <div style={formStyles.formGroup}>
          <label style={formStyles.label}>
            수량 <span style={formStyles.required}>*</span>
          </label>
          <div style={formStyles.weightInput}>
            <input 
              type="number" 
              style={{...formStyles.input, borderRadius: '4px 0 0 4px'}}
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="0"
            />
            <div style={formStyles.unitSelector}>KG</div>
          </div>
        </div>
        
        {/* Date Range Selection */}
        <div style={formStyles.formGroup}>
          <label style={formStyles.label}>
            회망 수령 기간 <span style={formStyles.required}>*</span>
          </label>
          <div style={formStyles.dateRange}>
            <input 
              type="date" 
              style={formStyles.input}
              placeholder="시작일"
            />
            <span style={formStyles.dateSeparator}>-</span>
            <input 
              type="date" 
              style={formStyles.input}
              placeholder="종료일"
            />
          </div>
        </div>
        
        {/* Cleaning Status */}
        <div style={formStyles.formGroup}>
          <label style={formStyles.label}>
            세척 여부 <span style={formStyles.required}>*</span>
          </label>
          <div style={formStyles.toggleButtons}>
            <button 
              type="button"
              style={{
                ...formStyles.button, 
                flex: 1, 
                borderRadius: 0, 
                border: 'none',
                ...(cleaningStatus === '세척 완료' ? formStyles.selectedButton : {})
              }}
              onClick={() => setCleaningStatus('세척 완료')}
            >
              세척 완료
            </button>
            <button 
              type="button"
              style={{
                ...formStyles.button, 
                flex: 1, 
                borderRadius: 0, 
                border: 'none',
                ...(cleaningStatus === '세척 전' ? formStyles.selectedButton : {})
              }}
              onClick={() => setCleaningStatus('세척 전')}
            >
              세척 전
            </button>
          </div>
        </div>
        
        {/* Include Packaging */}
        <div style={formStyles.formGroup}>
          <label style={formStyles.label}>
            홍람 제철 포함 여부 <span style={formStyles.required}>*</span>
          </label>
          <div style={formStyles.toggleButtons}>
            <button 
              type="button"
              style={{
                ...formStyles.button, 
                flex: 1, 
                borderRadius: 0, 
                border: 'none',
                ...(includePackaging === '포함' ? formStyles.selectedButton : {})
              }}
              onClick={() => setIncludePackaging('포함')}
            >
              포함
            </button>
            <button 
              type="button"
              style={{
                ...formStyles.button, 
                flex: 1, 
                borderRadius: 0, 
                border: 'none',
                ...(includePackaging === '미포함' ? formStyles.selectedButton : {})
              }}
              onClick={() => setIncludePackaging('미포함')}
            >
              미포함
            </button>
          </div>
        </div>
        
        {/* Product Description */}
        <div style={formStyles.formGroup}>
          <label style={formStyles.label}>배송 사항</label>
          <div style={formStyles.inputCounter}>
            <textarea 
              style={formStyles.textarea}
              placeholder="내용을 입력해 주세요" 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              maxLength={50}
            />
            <span style={formStyles.counter}>{description.length}/50자</span>
          </div>
        </div>
        
        {/* Image Upload */}
        <div style={formStyles.formGroup}>
          <label style={formStyles.label}>제품등록 상세 사진</label>
          <div style={formStyles.imageUpload}>
            <div style={formStyles.uploadPlaceholder}>
              <span style={formStyles.plusIcon}>+</span>
              <span style={formStyles.uploadText}>사진을 추가해 주세요</span>
            </div>
          </div>
        </div>
        
        {/* Visit Pickup */}
        <div style={formStyles.formGroup}>
          <label style={formStyles.label}>
            방문 수령 <span style={formStyles.required}>*</span>
          </label>
          <div style={formStyles.toggleButtons}>
            <button 
              type="button"
              style={{
                ...formStyles.button, 
                flex: 1, 
                borderRadius: 0, 
                border: 'none',
                ...(isVisitPickup ? formStyles.selectedButton : {})
              }}
              onClick={() => setIsVisitPickup(true)}
            >
              기능
            </button>
            <button 
              type="button"
              style={{
                ...formStyles.button, 
                flex: 1, 
                borderRadius: 0, 
                border: 'none',
                ...(!isVisitPickup ? formStyles.selectedButton : {})
              }}
              onClick={() => setIsVisitPickup(false)}
            >
              불가능
            </button>
          </div>
        </div>
        
        {/* Delivery Possible */}
        <div style={formStyles.formGroup}>
          <label style={formStyles.label}>
            택배/배송 <span style={formStyles.required}>*</span>
          </label>
          <div style={formStyles.toggleButtons}>
            <button 
              type="button"
              style={{
                ...formStyles.button, 
                flex: 1, 
                borderRadius: 0, 
                border: 'none',
                ...(isDeliveryPossible ? formStyles.selectedButton : {})
              }}
              onClick={() => setIsDeliveryPossible(true)}
            >
              가능
            </button>
            <button 
              type="button"
              style={{
                ...formStyles.button, 
                flex: 1, 
                borderRadius: 0, 
                border: 'none',
                ...(!isDeliveryPossible ? formStyles.selectedButton : {})
              }}
              onClick={() => setIsDeliveryPossible(false)}
            >
              불가능
            </button>
          </div>
        </div>
        
        {/* Submit Button */}
        <button type="submit" style={formStyles.submitButton}>
          저장하기
        </button>
      </form>
    </div>
  );
};

export default ProductUploadForm;