/**
 * Created by florian on 9/9/15.
 */
$(function(){
    var $body = $("body");

    $body.append($('<select id="ddNumberTipps" class="dd"></select>'))
    var $select = $(".dd");

    for (i=1;i<=15;i++){
        $select.append($('<option></option>').val(i).html(i))
    }

    $body.append($('<button type="button" onclick="clickButtonStart()">Start</button>'))

    for (i=1;i<=15;i++){
        $body.append($('<p class="tipp" id="tipp'+i+'"></p>'));
    }
});