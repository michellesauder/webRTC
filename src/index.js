import React from 'react';
import App from './App';
import { ContextProvider } from './SocketContext';
import './styles.css';

import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<ContextProvider>
                <App />
            </ContextProvider>
            );