import React from 'react'

export default function Field({label , children , htmlFor , error}) {
    const id = htmlFor || getChildId(children)
  return (
    <div className='flex flex-col justify-start items-start mt-2 p-0 mr-2 w-full' >
        {label && <lable htmlFor={id} className="mb-2">{label}</lable>}
        {children}
        {error && <div className='text-red-500'>{error.message}</div> }
    </div>
  )
}

const getChildId = (children) => {
   const child = React.Children.only(children)

   if("id" in child.props){
    return child?.props.id
   }
}
