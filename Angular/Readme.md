# Angular Project Setup

This project was created using Angular CLI.

---

## Requirements

### 1. Install Node.js

Download and install Node.js:

https://nodejs.org

Verify installation:

```bash
node -v
npm -v
```

---

### 2. Install Angular CLI

Install Angular CLI globally:

```bash
npm install -g @angular/cli
```

Verify installation:

```bash
ng version
```

---

## Clone Repository

```bash
git clone https://github.com/sachinyadavcoder/wad-practicals.git
```

Go to the Angular project folder:

```bash
cd Angular/user-app
```

---

## Install Dependencies

Run:

```bash
npm install
```

This will automatically create the `node_modules` folder.

---

## Run Angular Project

Start development server:

```bash
ng serve
```

Open browser:

```text
http://localhost:4200
```

---

## Important Notes

- `node_modules` is intentionally excluded from GitHub.
- Always run `npm install` after cloning the repository.
- The project works on Windows, Linux, and macOS.

---

## Useful Commands

### Start Development Server

```bash
ng serve
```

### Build Project

```bash
ng build
```

### Run Tests

```bash
ng test
```

---

## Tech Stack

- Angular
- TypeScript
- Node.js
- npm



---
# Extra knowledge
# Angular CLI Basics

## What is Angular CLI?

Angular CLI (Command Line Interface) is a tool used to create, run, and manage Angular projects easily.

Install Angular CLI globally:

```bash
npm install -g @angular/cli
```

Check version:

```bash
ng version
```

---

# Create New Angular Project

```bash
ng new my-app
```

Example:

```bash
ng new student-app
```

It creates a complete Angular project structure automatically.

---

# Move Into Project Folder

```bash
cd my-app
```

Example:

```bash
cd student-app
```

---

# Run Angular Project

```bash
ng serve
```

OR

```bash
ng serve --open
```

`--open` automatically opens browser.

Default URL:

```txt
http://localhost:4200
```

---

# Generate Components

```bash
ng generate component component-name
```

Shortcut:

```bash
ng g c component-name
```

Example:

```bash
ng g c home
```

Generated files:

```txt
home.component.ts
home.component.html
home.component.css
home.component.spec.ts
```

---

# Generate Service

```bash
ng g s service-name
```

Example:

```bash
ng g s auth
```

---

# Generate Module

```bash
ng g m module-name
```

Example:

```bash
ng g m admin
```

---

# Generate Directive

```bash
ng g d directive-name
```

---

# Generate Pipe

```bash
ng g p pipe-name
```

---

# Build Angular Project

Creates production-ready files.

```bash
ng build
```

Production build:

```bash
ng build --configuration production
```

Build files stored in:

```txt
dist/
```

---

# Angular CLI Help

```bash
ng help
```

For specific command help:

```bash
ng serve --help
```

---

# Important Angular CLI Commands

| Command | Purpose |
|---|---|
| `ng new app-name` | Create new project |
| `ng serve` | Run project |
| `ng build` | Build project |
| `ng test` | Run test cases |
| `ng generate component` | Create component |
| `ng generate service` | Create service |
| `ng add` | Add libraries/packages |
| `ng version` | Check Angular version |

---

# Angular Project Structure

```txt
my-app/
│
├── src/
│   ├── app/
│   ├── assets/
│   ├── index.html
│   └── styles.css
│
├── node_modules/
├── angular.json
├── package.json
└── tsconfig.json
```

---

# Important Files

| File | Use |
|---|---|
| `package.json` | Stores dependencies |
| `angular.json` | Angular project configuration |
| `src/main.ts` | Entry point |
| `app.component.ts` | Main component logic |
| `app.component.html` | Main UI |
| `styles.css` | Global CSS |

---

# Install Dependency

```bash
npm install package-name
```

Example:

```bash
npm install bootstrap
```

---

# Add Bootstrap in Angular

Install:

```bash
npm install bootstrap
```

Add in `angular.json`:

```json
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "src/styles.css"
]
```

---

# Create Component Without Test File

```bash
ng g c navbar --skip-tests
```

---

# Create Component Inside Folder

```bash
ng g c pages/home
```

---

# Routing in Angular

Create project with routing:

```bash
ng new my-app --routing
```

Generate routing module:

```bash
ng g m app-routing --flat --module=app
```

---

# Install Specific Angular Version

```bash
npm install -g @angular/cli@17
```

---

# Update Angular

```bash
ng update
```

---

# Delete node_modules and Reinstall

Delete:

```bash
rm -rf node_modules
```

Reinstall:

```bash
npm install
```

Windows:

```bash
rmdir /s /q node_modules
npm install
```

---

# Run Angular On Different Port

```bash
ng serve --port 5000
```

---

# Run Angular For Network Access

```bash
ng serve --host 0.0.0.0
```

---

# Create Production Build

```bash
ng build --prod
```

(New Angular versions use:)

```bash
ng build --configuration production
```

---

# Angular CLI Workflow

```txt
Install Angular CLI
        ↓
Create Project
        ↓
Run Project
        ↓
Generate Components/Services
        ↓
Develop Application
        ↓
Build Production Files
```
