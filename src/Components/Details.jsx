import { Card, Button, Container } from "react-bootstrap"
import { useNavigate } from "react-router-dom"


const Details = () => {

    const navigate = useNavigate()

    return(
        <>
        <Container>
        <Card>
        <Card.Body>
          <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas nisl felis, a cursus velit pulvinar sed. Ut eu ex lectus. Integer luctus sodales ultricies. Donec interdum, eros et porttitor sagittis, dolor nulla condimentum nisi, a gravida tortor neque quis dolor. Fusce cursus hendrerit vehicula. Curabitur scelerisque feugiat eros in commodo. Donec suscipit, ante ac blandit accumsan, neque nunc pellentesque risus, non scelerisque turpis tellus at eros. Nam urna est, finibus a justo et, aliquam egestas purus. Fusce rutrum nisl vel enim pretium sagittis. Fusce massa neque, fermentum a sagittis eget, semper eu nisi. Nam ullamcorper elementum placerat. Aliquam iaculis metus porta, vestibulum nunc nec, euismod neque. Pellentesque eget tortor est. Curabitur sodales risus ligula. Morbi a ante eget ipsum sagittis posuere.
          </Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" src="https://fastly.picsum.photos/id/685/300/200.jpg?hmac=o3Va3kQ6AKfTS-RO-WzaL9qVhHFWm9lGLadtN5j1LYA" />
      </Card>
      <Button variant="primary" onClick={() => navigate('/')} >Back</Button>
      </Container>
      </>
    )
}

export default Details