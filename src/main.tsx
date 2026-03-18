import { createRoot } from 'react-dom/client';
import { App } from './App.tsx';
import './styles/styles.scss';

const rootElement = document.querySelector('#root'); 

if (rootElement) {
  createRoot(rootElement).render(
    <App />
  );
} else {
  console.error("Помилка: Кореневий елемент DOM (#root) не знайдено.");
}