package routes

import (
	"encoding/json"
	"fmt"
	"net/http"
	"server/db"
	"server/models"

	"github.com/gorilla/mux"
)

func GetRocasHandler(writer http.ResponseWriter, reader *http.Request) {
	var rocas []models.Rocas
	db.DB.Find(&rocas)
	json.NewEncoder(writer).Encode(&rocas)
}

type UpdateUserInput struct {
	Nombre       string  `json:"nombre_roca"`
	Descripcion  string  `json:"descrip"`
	Comentario   string  `json:"comment"`
	Peso         float64 `json:"peso"`
	Calificacion float64 `json:"score"`
}

func GetRocaHandler(writer http.ResponseWriter, reader *http.Request) {

	var roca models.Rocas
	params := mux.Vars(reader)
	rocas := db.DB.Where("nombre = ?", params["nombre"]).Find(&roca)
	if params["nombre"] == "" {
		http.Error(writer, "Nombre vacío", http.StatusNotFound)
		return
	}
	if rocas.RowsAffected == 0 {
		writer.WriteHeader(http.StatusNotFound)
		writer.Write([]byte("Roca no encontrada"))
		return
	}
	json.NewEncoder(writer).Encode(&roca)

}
func PostRocasHandler(writer http.ResponseWriter, reader *http.Request) {

	var roca models.Rocas
	json.NewDecoder(reader.Body).Decode(&roca)

	createRoca := db.DB.Create(&roca)

	err := createRoca.Error
	if err != nil {
		writer.WriteHeader(http.StatusBadRequest)
		writer.Write([]byte("No se pudo ingresar"))
		return
	}
	writer.WriteHeader(http.StatusOK)
	writer.Write([]byte("Review registrada"))
}
func PutRocasHandler(writer http.ResponseWriter, reader *http.Request) {
	var roca models.Rocas
	var input UpdateUserInput
	params := mux.Vars(reader)
	json.NewDecoder(reader.Body).Decode(&input)

	rocas := db.DB.Where("ID = ?", params["id"]).Find(&roca)
	if rocas.RowsAffected == 0 {
		writer.WriteHeader(http.StatusNotFound)
		writer.Write([]byte("Usuario sin rocas registradas"))
		return
	}

	updates := make(map[string]interface{})
	var campos []string
	if input.Nombre != "" {
		campos = append(campos, "Nombre")
		updates["Nombre"] = input.Nombre
	}
	if input.Descripcion != "" {
		campos = append(campos, "Descripcion")
		updates["Descripcion"] = input.Descripcion
	}
	if input.Peso != 0 {
		campos = append(campos, "Peso")
		updates["Peso"] = input.Peso
	}
	if input.Calificacion != 0 {
		campos = append(campos, "Calificacion")
		updates["Calificacion"] = input.Calificacion
	}
	if input.Comentario != "" {
		campos = append(campos, "Comentario")
		updates["Comentario"] = input.Comentario
	}
	db.DB.Model(&roca).Where("ID=?", params["id"]).Select(campos).Updates(updates)
	writer.WriteHeader(http.StatusOK)
	writer.Write([]byte("Se actualizó la información"))
}
func DeleteRocasHandler(writer http.ResponseWriter, reader *http.Request) {
	var roca models.Rocas
	params := mux.Vars(reader)
	fmt.Println(roca)
	db.DB.Where("ID = ?", params["id"]).Find(&roca)

	if roca.Nombre == "" {
		http.Error(writer, "Roca no encontrada", http.StatusNotFound)
		return
	}
	db.DB.Delete(&roca)
	writer.WriteHeader(http.StatusOK)
	writer.Write([]byte("Usuario borrado"))

}
