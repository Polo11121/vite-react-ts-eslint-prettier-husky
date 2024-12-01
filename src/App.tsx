import { Route, Routes } from 'react-router'

export const App = () => (
  <Routes>
    <Route
      path="/"
      element={<div className="text-red-500">vite-react-ts-eslint-prettier-husky</div>}
    />
  </Routes>
)
