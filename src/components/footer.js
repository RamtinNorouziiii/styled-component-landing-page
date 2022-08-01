import SocialIcons from './social'
import { Container } from './styles/container.styles'
import { FlexStyles } from './styles/flex.styled'
import { StyledFooter } from './styles/foter.styled'

export default function Footer() {
  return (
  <StyledFooter>
      <Container>
        <img src='./images/logo_white.svg' alt='' />

        <FlexStyles>
          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
            <li>+1-543-123-4567</li>
            <li>example@huddle.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>

          <SocialIcons />
        </FlexStyles>

        <p>&copy; 2021 Huddle. All rights reserved</p>
      </Container>
      </StyledFooter>
   
  )
}