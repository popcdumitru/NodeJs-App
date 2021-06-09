
const moment = require('moment')

module.exports = {
    formatDate: function (date, format){
        return moment(date).format(format)
    },

    //folosim pentru a scurta povestile mai lungi si a ajuta la formatare
    truncate: function (str, len){
        if (str.length > len && str.length > 0) {
            let new_str = str + ' '
            new_str = str.substr(0, len)
            new_str = str.substr(0, new_str.lastIndexOf(' '))
            new_str = new_str.length > 0 ? new_str : str.substr(0, len)
            return new_str + '...'
        }
        return str
    },
    //folosim pentru a elimina tag-urile 
    stripTags: function (input) {
        return input.replace(/<(?:.|\n)*?>/gm,'')
    },

    //icon-ul de editare a povestilor personale in functie de contul conectat
    editIcon: function (storyUser, loggedUser, storyId, floating = true){
        if (storyUser._id.toString() == loggedUser._id.toString()){
            if (floating) {
                return `<a href="/stories/edit/${storyId}" class="btn-floating
                halfway-fab blue"><i class="fa fa-edit fa-small"></i></a>`
            }else{
                return `<a href="/stories/edit/${storyId}"><i class="fa fa-edit fa-small"></i></a>`
            }
        }else{
                return ''
            }
        },

    //helper utilizat la pagina de edit story
    select: function(selected, options){
        return options
        .fn(this)
        .replace(
            new RegExp(' value="' + selected + '"'),
            '$& selected="selected"'
        )
        .replace(
            new RegExp('>' + selected + '</option>'),
            ' selected="selected"$&'
        )
    },
}

