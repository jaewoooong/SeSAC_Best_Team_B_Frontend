FROM node:18-slim
# 앱 디렉터리 생성
WORKDIR /usr/src/app
# 앱 의존성 설치
# 가능한 경우(npm@5+) package.json과 package-lock.json을 모두 복사하기 위해
# 와일드카드를 사용
COPY package*.json ./

# package.json에서 monorepo-symlink-test 패키지를 제외한 package-temp.json 파일 생성
RUN grep -v 'monorepo-symlink-test' package.json > package-temp.json && \
    mv package-temp.json package.json

RUN npm install
# 앱 소스 추가
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]
