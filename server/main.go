package main

import (
	"os"

	"github.com/gin-gonic/gin"
	"github.com/saf2k/restaurant-management/server/routes"
)

func main() {
	port := os.Getenv("PORT")

	if port == "" {
		port = "8080"
	}

	router := gin.New()
	router.Use(gin.Logger())

	routes.UserRoutes(router)

	// router.Use(middleware.Authentication())

	routes.FoodRoutes(router)
	routes.InvoiceRoutes(router)
	routes.OrderRoutes(router)
	routes.OrderItemRoutes(router)
	routes.MenuRoutes(router)
	routes.TableRoutes(router)

	router.Run(":" + port)
}
