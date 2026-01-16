# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build and Development Commands

```bash
pnpm install          # Install dependencies
pnpm run build        # Compile TypeScript
pnpm run start:dev    # Development server with watch mode
pnpm run start:debug  # Start with debugger
pnpm run start:prod   # Run production build (node dist/main)
```

## Testing Commands

```bash
pnpm run test              # Run Jest unit tests
pnpm run test:watch        # Run tests in watch mode
pnpm run test:cov          # Generate coverage report
pnpm run test:e2e          # Run end-to-end tests
```

## Code Quality

```bash
pnpm run lint         # ESLint with auto-fix
pnpm run format       # Prettier formatting
```

## Architecture

This is a NestJS backend API for processing bank CSV files (Finary financial data).

**Tech Stack:** NestJS 11, TypeScript 5.7, Jest, SWC compiler, pnpm

### CSV Processing Pipeline

The main functionality is a CSV processing pipeline:

```
GET / → AppController
  → csvOrchestrateurService.read(filePath)
    → CsvReaderService.readFile()         # Read file as UTF-8
    → CsvParserService.formatStringDataCSV()  # Parse semicolon-delimited data
    → CsvMapperService.format()           # Convert to typed CsvLine objects
```

### Module Structure

- **AppModule** - Root module, imports CSVModule
- **CSVModule** (`src/CSV/`) - CSV processing pipeline with orchestrator pattern
  - `csvOrchestrateur.service.ts` - Coordinates reader → parser → mapper
  - `csvReader.service.ts` - File I/O
  - `csvParser.service.ts` - Semicolon parsing, generates UUIDs
  - `csvMapper.service.ts` - Type conversion (dates, numbers)
  - `models/` - Data models (CsvLine interface, CSVBrut, ligneCSVBrut)
- **BankingModule** (`src/Banking/`) - Stub for future analytics features

### Data Models

- **CsvLine** - Final output: `{ id: UUID, date: Date, libelle: string, credit: number, debit: number }`
- **ligneCSVBrut** - Raw parsed strings before type conversion
- **CSVBrut** - Container for array of raw lines

## Configuration

- Server runs on port 3000 (configurable via `PORT` env var)
- CSV files expected in `./input/` directory (gitignored)
- CSV format: semicolon-delimited fields in groups of 4 (date; libelle; debit; credit)