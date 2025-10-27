## 🏃‍♂️ 로컬 개발 환경 실행 방법 (필독!)

1.  **환경 변수 파일 생성**

    이 프로젝트는 `.env` 파일의 환경 변수를 읽습니다. `.env.example` 파일을 복사하여 `.env` 파일을 생성하세요.

    cp .env.example .env
  

2.  **환경 변수 설정**

    방금 생성한 `.env` 파일을 열어, `your_..._here`로 표시된 부분에 실제 비밀번호와 설정값을 입력하세요. (팀원과 공유된 값을 사용)

3.  **Docker 컨테이너 빌드 및 실행**

Docker Desktop이 실행 중인지 확인한 후, 상황에 맞는 명령어를 사용하세요.

A. 일반적인 실행 (가장 자주 사용)

    NestJS 소스 코드(.ts 파일)만 수정했을 경우에는 이 명령어를 사용합니다.
    컨테이너가 켜진 후, 서버를 자동으로 재시작합니다.

    docker compose up

    (서버를 완전히 끄고 정리할 때는  docker compose down 을 사용합니다.)


B. 이미지를 새로 빌드하며 실행 (중요!)

    최초 실행 시 또는 프로젝트의 '뼈대'가 변경되었을 때는 --build 옵션으로 이미지를 강제로 새로 만들어야 합니다.

    '뼈대'가 변경되는 경우:
    package.json 에 새 라이브러리를 추가/삭제한 경우 (예: npm install axios)
    Dockerfile 자체를 수정한 경우
    docker-compose.yml의 build: 관련 설정을 변경한 경우
    
    docker compose up --build
    

4.  **서버 확인**

    서버가 `http://localhost:3000`에서 정상적으로 실행됩니다.
    데이터베이스는 `http://localhost:3378` (MySQL 외부 포트)로 접속할 수 있습니다.

---


