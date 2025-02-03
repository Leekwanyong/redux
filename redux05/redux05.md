# Redux와 UI

-   리덕스는 UI와 관계 없음
-   Redux는 UI 없이도 독자적으로 사용할 수 있지만, 대부분 React와 함께 사용!

# Redux와 UI연동

-   Redux Store 생성
-   Store가 UI업데이트(재렌더링)를 구독을 목록에 추가해야한다.
-   UI 업데이트 과정
-   Redux는 UI의 종료와 상관없이 동일한 방식으로 작동!

1. 현재 Redux Store의 데이터를 가져옴
2. 가져온 데이터 중 UI에서 필요로 하는 데이터만 추출
3. 추출한 데이터를 사용해서 UI업데이트

-   필요한 경우 초기 UI 렌더링
-   UI 입력이 발생한 경우 Action을 Dispatch해서 UI 업데이트
