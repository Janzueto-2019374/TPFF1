const Producto = require('../models/producto');

const getProductos = async (req = request, res = response) => {

    //condiciones del get
    const query = { estado: true };

    const listaProductos = await Promise.all([
        Producto.countDocuments(query),
        Producto.find(query)
    ]);

    res.json({
        msg: 'get Api - Controlador Producto',
        listaProductos
    });

}

const postProducto = async (req = request, res = response) => {

    //Desestructuración
    const { nombre, precio, descripcion } = req.body;
    const productoGuardadoDB = new Producto({ nombre, precio, descripcion });


    //Guardar en BD
    await productoGuardadoDB.save();

    res.json({
        msg: 'Post Api - Post Producto',
        productoGuardadoDB
    });

}


const putProducto = async (req = request, res = response) => {

    //Req.params sirve para traer parametros de las rutas
    const { id } = req.params;
    const { _id, estado,  ...resto } = req.body;
    //El parametro estado no se modifican, el resto de valores si (nombre)

    //Editar la producto por el id
    const productoEditado = await Producto.findByIdAndUpdate(id, resto);

    res.json({
        msg: 'PUT editar user',
        productoEditado
    });

}

const deleteProducto = async(req = request, res = response) => {
    //Req.params sirve para traer parametros de las rutas
    const { id } = req.params;

    //Eliminar fisicamente de la DB
    const productoEliminado = await Producto.findByIdAndDelete( id);

    //Eliminar cambiando el estado a false
    //const productoEliminado = await Producto.findByIdAndUpdate(id, { estado: false });

    res.json({
        msg: 'DELETE eliminar user',
        productoEliminado
    });
}

module.exports = {
    getProductos,
    postProducto,
    putProducto,
    deleteProducto
}


// CONTROLADOR