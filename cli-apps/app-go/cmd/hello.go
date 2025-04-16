package main

import "fmt"

var (
	GlobalGreeting string
)

func main() {
	fmt.Println("Hello!")
	fmt.Println("Envs greetings:", GlobalGreeting)
}