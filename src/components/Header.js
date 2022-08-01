import { Button } from "./styles/button.styled"
import { Container } from "./styles/container.styles"
import { FlexStyles } from "./styles/flex.styled"
import { Image, Logo, Nav, StyledHeader } from "./styles/Header.styles"
export const Header = () => {
    return (
        <StyledHeader >
            <Container>
                <Nav>
                    <Logo src="./images/logo.svg" alt='' />
                   
                    <Button>Start Free</Button>
                </Nav>
                <FlexStyles>
                <div>
            <h1>Build The Community Your Fans Will Love</h1>

            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>

            <Button bg='#ff0099' color='#fff'>
              Get Started For Free
            </Button>
          </div>

          <Image src='./images/illustration-mockups.svg' alt='' />
                </FlexStyles>
            </Container>
        </StyledHeader>
    )
}