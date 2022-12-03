import { useEffect, useState } from "react";
import React from 'react'

export default function clientOnly({children, ...delegated}) {
    const [hasMounted, setHasMounted] = useState(false);
    useEffect(()=>{
        setHasMounted(true);
    },[]);

    if(!hasMounted){
        return null;
    }
  return (
    <div {...delegated} >
        {children}
    </div>
  )
}
