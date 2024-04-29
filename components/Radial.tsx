import React from 'react'

type RadialProps = {
    gradientPosition: string
}

function Radial({ gradientPosition }: RadialProps) {
    return (
        <div
            className="pointer-events-none fixed inset-0 transition duration-300 lg:absolute"
            style={{
                background: `radial-gradient(600px at ${gradientPosition}, rgba(29, 78, 216, 0.15), transparent 80%)`,
            }}
        ></div>
    )
}

export default Radial