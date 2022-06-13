import { ProductGrid } from "./common/grid.js";
import { Slider } from "./common/slider/slider.js";
import styled from "styled-components"
import { Category } from "./common/categorypics.js";

const HomeStyled = styled.div`
    .homeBtn {
        background: none;
        border: 1px solid #3d1d0f;
        color: #3d1d0f;
        padding: 10px 15px;
        margin: 10px;
        border-radius: 10px;
        font-size: 1.3rem;
        &:hover {
            background: #3d1d0f;
            color: white;
            box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
            cursor: pointer;
        }
    }
    `
    const CategoryGrid = styled.div`
    display: flex;
    justify-content: center;
`
    
export const HomePage = ({setActiveState}) => {
    return (
        <HomeStyled>
            <Slider />
            <p className="sectionTitle">Categories</p>
            <CategoryGrid>
                <Category />
            </CategoryGrid>
            <p className="sectionTitle">Featured Products</p>
            <ProductGrid/>
            <button className="homeBtn" 
            onClick={() => setActiveState('Loading')}>View All Products</button>
        </HomeStyled>
    )
}
