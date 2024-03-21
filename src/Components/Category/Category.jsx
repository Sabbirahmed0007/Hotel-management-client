import React, { useState } from 'react';
import { categories } from './categoriesData';
import Container from '../Shared/Container';
import CategoryBox from './CategoryBox';

const Category = () => {


    const []= useState([]);




    return (
        <div>
            <Container>
                <div className='flex gap-2 flex-wrap items-center justify-center my-5'>
                    {categories.map(category=><CategoryBox label={category.label} icon={category.icon} key={category.label}></CategoryBox>)}
                </div>

            </Container>
        </div>
    );
};

export default Category;