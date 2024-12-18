import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: '/',
        lazy: async () => {
            const AppShell = await import('./pages/Home')
            return { Component: AppShell.default }
        },
    },
    {
        path: '/fincloud',
        lazy: async () => ({
            Component: (await import('@/pages/Fincloud')).default,
        }),
    },
])

export default router
