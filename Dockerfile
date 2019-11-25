FROM node:12.13.1-alpine3.10 AS fetchdeps
WORKDIR /opt/db-connection-tester-container
ADD . .
RUN npm i

FROM gcr.io/distroless/nodejs
COPY --from=fetchdeps /opt/db-connection-tester-container /opt/db-connection-tester-container
WORKDIR /opt/db-connection-tester-container
CMD ["index.js"]
