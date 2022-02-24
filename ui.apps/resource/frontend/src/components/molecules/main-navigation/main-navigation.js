import React from 'react';
import HtmlComment from '../../particles/html-comment/HtmlComment';

function getMenuItems(item) {
    let _children = null;
    if (item.children?.length) {
        _children = (
            <ul className='sub-menu'>
                {item.children.map(i => getMenuItems(i))}
            </ul>
        );
    }
  
    return (
      <li className={`${item.children.length? 'has-children':''} ${item.viewportType || ''} ${item.clickToCall || ''}`} key={item.id}>
        <a href={item.linkUrl || '#'} title={item.title || 'nav item'}>{item.title}</a>
        {item.children.length? <span className='angle-down'></span> : '' }
        {_children}
      </li>
    );
  }


const MainNavigation = props => {
    return (
        <div className="main-navigation section">

            <HtmlComment text="Start main-navigation component markup, Copy from here" />
            <div className="main-navigation__inner">
                <div className="main-navigation__close">
                    <button className="main-navigation__close-btn"></button>
                </div>
                <ul>
                    {(props.items || []).map( (item, i=index)=> {
                        return getMenuItems(item)
                    })}
                </ul>
            </div>
            <HtmlComment text="End main-navigation component markup, Copy from here" />
            
        </div>
    )
}

export default MainNavigation;