const colors = ["#0088FE", "#00C49F", "#FFBB28"];

export default function Card() {
    return (
        <>
            <br></br>
            <div >
                {colors.map((backgroundColor, index) => (
                    <div className="slideCard" key={index} style={{ backgroundColor }}>
                        <img src="images/1.jpeg" width="400"></img>
                        <h1>Sushi Title</h1>
                        <h3>Sushi info</h3>
                    </div>
                ))}
            </div>
        </>
    );
}