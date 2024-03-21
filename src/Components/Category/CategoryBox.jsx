import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import qs from 'query-string';
const CategoryBox = ({label, icon:Icon}) => {

    const [params , setParams]= useSearchParams();
    const navigate = useNavigate();
    params.get('category');

    const handleClick=()=>{
            console.log('Clicked', label)
            let currentQuery ={};
            if(params){
                currentQuery = qs.parse(params.toString());
                
    
                const updatedQuery ={...currentQuery, category: label}
    
                const url = qs.stringifyUrl({
                    url:'/',
                    query: updatedQuery,
                })
                navigate(url);
            }
        }



    return (
        <div>
            
            <div onClick={handleClick} className='border-b-2 border-gray-500 p-1 hover:border-b-black  font-semibold hover:font-bold rounded-lg cursor-pointer hover:text-neutral-800 transition box-content'>
            <div className='flex items-center justify-center mb-1'>
                <Icon size={26}></Icon>
            </div>
            <p className=''>{label}</p>

            </div>
        </div>
    );
};

export default CategoryBox;