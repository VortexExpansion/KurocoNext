export default function AnimatedText({ text }) {
    return (
        <>
            <br></br>
            <div className="md:text-8xl font-semibold text-center
            bg-gradient-to-r bg-clip-text  text-transparent 
            from-rose-500 via-black to-rose-500
            animate-text
            ">
            {text}
            </div>
        </>
    );
}