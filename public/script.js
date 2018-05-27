const FIXED_PRICE = 9.99;
const LOAD_NUM = 10;

new Vue({
    el: "#app",
    data: {
        total: 0,
        items: [],
        cart: [],
        results: [],
        search:'90s',
        lastSearch:'',
        blnLoad:false,
        price:FIXED_PRICE,
        tips:[
            '70s','thailand','history','anime'
        ]
    },
    computed:{
      noMoreItems:function () {
        return  this.items.length===this.results.length && this.items.length>0;
      },
        infoTips:function () {
          var infoResult="";
          const TIPS_COUNT=this.tips.length;
            this.tips.map(function(item,key) {
                infoResult+=item;
                //-- Add coma till element is the last in tips array
                if(key<TIPS_COUNT-1){
                    infoResult+=", ";
                }
                return infoResult;
            });
            return  infoResult;
        }
    },
    methods: {
        appendItems:function () {
            if(this.items.length <this.results.length){
                var append=this.results.slice(this.items.length, this.items.length+LOAD_NUM);
                this.items=this.items.concat(append);
            }
        },
        onSubmit:function () {
            if(this.search.length){
                //-- Reset current items before new ajax request
                this.items=[];
                this.blnLoad=true;
                this.$http
                    .get('/search/'.concat(this.search))
                    .then(
                        function (result) {
                            this.results=result.data;
                            this.appendItems();
                            this.lastSearch=this.search;
                            this.blnLoad=false;
                        });
            }

        },
        addItem: function (index) {
            this.total += 9.99;
            var item = this.items[index];
            var found = false;
            for (var i = 0; i < this.cart.length; i++) {
                if (this.cart[i].id === item.id) {
                    found = true;
                    this.cart[i].qty++;
                    break;
                }
            }
            if (!found) {
                this.cart.push({
                    id: item.id,
                    title: item.title,
                    qty: 1,
                    price: FIXED_PRICE
                });
            }

        },
        inc:function (item) {
            item.qty++;
            this.total+=FIXED_PRICE;
        },
        dec:function (item) {
            item.qty--;
            this.total-=FIXED_PRICE;
            if( item.qty<=0){
                for (var i = 0; i < this.cart.length; i++) {
                    if (this.cart[i].id === item.id) {
                        this.cart.splice(i, 1);
                    }
                }
            }
        }
    },
    filters: {
        currency: function (value) {

            return '$'+value.toFixed(2);
        }
    },
    mounted:function () {
        this.onSubmit();

        var vueInstance=this;
        var elem=document.getElementById('product-list-bottom');
        var watcher=scrollMonitor.create(elem);
        watcher.enterViewport(function () {
            vueInstance.appendItems();
        });
    }
});

