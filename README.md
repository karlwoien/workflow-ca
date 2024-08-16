# Workflow CA - Noroff

## Description
This project is forked from the [Noroff Social Media Client repo](https://github.com/noroffFEU/social-media-client) and adds ESLint, Prettier, Husky, Lint-staged, Jest, Cypress, GitHub Actions, automated testing with unit-testing and e2e..

## Goal
The goal of the assignment was to use the skills and knowledge gathered from the course Workflow, and improve the quality of a package by establishing helpful workflows that make the development process more efficient.

## Status
[![Automated Unit Testing](https://github.com/karlwoien/workflow-ca/actions/workflows/unit-test.yml/badge.svg?branch=workflow)](https://github.com/karlwoien/workflow-ca/actions/workflows/unit-test.yml)
[![Automated E2E Testing](https://github.com/karlwoien/workflow-ca/actions/workflows/e2e-test.yml/badge.svg?branch=workflow)](https://github.com/karlwoien/workflow-ca/actions/workflows/e2e-test.yml)
[![Deploy static content to Pages](https://github.com/karlwoien/workflow-ca/actions/workflows/pages.yml/badge.svg?branch=master)](https://github.com/karlwoien/workflow-ca/actions/workflows/pages.yml)

## Getting started

### Installing
1. Clone the repo
2. Install dependencies 
```bash 
npm run install
```
3. Run the app 
```bash 
npm run build
```

### Running
1. To run the app 
```bash
npm start
```

### Running test
To perform both Jest and Cypress tests, run the following command:

```bash
npm run test
```
To only run Jest tests

```bash
npm run test-unit
```

To only run Cypress tests

```bash
npm run test-e2e-cli
```
