import logo from '../assets/togetherworkslogo.png'

interface LogoProps {
    className?: string
}

export default function Logo({ className = 'h-56 w-auto' }: LogoProps) {
    return (
        <img
            src={logo}
            alt="TogetherWorks"
            className={className}
        />
    )
}