(function(){
  'use strict';

  angular.module('ControllerApp', [])
  .controller('ShoppingListController1', ShoppingListController1)
  .controller('ShoppingListController2', ShoppingListController2)
  .factory('ShoppingListFactory', ShoppingListFactory);

  // LIST #1 - controller: unlimited items
  ShoppingListController1.$inject = ['ShoppingListFactory'];
  function ShoppingListController1(ShoppingListFactory) {
    var list1 = this;

    // use factory to create new shopping list service
    var shoppingList = ShoppingListFactory();
    list1.items = shoppingList.getItems();
    list1.itemName = "";
    list1.quantity = "";
    // consuming call to service to add item method
    list1.addItem = function () {
      shoppingList.addItem(list1.itemName, list1.quantity);
    }
    // consuming call to service to remove item method
    list1.removeItem = function (itemIndex) {
      shoppingList.removeItem(itemIndex);
    }
  }

  // LIST #2 - controller: (limited to 3 items)
  ShoppingListController2.$inject = ['ShoppingListFactory'];
  function ShoppingListController2(ShoppingListFactory) {
    var list2 = this;
    // Use factory to create new shopping list service
    var shoppingList = ShoppingListFactory(3);

    list2.items = shoppingList.getItems();
    list2.itemName = "";
    list2.itemQuantity = "";
    // consuming call to service to get items method
    list2.addItem = function () {
        try {
          console.log('inside ctril2');
          shoppingList.addItem(list2.itemName, list2.itemQuantity)
        } catch (error) {
          list2.errorMessage = error.message;
        }
      }
      list2.removeItem = function (itemIndex) {
        shoppingList.removeItem(itemIndex);
      }
  };

  // Service implementation
  // If not specified, maxItems assumed unlimited
  function ShoppingListService(maxItems) {
      var service = this;

      // List of shopping items
      var items = [];

      // Servie method for adding item
      service.addItem = function (itemName, quantity) {
        console.log('inside additem');
        if ((maxItems === undefined) || (maxItems !== undefined) && (items.length < maxItems)) {
          var item = {
            name: itemName,
            quantity: quantity
          };
          items.push(item);
        }else{
          throw new Error("Max Items (" + maxItems +") reached.");
        }
      };

      // Servie method to remove items from list
      service.removeItem = function (itemIndex) {
        console.log('inside removeitem: ', itemIndex);
        items.splice(itemIndex, 1);
      }

      // Servie method to get items
      service.getItems = function () {
        console.log('inside getitems: ', items);
        return items;
      };
  }

  function ShoppingListFactory() {
    var factory = function (maxItems) {
      return new ShoppingListService(maxItems);
    };
    return factory;
  }
})();
