import { Button, Card } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const About = () => {

    const navigate = useNavigate()

    return(
        <>
    <Card style={{ width: '58rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
        <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas nisl felis, a cursus velit pulvinar sed. Ut eu ex lectus. Integer luctus sodales ultricies. Donec interdum, eros et porttitor sagittis, dolor nulla condimentum nisi, a gravida tortor neque quis dolor. Fusce cursus hendrerit vehicula. Curabitur scelerisque feugiat eros in commodo. Donec suscipit, ante ac blandit accumsan, neque nunc pellentesque risus, non scelerisque turpis tellus at eros. Nam urna est, finibus a justo et, aliquam egestas purus. Fusce rutrum nisl vel enim pretium sagittis. Fusce massa neque, fermentum a sagittis eget, semper eu nisi. Nam ullamcorper elementum placerat. Aliquam iaculis metus porta, vestibulum nunc nec, euismod neque. Pellentesque eget tortor est. Curabitur sodales risus ligula. Morbi a ante eget ipsum sagittis posuere.</p>
    </Card.Body>
    </Card>
    <Button variant="primary" onClick={() => navigate('/')} >Back</Button>
      </>
    )
}

export default About