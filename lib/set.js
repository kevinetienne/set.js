/*
 * set will try to mimic set from python
 *
 * use at you own risk
 *
 * example usage
 * my_set = Object.create(set);
 * my_set.update(1);
 * my_set.update(1,2,3,5,6);
 * my_set.update("hello world");
 *
 */

(function(root) {

    if (typeof Object.create !== 'function') {
        Object.create = function (o) {
            function F() {}
            F.prototype = o;
            return new F();
        };
    }

    // our main object which is exposed via root
    // set uses a js object to mimic a set
    root.set = {
        length: 0,

        /*
         * takes:
         *   - a number
         *   - an Array
         *   - a string
         *   - arguments
         * and convert them to a set
         */
        update: function(value) {
            if (Object.prototype.toString.call(value) === '[object Array]') {
                for (var i=0;i < value.length; i++) {
                    if (this[value[i]] == "undefined") {
                        this.length += 1;
                    }
                    this[value[i]] = true;
                }
            } else {
                if (this[value] == "undefined") {
                    this.length += 1;
                }
                this[value] = true;
            }
        },

        remove: function(value) {
            delete this[value];
        }

    };

})(this);

// check for export (node.js)
typeof exports !== "undefined" ? exports.set = this.set : ""
