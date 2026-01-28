# 💰 금융 대시보드

실시간 환율, 금시세, 가상화폐, 주가지수를 한눈에 볼 수 있는 웹 대시보드 애플리케이션입니다.

## ✨ 주요 기능

### 📊 실시간 데이터 조회
- **환율**: 원화 기준 USD/KRW, JPY/KRW
- **금시세**: 3.75그램 (1돈) 기준
- **가상화폐**: BTC, ETH, XRP
- **주가지수**: S&P 500

### 📈 인터랙티브 차트
- 기간별 데이터 시각화 (1일, 1주, 1개월, 6개월, 1년)
- 실시간 변동률 표시
- 반응형 디자인 (모바일/태블릿/데스크톱)

## 🏗️ 기술 스택

### Backend
- Node.js + Express
- TypeScript
- node-cache (데이터 캐싱)
- 외부 API: CoinGecko, Exchange Rate API, Yahoo Finance

### Frontend
- React 19 + Vite
- TypeScript
- Tailwind CSS
- Chart.js + React-Chart.js-2
- Axios

## 🚀 시작하기

### 사전 요구사항
- Node.js 18.0.0 이상
- npm 또는 yarn

### 설치 및 실행

#### 1. 저장소 클론
```bash
git clone <repository-url>
cd finance-dashboard
```

#### 2. 백엔드 설정 및 실행
```bash
cd backend
npm install
npm run dev
```

백엔드 서버가 `http://localhost:3001`에서 실행됩니다.

#### 3. 프론트엔드 설정 및 실행 (새 터미널)
```bash
cd frontend
npm install
npm run dev
```

프론트엔드 앱이 `http://localhost:5173`에서 실행됩니다.

#### 4. 브라우저 접속
브라우저에서 `http://localhost:5173`로 접속하면 대시보드를 확인할 수 있습니다.

## 📁 프로젝트 구조

```
finance-dashboard/
├── backend/                 # API 서버
│   ├── src/
│   │   ├── index.ts        # Express 서버
│   │   └── services/
│   │       └── financeService.ts  # 금융 데이터 서비스
│   ├── package.json
│   └── tsconfig.json
│
└── frontend/                # React 앱
    ├── src/
    │   ├── App.tsx         # 메인 대시보드
    │   ├── services/
    │   │   └── api.ts      # API 클라이언트
    │   ├── types/
    │   │   └── index.ts    # TypeScript 타입
    │   └── index.css       # Tailwind CSS
    ├── package.json
    └── vite.config.ts
```

## 🔌 API 엔드포인트

### 환율
```
GET /api/exchange-rate/:pair?period=1day
- pair: USD/KRW 또는 JPY/KRW
- period: 1day, 1week, 1month, 6month, 1year
```

### 금시세
```
GET /api/gold?period=1day
```

### 가상화폐
```
GET /api/crypto/:symbol?period=1day
- symbol: BTC, ETH, XRP
```

### S&P 500
```
GET /api/sp500?period=1day
```

### 전체 데이터
```
GET /api/all?period=1day
```

## 🎨 화면 구성

1. **헤더**: 대시보드 제목 및 설명
2. **기간 선택 버튼**: 1일/1주/1개월/6개월/1년
3. **환율 섹션**: USD/KRW, JPY/KRW 카드
4. **금시세 섹션**: 3.75g 기준 금 가격
5. **가상화폐 섹션**: BTC, ETH, XRP 카드
6. **주가지수 섹션**: S&P 500 카드

각 카드는:
- 현재 가격
- 변동률 (▲/▼ 표시)
- 인터랙티브 차트

## 💡 특징

### 캐싱
- 백엔드에서 5분간 데이터 캐싱
- API 호출 최소화로 성능 향상

### 반응형 디자인
- 모바일: 1열 레이아웃
- 태블릿: 2열 레이아웃
- 데스크톱: 3열 레이아웃 (가상화폐 섹션)

### 다크 모드
- Slate 계열 다크 테마
- 눈의 피로를 줄이는 배색

## 🔧 개발 모드

### 백엔드
```bash
cd backend
npm run dev  # tsx watch 모드로 실행
```

### 프론트엔드
```bash
cd frontend
npm run dev  # Vite dev 서버
```

## 📦 프로덕션 빌드

### 백엔드
```bash
cd backend
npm run build
npm start
```

### 프론트엔드
```bash
cd frontend
npm run build
npm run preview
```

## ⚠️ 주의사항

### API 제한
- 무료 API 사용으로 요청 제한 있음
- 실제 프로덕션에서는 유료 API 권장

### CORS
- 현재 모든 오리진 허용 (개발용)
- 프로덕션에서는 특정 도메인만 허용 필요

## 🛠️ 문제 해결

### 백엔드 서버가 시작되지 않는 경우
```bash
cd backend
rm -rf node_modules package-lock.json
npm install
```

### 프론트엔드가 API를 호출하지 못하는 경우
1. 백엔드 서버가 실행 중인지 확인
2. `http://localhost:3001/health` 접속 확인
3. 브라우저 콘솔에서 CORS 에러 확인

### 차트가 표시되지 않는 경우
```bash
cd frontend
npm install chart.js react-chartjs-2
```

## 📝 라이선스

MIT License

## 🤝 기여

이슈와 PR은 언제나 환영합니다!
