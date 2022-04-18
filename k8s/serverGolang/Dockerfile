FROM golang:alpine3.15

WORKDIR /go/src/hello-go
COPY . .
RUN go build -o server .
CMD ["./server"]