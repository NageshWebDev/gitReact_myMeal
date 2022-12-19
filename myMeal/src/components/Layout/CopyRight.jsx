export default function CopyRight(){

    const styleDiv = {
        backgroundColor : 'yellowgreen',
        color: 'black',
        lineHeight: '5rem',
        display : 'flex',
        flexDirection : 'column',
        margin :'Auto',
        textAlign : 'center',
        fontFamily: 'system-ui' 
    }

    return(
        <div style={styleDiv}>
        <span>Copyright © 2022 MyMeal.in All Rights Reserved.</span>
        </div>
    )
}