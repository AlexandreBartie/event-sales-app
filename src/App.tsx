import React from "react"

import * as dotenv from 'dotenv';

import "./App.css"

import AppFormUX from "./components/forms/AppForm/AppFormUX"

dotenv.config();

export default function App() {
    return <AppFormUX />
}

