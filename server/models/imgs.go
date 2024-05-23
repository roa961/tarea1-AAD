package models

import "gorm.io/gorm"

type ImagenRoca struct {
	gorm.Model
	ID        uint   `gorm:"primaryKey"`
	RocaID    uint   `gorm:"not null"`
	Roca      Rocas  `gorm:"constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"`
	URLImagen string `gorm:"size:255;not null"`
}
