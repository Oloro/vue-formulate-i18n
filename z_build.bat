@echo off
npm run build:esm & npm run build:umd & npm run build:iife & sh ./build/locales.sh
