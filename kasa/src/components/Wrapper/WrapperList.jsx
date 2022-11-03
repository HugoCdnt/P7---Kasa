import WrapperContent from './WrapperContent'
import ('/Users/hugocadenat/Documents/Formation_dév_web/P7/kasa/src/styles/About.css');

// const WrapperList = ({titles}) => {    
// const WrapperList = ({titles, text}) => {    
//     return (
//             <ul className='wrappers-list'>
//                 {titles.map(( title ) =>
//                     <WrapperContent
//                         title={title}
//                         text={text}
//                     />
//                 )}
//             </ul>
//     )
// }

const WrapperList = ({data}) => {    
    return (
            <ul className='wrappers-list'>
                {data.map(({ title, text }) =>
                    <WrapperContent
                        title={title}
                        text={text}
                    />
                )}
            </ul>
    )
}

export default WrapperList