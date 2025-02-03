# 수많은 컴포넌트와 state들

-   웹 사이트의 규모가 커져서 상태가 많아짐.
-   어떤 컴포넌트에서 언제, 어떻게, 왜 상태를 변경했는가?
-   상태 업데이트의 원인을 파악할 수 없다면, 버그를 파악하기 힘들다.

# 수많은 상태들을 어떻게 효과적으로 관리할 것인가?

-   상태관리로 등장한 것이 Redux다.

# Flux Architecture

-   단반향 데이터 흐름을 이용한 리액트용 애플리케이션 아키텍처
-   데이터의 흐름을 정의한 하나의 방법 => 하나의 방향만 존재(한 쪽으로만)
-   Action(데이터의 흐름을 위한 어떤 동작이 발생) => Dispatcher(발송하다) => Store(데이터의 저장 공간) => View(받은 데이터를 보여준다.) => View에서 또 다른 액션이 일어난다면 이 순서 대로 방향이 흘러간다. 단방향

# Three Principles of Redux

-   리덕스의 원칙
-   Single source of truth(Store)
-   단 하나의 진실의 원천: 단 한명이 이야기가 진실이라면 그 사람의 말이 진실이다. 다만 진실을 말하는 사람은 한 명이어야 한다.
-   State is read-only
-   상태 값은 읽기 전용이여야 한다. 변경이 불가능 하다.
-   사전에 정의해둔 어떤 상황이 발생했을 경우에, 사전에 정해진대로만 상태를 변경할 수 있다. 다른 상태는 변경이 불가능하다.
-   Changes are made with pure functions
-   변화는 순수 함수들을 통해 이뤄져야 한다. 부수효과가 없어야 한다.
-   입력값을 변경하지 않으며, 같은 입력값에 대해서는 항상 같은 출력값을 리턴한다.

# Redux 구성요소

-   Redux에 데이터를 저장하기 위한 저장 요소를 Store
-   Redux Store에 저장되어 있는 데이터를 State
-   Action(JS 객체 형태로 존재한다.) Redux State에 저장된 데이터에 변화를 주기 위한 행동이다.
-   Action Create 객체를 생성하는 역할을 하는 함수이다.
-   Reducer 입력에 어떤 처리를 해서 원하는 결과로 축소시키는 과정이다. Redux State에 변화를 주는 역할이다.

# Immutability

-   State is read-only, Changes are made with pure functions => 불변성
-   Redux State 생성 후에는 값을 바꿀 수 없다

# 어떤 경우에 Redux를 사용해야 할까?

-   하나의 상태를 여러 컴포넌트에서 접근 해야 하는 경우
-   한 곳에서 상태들을 관리하고 싶을 떄
-   모든 state를 Redux Store에 넣는 것이 정답은 아니다.
-   꼭 필요한 state들만 Redux를 통해 관리하자
