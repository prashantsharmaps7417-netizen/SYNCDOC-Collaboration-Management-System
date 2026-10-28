# SyncDoc v5.1 — Local Development Fixes

## Frontend
Run from `frontend`:

```bash
npm install
npm start
```

The frontend is configured for `http://localhost:3000` and API `http://localhost:5000/api`.

## Backend
Run from `backend`:

```bash
npm install
npm run dev
```

The backend `.env` uses:

```env
PORT=5000
CORS_ORIGIN=http://localhost:3000
MONGODB_URI=mongodb://127.0.0.1:27017/syncdoc
```

## Important
Do not run an old backend on port 5000 at the same time. Stop existing Node processes before starting SyncDoc.

Windows PowerShell:

```powershell
Get-NetTCPConnection -LocalPort 5000 -ErrorAction SilentlyContinue
Get-Process node -ErrorAction SilentlyContinue
```

If necessary, stop the old Node process from Task Manager or with `Stop-Process -Id <PID>`.

## Improvements in v5.1
- CORS is registered before MongoDB/Redis startup.
- OPTIONS preflight is explicitly handled.
- `/api/health` is available even while dependencies are unavailable.
- `/api/system/status` reports MongoDB, Redis, realtime, memory and runtime status.
- React Router v7 future flags are enabled to remove development deprecation warnings.
- CRA-compatible `REACT_APP_API_URL` and `REACT_APP_SOCKET_URL` values are included.
