import React from 'react'
import { Results } from './Results';
import { Routes, Route, Navigate } from 'react-router-dom';

export const Routing = () => {
  return (
    <>

      <Routes>
        <Route exact path="/" element={<Navigate to="/search" />}>

        </Route>
        <Route exact path='/search' element={<Results/>}/>
        <Route exact path='/images' element={<Results/>}/>
        <Route exact path='/news' element={<Results/>}/>
        <Route exact path='/videos' element={<Results/>}/>


      </Routes>
    </>
  )
}
