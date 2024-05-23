package models

import "gorm.io/gorm"

type Rocas struct {
	gorm.Model
	Nombre       string  `gorm:"size:100;not null" json:"nombre_roca"`
	Descripcion  string  `gorm:"type:text" json:"descrip"`
	Peso         float64 `gorm:"not null" json:"peso"`
	Origen       string  `gorm:"type:text" json:"origen"`
	Calificacion float64 `gorm:"not null" json:"score"`
	Comentario   string  `gorm:"type:text" json:"comment"`
	Usuario      string  `gorm:"size:100;not null" json:"username"`
}
