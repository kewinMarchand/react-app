import React, { Component } from "react"
// Theme
import Theme from "../../theme/Theme"
// UI components
import { Fade, Grid } from '@material-ui/core'

const Anim = (props) => {
    return (
        <animateTransform 
            attributeName="transform" 
            type="rotate" 
            from="0 64 64" 
            to="360 64 64" 
            dur={props.dur}
            repeatCount="indefinite"
        />
    )
}

class Loader extends Component {

    render() {
        return (    
            <Grid container 
                alignItems={'center'} 
                justify={'center'} 
                style={{flexGrow: 1}}
            >
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    version="1.0" 
                    width="128px" height="128px" 
                    viewBox="0 0 128 128" 
                    xmlSpace="preserve"
                >
                    <g>
                        <path 
                            fill={Theme.palette.primary.main} 
                            fillOpacity="0.28" 
                            d="M99.359,10.919a60.763,60.763,0,1,0,0,106.162A63.751,63.751,0,1,1,99.359,10.919Z"
                        />
                        <Anim dur="1080ms" />
                    </g>
                    <g>
                        <path 
                            fill={Theme.palette.secondary.main}
                            fillOpacity="0.58" 
                            d="M28.641,117.081a60.763,60.763,0,1,0,0-106.162A63.751,63.751,0,1,1,28.641,117.081Z"
                        />
                        <Anim dur="1620ms" />
                    </g>
                    <g>
                        <path 
                            fill={Theme.palette.primary.main}
                            fillOpacity="1" 
                            d="M117.081,99.313a60.763,60.763,0,1,0-106.162,0A63.751,63.751,0,1,1,117.081,99.313Z"
                        />
                        <Anim dur="3240ms" />
                    </g>
                </svg>
            </Grid>
        )
    }
}

export default Loader