[![Actions Status](https://github.com/genest4p-cpu/qa-auto-engineer-javascript-project-87/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/genest4p-cpu/qa-auto-engineer-javascript-project-87/actions)
[![Node CI](https://github.com/genest4p-cpu/qa-auto-engineer-javascript-project-87/actions/workflows/node-ci.yml/badge.svg)](https://github.com/genest4p-cpu/qa-auto-engineer-javascript-project-87/actions/workflows/node-ci.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=genest4p-cpu&branch=main&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=genest4p-cpu&branch=main)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=genest4p-cpu&branch=main&metric=coverage)](https://sonarcloud.io/summary/new_code?id=genest4p-cpu&branch=main)

# Difference Calculator

`gendiff` is a CLI utility for comparing two configuration files and displaying their differences. It helps inspect changes in JSON and YAML files and can render output in stylish, plain, or JSON formats.

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/genest4p-cpu/qa-auto-engineer-javascript-project-87.git
cd qa-auto-engineer-javascript-project-87
make install
```

## Usage

```bash
gendiff [options] <filepath1> <filepath2>
```

### Output formats

```bash
gendiff file1.json file2.json
gendiff --format plain file1.yml file2.yml
gendiff --format json file1.yaml file2.yaml
```

## Demo recordings

Stylish format:
[![asciicast](https://asciinema.org/a/yw8vFs1wpWQVK4IE.svg)](https://asciinema.org/a/yw8vFs1wpWQVK4IE)

Plain format:
[![asciicast](https://asciinema.org/a/75T819ESbF4RqKsc.svg)](https://asciinema.org/a/75T819ESbF4RqKsc)

JSON format:
[![asciicast](https://asciinema.org/a/gs1PVofj7doIJKjK.svg)](https://asciinema.org/a/gs1PVofj7doIJKjK)

## Commands

### Run linter

```bash
make lint
```

### Run tests

```bash
make test
```

### Run tests with coverage

```bash
make test-coverage
```