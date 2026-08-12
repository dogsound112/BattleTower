# COBBLEVERSE Battle Tower Website

이 폴더는 GitHub Pages에 바로 올릴 수 있는 정적 웹사이트입니다.

## 파일
- `index.html` : 메인 페이지
- `style.css` : 디자인
- `app.js` : 층 선택/검색/데이터 렌더링
- `data.json` : 배틀타워 데이터

## GitHub Pages로 공개하기
1. GitHub에서 새 저장소(Repository)를 만듭니다.
2. 이 ZIP의 파일 4개를 저장소 최상위(root)에 업로드합니다.
3. GitHub 저장소에서 `Settings` → `Pages`로 이동합니다.
4. `Build and deployment`의 Source를 `Deploy from a branch`로 선택합니다.
5. Branch에서 `main` / `(root)`를 선택하고 Save 합니다.
6. GitHub Pages 주소가 생성되면 누구나 그 주소로 접속할 수 있습니다.

## 데이터 수정
`data.json`만 수정하면 사이트의 트레이너 정보도 자동으로 바뀝니다.

## 1~20층 확장
- 1~20층 고정 트레이너 파티 데이터 수록
- 공통: Lv.100 / IV 6V / EV 0
- 5층 클리어 후 5.5층 휴식터: HP·상태이상·PP 완전회복 + PC 파티 수정
- 10층 클리어 후 체크포인트 저장 및 로비 귀환, 다음 도전 11층 시작
- 15층 클리어 후 15.5층 휴식터: HP·상태이상·PP 완전회복 + PC 파티 수정
- 20층 클리어 후 체크포인트 저장 및 로비 귀환, 다음 도전 21층 시작
