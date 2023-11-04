import React, { useState } from 'react'
import './page.css'


const Third = () => {
    const [count, setCount] = useState<number>(0);
    return (
        <section className='page-section'>
            <div className="grid-container">
                <div className="game-card-cover-container">
                    <img src={require('../assets/drink/1ac5bedb4e454efc8da2dadeef026d52_292x292.webp')} alt='' width="150" height="150" />
                    <div className="title-card-body">
                        <div className="title-card">
                            <span className="card-title">Морс Черная смородина </span>
                        </div>
                    </div>
                    <div className="description-container">
                        <span className="card-title">
                        </span>
                    </div>
                    <div>
                        <span className="price-title">
                            79 ₽
                        </span>
                        <button className='to-bucket-button' onClick={() => setCount(count + 1)}>В Корзину</button>
                    </div>

                </div>
                <div className="game-card-cover-container">
                    <img src={require('../assets/drink/96016f51ba8245dabd6f808b7435d646_292x292.webp')} alt='' width="150" height="150" />
                    <div className="title-card-body">
                        <div className="title-card">
                            <span className="card-title">Морс Вишня</span>
                        </div>
                    </div>
                    <div className="description-container">
                        <span className="card-title">
                        </span>
                    </div>
                    <div>
                        <span className="price-title">
                            79 ₽
                        </span>
                        <button className='to-bucket-button' onClick={() => setCount(count + 1)}>В Корзину</button>
                    </div>
                </div>
                <div className="game-card-cover-container">
                    <img src={require('../assets/drink/c9b7cc910d9c423f9ce073ba04a92205_292x292.webp')} alt='' width="150" height="150" />
                    <div className="title-card-body">
                        <div className="title-card">
                            <span className="card-title">Морс Клюква </span>
                        </div>
                    </div>
                    <div className="description-container">
                        <span className="card-title">
                        </span>
                    </div>
                    <div>
                        <span className="price-title">
                            79 ₽
                        </span>
                        <button className='to-bucket-button' onClick={() => setCount(count + 1)}>В Корзину</button>
                    </div>
                </div>

                <div className="game-card-cover-container">
                    <img src={require('../assets/drink/7d8acee0f9984844bdeb3e22d359a4fc_292x292.webp')} alt='' width="150" height="150" />
                    <div className="title-card-body">
                        <div className="title-card">
                            <span className="card-title">Карамельное яблоко молочный коктейль</span>
                        </div>
                    </div>
                    <div className="description-container">
                        <span className="card-title">
                            Уютное сочетание яблочного вкуса, теплой карамели, молока и мороженого в вашем стакане
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
                    <img src={require('../assets/drink/de7a12c1a960434cadc309df31da75ed_292x292.webp')} alt='' width="150" height="150" />
                    <div className="title-card-body">
                        <div className="title-card">
                            <span className="card-title">Молочный коктейль с печеньем Орео</span>
                        </div>
                    </div>
                    <div className="description-container">
                        <span className="card-title">
                            Как вкуснее есть печенье? Его лучше пить! Попробуйте молочный коктейль с мороженым и дробленым печеньем «Орео»
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
                    <img src={require('../assets/drink/b37a2fc8d9ac4636957fdd71f62d1725_292x292.webp')} alt='' width="150" height="150" />
                    <div className="title-card-body">
                        <div className="title-card">
                            <span className="card-title">Банановый молочный коктейль</span>
                        </div>
                    </div>
                    <div className="description-container">
                        <span className="card-title">
                            По-настоящему солнечный! Молочный коктейль с добавлением бананового пюре
                        </span>
                    </div>
                    <div>
                        <span className="price-title">
                            119 ₽
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

export default Third