import React, { useState } from 'react'
import './page.css'

const Second = () => {
    const [count, setCount] = useState<number>(0);
    return (
        <section className='page-section'>
            <div className="grid-container">
                <div className="game-card-cover-container">
                    <img src={require('../assets/dessert/5a06bd533bb846f59cfb4b8c4e062f86_292x292.webp')} alt='' width="150" height="150" />
                    <div className="title-card-body">
                        <div className="title-card">
                            <span className="card-title">Чизкейк Нью-Йорк</span>
                        </div>
                    </div>
                    <div className="description-container">
                        <span className="card-title">
                            Мы перепробовали тысячу десертов и наконец нашли любимца гостей — нежнейший творожный чизкейк
                        </span>
                    </div>
                    <div>
                        <span className="price-title">
                            119 ₽
                        </span>
                        <button className='to-bucket-button' onClick={() => setCount(count + 1)}>В Корзину</button>
                    </div>
                </div>
                <div className="game-card-cover-container">
                    <img src={require('../assets/dessert/2556eeed7a3b4822ba62a6f30e111465_292x292.webp')} alt='' width="150" height="150" />
                    <div className="title-card-body">
                        <div className="title-card">
                            <span className="card-title">Чизкейк Банановый с шоколадным печеньем</span>
                        </div>
                    </div>
                    <div className="description-container">
                        <span className="card-title">
                            Солнечный снаружи и яркий по вкусу внутри. Летняя новинка — нежный чизкейк с бананом и шоколадным печеньем
                        </span>
                    </div>
                    <div>
                        <span className="price-title">
                            119 ₽
                        </span>
                        <button className='to-bucket-button' onClick={() => setCount(count + 1)}>В Корзину</button>
                    </div>
                </div>
                <div className="game-card-cover-container">
                    <img src={require('../assets/dessert/33bbe8803b6a41268c6cc3980db0be3a_292x292.webp')} alt='' width="150" height="150" />
                    <div className="title-card-body">
                        <div className="title-card">
                            <span className="card-title">Брауни</span>
                        </div>
                    </div>
                    <div className="description-container">
                        <span className="card-title">
                            Умножили какао на шоколад и получили изумительный десерт. Вот такая сладкая арифметика
                        </span>
                    </div>
                    <div>
                        <span className="price-title">
                            229 ₽
                        </span>
                        <button className='to-bucket-button' onClick={() => setCount(count + 1)}>В Корзину</button>
                    </div>
                </div>

                <div className="game-card-cover-container">
                    <img src={require('../assets/dessert/aaaf00a849a14804ba9264dc7838021e_292x292.webp')} alt='' width="150" height="150" />
                    <div className="title-card-body">
                        <div className="title-card">
                            <span className="card-title">Сырники с малиновым вареньем </span>
                        </div>
                    </div>
                    <div className="description-container">
                        <span className="card-title">
                            Любимый десерт многих наших гостей — румяные сырники из печи. Такие нежные, в меру сладкие и напоминающие детство
                        </span>
                    </div>
                    <div>
                        <span className="price-title">
                            199 ₽
                        </span>
                        <button className='to-bucket-button' onClick={() => setCount(count + 1)}>В Корзину</button>
                    </div>
                </div>
                <div className="game-card-cover-container">
                    <img src={require('../assets/dessert/b6e9f3a923a84c32b4cc24ad06c8a84e_292x292.webp')} alt='' width="150" height="150" />
                    <div className="title-card-body">
                        <div className="title-card">
                            <span className="card-title">Сорбет Бразильская маракуйя и манго</span>
                        </div>
                    </div>
                    <div className="description-container">
                        <span className="card-title">
                            Сладкое солнце Бразилии. Яркий сорбет из маракуйи и манго. Название продукта фантазийное и не означает, что продукт содержит маракуйю из Бразилии
                        </span>
                    </div>
                    <div>
                        <span className="price-title">
                            199 ₽
                        </span>
                        <button className='to-bucket-button' onClick={() => setCount(count + 1)}>В Корзину</button>
                    </div>

                </div>
                <div className="game-card-cover-container">
                    <img src={require('../assets/dessert/c0a35a9f4e904db4ae79571f188e132d_292x292.webp')} alt='' width="150" height="150" />
                    <div className="title-card-body">
                        <div className="title-card">
                            <span className="card-title">Рулетики с корицей</span>
                        </div>
                    </div>
                    <div className="description-container">
                        <span className="card-title">
                            Десерт, одобренный нашими бабушками. Горячие сладкие рулетики с пряной корицей и сахаром
                        </span>
                    </div>
                    <div>
                        <span className="price-title">
                            129 ₽
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

export default Second