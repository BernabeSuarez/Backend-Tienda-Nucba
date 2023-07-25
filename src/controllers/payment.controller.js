import mercadopago from 'mercadopago'

mercadopago.configure({ access_token: process.env.MP_KEY })

export const payOrder = async (req, res) => {
    const product = req.body;
    const result = await mercadopago.preferences.create({
        items: [{
            title: product.title,
            currency_id: "ARS",
            unit_price: product.unit_price,
            quantity: 1,
            description: product.cart
        }],
        back_urls: {
            success: "http://localhost:5173/success", //cambiar las direcciones al host de la pagina
            failure: "http://localhost:5173/failure",
            pending: "http://localhost:5173/pending",
        },
        auto_return: "approved",
        binary_mode: true
    }).then((response) => res.status(200).send({ response }))
        .catch(error => res.status(400).send({ error: error.message })
        )
    console.log(result)
}