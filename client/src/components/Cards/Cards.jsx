import Card from './../Card/Card';

export default function Cards(props) {
    return (
        <div>
            {
                props.drivers.map(driver => (
                    <Card
                        key={driver.id}
                        id={driver.id}
                        name={driver.name}
                        description={driver.description}
                        image={driver.image}
                        nationality={driver.nationality}
                        teams={driver.teams}
                        dob={driver.dob}
                    />
                ))
            }
        </div>
    );
}