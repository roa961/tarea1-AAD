package routes

import (
	"net/http"
)

func HandlerHome(writer http.ResponseWriter, reader *http.Request) {
	writer.Write([]byte("Holarda"))
}
