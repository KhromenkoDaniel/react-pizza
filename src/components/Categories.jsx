import React from 'react'

import PepperIcon from '../assets/img/pepper.png'

function Categories() {
  const [activeIndex,setActiveIndex] = React.useState(0);
const categories = ['Всі','М\'ясні','Вегетаріанські','Гриль','Гострі','Закриті']
  const onCLickCategory = (categoryIndex) => { setActiveIndex(categoryIndex)}
    return (
      <div className="categories">
        <ul>{categories.map((value,i) => (<li onClick={() => onCLickCategory(i)} className={activeIndex === i ? 'active' : ''}>{value}</li>))}
          
          {/*<li onClick={() => onCLickCategory(0)} className={activeIndex === 0 ? 'active' : ''}>Всі</li> 
          <li onClick={() => onCLickCategory(1)} className={activeIndex === 1 ? 'active' : ''}>М'ясні</li>
          <li onClick={() => onCLickCategory(2)} className={activeIndex === 2 ? 'active' : ''}>Вегетаріанські</li>
          <li onClick={() => onCLickCategory(3)} className={activeIndex === 3 ? 'active' : ''}>Гриль</li>
          <li onClick={() => onCLickCategory(4)} className={activeIndex === 4 ? 'pepperLi active' : 'pepperLi'}>Гострі<img width={22} src={PepperIcon} alt="Pepper" /></li>
          <li onClick={() => onCLickCategory(5)} className={activeIndex === 5 ? 'active' : ''}>Закриті</li> */}
        </ul>
      </div>
    );
  }

  export default Categories;
    
 
  