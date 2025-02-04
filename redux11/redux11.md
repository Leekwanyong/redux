# Persist

-   상태를 저장 장치에 저장함으로써, 프로세스가 재시작되어도 다시 상태를 복원 가능

# redux-persist

-   Redux Store의 데이터를 유지시키고 다시 복원해주는 역할 휘발성을 갖고 있는 리덕스를 위한 라이브러리

# Storage

-   키와, 값의 쌍으로 데이터를 저장 가능
-   키 값은 고유해야한다. 만약 값은 키 라면 덮어 씌워진다.
-   로컬스토리지, 데이터가 만료되지 않음
-   세션스토리지, 데이터가 세션 종료 시 만료됨
-   둘 다 http, https 일 떄는 각 각 다른 스토리지 객체를 가진다.

# 데이터 저장 및 복원 과정

-   데이터를 저장하기 위해서 Serialize 해야 한다. 일렬로 쭉
-   비어 있는 Redux Store에 데이터를 복원한다. 역직렬화
-   리덕스에서는 이를 Tranforms 했다고 한다.

# redux-persist

-   스토리지 엔진 선택, 로컬, 세션 중에서 대표적으로
-   persistConfig의 대표 속성
-   key: 저장할 데이터의 key
-   storage: 사용할 스토리지 엔진
-   version: 현재 저장된 State의 버전 (Migration에 사용)
-   blacklist & Whitelist: 저장에서 제외(blacklist) 하거나, 저장할 타겟(Whitelist) State의 key값
-   transforms: 사용할 데이터 변환 플러그인

# Persistor

-   Redux Store와 관련된 여러 함수들을 제공하는 객체
-   purge(): 데이터를 모두 초기화 하는 함수
-   flush(): 즉시 모든 state의 데이터를 저장하는 함수
-   pause(): 데이터 저장를 일시 중단하는 함수
-   persist(): 데이터 저장를 다시 재개하는 함수

# Migration

-   이주, 이동
-   데이터를 한 쪽에서 다른 쪽으로 이동시키는 것,
-   데이터의 구조를 변경시키는 것 리덕스에서는 여기에 더 가깝다.
-   웹애플리케이션 배포 후 데이터의 구조가 변경될 수 있기 때문에
-   꼭 저장이 필요한 데이터만 whitelist에 넣어서 사용하자, 반대로 black도 가능
