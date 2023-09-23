import Image from './about/img.png'
import SectionHead from './programs/SectionHead'
import {GiCutDiamond} from 'react-icons/gi'
import { values } from '../data'
import Cards from '../UI/Cards'

const Values = () => {
  return (
    <section className="values">
        <div className="container values-container">
            <div className="values-left">
                <div className="values-image">
                    <img src={Image} alt="Values Img" />
                </div>
            </div>
            <div className="values-right">
                <SectionHead icon={<GiCutDiamond/>} title="Core Values" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className="values-wrapper">
                    {
                        values.map(({id,icon,title,desc} ) => {
                            return <Cards key={id} className="values-value">
                                <span>{icon}</span>
                                <h4>{title}</h4>
                                <small>{desc}</small>
                            </Cards>
                        })
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Values
