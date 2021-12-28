import { useRouter } from 'next/router'
import { Button, Form } from 'react-bootstrap'
import { Title } from 'src/components/All'
import * as Style from './style'

import { ChangeStepTwo } from '../../store/actions/stepTwo.action'
import { useSelector, useDispatch } from 'react-redux'

const Step2 = () => {
	const router = useRouter()

	const dispatch = useDispatch()
	const stepOne = useSelector((state) => state.StepOneReducer)
	const stepTwo = useSelector((state) => state.StepTwoReducer)

	const handleInputChange = (e) => {
		const { name, value } = e.target
		dispatch(ChangeStepTwo({ ...stepTwo, [name]: value }))
		//console.log(name, value)
	}

	const handleClick = (e) => {
		e.preventDefault()
		router.push('/step-2')
	}
	return (
		<Form>
			<Title mb="mb" align="center">
				Legal <span>{stepOne.name},</span> agora conclua o seu cadastro!
			</Title>

			<Form.Group className="mb-3">
				<Form.Control
					className="mb-3"
					type="password"
					placeholder="Senha"
					name="pass"
					value={stepTwo.pass}
					onChange={handleInputChange}
				/>
				<Form.Control
					type="password"
					placeholder="Confirmar Senha"
					name="checkPass"
					value={stepTwo.checkPass}
					onChange={handleInputChange}
				/>
			</Form.Group>

			<Style.boxBtn>
				<Button
					type="submit"
					variant="primary"
					size="lg"
					onClick={handleClick}
				>
					Finalizar
				</Button>
			</Style.boxBtn>
		</Form>
	)
}

export default Step2
