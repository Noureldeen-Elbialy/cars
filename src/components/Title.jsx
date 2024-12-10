const Title = ({className,title,desc}) => {
    return (
        <div className={`title space-y-9 ${className}`}>
            <span className="uppercase bg-blue-500/5 rounded-md border-blue/10 border text-blue-600 py-2 px-4 text-xl">{title}</span>
            <h2 className="font-semibold text-2xl md:text-4xl uppercase">{ desc}</h2>
        </div>
    )
}

export default Title
