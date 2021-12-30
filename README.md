# Reducer, Context 활용 할 일 목록 만들기

### Reducer 활용 스테이트 관리

- Reducer 사용으로 이벤트 핸들러의 간결성 유지
- Top-down 방식으로 state, 이벤트 핸들러 전달
- prop drilling 방지 위해 Context 도입

### Context 생성

- 할 일 목록 관리, dispatch action을 제공하는 함수 Context 생성
- 모든 컴포넌트에서 Context를 사용해서 할 일 목록, dispatch 사용 가능

### Reducer & Context Provider 추가

- Reducer와 Context 파일 분리
- 로직 분리로 앱의 간결성 유지, props 전달 편의성 제공
- customHook 사용으로 코드 가독성 확보
