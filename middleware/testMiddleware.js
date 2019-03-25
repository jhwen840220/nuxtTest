const testFunc = ({ params, store, redirect }) => {
    if (params.id < 100) {
        return redirect(`/${params.lang}/product`)
    }
}


export default testFunc