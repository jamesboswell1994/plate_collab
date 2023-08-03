import React, {Component} from 'react'
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const CookieChecker = () => {
    const nav = useNavigate()
    const [cookies] = useCookies(['verified']);
  
    useEffect(() => {
    const cookieExists = !!cookies.verified; 
  
      if (cookieExists) {
       nav('/feed');
      }
    }, [cookies]);
  
    return (<div classname = "cookieChecker"></div>
    )
    ;
  };
  
  export default CookieChecker;