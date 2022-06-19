import React from 'react';

class List extends React.Component {
    render() {
    const shoppingList = ['leite', 'arroz', 'feijão', 'banana', 'carne'];
    const items = shoppingList.map((item, index) => {
        return (<li key={ index }>{ item }</li>);
    });

    return (
        <div>
            <h2>Lista de compras</h2>
            <ul>
            { items }
            </ul>
        </div>
    );
    }
}

export default List;