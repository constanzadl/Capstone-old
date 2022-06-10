import { SideBar } from "./categorySideBar";
import styled from "styled-components"
import { Product, productList } from "./common/product";
import { useState } from 'react';
import { ProductGrid } from "./common/grid";

const ProductListStyled = styled.div`
    display: flex;
    align-items: flex-start;
    @media screen and (max-width: 768px) {
        flex-wrap: wrap;
    }
    .listItems {
        display: flex;
        flex-wrap: wrap;
    }
    .pagination-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
    .pagination {
            font-size: 1rem;
            font-weight: 500;
            color: #3d1d0f;
            border: 2px solid #3d1d0f;
            background: white;
            padding: 10px;
            border-radius: 5px;
            margin: 10px;
            cursor: pointer;
        }
        .pag-active {
            color: white;
            font-weight: 600;
            border: 2px solid #3d1d0f;
            background: #3d1d0f;
        }
`

const ListStyled = styled.div `
    display: block
    padding: 10px;
    width: 200px;
    margin: 10px;
    padding: 10px;
    border-radius: 15px;
    border: 2px solid #3d1d0f;
    img {
        width: 200px;
    }
`

const Filtered = ({activeCategory}) => {

    const categories =  productList.filter(category => 
        category.data.category.slug.toLowerCase() === 
        activeCategory.toLowerCase()).map((filteredCategory, i) => 
           <ListStyled key={filteredCategory.id}>
               <Product n={i} />
            </ListStyled>)

    const condition = activeCategory === "";

    return (condition ? <ProductGrid /> : 
    (categories.length === 0 ? <p> No products available for this category</p> 
    : categories))
}

export const ProductListPage = () => {
    const [activeCategory, setActiveCategory] = useState("");

    return ( 
        <ProductListStyled>
            <SideBar setActiveCategory={setActiveCategory} activeCategory={activeCategory}/>
            <div className="listItems">
                <Filtered activeCategory={activeCategory}/>
                <div className="pagination-wrapper">
                    <button className="pagination pag-active">1</button>
                    <button className="pagination">2</button>
                    <button className="pagination">3</button>
                </div>
            </div>
        </ProductListStyled>
    );
}