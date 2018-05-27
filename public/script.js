const FIXED_PRICE = 9.99;

new Vue({
    el: "#app",
    data: {
        total: 0,
        items: [],
        cart: [],
        search:'90s',
        lastSearch:'',
        blnLoad:false,
        price:FIXED_PRICE
    },
    methods: {
        onSubmit:function () {
            //-- Reset current items before new ajax request
            this.items=[];
            this.blnLoad=true;
            this.$http
                .get('/search/'.concat(this.search))
                .then(
                function (result) {
                    this.items=result.data;
                    this.lastSearch=this.search;
                    this.blnLoad=false;
                });
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
    }
});