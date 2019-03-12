const testFunc = ({ params, store, redirect }) => {
    if (params.id < 100) {
        return redirect('/product')
    }
}


export default testFunc