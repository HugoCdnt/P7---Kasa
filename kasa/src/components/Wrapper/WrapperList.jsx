import WrapperContent from './WrapperContent'
import ('/Users/hugocadenat/Documents/Formation_dév_web/P7/kasa/src/styles/About.css');

// const WrapperList = ({titles}) => {    
const WrapperList = ({titles}) => {    
    // const titles = ["Test", "Test 2", "Test 5", "Pipi"];

    return (
            <ul className='wrappers-list'>
                {titles.map(( title ) =>
                    <WrapperContent
                        title={title}
                    />
                )}
            </ul>
    )
}

export default WrapperList