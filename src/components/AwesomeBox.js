export function AwesomeComponent(props) {
    return (
        /*<svg width="300" height="300">
        <rect  width="300" height="300" style={{fill:"red"}}/>
        <text x="150" y="150" text-anchor="middle" alignment-baseline="central" style={{fill:"white"}}>I'm AwesomeBox</text>
        </svg>*/
        <div className="rect" style={{backgroundColor:props.color}}>
            <div className="rectText" style={{color:props.textColor}}>
                { props.whoAreyou }
            </div>
        </div>
    )
}