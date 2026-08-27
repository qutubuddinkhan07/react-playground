# React Playground

A personal collection of React concepts learned in class, along with hands-on tasks and exercises I've practiced along the way. This repo is a running log — new concepts and tasks get added as I learn them.

## 📌 About

This repository serves as my learning notebook for React. Each concept is either:

- A small standalone component demonstrating the idea, or
- A task/exercise solving a specific problem using that concept

## 🧠 Concepts Covered

> Located inside `React Class/my_app/src/concepts/`. This list is updated as I progress through new topics.

| Concept                                 | Link                                                              |
| --------------------------------------- | ----------------------------------------------------------------- |
| Props                                   | [View](./React%20Class/my_app/src/concepts/props)                 |
| Conditional Rendering                   | [View](./React%20Class/my_app/src/concepts/conditional_rendering) |
| CSS (Modules/Styling)                   | [View](./React%20Class/my_app/src/concepts/css)                   |
| State — Class-Based Components (CBC)    | [View](./React%20Class/my_app/src/concepts/state/CBC)             |
| State — Function-Based Components (FBC) | [View](./React%20Class/my_app/src/concepts/state/FBC)             |

## ✅ Tasks

> Each task lives in its own dated project folder inside `React HW/`, so it can be run independently.

| Task Topic                     | Link                                              |
| ------------------------------ | ------------------------------------------------- |
| Getting Started (14-08)        | [View](./React%20HW/14-08-getting-started)        |
| Component Architecture (17-08) | [View](./React%20HW/17-08-component-architecture) |
| Navbar Webpage (20-08)         | [View](./React%20HW/20-08-nav_webpage)            |
| Props (24-08)                  | [View](./React%20HW/24-08-props)                  |
| State (27-08)                  | [View](./React%20HW/27-08-state)                  |

## 📁 Structure

```
├── React Class/
│   ├── editing-in-class/     # Scratch/practice app used during live class
│   ├── my-app/                # Early CRA-based practice app
│   └── my_app/                 # Main concepts app (Vite)
│       └── src/concepts/
│           ├── conditional_rendering/
│           ├── css/
│           ├── props/
│           └── state/
│               ├── CBC/       # Class-Based Components
│               └── FBC/       # Function-Based Components (incl. InputFieldTask)
├── React HW/
│   ├── 14-08-getting-started/
│   ├── 17-08-component-architecture/
│   ├── 20-08-nav_webpage/
│   ├── 24-08-props/
│   └── 27-08-state/
└── README.md
```

_(Update this section as new dated task folders or concept folders get added.)_

## 🚀 Getting Started

Each folder under `React Class/` and `React HW/` is its own standalone project with its own `package.json`. To run any one of them:

```bash
git clone https://github.com/qutubuddinkhan07/React-Class-In-Dept.git
cd "React-Class-In-Dept/React HW/27-08-state"   # or any other task/concept folder
npm install
npm run dev      # for Vite-based projects
# or
npm start        # for Create React App-based projects
```

## ✍️ Why Public?

This repo was originally private but has been made public temporarily so others can reference it while I'm actively learning and adding content.

## 📄 License

This project is for personal learning purposes. Feel free to browse and use any code as reference.
