#!/bin/bash
set -e

# Load environment variables from .env file
if [ -f .env ]; then
    export $(cat .env | sed 's/#.*//g' | xargs)
else
    echo "Error: .env file not found."
    exit 1
fi

echo "Checking if the database '$DB_NAME' exists..."

# Check if the database exists
if psql -h $DB_HOST -U $DB_USER -lqt | cut -d \| -f 1 | grep -qw $DB_NAME; then
    echo "Database '$DB_NAME' already exists"
else
    echo "Database '$DB_NAME' does not exist. Creating..."
    createdb -h $DB_HOST -U $DB_USER $DB_NAME
fi

echo "Database setup complete."
