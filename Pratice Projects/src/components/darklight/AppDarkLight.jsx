import React from 'react';
import { ThemeProvider, DarkLight } from "./DarkLight";

export default function AppDarkLight() {
  return (
    <>
      <ThemeProvider>
        <DarkLight />
      </ThemeProvider>
    </>
  );
}