# COBBLEVERSE Battle Tower Website

GitHub Pages에 바로 올릴 수 있는 배틀타워 1~50층 트레이너 파티 정보 사이트입니다.

## 포함 파일
- `index.html` : 메인 페이지
- `style.css` : 사이트 디자인
- `app.js` : 10층 단위 탭 / 층 선택 / 검색 / 데이터 렌더링
- `data.json` : 1~50층 고정 트레이너 파티 데이터
- `README.md` : 배포 및 수정 안내

## 수록 범위
- 1층~50층 고정 트레이너 파티
- 전 포켓몬 Lv.100
- IV 6V
- EV 전부 0
- 각 포켓몬 특성 / 도구 / 기술 4개 표시
- 10층 단위 구간 선택 탭 제공

## 진행 구조
- 1~10F → 5.5F 휴식터 → 10F 체크포인트
- 11~20F → 15.5F 휴식터 → 20F 체크포인트
- 21~30F → 25.5F 휴식터 → 30F 체크포인트
- 31~40F → 35.5F 휴식터 → 40F 체크포인트
- 41~50F → 45.5F 휴식터 → 50F 체크포인트

휴식터에서는 HP / 상태이상 / PP가 완전 회복되고 PC로 파티를 수정할 수 있습니다.
휴식터는 체크포인트가 아닙니다.

## GitHub Pages 배포
1. ZIP을 풀어 `index.html`, `style.css`, `app.js`, `data.json`, `README.md`를 저장소 최상위에 업로드합니다.
2. GitHub 저장소 `Settings` → `Pages`로 이동합니다.
3. Source를 `Deploy from a branch`로 설정합니다.
4. Branch는 `main`, 폴더는 `/(root)`를 선택합니다.
5. Save 후 생성된 GitHub Pages 주소로 접속합니다.

## 데이터 수정
층별 파티를 바꾸려면 `data.json`만 수정하면 사이트에 자동 반영됩니다.
