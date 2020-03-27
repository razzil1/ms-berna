# Backend

## Setup

Rename `.env.sample` to `.env`.

## Build

```bash
docker build -t interventure-backend:1.0.0 .
docker run -p 8080:8080 -d interventure-backend:1.0.0
```

## Testing

```bash
npm test
```

## Docs

http://localhost:8080/api-docs

## Monitoring

http://localhost:8080/metrics