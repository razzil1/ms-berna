# Frontend

## Setup

Rename `.env.sample` to `.env`.

## Build

```bash
docker build -t interventure-frontend:1.0.0 .
docker run -p 3000:80 -d interventure-frontend:1.0.0
```