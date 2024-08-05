#!/bin/bash

# Navigate to your Next.js project directory
cd /path/to/your/nextjs/project

# Build your Next.js application
npm run build

# Export your Next.js application for deployment
npm run export

# Navigate to the out directory
cd out

# Initialize a new Git repository
git init

# Add all files to the repository
git add .

# Commit the changes
git commit -m "Deploy to Cloudflare Pages"

# Add the remote repository
git remote add origin https://github.com/memeco/memeco.com.br.git

# Force push to the main branch
git push -f origin main

# Deploy to Cloudflare Pages
npx wrangler pages publish --project-name=memeco-com-br
