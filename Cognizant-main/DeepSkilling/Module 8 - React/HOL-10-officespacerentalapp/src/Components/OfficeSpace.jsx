import "../index.css";

function OfficeSpace() {

    const office = {
        name: "Sky View Office",
        rent: 55000,
        address: "Hyderabad"
    };

    const offices = [

        {
            name: "Sky View Office",
            rent: 55000,
            address: "Hyderabad"
        },

        {
            name: "Tech Park",
            rent: 75000,
            address: "Bangalore"
        },

        {
            name: "Business Hub",
            rent: 45000,
            address: "Chennai"
        },

        {
            name: "Corporate Tower",
            rent: 85000,
            address: "Mumbai"
        }

    ];

    return (

        <div className="container">

            <h1 className="title">
                Office Space Rental App
            </h1>

            <img
                src="/office.jpg"
                alt="Office"
                className="office-image"
            />

            <h2 className="heading">
                Single Office Details
            </h2>

            <div className="office-card">

                <h2>{office.name}</h2>

                <p>

                    <b>Rent : </b>

                    <span className={office.rent < 60000 ? "red" : "green"}>

                        ₹{office.rent}

                    </span>

                </p>

                <p>

                    <b>Address :</b> {office.address}

                </p>

            </div>

            <h2 className="heading">
                Available Office Spaces
            </h2>

            {

                offices.map((item,index)=>(

                    <div className="office-card" key={index}>

                        <h2>{item.name}</h2>

                        <p>

                            <b>Rent : </b>

                            <span className={item.rent<60000?"red":"green"}>

                                ₹{item.rent}

                            </span>

                        </p>

                        <p>

                            <b>Address :</b> {item.address}

                        </p>

                    </div>

                ))

            }

        </div>

    );

}

export default OfficeSpace;