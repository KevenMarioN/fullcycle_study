package main

import "net/http"

func main() {
	http.HandleFunc("/", Hello)
	http.ListenAndServe(":5000", nil)
}

func Hello(response http.ResponseWriter, request *http.Request) {
	response.Write([]byte("<h1>Hello Full Cycle</h1>!!!"))
}
