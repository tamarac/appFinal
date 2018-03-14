import { combineReducers } from 'redux'
const rootReducer = combineReducers({
	todo: () => ({
		description: 'Ler livro',
		list: [{
			_id: 1,
			description: 'Pagar fatura do cartão',
			done: true
		},
		{
			_id: 2,
			description: 'Reunião as 10h',
			done:false
		},
		{
			_id: 3,
			description: 'Consulta médico terça 20/03 as 8h',
			done: false
		}]
	})
})

export default rootReducer