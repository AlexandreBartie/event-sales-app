import React, { useEffect } from 'react';

import { myApp } from '../../../business/myApp/myProject';
import { MainForm } from '../MainForm/MainForm';

import MainFormUX from '../MainForm/MainFormUX';
import SplashFormUX from '../SplashForm/SplashFormUX';

// let main: MainForm;

export default function AppFormUX() {
  useEffect(() => {
    async function getMain() {
      // main = new MainForm(new myApp());
    }
    getMain().catch(console.error);
  }, []);

  if (true) return <MainFormUX ux={new MainForm(new myApp())} />;
  else return <SplashFormUX />;
}
