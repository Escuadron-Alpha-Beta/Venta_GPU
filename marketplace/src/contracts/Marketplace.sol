pragma solidity ^0.5.0;

contract Marketplace {
    string public Nombre;
    uint public productCount = 0;
    mapping(uint => Product) public productos;

    constructor() public{
        Nombre = "Gpu Market";
    }

    struct Product{
        uint Id;
        string Nombre;
        string Modelo;
        uint price;
        uint Cantidad;
        address payable Owner;
        bool comprado;
    }
    event ProductCreado(
        uint Id,
        string Nombre,
        string Modelo,
        uint Cantidad,
        uint price,
        address payable Owner,
        bool comprado
    );
    event ProductoComprado(
        uint Id,
        string Nombre,
        string Modelo,
        uint Cantidad,
        uint price,
        address payable Owner,
        bool comprado
    );

    function crearProduct(string memory _Nombre, string memory _Modelo,  uint _Cantidad ,uint _price) public {
        //Requiere un nombre , Modelo y precio valido
        require(bytes(_Nombre).length >0);
        require(bytes(_Modelo).length >0);
        require(_Cantidad >0);
        require(_price >0);
        // Incrementa la cantidad de productos
        productCount = productCount + 1;
        //Crear el producto
        productos[productCount] = Product(productCount,_Nombre,_Modelo, _price,_Cantidad, msg.sender,false);
        //Trigger del evento
        emit ProductCreado(productCount,_Nombre,_Modelo, _Cantidad, _price,msg.sender,false);
    }
    function comprarProduct(uint _id) public payable{
        //Agarrar el producto
        Product memory _product = productos[_id];

        //Agarrar el owner/comprador
        address payable _seller = _product.Owner;

        //Producto tiene un id valido
        require(_product.Id > 0 && _product.Id <= productCount);

        //Hay cantidad necesaria de ether para la transaccion
        require(msg.value >= _product.price);

        //Que el producto tenga cantidades suficientes para la compra
        require(_product.Cantidad > 0);
        //no se haya comprado
        require(!_product.comprado);
        //que el comprador no sea un admin ni un vendedor AñADIR LO DE ADMIN
        require(_seller != msg.sender );

        //el quien lo compro es el dueño, no creo que funcione
        _product.Owner=msg.sender;
        //ya se ha comprado
        _product.comprado =true;
        //actualizar el producto
        productos[_id]= _product;

        //pagarle al comprador por el ether xd
        address(_seller).transfer(msg.value);

        //trigger el evento
        emit ProductoComprado(productCount,_product.Nombre,_product.Modelo,_product.Cantidad,_product.price,msg.sender,true);

    }
}
