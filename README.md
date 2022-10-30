# 미션 - 온보딩

## 🔍 진행 방식

- 미션은 **기능 요구 사항, 프로그래밍 요구 사항, 과제 진행 요구 사항** 세 가지로 구성되어 있다.
- 세 개의 요구 사항을 만족하기 위해 노력한다. 특히 기능을 구현하기 전에 기능 목록을 만들고, 기능 단위로 커밋 하는 방식으로 진행한다.
- 기능 요구 사항에 기재되지 않은 내용은 스스로 판단하여 구현한다.

## 📮 미션 제출 방법

- 미션 구현을 완료한 후 GitHub을 통해 제출해야 한다.
  - GitHub을 활용한 제출 방법은 [프리코스 과제 제출](https://github.com/woowacourse/woowacourse-docs/tree/master/precourse) 문서를 참고해
    제출한다.
- GitHub에 미션을 제출한 후 [우아한테크코스 지원](https://apply.techcourse.co.kr) 사이트에 접속하여 프리코스 과제를 제출한다.
  - 자세한 방법은 [제출 가이드](https://github.com/woowacourse/woowacourse-docs/tree/master/precourse#제출-가이드) 참고
  - **Pull Request만 보내고 지원 플랫폼에서 과제를 제출하지 않으면 최종 제출하지 않은 것으로 처리되니 주의한다.**

## 🚨 과제 제출 전 체크 리스트 - 0점 방지

- 기능 구현을 모두 정상적으로 했더라도 **요구 사항에 명시된 출력값 형식을 지키지 않을 경우 0점으로 처리**한다.
- 기능 구현을 완료한 뒤 아래 가이드에 따라 테스트를 실행했을 때 모든 테스트가 성공하는지 확인한다.
- **테스트가 실패할 경우 0점으로 처리**되므로, 반드시 확인 후 제출한다.

### 테스트 실행 가이드

- 테스트 패키지 설치를 위해 `Node.js` 버전 `14` 이상이 필요하다.
- 다음 명령어를 입력해 패키지를 설치한다.

```bash
npm install
```

- 설치가 완료되었다면, 다음 명령어를 입력해 테스트를 실행한다.

```bash
npm test
```

---

## 🚀 기능 요구 사항

아래의 7가지 기능 요구 사항을 모두 해결해야 한다.

1. [문제 1](docs/PROBLEM1.md)
2. [문제 2](docs/PROBLEM2.md)
3. [문제 3](docs/PROBLEM3.md)
4. [문제 4](docs/PROBLEM4.md)
5. [문제 5](docs/PROBLEM5.md)
6. [문제 6](docs/PROBLEM6.md)
7. [문제 7](docs/PROBLEM7.md)

---

## 🎯 프로그래밍 요구 사항

- Node.js 14 버전에서 실행 가능해야 한다. **Node.js 14에서 정상적으로 동작하지 않을 경우 0점 처리한다.**
- `package.json`을 변경할 수 없고 외부 라이브러리(jQuery, Lodash 등)를 사용하지 않는다. 순수 Vanilla JS로만 구현한다.
- 프로그램 종료 시 `process.exit()`를 호출하지 않는다.
- 프로그램 구현이 완료되면 `ApplicationTest`의 모든 테스트가 성공해야 한다. **테스트가 실패할 경우 0점 처리한다.**
- 프로그래밍 요구 사항에서 달리 명시하지 않는 한 파일, 패키지 이름을 수정하거나 이동하지 않는다.

---

## ✏️ 과제 진행 요구 사항

- 미션은 [javascript-onboarding](https://github.com/woowacourse-precourse/javascript-onboarding) 저장소를 Fork & Clone해 시작한다.
- 과제 진행 및 제출 방법은 [프리코스 과제 제출](https://github.com/woowacourse/woowacourse-docs/tree/master/precourse) 문서를 참고한다.

---

## 💻 과제 구현 현황

### 문제 1. 구현 사항

- [x] 승리, 패배, 무승부 기능 구현.
- [x] 예외 처리
  - [x] 1. 책의 첫, 마지막 페이지를 펼쳤을 때.
  - [x] 2. 한 사람의 페이지 번호가 1보다 큰 차이가 있을 때.
  - [x] 3. 왼쪽 페이지 번호는 홀수, 오른쪽 페이지 번호는 짝수가 아닐 때.

### 문제 2. 구현 사항

- [x] 문자열 탐색 후 연속된 동일 문자 발견 시 제거.
- [x] 연속된 동일 문자 제거 후 문자열의 맨 처음으로 돌아가 다시 탐색 후 연속된 동일 문자가 발견되지 않을 때까지 제거 반복.

### 문제 3. 구현 사항

- [x] for문을 이용해 1부터 매개변수까지 순회.
- [x] 순회하면서 toString() 후 split 이용, 문자열 배열로 변경
- [x] map 이용하여 순회하며 3,6,9에 해당하는지 확인 (% 3 연산,숫자 자체가 0인 경우 제외).

### 문제 4. 구현 사항

- [x] 문제의 알파벳을 변환하는 공식 생성.
  - 공식 : 아스키 코드 변환 후 '변환할 문자' - ('마지막 문자' - '변환할 문자') + ('변환할 문자' - '첫 문자').
- [x] 정규식을 통한 대소문자 구별.
- [x] 모호한 else 문 사용 지양.
- [x] 알파벳을 변환하는 기능을 가진 함수를 분리.

### 문제 5. 구현 사항

- [x] 화폐 단위를 배열화.
- [x] 0으로 초기화 된 result 배열 생성.
- [x] forEach문으로 value와 index를 이용하여, 몫 연산 후 몫을 result 배열의 일치하는 index에 덧셈.

### 문제 6. 구현 사항

- [x] 문자열에 포함된 길이 2이상의 모든 조합 배열 생성
- [ ] 중복 체크하는 함수 생성(함수로 분리 예정)
  - [x] indexOf를 이용한 중복 체크
  - [ ] ~~false로 구성된 동일한 길이의 배열 생성하여 중복된 경우 해당 인덱스 true 할당~~
- [x] 중복 체크할 단어 Set 생성
- [x] Set 순회 & forms 순회하며 중복 단어 포함된 닉네임의 인덱스를 저장할 saveIndex 배열을 생성하고, 다음 중복 체크할 단어로 넘어갈 때마다 초기화함.
- [x] indexOf 메서드를 이용하여 중복된 단어가 있다면, saveIndex에 push
- [x] 한 단어가 다른 방식으로 여러 단어와의 중복이 됐을 때 이메일이 answer에 중복으로 들어가는 것을 방지하기 위해 answer를 Set으로 생성
- [x] push하는 작업이 끝났을 때, saveIndex의 length가 1 이상이라면 중복된 것으로 판단하고 answer Set에 추가
- [x] saveIndex 배열에 저장된 해당 닉네임 인덱스 이용, answer Set에 메일 추가.
- [x] Set인 answer를 배열로 변환해 정렬하여 출력.

### 문제 7. 구현 사항

- [x] friends를 Map화하는 함수 분리 생성, 원소[0], [1]을 바꿔서도 생성.
- [x] 친구 추천 점수가 같을 때 사전 순으로 정렬하는 함수 생성.
- [ ] ~~user를 매개변수로 하는 함수 분리 후 점수 계산.~~
- [ ] ~~점수를 매기기 위한 객체 배열 생성~~
- [x] 점수를 매기기 위한 recommend라는 이름의 Map 생성
- [x] visitor 순회, 점수 추가
  ### 함수 구성
  - [x] 본인 리스트는 건너뛰기
  - [x] 현재 친구가 아닐 것.
  - [x] 함께 아는 친구가 있는지 확인하는 과정, 그 이후 절차
    - [x] 함께 아는 친구 이름이 처음 등장하면 그 이름을 key로 하고 value를 10으로 할당
    - [x] 친구가 Map에 key로써 존재한다면 10을 추가
  - [x] recommend Map에 존재하는지, user의 이미 친구인 사람인지 확인
    - [x] recommend Map에 없다면, 이름을 key로, value를 1로 할당
    - [x] 있다면, 이름과 같은 key의 value를 1 더해줌.
  - [x] 최대 5명까지 추천하기 위한 answer 배열 길이 제한 추가
