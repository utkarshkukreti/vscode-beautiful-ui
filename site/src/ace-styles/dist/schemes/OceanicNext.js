ace.define(
  'ace/theme/OceanicNext',
  ['require', 'exports', 'module', 'ace/lib/dom'],
  function(acequire, exports, module) {
    exports.isDark = true;
    exports.cssClass = 'ace-OceanicNext';
    exports.cssText = "\n\t.ace-OceanicNext .ace_gutter {\n\t\tbackground-color: #1a2a32;\n\t\tcolor: #ffffff33;\n\t}\n\t.ace-OceanicNext .ace_gutter-layer {\n\t\tbackground: repeat left top;\n\t}\n\t.ace-OceanicNext .ace_gutter-active-line {\n\t\tbackground-color: #ffffff0d;\n\t}\n\t.ace-OceanicNext .ace_fold-widget {\n\t\ttext-align: center;\n\t}\n\t.ace-OceanicNext .ace_fold-widget:hover {\n\t\tcolor: #ffffff5a;\n\t}\n\t.ace-OceanicNext .ace_fold-widget.ace_start,\n\t.ace-OceanicNext .ace_fold-widget.ace_end,\n\t.ace-OceanicNext .ace_fold-widget.ace_closed{\n\t\tbackground: none;\n\t\tborder: none;\n\t\tbox-shadow: none;\n\t}\n\t.ace-OceanicNext .ace_fold-widget.ace_start:after {\n\t\tcontent: '▾'\n\t}\n\t.ace-OceanicNext .ace_fold-widget.ace_end:after {\n\t\tcontent: '▴'\n\t}\n\t.ace-OceanicNext .ace_fold-widget.ace_closed:after {\n\t\tcontent: '‣'\n\t}\n\t.ace-OceanicNext .ace_print-margin {\n\t\tborder-left: 1px dotted #ffffff1a;\n\t\tright: 0;\n\t\tbackground: transparent;\n\t}\n\t.ace-OceanicNext {\n\t\tcolor: #ced4de;\n\t\tbackground-color: #1a2a32;\n\t\tline-height: 25px !important;\n\t}\n\t.ace-OceanicNext .ace_cursor {\n\t\tborder-left: 1px solid #99c794;\n\t}\n\t.ace-OceanicNext .ace_overwrite-cursors .ace_cursor {\n\t\tborder: 1px solid undefined;\n\t\tbackground: #ffffff16;\n\t}\n\t.ace-OceanicNext.normal-mode .ace_cursor-layer {\n\t\tz-index: 0;\n\t}\n\t.ace-OceanicNext .ace_marker-layer .ace_selection {\n\t\tbackground: #ffffff16;\n\t}\n\t.ace-OceanicNext .ace_marker-layer .ace_selected-word {\n\t\tborder-radius: 4px;\n\t\tborder: 8px solid #ffffff16;\n\t}\n\t.ace-OceanicNext .ace_marker-layer .ace_bracket {\n\t\tmargin: -1px 0 0 -1px;\n\t\tborder: 1px solid #ffffff16;\n\t}\n\t.ace-OceanicNext .ace_marker-layer .ace_active-line {\n\t\tbackground: #ffffff0d;\n\t}\n\t.ace-OceanicNext .ace_paren {\n\t\tcolor: #ced4de;\n\t}\n\t.ace-OceanicNext .ace_keyword{color:#c695c6;font-style:italic;}.ace-OceanicNext .ace_keyword.ace_operator{color:#fab05c;font-style:normal;}.ace-OceanicNext .ace_keyword.ace_other.ace_unit{color:#c695c6;font-style:normal;}.ace-OceanicNext .ace_constant{color:#c695c6;font-style:normal;}.ace-OceanicNext .ace_constant.ace_language{color:#ec5f66;font-style:italic;}.ace-OceanicNext .ace_constant.ace_library{color:#c695c6;font-style:normal;}.ace-OceanicNext .ace_constant.ace_numeric{color:#f99058;font-style:normal;}.ace-OceanicNext .ace_constant.ace_character{color:#c695c6;font-style:normal;}.ace-OceanicNext .ace_constant.ace_character.ace_escape{color:#fac761;font-style:italic;}.ace-OceanicNext .ace_constant.ace_character.ace_entity{color:#fac761;font-style:normal;}.ace-OceanicNext .ace_constant.ace_other{color:#c695c6;font-style:normal;}.ace-OceanicNext .ace_support{color:#6699cc;font-style:normal;}.ace-OceanicNext .ace_support.ace_function{color:#6699cc;font-style:normal;}.ace-OceanicNext .ace_support.ace_function.ace_dom{color:#6699cc;font-style:normal;}.ace-OceanicNext .ace_support.ace_firebug{color:#f99058;font-style:normal;}.ace-OceanicNext .ace_support.ace_function.ace_constant{color:#6699cc;font-style:normal;}.ace-OceanicNext .ace_support.ace_constant{color:#f99058;font-style:normal;}.ace-OceanicNext .ace_support.ace_constant.ace_property-value{color:#f99058;font-style:normal;}.ace-OceanicNext .ace_support.ace_class{color:#6699cc;font-style:normal;}.ace-OceanicNext .ace_support.ace_type{color:#6699cc;font-style:normal;}.ace-OceanicNext .ace_support.ace_other{color:#6699cc;font-style:normal;}.ace-OceanicNext .ace_function{color:#6699cc;font-style:normal;}.ace-OceanicNext .ace_function.ace_buildin{color:#6699cc;font-style:normal;}.ace-OceanicNext .ace_storage{color:#ec5f66;font-style:normal;}.ace-OceanicNext .ace_storage.ace_type{color:#c695c6;font-style:italic;}.ace-OceanicNext .ace_invalid{color:#ec5f66;font-style:normal;}.ace-OceanicNext .ace_invalid.ace_illegal{color:#ec5f66;font-style:normal;}.ace-OceanicNext .ace_invalid.ace_deprecated{color:#ec5f66;font-style:normal;}.ace-OceanicNext .ace_string{color:#99c794;font-style:normal;}.ace-OceanicNext .ace_string.ace_regexp{color:#99c794;font-style:normal;}.ace-OceanicNext .ace_string.ace_blockquote{color:#8e9aa4;font-style:italic;}.ace-OceanicNext .ace_string.ace_emphasis{color:#fab05c;font-style:italic;}.ace-OceanicNext .ace_string.ace_strong{color:#fab05c;font-weight:bold;}.ace-OceanicNext .ace_comment{color:#66747f;font-style:normal;}.ace-OceanicNext .ace_comment.ace_doc{color:#66747f;font-style:italic;}.ace-OceanicNext .ace_comment.ace_doc.ace_tag{color:#c695c6;font-style:normal;}.ace-OceanicNext .ace_variable{color:#ced4de;font-style:normal;}.ace-OceanicNext .ace_variable.ace_language{color:#ec5f66;font-style:italic;}.ace-OceanicNext .ace_variable.ace_parameter{color:#ced4de;font-style:normal;}.ace-OceanicNext .ace_meta{color:#ced4de;font-style:normal;}.ace-OceanicNext .ace_xml-pe{color:#ced4de;font-style:normal;}.ace-OceanicNext .ace_meta.ace_tag{color:#ced4de;font-style:italic;}.ace-OceanicNext .ace_meta.ace_selector{color:#ced4de;font-style:normal;}.ace-OceanicNext .ace_entity.ace_other.ace_attribute-name{color:#f99058;font-style:italic;}.ace-OceanicNext .ace_entity.ace_name.ace_function{color:#6699cc;font-style:normal;}.ace-OceanicNext .ace_entity.ace_name{color:#fac761;font-style:normal;}.ace-OceanicNext .ace_entity.ace_name.ace_tag{color:#ec5f66;font-style:normal;}.ace-OceanicNext .ace_tag-name.ace_xml{color:#ec5f66;}.ace-OceanicNext .ace_markup.ace_heading{color:#ec5f66;font-style:normal;}.ace-OceanicNext .ace_markup.ace_underline{color:#6699cc;text-decoration:underline;}\n\t.ace-OceanicNext.css .ace_support.ace_type {\n\t\tcolor: #ced4de;\n\t}\n\t.ace-OceanicNext.css .ace_variable {\n\t\tcolor: #fab05c;\n\t}\n\t.ace-OceanicNext.css .ace_keyword {\n\t\tcolor: #6699cc;\n\t}\n\t.ace-OceanicNext.css .ace_variable + .ace_string,\n\t.ace-OceanicNext.css .ace_keyword + .ace_string {\n\t\tcolor: #aab4bb;\n\t\tfont-style: italic;\n\t}\n\t.ace-OceanicNext .ace_indent-guide {\n\t\tcolor: #ffffff1a;\n\t\tposition: relative;\n\t\tdisplay: inline-block;\n\t}\n\t.ace-OceanicNext .ace_indent-guide::before {\n\t\tcontent: '→';\n\t\tdisplay: block;\n\t\tposition: absolute;\n\t\tleft: 0;\n\t}\n\t";
    var dom = acequire('../lib/dom');
    dom.importCssString(exports.cssText, exports.cssClass);
  }
);
