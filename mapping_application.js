pipeline = Source({name:'mongo_mapping'})
    .transform({filename: 'mapping_transformers.js', namespace:'bigdata./^fan_tour_mapping$/'})
    //.save({name:'stdout'})
    .save({name:'es_user'});