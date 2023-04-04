'use client';
import { useState } from "react";

import './globals.css'
import { Amplify, Auth } from 'aws-amplify';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsconfig from '@/aws-exports';
Amplify.configure(awsconfig);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
      <Authenticator>
          {({ signOut, user }) => (
              <main>
                  <h1>Hello {user.username}</h1>
                  <button onClick={signOut}>Sign out</button>
                  {children}
              </main>
          )}
      </Authenticator>
      </body>
    </html>
  )
}
