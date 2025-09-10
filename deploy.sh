#!/bin/bash

# Railway deployment script for Starfall app
set -e

echo "Building application..."
npm run build

echo "Copying static files to server directory..."
cp -r dist/public server/

echo "Build complete! Ready for deployment."