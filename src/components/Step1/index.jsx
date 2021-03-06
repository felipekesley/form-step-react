import * as yup from 'yup'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import { Button, Form } from 'react-bootstrap'
import { Title } from 'src/components/All'
import * as Style from './style'

import { ChangeStepOne } from '../../store/actions/stepOne.action'
import { useSelector, useDispatch } from 'react-redux'

const Step1 = () => {
	const router = useRouter()

	const dispatch = useDispatch()
	const stepOne = useSelector((state) => state.StepOneReducer)

	const handleInputChange = (e) => {
		const { name, value } = e.target
		dispatch(ChangeStepOne({ ...stepOne, [name]: value }))
		//console.log(name, value)
	}

	const validate = async () => {
		let schema = yup.object().shape({
			email: yup
				.string()
				.email('Informe um email válido!')
				.required('Informe o seu email!'),
			name: yup.string().required('Informe o seu nome!')
		})

		try {
			await schema.validate(stepOne)
			return true
		} catch (err) {
			toast.error(`${err.errors}`, {
				position: 'top-center',
				autoClose: 5000
			})
			return false
		}
	}

	const handleClick = async (e) => {
		e.preventDefault()

		if (!(await validate())) return
		router.push('/step-2')
	}
	return (
		<Form>
			<Title mb="mb" align="center">
				Primeiro informe seu nome e email
			</Title>

			<Form.Group className="mb-3">
				<Form.Control
					className="mb-3"
					type="text"
					placeholder="Nome"
					name="name"
					value={stepOne.name}
					onChange={handleInputChange}
				/>
				<Form.Control
					type="email"
					placeholder="nome@example.com"
					name="email"
					value={stepOne.email}
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
					Próximo
				</Button>
			</Style.boxBtn>
		</Form>
	)
}

export default Step1
