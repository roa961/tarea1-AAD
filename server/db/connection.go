package db

import (
	"fmt"
	"log"
	"os"

	// "github.com/joho/godotenv"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func ConnectDB() {
	// err := godotenv.Load()
	// if err != nil {
	// 	log.Fatalf("No hay .env")
	// }
	host := os.Getenv("HOST")
	user := os.Getenv("USUR")
	pass := os.Getenv("PASS")
	db := os.Getenv("DAB")

	var dsn = fmt.Sprintf("host=%s user=%s password=%s dbname=%s port=5432 sslmode=disable", host, user, pass, db)
	var error error
	DB, error = gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if error != nil {
		log.Fatal(error)
	} else {
		log.Println("Conectado a db")
	}
}
