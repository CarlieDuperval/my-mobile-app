import { Image} from 'react-native';

export default function Hero () {
    return(
        // All image need a size , It is really important
        <Image  
        style={{ width: 406, height: 232}}
        source={{ 
            uri:"https://www.bocacode.com/assets/images/2021.7.27-BocaCode-Web-53.png"
    }} />
    )
}