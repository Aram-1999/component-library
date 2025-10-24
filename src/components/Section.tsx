interface SectionProps {
    title: String;
    children: React.ReactNode;
}

function Section ({title, children} : SectionProps) {
    return (
        <section className='p-5'>
            <h2 className="mb-5 font-bold text-xl">{title}</h2>
            {children}
        </section>
    )
}

export default Section;