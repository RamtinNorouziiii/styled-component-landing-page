import { StyledCard } from "./styles/card.style"

export const Card = ({ item: { id, title, body, image } }) => {
    return (
        <StyledCard id={id} >

            <div>
                <h2>{title}</h2>
                <p>{body}</p>
            </div>

            <div>
                <img src={`./images/${image}`} alt='' />
            </div>

        </StyledCard>
    )
}