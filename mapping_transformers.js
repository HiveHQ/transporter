module.exports = function(msg) {
    var is_fan = false;
    if(msg.op == 'insert' || msg.op == 'update'){
        is_fan = true;
    }

    var ftm_key = 'ftm_' + msg.data.tour_id;
    var new_data = {
        '_id': msg.data.user_id,
    }
    new_data[ftm_key] = is_fan;
    msg.data = new_data;
    msg.op = 'update';
    msg.ns = 'bigdata.user';
    return msg;
};