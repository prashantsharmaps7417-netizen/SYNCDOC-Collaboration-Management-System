# SyncDoc Dynamic Dashboard Upgrade

## What changed

- Removed dashboard demo/fallback statistics.
- Added authenticated `GET /api/dashboard`.
- Dashboard statistics are calculated from MongoDB.
- Recent document activity is derived from document operations.
- Productivity chart is calculated from real document operations.
- Shared documents are calculated from collaborator membership.
- Projects are represented by accessible workspaces.
- Collaborator count is calculated from unique document collaborators.
- Recent documents come directly from MongoDB.
- Dashboard uses the authenticated user's real display name.
- Document creation now requires and sends a real workspace ID.
- Removed demo document fallback from `useDocuments`.
- Fixed frontend document update methods to use `PUT`, matching the backend routes.
- Added loading, empty and error states without fake data.

## API

`GET /api/dashboard`

Example response shape:

```json
{
  "success": true,
  "data": {
    "generatedAt": "2026-09-01T00:00:00.000Z",
    "stats": [],
    "productivity": {
      "7": []
    },
    "activity": [],
    "recentDocuments": []
  }
}
```

The exact values are generated from the authenticated user's database records.

## Important

The ZIP intentionally excludes `node_modules` and `.git` data. Run the normal dependency installation command inside `frontend` and `backend` before starting the project.

The existing notification UI, analytics page, admin page and other areas still contain legacy mock/fallback implementations in the original project and should be migrated to their corresponding backend endpoints as a separate phase.
