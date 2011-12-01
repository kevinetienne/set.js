var vows = require("vows"),
    assert = require("assert"),
    set = require("../lib/set.js");

var my_set = set.set;

vows.describe('Set').addBatch({
    'set creation': {
        topic: Object.create(my_set),

        'is Empty': function(topic) {
            assert.equal(topic.length, 0);
        }
    }
}).run();

