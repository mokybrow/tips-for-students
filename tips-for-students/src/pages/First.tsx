import React, { useState } from 'react'
import './page.css'


const First = () => {
    const [count, setCount] = useState<number>(0);
    return (
        <section className='page-section'>
            <div className="grid-container">
                <div className="game-card-cover-container">
                    <img src={require('../assets/pizza/18dbb12240b041a191c9dc73c9c1f4ef_292x292.webp')} alt='' width="150" height="150" />
                    <div className="title-card-body">
                        <div className="title-card">
                            <span className="card-title">Мясная</span>
                        </div>
                    </div>
                    <div className="description-container">
                        <span className="card-title">
                            Цыпленок, ветчина, пикантная пепперони, острая чоризо, моцарелла, фирменный томатный соус
                        </span>

                    </div>
                    <div>
                        <span className="price-title">
                            549 ₽
                        </span>
                        <button className='to-bucket-button' onClick={() => setCount(count + 1)}>В Корзину</button>
                    </div>

                </div>
                <div className="game-card-cover-container">
                    <img src={require('../assets/pizza/3a948b9d5af14d219e2c54282229755a_292x292.webp')} alt='' width="150" height="150" />
                    <div className="title-card-body">
                        <div className="title-card">
                            <span className="card-title">Бургер-пицца</span>
                        </div>
                    </div>
                    <div className="description-container">
                        <span className="card-title">Ветчина, маринованные огурчики, томаты, красный лук, чеснок, соус бургер, моцарелла, фирменный томатный соус</span>
                    </div>
                    <div>
                        <span className="price-title">
                            599 ₽
                        </span>
                        <button className='to-bucket-button' onClick={() => setCount(count + 1)}>В Корзину</button>
                    </div>

                </div>
                <div className="game-card-cover-container">
                    <img src={require('../assets/pizza/32a726c9e28c49b3b491115e440b5a23_760x760.webp')} alt='' width="150" height="150" />
                    <div className="title-card-body">
                        <div className="title-card">
                            <span className="card-title">Пицца Миксик</span>
                        </div>
                    </div>
                    <div className="description-container">
                        <span className="card-title">
                            Пицца четвертинками с ветчиной, цыпленком, томатами, брынзой, моцареллой и фирменным соусом альфредо
                        </span>
                    </div>
                    <div>
                        <span className="price-title">
                            499 ₽
                        </span>
                        <button className='to-bucket-button' onClick={() => setCount(count + 1)}>В Корзину</button>
                    </div>

                </div>
                <div className="game-card-cover-container">
                    <img src={require('../assets/pizza/45cc8ffb190c4a28aaf1863a67f675c7_584x584.webp')} alt='' width="150" height="150" />
                    <div className="title-card-body">
                        <div className="title-card">
                            <span className="card-title">Цыпленок барбекю</span>
                        </div>
                    </div>
                    <div className="description-container">
                        <span className="card-title">
                            Цыпленок, бекон, соус барбекю, красный лук, моцарелла, фирменный томатный соус
                        </span>
                    </div>
                    <div>
                        <span className="price-title">
                            649 ₽
                        </span>
                        <button className='to-bucket-button' onClick={() => setCount(count + 1)}>В Корзину</button>
                    </div>

                </div>
                <div className="game-card-cover-container">
                    <img src={require('../assets/pizza/42360a7dcb7640c998b723231586fe84_292x292.webp')} alt='' width="150" height="150" />
                    <div className="title-card-body">
                        <div className="title-card">
                            <span className="card-title">Сырный цыплёнок</span>
                        </div>
                    </div>
                    <div className="description-container">
                        <span className="card-title">
                            Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, фирменный соус альфредо, чеснок
                        </span>
                    </div>
                    <div>
                        <span className="price-title">
                            649 ₽
                        </span>
                        <button className='to-bucket-button' onClick={() => setCount(count + 1)}>В Корзину</button>
                    </div>

                </div>
                <div className="game-card-cover-container">
                    <img src={require('../assets/pizza/fb9cc5b8ff2e47bdbcbdcb5930cddf06_584x584.webp')} alt='' width="150" height="150" />
                    <div className="title-card-body">
                        <div className="title-card">
                            <span className="card-title">Пепперони</span>
                        </div>
                    </div>
                    <div className="description-container">
                        <span className="card-title">
                            Пикантная пепперони, увеличенная порция моцареллы, фирменный томатный соус
                        </span>
                    </div>
                    <div>
                        <span className="price-title">
                            399 ₽
                        </span>
                        <button className='to-bucket-button' onClick={() => setCount(count + 1)}>В Корзину</button>
                    </div>

                </div>
            </div>

            <div className="bucket-section">
                <img src={require("../assets/icons/shopping-basket.png")} alt="" />
                <span className='pizza-counter'>{count} </span>
            </div>
        </section>
    )
}

export default First