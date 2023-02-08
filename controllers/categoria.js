const Categoria = require('../models/categoria');

const getCategorias = async (req = request, res = response) => {

    //condiciones del get
    const query = { estado: true };

    const listaCategorias = await Promise.all([
        Categoria.countDocuments(query),
        Categoria.find(query)
    ]);

    res.json({
        msg: 'get Api - Controlador Categoria',
        listaCategorias
    });

}

const postCategoria = async (req = request, res = response) => {

    //Desestructuración
    const { nombre, proveedor, contacto, descripcion } = req.body;
    const categoriaGuardadoDB = new Categoria({ nombre, proveedor, contacto, descripcion });


    //Guardar en BD
    await categoriaGuardadoDB.save();

    res.json({
        msg: 'Post Api - Post Categoria',
        categoriaGuardadoDB
    });

}


const putCategoria = async (req = request, res = response) => {

    //Req.params sirve para traer parametros de las rutas
    const { id } = req.params;
    const { _id, estado,  ...resto } = req.body;
    //El parametro estado no se modifican, el resto de valores si (nombre, proveedor)

    //Editar la categoria por el id
    const categoriaEditado = await Categoria.findByIdAndUpdate(id, resto);

    res.json({
        msg: 'PUT editar user',
        categoriaEditado
    });

}

const deleteCategoria = async(req = request, res = response) => {
    //Req.params sirve para traer parametros de las rutas
    const { id } = req.params;

    //Eliminar fisicamente de la DB
    const categoriaEliminado = await Categoria.findByIdAndDelete( id);

    //Eliminar cambiando el estado a false
    //const categoriaEliminado = await Categoria.findByIdAndUpdate(id, { estado: false });

    res.json({
        msg: 'DELETE eliminar user',
        categoriaEliminado
    });
}

module.exports = {
    getCategorias,
    postCategoria,
    putCategoria,
    deleteCategoria
}


// CONTROLADOR