import React, { useEffect } from 'react';

import { mmoApp } from '../../../business/ESM-App/ESM-Project';
import { MainForm } from '../MainForm/MainForm';

import MainFormUX from '../MainForm/MainFormUX';
import SplashFormUX from '../SplashForm/SplashFormUX';

// let main: MainForm;

export default function AppFormUX() {
  useEffect(() => {
    async function getMain() {
      // main = new MainForm(new mmoApp());
    }
    getMain().catch(console.error);
  }, []);

  if (true) return <MainFormUX ux={new MainForm(new mmoApp())} />;
  else return <SplashFormUX />;
}
