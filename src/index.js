import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const imgHolder = '#MISSING IMAGE#'
const Book1 = {
    img: '/sum.jpg',
    title: 'Stella Maris',
    author: 'Cormac McCarthy'
}
const Book2 = {
    img: '/sg.jpg',
    title: 'So Good They Cant Ignore You',
    author: 'Cal Newport'
}
const Book3 = {
    img: '/dw.jpg',
    title: 'Deep Work',
    author: 'Cal Newport'
}
const Book4 = {
    img: '/tp.jpg',
    title: 'The Passenger',
    author: 'Cal Newport'
}
const Book = (props) =>
{
    return(
        <article className='book'>
            <img src={props.img} alt={imgHolder}/>
            <h2>{props.title}</h2>
            <h4>{props.author}</h4>
        </article>
    )
}
function BookList()
{
    return(
        <section className='bookList'>
            <Book author={Book1.author} img={Book1.img} title={Book1.title} />
            <Book author={Book2.author} img={Book2.img} title={Book2.title}/>
            <Book author={Book3.author} img={Book3.img} title={Book3.title}/>
            <Book author={Book4.author} img={Book4.img} title={Book4.title}/>
        </section>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList/>);
