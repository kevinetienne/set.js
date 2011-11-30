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

        update: function(value) {
            console.log(arguments);
            if (typeof this[value] === "undefined")
                length += 1;
        },
        toString: function() {
        }

    };

})(this);

// check for export (node.js)
typeof exports ? exports.set = set : ""
