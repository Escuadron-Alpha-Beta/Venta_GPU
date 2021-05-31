const Marketplace = artifacts.require('./Marketplace.sol')

require('chai')
  .use(require('chai-as-promised'))
  .should()

contract('Marketplace', ([admin,seller,buyer]) => {
  let marketplace

  before(async () => {
    marketplace = await Marketplace.deployed()
  })

  describe('deployment', async () => {
    it('deploys successfully', async () => {
      const address = await marketplace.address
      assert.notEqual(address, 0x0)
      assert.notEqual(address, '')
      assert.notEqual(address, null)
      assert.notEqual(address, undefined)
    })

    it('Se encontro la market', async () => {
      const name = await marketplace.Nombre()
      assert.equal(name, 'Gpu Market')
    })
  })

  describe('products', async () => {
    let result, productCount

    before(async () => {
        result = await marketplace.crearProduct('RTX-3060','EVGA OC Black edition',10,web3.utils.toWei('1','Ether'),{from: seller})
        productCount = await marketplace.productCount()
    })

    it('crear un producto', async () => {
      
      assert.equal(productCount, 1)
      const event = result.logs[0].args
      assert.equal(event.Id.toNumber(),productCount.toNumber(),'id is correct')
      assert.equal(event.Nombre,'RTX-3060','Es correcto')
      assert.equal(event.price,'1000000000000000000','Es correcto precio')
      assert.equal(event.Modelo,'EVGA OC Black edition','Es correcto')
      assert.equal(event.Cantidad,'10','Es correcto')
      assert.equal(event.Owner,seller,'Es correcto')
    })
    
      it('lists de productos',async() =>{
          const products = await marketplace.productos(productCount)
          assert.equal(products.Id.toNumber(),productCount.toNumber(),'id is correct')
            assert.equal(products.Nombre,'RTX-3060','Es correcto')
            assert.equal(products.price,'1000000000000000000','Es correcto precio')
            assert.equal(products.Modelo,'EVGA OC Black edition','Es correcto')
            assert.equal(products.Cantidad,'10','Es correcto')
            assert.equal(products.Owner,seller,'Es correcto')
      })
      it('venta de producto', async () => {
        // Track the seller balance before purchase
        let oldSellerBalance
        oldSellerBalance = await web3.eth.getBalance(seller)
        oldSellerBalance = new web3.utils.BN(oldSellerBalance)
      
        // SUCCESS: Buyer makes purchase
        result = await marketplace.comprarProduct(productCount, { from: buyer, value: web3.utils.toWei('1', 'Ether')})
      
        // Check logs
        const event = result.logs[0].args
        assert.equal(event.Id.toNumber(),productCount.toNumber(),'id is correct')
        assert.equal(event.Nombre,'RTX-3060','Es correcto')
        assert.equal(event.price,'1000000000000000000','Es correcto precio')
        assert.equal(event.Modelo,'EVGA OC Black edition','Es correcto')
        assert.equal(event.Owner, buyer, 'owner is correct')
        
      
        // Check that seller received funds
        let newSellerBalance
        newSellerBalance = await web3.eth.getBalance(seller)
        newSellerBalance = new web3.utils.BN(newSellerBalance)
      
        let price
        price = web3.utils.toWei('1', 'Ether')
        price = new web3.utils.BN(price)
        
        const expectedBalance = oldSellerBalance.add(price)
        //console.log(oldSellerBalance.toString(),expectedBalance.toString(),newSellerBalance.toString())
      
        assert.equal(newSellerBalance.toString(), expectedBalance.toString())
        //id no existe 
        await marketplace.comprarProduct(1291092,{ from: buyer, value: web3.utils.toWei('1', 'Ether')}).should.be.rejected;
        //no tiene ether para pagar
        await marketplace.comprarProduct(productCount,{ from: buyer, value: web3.utils.toWei('0.5', 'Ether')}).should.be.rejected;
        //otro que no sea el buyer
        //await marketplace.comprarProduct(productCount,{ from: admin, value: web3.utils.toWei('1', 'Ether')}).should.be.rejected;
      })

  })
})

