export default function AnimatedText({ text }) {


    return (
        <>
            <br></br>
            <div className="md:text-8xl font-semibold text-center
            bg-gradient-to-r bg-clip-text  text-transparent 
            from-indigo-500 via-teal-500 to-violet-500
            animate-text
            ">
            {text}
            </div>
        </>
    );
}