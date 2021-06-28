
FROM node:12 as builder
WORKDIR /usr/src/app
COPY package.json .
COPY yarn*.lock .
RUN yarn --ignore-optional install --network-timeout 100000
COPY . .
RUN yarn build

FROM node:12-slim as runtime
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/dist .
COPY --from=builder /usr/src/app/node_modules ./node_modules
RUN ls -la

ADD ./bin/wait /wait
RUN chmod +x /wait

CMD /wait && node .
