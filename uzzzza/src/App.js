import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useParams } from 'react-router-dom';
import RecyclableProductDetail from './pages/detail.jsx';
import RecyclableProductsList from './pages/search.jsx';
import ProductUploadForm from './pages/upload.jsx';
import EcoScoreGauge from './pages/score.jsx';
import SurveyMultipleChoice from'./pages/survey_mcq.jsx';
import SurveyDescriptive from './pages/survey_des.jsx';

// 메인 App 컴포넌트
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* 메인 페이지 (조회 페이지) */}
          <Route path="/" element={<RecyclableProductsList />} />
          
          {/* 제품 등록 페이지 */}
          <Route path="/upload" element={<ProductUploadFormWithNavigation />} />
          
          {/* 제품 상세 페이지 */}
          <Route path="/product/:id" element={<RecyclableProductDetailWithNavigation />} />
          
          {/* 에코 스코어 페이지 (마이페이지) */}
          <Route path="/score" element={<EcoScoreGaugeWithNavigation />} />
          <Route path="/mcq" element={<SurveyMultipleChoice />} />
          <Route path="/descriptive" element={<SurveyDescriptive />} />
        </Routes>
      </div>
    </Router>
  );
}

// 네비게이션 기능이 추가된 업로드 페이지 컴포넌트
function ProductUploadFormWithNavigation() {
  const navigate = useNavigate();

  // 뒤로가기 버튼 클릭 시 메인 페이지로 이동
  const handleBackClick = () => {
    navigate('/');
  };

  // 폼 제출 완료 후 메인 페이지로 이동
  const handleFormSubmit = (formData) => {
    // API 호출로 데이터 저장 로직이 여기에 들어갈 수 있음
    console.log('Form submitted:', formData);
    
    // 성공적으로 저장되면 메인 페이지로 이동
    navigate('/');
  };

  return (
    <ProductUploadForm 
      onBackClick={handleBackClick} 
      onFormSubmit={handleFormSubmit} 
    />
  );
}

// 네비게이션 기능이 추가된 상세 페이지 컴포넌트
function RecyclableProductDetailWithNavigation() {
  const navigate = useNavigate();
  const { id } = useParams(); // URL에서 상품 ID 가져오기

  // 뒤로가기 버튼 클릭 시 메인 페이지로 이동
  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <RecyclableProductDetail 
      productId={id} 
      onBackClick={handleBackClick} 
    />
  );
}

// 네비게이션 기능이 추가된 에코 스코어 페이지 컴포넌트
function EcoScoreGaugeWithNavigation() {
  const navigate = useNavigate();

  // 뒤로가기 버튼 클릭 시 이전 페이지로 이동
  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <EcoScoreGauge 
      onBackClick={handleBackClick} 
    />
  );
}

export default App;