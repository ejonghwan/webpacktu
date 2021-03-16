//es6
import _ from 'lodash';

//es5
// var _ = require('lodash')


function component() {
    var ele = document.createElement('div');
    ele.innerHTML = _.join(['hello', 'webpack'], ' ')
    // ele.innerHTML = 'ㅁㄴㅇㅁㄴㅇ'

    return ele
}

document.body.appendChild(component())