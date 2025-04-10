package domain

import "errors"

var (
	// Retornado quando uma conta não é encontrada
	ErrAccountNotFound = errors.New("account not found")
	// Retornado quando há tentativa de criar uma conta com API Key duplicada
	ErrDuplicateAPIKey = errors.New("api key already exists")
	// Retornado quando uma fatura não é encontrada
	ErrInvoiceNotFound = errors.New("invoice not found")	
	// Retornado quando há tentativa de acesso não autorizado a um recurso
	ErrUnauthorizedAccess = errors.New("unauthorized acccess")

	ErrInvalidAmount = errors.New("invalid amount")
	ErrInvalidStatus = errors.New("invalid status")
)
