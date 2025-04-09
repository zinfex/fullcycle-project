package domain

import (

	"encoding/hex"
	"crypto/rand"
	"time"

	"github.com/google/uuid"
)

type Account struct {
	ID        string
	Name      string
	Email     string
	APIkey    string
	Balance   float64
	CreatedAt time.Time
	UpdatedAt time.Time
}

func generateAPIKey() string {
	b := make([]byte, 16)
	rand.Read(b)
	return hex.EncodeToString(b)
}

func NewAccount(name, email string) *Account {
	account := &Account{
		ID: uuid.New().String(),
		Name: name,
		Email: email,
		Balance: 0,
		APIkey: generateAPIKey(),
		CreatedAt: time.Now(),
		UpdatedAt: time.Now(),
	}

	return account
}

func (a *Account) AddBalance(amount float64) {
	a.Balance += amount
	a.UpdatedAt = time.Now()
}