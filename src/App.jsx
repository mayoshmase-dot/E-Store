import React, { useEffect } from 'react'
import { QueryClient, QueryClientProvider, } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import './i18n.js'
import { useTranslation } from 'react-i18next'
import { ThemeProvider } from '@emotion/react'
import theme from './theme.js'
import { CssBaseline } from '@mui/material'

export default function App() {

  const { i18n } = useTranslation();
  useEffect(() => {
    const dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.dir = dir;
  }, [i18n.language])
  const queryClient = new QueryClient()

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <RouterProvider router={router} />
        </ThemeProvider>
      </QueryClientProvider>
    </>
  )
}
