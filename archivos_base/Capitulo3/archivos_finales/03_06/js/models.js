var Enlace = Backbone.Model.extend(
    {
        defaults: {
            url:"",
            label:""
        },
        initialize: function(attr){
            
        }
    }
);

var EnlacesCollection = Backbone.Collection.extend(
    {
       model: Enlace,
    }
);


var EnlaceVidew = Backbone.View.extend(
    {
        events:{
            "click": "_click",
        },
        initialize: function(){
            this.render();
        },
        render: function(){
            var el = $(this.el);
            this.collection.each(function(model){
                var template = _.template($("#tmp_enlace").html());
                var html = template(model.toJSON());
                el.append(html);
            });
        },
        _click: function(e){
            $(e.target).html($(e.target).html() + "<br/>" + $(e.target).data("ref"));
        }
    }
);