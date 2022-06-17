export default function AnimatedText({ text }) {
    return (
        <>
            <br></br>
            <div className="md:text-8xl font-semibold text-center
            bg-gradient-to-r bg-clip-text  text-transparent 
            from-white via-teal-600 to-white
            animate-text
            ">
            {text}
            </div>
        </>
    );
}