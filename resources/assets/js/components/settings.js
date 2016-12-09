// do the deal
var myJSONArea = JSONArea(document.getElementById('options_textarea'), {
    sourceObjects: [] // optional array of objects for JSONArea to inherit from
});

valid_json = false;

// then here's how you use JSONArea's update event
myJSONArea.getElement().addEventListener('update', function (e) {
    if (e.target.value != "") {
        valid_json = e.detail.isJSON;
    }
});

myJSONArea.getElement().addEventListener('focusout', function (e) {
    if (valid_json) {
        $('#valid_options').show();
        $('#invalid_options').hide();
        var ugly = e.target.value;
        var obj = JSON.parse(ugly);
        var pretty = JSON.stringify(obj, undefined, 4);
        document.getElementById('options_textarea').value = pretty;
    } else {
        $('#valid_options').hide();
        $('#invalid_options').show();
    }
});

$('document').ready(function () {
    $('.voyager-trash').click(function () {
        var display = $(this).data('display-name') + '/' + $(this).data('display-key');

        $('#delete_setting_title').text(display);
        $('#delete_form')[0].action = $('#delete_form')[0].action.replace('__id', $(this).data('id'));
        $('#delete_modal').modal('show');
    });

    $('.toggleswitch').bootstrapToggle();
});

$('document').ready(function () {
    $('#toggle_options').click(function () {
        $('.new-settings-options').toggle();
        if ($('#toggle_options .voyager-double-down').length) {
            $('#toggle_options .voyager-double-down').removeClass('voyager-double-down').addClass('voyager-double-up');
        } else {
            $('#toggle_options .voyager-double-up').removeClass('voyager-double-up').addClass('voyager-double-down');
        }
    });
});
