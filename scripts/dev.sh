#!/usr/bin/env bash
# Start Next dev, avoiding a stuck server on the default port.
set -euo pipefail
PORT="${PORT:-3000}"

if lsof -Pi ":${PORT}" -sTCP:LISTEN -t >/dev/null 2>&1; then
  PIDS="$(lsof -Pi ":${PORT}" -sTCP:LISTEN -t 2>/dev/null | tr '\n' ' ')"
  echo ""
  echo "Port ${PORT} is already in use (PID: ${PIDS})."
  echo "That is usually an old 'next dev'. Stop it with:"
  echo "  kill ${PIDS}"
  echo ""
  ALT=3001
  if lsof -Pi ":${ALT}" -sTCP:LISTEN -t >/dev/null 2>&1; then
    ALT=3002
  fi
  echo "Starting Next.js on port ${ALT} instead → http://localhost:${ALT}"
  echo ""
  exec npx next dev -p "${ALT}"
fi

exec npx next dev -p "${PORT}"
