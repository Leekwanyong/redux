# Dispatcher

-   발송하다, 파견하다
-   발송하는 역할을 하는 것 Action을 발송하는 역할을 한다.
-   Action을 받아서 발송
-   redux 에서는 store.dispatch(acion) 액션 객체를 파라미터로 받아서 발송하는 역할을 한다.

# Store

-   createStore() 리덕스 스토어를 생성함 리덕스에서 관리하는 모든 상태 값이 들어간다.
-   단 하나의 Store만 존재해야 함!
-   createStore(reducer, [preloadedState], [enhancer])
-   첫 번째 매개변수 Redux State에 뱐화를 주는 역할을 하는 순수 함수, 모든 reducer들을 합친 rootReduer가 들어감
-   preloadedState, 초기 상태값
-   enhancer, Redux Store의 기능을 향상 시켜주는 역할을 하는 함수(Middleware)
-   Return, Redux Store

# applyMiddleware(...middleware)

-   applyMiddleware(...middleware)
-   Recux에 원하는 기능을 추가할 수 있게 해주는 함수
-   Redux Store의 dispatch()와 getState()함수가 포함 된 객체를 파라미터로 받음
-   Action이 처리될 때, 함께 작동하길 원하는 코드를 끼워 넣을 수 있음
-   여러 개의 middleware들은 하나로 합쳐질 수 있음
-   Redux에서 필수적인 것은 아님
-   Return 주어진 middleware들이 적용 된 Store enhancer 함수
