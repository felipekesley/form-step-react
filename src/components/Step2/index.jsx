import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Button, Form } from 'react-bootstrap'
import { toast } from 'react-toastify'
import { Title } from 'src/components/All'
import * as Style from './style'

import { ChangeStepTwo } from '../../store/actions/stepTwo.action'
import { useSelector, useDispatch } from 'react-redux'
import StepOne from 'src/pages/step-1'

const Step2 = () => {
	const router = useRouter()
	//const [dados, setDados] = useState([])

	const dispatch = useDispatch()
	const stepOne = useSelector((state) => state.StepOneReducer)
	const stepTwo = useSelector((state) => state.StepTwoReducer)

	useEffect(() => {
		if (stepOne.name == '' || StepOne.email == '') {
			router.push('/step-1')
		}
	}, [router, stepOne.name])

	const handleInputChange = (e) => {
		const { name, value } = e.target
		dispatch(ChangeStepTwo({ ...stepTwo, [name]: value }))
		//console.log(name, value)
	}

	const handleClick = (e) => {
		e.preventDefault()
		//router.push('/step-2')
		//setDados({ ...stepOne, ...stepTwo })
		toast.success('Cadastro realizado com sucesso!', {
			position: 'top-center',
			autoClose: 5000
		})
	}
	//const result = JSON.stringify(dados)
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
