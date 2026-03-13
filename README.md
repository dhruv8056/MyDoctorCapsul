# 🎨 MDC UI Project

Modern React UI built with TypeScript, Material Design Components, and a complete development ecosystem.

---

## 📋 Table of Contents
- [About](#about)
- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Key Features](#key-features)
- [Contributors](#contributors)

---

## 🎯 About

MDC UI is a comprehensive React application featuring:
- Material Design Components integration
- Modern UI/UX with responsive design
- Admin dashboard and teacher management features
- Real-time communication with Socket.io
- Complete form validation and error handling
- Multi-language support

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|---------------|
| **Frontend Framework** | React 18.2 + TypeScript 5.2 |
| **Build Tool** | Vite 5.2 |
| **UI Components** | Material-UI (MUI 5.15) |
| **State Management** | Redux + Redux Persist |
| **Routing** | React Router v6 |
| **Styling** | Tailwind CSS, SASS/SCSS, Styled Components |
| **Forms** | Formik + Yup validation |
| **Real-time** | Socket.io Client |
| **HTTP Client** | Axios |
| **Testing** | Jest + React Testing Library |
| **Code Quality** | ESLint + Prettier |
| **Icons** | React Icons, Heroicons, Iconify |

---

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build optimized production bundle |
| `npm run preview` | Preview production build locally |
| `npm run lint:check` | Check code for linting errors |
| `npm run lint:fix` | Auto-fix linting errors |
| `npm run prettier:check` | Check code formatting |
| `npm run prettier:fix` | Auto-format code |
| `npm test` | Run Jest test suite |
| `npm run coverage` | Generate test coverage report |

---

## 📂 Project Structure

```
src/
├── app/                 # Main application setup
├── core/                # Core services & utilities
│   ├── config/          # Configuration
│   ├── dynamicForm/     # Dynamic form handling
│   ├── error/           # Error management
│   ├── logger/          # Logging service
│   ├── theme/           # Theme management
│   └── toaster/         # Notification service
├── features/            # Feature modules
│   ├── admin/           # Admin dashboard
│   └── teacherDashboardRoutes/  # Teacher features
├── shared/              # Shared resources
│   ├── components/      # Reusable UI components
│   ├── hooks/           # Custom React hooks
│   ├── utils/           # Utility functions
│   └── constants/       # App constants & enums
├── store/               # Redux store & actions
├── assets/              # Images, icons, configs
└── tests/               # Test files
```

---

## ✨ Key Features

✅ **Responsive Design** - Works seamlessly on all devices  
✅ **Material Design** - Professional UI with MUI components  
✅ **Type-Safe Code** - Full TypeScript support  
✅ **State Management** - Redux with persist capability  
✅ **Form Validation** - Formik + Yup integration  
✅ **Real-time Updates** - Socket.io integration  
✅ **Error Handling** - Comprehensive error boundaries  
✅ **Code Quality** - ESLint + Prettier automation  
✅ **Unit Testing** - Jest test coverage  
✅ **Dark/Light Theme** - Theme context support  

---

## 🔧 Development Setup

### Code Quality Tools
```bash
# Check & fix linting
npm run lint:check
npm run lint:fix

# Check & format code
npm run prettier:check
npm run prettier:fix
```

### Running Tests
```bash
# Run all tests
npm test

# Generate coverage report
npm run coverage
```

### Docker Support
```bash
# Docker Compose available at:
deployments/docker/docker-compose.yml
```

---

## 👥 Contributors

**Project Owner:** Jay Sharma  
**Email:** jaydiwork@gmail.com  
**GitHub:** [jaydi-github](https://github.com/jaydi)  
**Role:** Full Stack Developer  

**Project:** MDC UI Dashboard System  
**Version:** 0.0.0  
**Status:** Active Development  

---

## 📝 Notes

- ✓ All dependencies are up-to-date and production-ready
- ✓ Comprehensive test coverage for features module
- ✓ Pre-commit hooks configured with Husky
- ✓ Environment configuration in `src/assets/configs/config.local.json`

---

**Happy Coding! 🎉**
