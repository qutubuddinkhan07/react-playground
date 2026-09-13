# React Playground

A personal collection of React concepts learned in class, along with hands-on tasks and exercises I've practiced along the way. This repo is a running log — new concepts and tasks get added as I learn them.

## 📌 About

This repository serves as my learning notebook for React. Each concept is either:

- A small standalone component demonstrating the idea, or
- A task/exercise solving a specific problem using that concept

## 🧠 Concepts Covered

> Located inside `React Class/my_app/src/concepts/` — a Vite-based project. This list is updated as I progress through new topics.
> `React Class/create-react-app/` is a separate, earlier scratch project built with the legacy Create React App tooling and isn't part of this list.

| Concept                                 | Link                                                              |
| --------------------------------------- | ----------------------------------------------------------------- |
| Props                                   | [View](./React%20Class/my_app/src/concepts/props)                 |
| Props Drilling                          | [View](./React%20Class/my_app/src/concepts/propsDrilling)         |
| Conditional Rendering                   | [View](./React%20Class/my_app/src/concepts/conditional_rendering) |
| List Rendering                          | [View](./React%20Class/my_app/src/concepts/listrendering)         |
| CSS (Modules/Styling)                   | [View](./React%20Class/my_app/src/concepts/css)                   |
| Forms                                   | [View](./React%20Class/my_app/src/concepts/forms)                 |
| State — Class-Based Components (CBC)    | [View](./React%20Class/my_app/src/concepts/state/CBC)             |
| State — Function-Based Components (FBC) | [View](./React%20Class/my_app/src/concepts/state/FBC)             |
| Ref                                     | [View](./React%20Class/my_app/src/concepts/ref)                   |
| Portal                                  | [View](./React%20Class/my_app/src/concepts/portal)                |
| Context API                             | [View](./React%20Class/my_app/src/concepts/contextAPI)            |
| Error Boundary                          | [View](./React%20Class/my_app/src/concepts/errorBoundary)         |
| Higher Order Component (HOC)            | [View](./React%20Class/my_app/src/concepts/higherOrderComponent)  |
| Pure Components                         | [View](./React%20Class/my_app/src/concepts/pureComponents)        |
| Lifecycle Methods                       | [View](./React%20Class/my_app/src/concepts/lifeCycleMethods)      |
| useEffect                               | [View](./React%20Class/my_app/src/concepts/useEffect)             |
| useCallback                             | [View](./React%20Class/my_app/src/concepts/useCallback)           |
| useMemo                                 | [View](./React%20Class/my_app/src/concepts/useMemo)               |
| Routing                                 | [View](./React%20Class/my_app/src/concepts/routing)               |

## ✅ Tasks

> All tasks live inside a single `react-practice` project under `React HW/`, organized by date in `src/Tasks/`.

| Task Topic                        | Link                                                                       |
| --------------------------------- | -------------------------------------------------------------------------- |
| Getting Started (14-08)           | [View](./React%20HW/react-practice/src/Tasks/14-08-getting-started)        |
| Component Architecture (17-08)    | [View](./React%20HW/react-practice/src/Tasks/17-08-component-architecture) |
| Navbar Webpage (20-08)            | [View](./React%20HW/react-practice/src/Tasks/20-08-nav-webpage)            |
| Props (24-08)                     | [View](./React%20HW/react-practice/src/Tasks/24-08-props)                  |
| State (27-08)                     | [View](./React%20HW/react-practice/src/Tasks/27-08-state)                  |
| useRef (01-09)                    | [View](./React%20HW/react-practice/src/Tasks/01-09-useRef)                 |
| useState (08-09)                  | [View](./React%20HW/react-practice/src/Tasks/08-09-useState)               |
| Portals (09-09)                   | [View](./React%20HW/react-practice/src/Tasks/09-09-portal)                 |
| useEffect / Digital Clock (13-09) | [View](./React%20HW/react-practice/src/Tasks/13-09-useEffect)              |

## 📁 Structure

```
├── React Class/
│   ├── create-react-app/       # Legacy CRA-based practice app
│   └── my_app/                  # Main concepts app (Vite)
│       └── src/concepts/
│           ├── conditional_rendering/
│           ├── contextAPI/
│           ├── css/
│           ├── errorBoundary/
│           ├── forms/
│           ├── higherOrderComponent/
│           ├── lifeCycleMethods/
│           ├── listrendering/
│           ├── portal/
│           ├── props/
│           ├── propsDrilling/
│           ├── pureComponents/
│           ├── ref/
│           ├── routing/
│           ├── state/
│           │   ├── CBC/         # Class-Based Components
│           │   └── FBC/         # Function-Based Components (incl. InputFieldTask)
│           ├── useCallback/
│           ├── useEffect/
│           └── useMemo/
├── React HW/
│   └── react-practice/          # Single Vite project holding all HW tasks
│       └── src/Tasks/
│           ├── 14-08-getting-started/
│           ├── 17-08-component-architecture/
│           ├── 20-08-nav-webpage/
│           ├── 24-08-props/
│           ├── 27-08-state/
│           ├── 01-09-useRef/
│           ├── 08-09-useState/
│           ├── 09-09-portal/
│           └── 13-09-useEffect/
└── README.md
```

_(Updating this section as new dated task folders or concept folders get added.)_

## 🚀 Getting Started

`React Class/` folders are each standalone projects with their own `package.json`. `React HW/` is a single project (`react-practice`) containing all homework tasks.

**React Class (per-folder projects):**

```bash
git clone https://github.com/qutubuddinkhan07/React-Class-In-Dept.git
cd "React-Class-In-Dept/React Class/my_app"   # or any other concept folder
npm install
npm run dev      # for Vite-based projects
# or
npm start        # for Create React App-based projects
```

**React HW (single project):**

```bash
git clone https://github.com/qutubuddinkhan07/React-Class-In-Dept.git
cd "React-Class-In-Dept/React HW/react-practice"
npm install
npm run dev
```

All homework tasks live under `src/Tasks/`, organized by date — open the relevant task folder to view its source.

## ✍️ Why Public?

This repo was originally private but has been made public temporarily so others can reference it while I'm actively learning and adding content.

## 📄 License

This project is for personal learning purposes. Feel free to browse and use any code as reference.
