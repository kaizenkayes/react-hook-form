# 📝 React Hook Form Project – Login & Register Forms

This project is a simple but complete implementation of **Login** and **Register** forms using [React Hook Form](https://react-hook-form.com/). It demonstrates how to manage form state, validation, and dynamic fields using React best practices.

---

## 🚀 Features

- 🔐 Login Form with email and password validation
- 📝 Register Form with:
  - File upload (picture)
  - Email, password, name, and age fields
  - Dynamic social media links using `useFieldArray`
- 🧠 Built using `react-hook-form`:
  - `useForm`
  - `Controller` (for custom components like age input)
  - `useFieldArray` (for dynamic form fields)
- ✅ Validation with error messages
- 🎨 Styled using Tailwind CSS

---

## 🧰 Technologies Used

- React
- React Hook Form
- Tailwind CSS

---

## 📁 Folder Structure
src/
├── components/
│ ├── Field.jsx
│ ├── FieldSet.jsx
  |-- InputNumber
├── forms/
│ ├── LoginForm.jsx
│ └── RegisterForm.jsx
├── App.jsx
└── main.jsx

---

## 🧩 Key Libraries

```bash
npm install react-hook-form
