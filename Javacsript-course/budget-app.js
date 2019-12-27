//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Budget controller
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let budgetController = (function() {

  //constructor function to create new objects Expenses data
  let Expense = function(id,description,value) {
    this.id = id;
    this.description = description;
    this.value = value;
    this.percentage = -1;
  };

  Expense.prototype.calcPercentage = function (totalIncome) {
    if(totalIncome > 0) {
      this.percentage = Math.round((this.value / totalIncome) * 100);
    } else {
      this.percentage = -1;
    }

  };

  Expense.prototype.getPercentage = function() {
return this.percentage;
  };

  //constructor function to create new objects Income data
  let Income = function(id,description,value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };
  //calculate
  let calculateTotal  = function(type) {
    let sum = 0;
    data.allItems[type].forEach(function(curr) {
      sum += curr.value;
    });
    data.totals[type] = sum;
  };
  //Empty object for storing incoming data
  let data = {
    allItems : {
      exp: [],
      inc: []
    },
    totals: {
      exp: 0,
      inc: 0
    },
    budget: 0,
    percentage: -1
  };
// Add a public methods which will add the data and change it
  return {

    addItem: function(type,des, val) {
       let newItem, ID;
       //Create a new ID
      if(data.allItems[type].length > 0) {
        ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
      } else {
        ID = 0;
      }

       //Create a new item based on "inc" or "exp" type.
       if(type === "exp") {
         newItem =  new Expense(ID,des,val);
       } else if (type === "inc") {
         newItem =  new Income(ID,des,val);
       }
       //push into data structure
       data.allItems[type].push(newItem);
       //return the new element
       return newItem;
     },

    deleteItem: function (type, id) {
      let ids,index;
   ids = data.allItems[type].map(function(current) {
     return current.id ;
   });
    index = ids.indexOf(id);
    if(index !== -1) {
      data.allItems[type].splice(index,1);
    }
    },

    //public function that calculates the budget
    calculateBudget: function () {
      //  calculate total income and expenses
     calculateTotal("exp");
     calculateTotal('inc');
    //  Calculate the budget income - expenses
data.budget = data.totals.inc - data.totals.exp;
      //calculate the percentage of income that we spent
      if(data.totals.inc > 0) {
        data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);

      } else {
        data.percentage = -1;
      }

},
    calculatePercentages: function () {

      data.allItems.exp.forEach(function(cur) {
        cur.calcPercentage();
      })
    },
    getPercentages : function () {
      let allPerc = data.allItems.exp.map(function(cur) {
        return cur.getPercentage()
      });
      return allPerc ;
    },
  //push data to data object
  getBudget:function() {

    return {
      budget: data.budget,
      totalInc: data.totals.inc,
      totalExp: data.totals.exp,
      percentage: data.percentage

    }
  },


    testing: function() {
      console.log(data);
    }

};


}) ();


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//UI Controller
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let UIController = (function() {


//object with names of classes css . For easy access
let DOMstrings =  {
  inputType: ".add__type",
  inputDescript : ".add__description",
  inputval : ".add__value",
  inputBtn : ".add__btn",
  incomeContainer: '.income__list',
  expensesContainer: '.expenses__list',
  budgetLabel: ".budget__value",
  incomeLabel: ".budget__income--value",
  expensesLabel: ".budget__expenses--value",
  percentageLabel: ".budget__expenses--percentage",
  container:'.container'


};

  //to write a public method in the IIFI we need to return and object;
  return {
    getInput: function () {

      return {  //will be inc or exp
        type: document.querySelector(DOMstrings.inputType).value,
        //"select-option" tag returns the value of its "value" property
        description: document.querySelector(DOMstrings. inputDescript).value,
        value: parseFloat(document.querySelector(DOMstrings.inputval).value)
      }
    },
    //adds the html snippet depending on chosen type
    addListItem: function(obj, type) {
    //  create an HTMLstring with the placeholder text;
let html, newHTML, element;
if(type === "inc") {
  element = DOMstrings.incomeContainer;
  html = '<div class="item clearfix" id="inc-%id%">\n' +
    '      <div class="item__description">%description%</div>\n' +
    '            <div class="right clearfix">\n' +
    '                <div class="item__value">%value%</div>\n' +
    '                <div class="item__delete">\n' +
    '                    <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>'
} else if (type === "exp") {
  element = DOMstrings.expensesContainer;
  html = ' <div class="item clearfix" id="exp-%id%">\n' +
    '            <div class="item__description">%description%</div>\n' +
    '            <div class="right clearfix">\n' +
    '                <div class="item__value">%value%</div>\n' +
    '                <div class="item__delete">\n' +
    '                    <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>'

}
//  Replace the placeholder text with some actual data(text between the tags)
 newHTML = html.replace('%id%', obj.id);
newHTML = newHTML.replace('%description%', obj.description);
newHTML = newHTML.replace('%value%', obj.value);

//  insert html into the dom
 document.querySelector(element).insertAdjacentHTML('beforeend', newHTML);
    },
    deleteListItem: function (selectorID) {
      let el = document.getElementById(selectorID);
     el.parentNode.removeChild(el);
    },
    //clear the fields .
    clearFields: function() {
      let fields, fieldsArr;
    //  querySeletorAll returns a list not an array. It looks like array but list doesn't have array methods
    fields = document.querySelectorAll(DOMstrings.inputDescript + " ," + DOMstrings.inputval);
   // to convert list to an array we need to use slice method.
   // 1.call() borrow the method from one object to another
   //   slice() method is written in Array object(Array is a function constructor for all arrays)
   //   all the arrays inherit methods from the Array function constructor which are stored in the
   //   Array function prototype property
   fieldsArr = Array.prototype.slice.call(fields);
    //this will trick the slice method and make it work with list
      fieldsArr.forEach(function(current,index,array) {
        current.value ="";
      });
    //  ForEach loops through the array and sets the value of each element to " "
      fieldsArr[0].focus();
    },
    displayBudget: function(obj) {
    document.querySelector(DOMstrings.budgetLabel).textContent = obj.budget;
      document.querySelector(DOMstrings.incomeLabel).textContent = obj.totalInc;
      document.querySelector(DOMstrings.expensesLabel).textContent = obj.totalExp;


      if(obj.percentage > 0) {
        document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + "%";
      }else {
        document.querySelector(DOMstrings.percentageLabel).textContent = "--";
      }


    },
    getDOMstrings: function () {
      return DOMstrings;
    }
  }


})();



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Global App Controller
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let controller = (function(budgetCtrl,UICtrl) {


  let setupEventListeners = function () {
    let DOM = UICtrl.getDOMstrings();
    document.querySelector(DOM.inputBtn).addEventListener("click",ctrlAddItem);
    document.addEventListener("keypress", function(event) {
      if(event.keyCode === 13) {
        ctrlAddItem();
      }
    });
    document.querySelector(DOM.container).addEventListener("click", ctrlDeleteItem);
  };

let updateBudget = function () {
  //  1.Calc the budget
budgetCtrl.calculateBudget();
  // 2.Return the budget
let budget = budgetCtrl.getBudget();
  //  3. Display the budget on the UI
 UICtrl.displayBudget(budget);
};
let updatePercentages = function() {

//  1.calculate Percentages
budgetCtrl.calculatePercentages();
//  2.Read percentages from budgetcontroller
let percentages = budgetCtrl.getPercentages();
//  3.Update the UI with the new percentages
console.log(percentages);
};

  let ctrlAddItem =  function () {
    let input, newItem;

    // 1. get the field input data
    input = UIController.getInput();
    if(input.description !== "" && !isNaN(input.value) && input.value > 0) {

      //2. Add the item to the budget controller
      newItem = budgetCtrl.addItem(input.type,input.description, input.value);
      //3. Add the item to the Ui
      UICtrl.addListItem(newItem, input.type);
      //  4. Clear the fields
      UICtrl.clearFields();

      // 5.Calc and update the budget
      updateBudget();
    //6. Calculate and update percentages
      updatePercentages();
    }

  };
  let ctrlDeleteItem = function (event) {
let itemID,splitID,type,ID;
itemID  = event.target.parentNode.parentNode.parentNode.parentNode.id;
console.log(itemID);
if (itemID) {
 // to split the ID of the object. ["inc", "1"];
 splitID = itemID.split("-");
 type = splitID[0];
 ID = parseInt(splitID[1]);

// 1.delete the item from the data structure
budgetCtrl.deleteItem(type, ID);
//  2. delete the item from the UI
UICtrl.deleteListItem(itemID);
//  3. Update and show the new budget;
updateBudget();
//4. Calculate and update percentages
  updatePercentages();
};

  };

  return {
    init: function () {
      UICtrl.displayBudget({
        budget: 0,
        totalInc: 0,
        totalExp: 0,
        percentage:-1

      });
      setupEventListeners();
    }

  }


})(budgetController,UIController);


controller.init();

console.log('%c a colorful message  😨 😻 👩🏻‍💻 🐉 👻 ', 'background:  #F13C20; color:white; font-size: 30px');