import { getHeroesByPublisher } from "../helpers"



export const HeroList = ({ publisher }) => {
    const heroes = getHeroesByPublisher(publisher)
    return (
        <ul className="list-group">
            {heroes.map(hero => {
                return <li key={hero.id} className="list-group-item">{hero.superhero}</li>
            })}
        </ul>

    )
}
