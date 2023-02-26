import React from 'react'

import './main.css'

import icon1_block from '../img/1блок.png'

import icon2block1 from '../img/icon2block-1.png'
import icon2block3 from '../img/icon2block-3.png'
// 
import _3block1 from '../img/left.svg'
import _3block2 from '../img/3block1.png'
import _3block3 from '../img/3block2.png'
import _3block4 from '../img/3block3.png'
import _3block5 from '../img/3block4.png'
import _3block6 from '../img/right.svg'
import logoend3block from '../img/logo-end3block.svg'
import photo4block from '../img/photo4block.svg'
import footerarrow from '../img/Group 295.svg'




const Main = () => {
  return (
    <div className='main'>


{/* 1 блок ..................................................... */}

        <div className='first-block'>

            <div className='container__1'>
           <img src={icon1_block} className='icon1_block'/>

                <div className='text-1block'> 
                    <p className='title-1'>бренд</p>

                     <p className='txt-brand'>american vintage</p>
           
                    <p className='txt-colection'>Смотреть коллекцию</p>
                </div>

                <ul className='numb-li'>
                  <li className='numb01'>01</li> 
                  <li className='numb02'>02</li>
                  <li className='numb03'>03</li>
                  <li className='numb04'>04</li>
                </ul>

           </div>

        </div>
        


{/* 2 блок....................................................... */}


    <div className='second-block'>

        <div className='container__2'>

                <img src={icon2block1} />
                <div className='title-2'>

                <h1 className='txt-2'>new arrival</h1>

                <p className='txt-3'>Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem 
                  ipLorem ipsumLorem ipLorem ipsumLorem ipsumLorem 
                  ipsumLorem ipsumLorem ipLorem ipsumLorem ip
                </p>

                <h3 className='txt-4'>Смотреть коллекцию</h3>
                
                </div>




              <div className='white-square'></div>

                <img src={icon2block3} className='img2block'/>

                <p className='txt-5'>Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipLorem ipsumLorem ip</p>


        </div>

    </div>


{/* 3 блок ......................................................... */}


      <div className='third-block'>

          <div className='container__3'>

                <h3 className='h3-1'>Популярное</h3>

            <div className='pictures'>

              <div className='title__'>

                <img src={_3block2} className=''/>

                <h3>REPLAY</h3>
                <p className='p1'> Classic shoes</p>
                <div className='price'>
                <h4 className='UAH'>6100 UAH</h4>
                <h4 className='UAH2'>3800 UAH</h4>
                </div>
                <div className='line_3block-1'></div>
                
              </div>
{/* ........................... */}
              <div className='title__'>
                
                <img src={_3block3} className=''/>

                <h3>REPLAY</h3>
                <p className='p1'> Classic shoes</p>
                <div className='price'>
                <h4 className='UAH'>6100 UAH</h4>
                <h4 className='UAH2'>3800 UAH</h4>
                </div>
                <div className='line_3block-2'></div>
                
              </div>
{/* ........................... */}
              <div className='title__'>
                
                <img src={_3block4} className=''/>

                <h3>REPLAY</h3>
                <p className='p1'> Classic shoes</p>
                <div className='price'>
                <h4 className='UAH'>6100 UAH</h4>
                <h4 className='UAH2'>3800 UAH</h4>
                </div>
                <div className='line_3block-3'></div>
                
              </div>
{/* ............................. */}
              <div className='title__'>

                <img src={_3block5} className=''/>

                <h3>REPLAY</h3>
                <p className='p1'> Classic shoes</p>
                <div className='price'>
                <h4 className='UAH'>6100 UAH</h4>
                <h4 className='UAH2'>3800 UAH</h4>
                </div>
                <div className='line_3block-4'></div>
                
              </div>

            </div>  
{/* ................................ */}

            <div className='circle'>
              
            <img src={_3block1} className='arrow1'/>
            <img src={_3block6} className='arrow2'/>
              

            </div> 


            <div className='line-end1'></div>

            <img src={logoend3block} className='txt-end'/>

            <div className='line-end2'></div>

          </div>

      </div>

{/* 4 блок............................................................................... */}

    <div className='fourth-block'>

      <div className='container__4'>

          <h3 className='info-1'>О</h3>

          <h2 className='info-2'>НАС</h2>

          <p className='info-3'>Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipLorem 
          ipsumLoreLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipLorem ipsumLorem 
          ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumipLorem
           ipsumLoremLorem ipsumLorem 
          ipsumLorem ipsumLorem ipsumLorem ipLorem ipsumLorem ipsumLorem ipsumLorem </p>

          <img src={photo4block} className='photo-4block'/>

      </div>

    </div>


{/* 5 Блок ................................................................................ */}

      <div className='footer'>

        <div className='container__5'>

                <div className='footer_line'></div>

                <h2 className='h2_footer'>Будьте в курсе событий</h2>

                <input className='inp-footer'></input>

                <img src={footerarrow} className='footer-arrow'/>

                <div className='line-footer'></div>

                <ul className='li-footer'>

                    <li>О нас</li>
                    <li>Распространенные вопросы</li>
                    <li>Бренды</li>

                </ul>

                <div className='line-footer2'></div>
              
                <h6 className='end-txt1'>Все права защищены  © 2020 Allegria.com</h6>
                <h6 className='end-txt2'>Дизайн и разработка:</h6>


        </div>

      </div>


      
    </div>
    
  )
}

export default Main
