import { Container, Row, Col, Step1 } from 'src/components/All'

const StepOne = () => {
	return (
		<Container className="full-h flex y-center">
			<Row className="flex one">
				<Col size="col-lg-6 offset-lg-3 col-12">
					<Step1 />
				</Col>
			</Row>
		</Container>
	)
}

export default StepOne
