# SyncDoc Professional Premium v5

## Product-level upgrade

SyncDoc v5 adds a cohesive enterprise SaaS experience layer while preserving the existing collaborative document architecture.

### Frontend
- Premium glass/surface visual system
- Enterprise navigation polish
- Live connection/service status pill
- Offline awareness
- Quick Actions launcher
- Focus Mode (`Ctrl/Cmd + Shift + F`)
- Persistent focus preference
- Dark-theme surface treatment
- Compact/reduced-motion support
- PWA manifest and standalone install metadata
- Existing command palette, analytics, notifications, trash and editor retained

### Backend
- Authenticated `/api/system/status` operational telemetry endpoint
- Database readiness visibility
- Runtime/memory/uptime telemetry
- Node/runtime and realtime stack reporting
- Existing document, workspace, search, analytics, notifications, settings and collaboration APIs retained

## Run

```bash
npm install
npm run dev
```

Backend defaults to port 5000 and the frontend uses the existing CRA configuration.

## Production

Configure:
- `JWT_SECRET`
- `MONGODB_URI`
- `CORS_ORIGIN`
- `REACT_APP_API_URL`
- Redis/Yjs settings when using distributed realtime deployment

Do not commit production secrets.
