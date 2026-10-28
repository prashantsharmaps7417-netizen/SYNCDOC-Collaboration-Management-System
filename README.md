# SyncDoc - Collaborative Document Engine

## 🚀 Overview
SyncDoc is an enterprise-grade collaborative document editor that uses Abstract Syntax Tree (AST) technology to eliminate destructive editing conflicts. It enables multiple users to edit complex documents simultaneously without data loss.

## ✨ Features
- **AST-based Conflict Resolution**: Intelligent merging of structural document changes
- **Real-time Collaboration**: Live editing with cursor presence
- **Zero Data Loss**: Never lose edits due to conflicts
- **Rich Document Support**: Code blocks, tables, headings, lists, and more
- **Enterprise Security**: Role-based access, audit trails, and encryption

## 🏗️ Architecture


## 🛠️ Technology Stack

### Backend
- Node.js + Express
- MongoDB + Mongoose
- Redis (Pub/Sub & Caching)
- Socket.IO (WebSockets)
- JWT Authentication

### Frontend
- React 18
- Tailwind CSS
- Socket.IO Client
- React Query

### DevOps
- Docker & Docker Compose
- Kubernetes
- GitHub Actions
- Prometheus + Grafana

## 📦 Quick Start

### Prerequisites
- Node.js v18+
- Docker & Docker Compose
- MongoDB (or use Docker)
- Redis (or use Docker)

### Development Setup

```bash
# Clone the repository
git clone <your-repo-url>
cd syncdoc

# Install dependencies
npm install

# Setup environment variables
cp backend/.env.example backend/.env.local
cp frontend/.env.example frontend/.env.local

# Start all services
npm run dev

# Or use Docker
npm run docker:up


# Run all tests
npm test

# Run backend tests
npm run test:backend

# Run frontend tests
npm run test:frontend

# Run tests with coverage
npm test -- --coverage
