package main

import (
	"fmt"
	"net/http"
	"server/db"
	"server/models"
	"server/routes"

	"github.com/gorilla/mux"
	"github.com/rs/cors"
)

func main() {

	c := cors.New(cors.Options{
		AllowedOrigins:   []string{"*"},
		AllowedMethods:   []string{http.MethodGet, http.MethodPost, http.MethodPut, http.MethodDelete},
		AllowedHeaders:   []string{"Content-Type", "Authorization"},
		ExposedHeaders:   []string{"Content-Length"},
		AllowCredentials: true,
	})
	db.ConnectDB()

	db.DB.AutoMigrate(models.Rocas{})

	r := mux.NewRouter()
	handler := c.Handler(r)
	r.HandleFunc("/", routes.HandlerHome)

	r.HandleFunc("/rocas", routes.GetRocasHandler).Methods("GET")
	r.HandleFunc("/rocas/{nombre}", routes.GetRocaHandler).Methods("GET")
	r.HandleFunc("/rocas", routes.PostRocasHandler).Methods("POST")
	r.HandleFunc("/rocas/{id}", routes.DeleteRocasHandler).Methods("DELETE")
	r.HandleFunc("/rocas/{id}", routes.PutRocasHandler).Methods("PUT")

	http.Handle("/", r)
	fmt.Println("Server started at :8080")
	http.ListenAndServe("0.0.0.0:8080", handler)

}
