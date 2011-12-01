var vows = require("vows"),
    assert = require("assert"),
    set = require("../lib/set.js");

var my_set = set.set;

vows.describe('Set').addBatch({
    'set creation': {
        topic: Object.create(my_set),

        'is Empty': function(topic) {
            assert.equal(topic.length, 0);
        },

        'when inserting': {
            topic: function(a_set) {
                a_set.update(1);
                return a_set;
            },
            'should contain 1': function(topic) {
                assert.isTrue(1 in topic);
            }
        }
        'when deleting': {
            topic: (function(a_set) {
                a_set.update(1,2,3,45,6,42);
                a_set.remove(42);
                return a_set;
            },
            '42 should be removed': function(topic) {
                assert.isFalse(42 in topic);
            }
        }
    }
}).run();

