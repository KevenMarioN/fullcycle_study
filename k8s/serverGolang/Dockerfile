FROM golang:alpine3.15

WORKDIR /go/src/hello-go
COPY . .
EXPOSE 5000
RUN go build -o server .
CMD ["./server"]