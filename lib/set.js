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
            var self = this;
            if (Object.prototype.toString.call(value) === '[object Array]') {
                for (var i=0;i < value.length; i++) {
                    if (typeof self[value[i]] === "undefined") {
                        self.length += 1;
                    }
                    self[value[i]] = true;
                }
            } else {
                if (typeof self[value] === "undefined") {
                    self.length += 1;
                }
                self[value] = true;
            }
        },

        remove: function(value) {
            // do nothing if value is not present
            if (typeof this[value] === "undefined")
                return;

            delete this[value];
            this.length -= 1;
        }

    };

})(this);

// check for export (node.js)
typeof exports !== "undefined" ? exports.set = this.set : ""
