const testFunc = ({ params, store, redirect }) => {
    if (params.id < 100) {
        // if(!!params.lang) return redirect(`/${params.lang}/product`)
        // else return redirect(`/product`)
        if(!!params.lang) return redirect(`/${store._modules.root.state.locale}/product`)
       
    }
}


export default testFunc