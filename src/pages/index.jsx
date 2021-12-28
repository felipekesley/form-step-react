import { Container, Row, Col, Hello } from 'src/components/All'

export default function Home() {
	return (
		<Container className="full-h flex y-center">
			<Row className="flex one">
				<Col size="col-lg-6 offset-lg-3 col-12">
					<Hello />
				</Col>
			</Row>
		</Container>
	)
}
