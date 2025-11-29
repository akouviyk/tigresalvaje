#!/bin/bash

# Tigre Salvaje Deployment Script
# This script builds and commits the project for GitHub Pages deployment

set -e  # Exit on error

echo "🐢 Starting Tigre Salvaje Deployment Process..."
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Are you in the project root?"
    exit 1
fi

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo "✅ Dependencies installed"
    echo ""
fi

# Run build
echo "🔨 Building project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

echo "✅ Build successful"
echo ""

# Add all changes
echo "📝 Adding changes to git..."
git add .

# Get commit message
echo "Enter commit message (or press Enter for default):"
read commit_message

if [ -z "$commit_message" ]; then
    commit_message="Update site for deployment"
fi

# Commit changes
git commit -m "$commit_message"

if [ $? -ne 0 ]; then
    echo "⚠️  Nothing to commit or commit failed"
fi

# Push to GitHub
echo "🚀 Pushing to GitHub..."
git push origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Deployment initiated!"
    echo ""
    echo "📊 GitHub Actions will now build and deploy your site."
    echo "🌐 Your site will be available at: https://akouviyk.github.io/tigresalvaje/"
    echo ""
    echo "⏱️  Deployment usually takes 2-3 minutes."
    echo "💡 Check progress at: https://github.com/akouviyk/tigresalvaje/actions"
else
    echo "❌ Push failed!"
    exit 1
fi
