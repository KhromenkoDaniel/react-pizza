import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader
        className='pizza-block'
        speed={1}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#ffdf8c"
        foregroundColor="#ffffff"
        {...props}
    >
        <rect x="21" y="397" rx="9" ry="9" width="119" height="27" />
        <circle cx="141" cy="123" r="111" />
        <rect x="21" y="285" rx="10" ry="10" width="244" height="88" />
        <rect x="22" y="245" rx="10" ry="10" width="242" height="27" />
        <rect x="148" y="389" rx="20" ry="20" width="119" height="45" />
    </ContentLoader>
)

export default Skeleton