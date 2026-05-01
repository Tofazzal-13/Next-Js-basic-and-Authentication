
const ModelsPage = async () => {
    const res = await fetch("http://localhost:8000/models", {cache: "no-store"})
    const models = await res.json()
    console.log(models);

    return (
        <div>
            <h1>Models page:</h1>

            <div className="mt-10 grid grid-cols-4 gap-8">
                {
                    models.map(model => <div className="border rounded-2xl p-4 space-y-2" key={model.id}>

                        <h1 className="text-xl font-semibold">{model.title}</h1>
                        <p>{model.description}</p>
                        <p className="text-green-500 font-semibold">$ {model.price}</p>

                    </div>)
                }
            </div>  

        </div>
    );
};

export default ModelsPage;