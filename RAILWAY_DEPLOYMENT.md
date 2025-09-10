# Railway Deployment Guide for Starfall

Your Starfall Fortnite launcher app is now ready for Railway deployment! 

## Files Created for Railway

1. **railway.json** - Railway service configuration
2. **nixpacks.toml** - Build configuration for Nixpacks
3. **deploy.sh** - Custom deployment script
4. **RAILWAY_DEPLOYMENT.md** - This guide

## Deployment Steps

### 1. Connect to Railway
1. Go to [Railway.app](https://railway.app)
2. Sign up/login with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your repository

### 2. Environment Variables
Railway will automatically detect this as a Node.js app. You may need to set:
- `NODE_ENV=production` (usually set automatically)
- `PORT` (Railway sets this automatically)

### 3. Database (Optional)
If you want to use a real database instead of in-memory storage:
1. Add a PostgreSQL service in your Railway project
2. Railway will provide a `DATABASE_URL` environment variable
3. The app is already configured to use PostgreSQL with Drizzle ORM

### 4. Deploy
Railway will automatically:
1. Install dependencies
2. Run the build script (`deploy.sh`)
3. Start the server with `npm start`

## How the Deployment Works

1. **Build Process**: The `deploy.sh` script runs the Vite frontend build and esbuild backend build
2. **File Copying**: Static files are copied to the correct location for serving
3. **Server Start**: Express server starts and serves both API and static files on the assigned port

## Domain & SSL
- Railway provides a free subdomain (*.railway.app)
- SSL certificates are automatically provisioned
- You can add custom domains in the Railway dashboard

## Monitoring
- View logs in the Railway dashboard
- Monitor deployments and resource usage
- Set up health checks (already configured in railway.json)

Your app is production-ready and will automatically scale on Railway!