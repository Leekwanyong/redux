# Pattern

-   정해진 조건에서 소프트웨어를 설계할 떄 적용가능한 효과적인 방법
-   소프트웨어를 설계하는 정형화 된 방법

# Ducks Pattern

-   Redux Design Pattern
-   규모가 커지면 리덕스도 복잡도도 높아진다. 이래서 등장한게 더스크 패턴이다.
-   Redux의 수많은 구성요소들을 정리하는 하나의 규칙이다.
-   Redux를 사용할 떄 reducer, action type, action을 묶는 방법이다.

# Duck

-   Redux Reducer Bundle 꾸러미
-   규칙이 있다
-   reducer를 export default 해야 한다.
-   Action creatore를 export 해줘야 한다.
-   action types를 모듈/reducer/ACTION_TYPE으로 해야한다.
-   action types은 이름은 대문자로 해야만 하고 스네이크 문법으로 명시해야 한다.(\_) 언더바
