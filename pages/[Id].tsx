import React from 'react'
import { contextTods } from './utils/types';

const pages = ({data}:any) => {
    console.log(data)
  return (
    <div>
      
    </div>
  )
}
export async function getServerSideProps(context:any){
const {Id}=context.params;
const res=await fetch(`https://jsonplaceholder.typicode.com/users/${Id}/todos/`)
}
export default pages
