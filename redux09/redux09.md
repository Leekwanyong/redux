# Side Effects

-   Reducer 외부에서 보여질 수 있는 상태의 변경 또는 동작
-   Pure Function에서 리턴 값과 직접적으로 관련이 없는 모든 동작은 Side effects
-   Reducer가 완벽한 Pure function이 되게 하기 위함

# Redux와 비동기

-   Middleware을 사용해야한다.
-   Redux에 원하는 기능을 추가할 수 있게 해주는 함수
