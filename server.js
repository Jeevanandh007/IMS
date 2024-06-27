if (process.env.NODE_ENV !== 'development') {
    require('dotenv').config();
  }
  
  const express = require('express');