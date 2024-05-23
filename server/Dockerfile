FROM golang:1.22.3-alpine as build

WORKDIR /app
#En lugar de generar los archivos go.mod y go.sum con go mod init
COPY go.mod go.sum ./
RUN go mod download

COPY . ./
RUN go build -o main .

FROM alpine:latest

WORKDIR /root/

COPY --from=build /app/main .

EXPOSE 8080

CMD ["./main"]
