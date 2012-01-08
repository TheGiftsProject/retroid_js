function Logic(attrs) {
    this.updateAttributes(attrs)
    this.logicFunc = new Function(Logic.processFunctionText(this.code));
}

Logic.prototype.updateAttributes = function(attrs) {
    if (attrs) {
        this.code      = attrs.code      || this.code;
        this.author    = attrs.author    || this.author;
        this.name      = attrs.name      || this.name;
        this.rating    = attrs.rating    || this.rating;
        this.id        = attrs.id        || this.id;

        if (attrs.createdAt && new Date(attrs.createdAt)) {
            this.createdAt = new Date(attrs.createdAt);
        } else if (attrs.created_at && new Date(attrs.created_at)) {
            this.createdAt = new Date(attrs.created_at);
        }
    }
};

Logic.prototype.func = function() {
    return _.bind(this.logicFunc, {}); // create a new context for the function to run in -- so we don't pollute the window object
};

Logic.prototype.vote = function(type) {
    var deferred = $.Deferred();

    $.ajax("http://sharp-wind-7656.herokuapp.com/logics/" + this.id + "/vote", { data: { vote: type }, dataType: 'jsonp' }).done(_.bind(function(data) {
        if (data.ack == "success") {
            this.rating = data.rating;
            deferred.resolve(this);
        } else {
            deferred.reject();
        }
    }, this)).fail(function() {
        deferred.reject();
    });

    return deferred.promise();
};

Logic.prototype.save = function() {
    var deferred = $.Deferred();

    $.ajax("http://sharp-wind-7656.herokuapp.com/logics/create", { data: { "logic[author]": this.author, "logic[name]": this.name, "logic[code]": this.code }, dataType: 'jsonp' }).done(_.bind(function(data) {
        if (data.ack == "success") {
            this.updateAttributes(data.object);
            deferred.resolve(this);
        } else {
            deferred.reject();
        }
    }, this)).fail(function() {
        deferred.reject();
    });

    return deferred.promise();
};

Logic.processFunctionText = function(text) {
    return "var leds = arguments[0];" + text + "; return leds;";
};

Logic.all = function() {
    var deferred = $.Deferred();

    $.ajax("http://sharp-wind-7656.herokuapp.com/logics", { dataType: 'jsonp' }).done(function(data) {
        if (data.ack == "success") {
            var logics = []
            _(data.objects).each(function(item) {
                logics.push(Logic.createFromServerData(item));
            });

            deferred.resolve(logics);
        } else {
            deferred.reject();
        }
    }).fail(function() {
        deferred.reject();
    });;

    return deferred.promise();
};

Logic.createFromServerData = function(data) {
    return new Logic(data);
};

Logic.sortBy = function(logics, attributeName) {
    return _(logics).sortBy(function(item) {
        return item[attributeName];
    });
};
