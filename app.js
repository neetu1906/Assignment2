(function(){

'use strict';

angular.module('ShoppingListCheckOff',[])
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

ToBuyController.$inject=['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService)
{
  // List of shopping items
  var toBuyCtrl = this;

  toBuyCtrl.ItemsToBuy = ShoppingListCheckOffService.GetItems();

  toBuyCtrl.BuyItem = function (itemIndex)
  {
      console.log("Entered..");
      ShoppingListCheckOffService.BuyItem(itemIndex);
  }

}

AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService)
{
  var alreadyBoughtCtrl = this;
  alreadyBoughtCtrl.ItemsBought = ShoppingListCheckOffService.itemsBought;
}

function ShoppingListCheckOffService()
{
  var service = this;
  var itemsToBuy =[];
  service.itemsBought=[];

  service.GetItems= function()
  {

    // Pre-populate a shoppinglist
    itemsToBuy.push({
      name: "Sugar",
      quantity: "2 bags"
    });
    itemsToBuy.push({
      name: "cookies",
      quantity: "10 bags"
    });
    itemsToBuy.push({
      name: "Chocolate Chips",
      quantity: "3 bags"
    });
    itemsToBuy.push({
      name: "Pudding",
      quantity: "5 bags"
    });
    itemsToBuy.push({
      name: "Ice cream",
      quantity: "15 bags"
    });

    return itemsToBuy;
  }


  service.BuyItem= function(index)
  {
    var item = {
        name: '',
        quantity: ''
    }
    item.name = itemsToBuy[index].name;
    item.quantity = itemsToBuy[index].quantity;
    itemsToBuy.splice(index, 1);
    service.itemsBought.push(item);
      console.log("itemsBought:",service.itemsBought);
  }

}

})();
