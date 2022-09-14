export default {
	namespaced: true,
	
	state: ()=>({
		medicine: []
	}),
	
	mutation: {
		addToMedicineList(state, medicine) {
			const findResult = state.medicine.find(x => x.medicine_id === medicine.medicine_id)
			console.log(findResult)
			
			
			if(!findResult) {
				state.medicine.push(medicine)
			}
			
			console.log(state.medicine)
		}
	},
	
	getters: {}
}