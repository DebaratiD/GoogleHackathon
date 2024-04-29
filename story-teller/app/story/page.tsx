// pages/index.tsx
'use client'
import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '../components/Navbar';
import {data} from '../sampledata'

function Story() {
  
  const params = useSearchParams()

  return (

      <div>
        
        <Navbar/>

        <div>

            Welcome to the story!
        </div>
        
    </div>
  );
};

export default Story;
