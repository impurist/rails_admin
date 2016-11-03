(function (components) {

  var helpers = components.helpers;
  var shared_elements = components.shared_elements;

  components.number_filter_component = function (options) {
    var component = {};
    component.control = '<select class="switch-additionnal-fieldsets input-sm form-control" name="' + options.operator_name + '">' +
      shared_elements.between_and_default_options(options) +
      '<option disabled="disabled">---------</option>' +
      '<option ' + helpers.not_null_operator_selected(options) + ' value="_not_null">' + RailsAdmin.I18n.t("is_present") + '</option>' +
      '<option ' + helpers.null_operator_selected(options) + ' value="_null" >' + RailsAdmin.I18n.t("is_blank") + '</option>' +
      '</select>';
    component.additional_control =
      '<input class="additional-fieldset default input-sm form-control" style="display:' + helpers.default_filter_display(options) + ';" type="' + options.field_type + '" name="' + options.value_name + '[]" value="' + (options.field_value[0] || '') + '" /> ' +
      '<input placeholder="-∞" class="additional-fieldset between input-sm form-control" style="display:' + helpers.between_operator_display(options) + ';" type="' + options.field_type + '" name="' + options.value_name + '[]" value="' + (options.field_value[1] || '') + '" /> ' +
      '<input placeholder="∞" class="additional-fieldset between input-sm form-control" style="display:' +  helpers.between_operator_display(options) + ';" type="' + options.field_type + '" name="' + options.value_name + '[]" value="' + (options.field_value[2] || '') + '" />';
    return component;
  };

  components.integer_filter_component = function (options) {
    return this.number_filter_component(options);
  };

  components.decimal_filter_component = function (options) {
    return this.number_filter_component(options);
  };

  components.float_filter_component = function (options) {
    return this.number_filter_component(options);
  };

}(FilterBoxComponents));