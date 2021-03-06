$(document).ready(function(){
    var crawler = $('input[name="crawler"]');
    var nutch = $('#id_crawler_1');
    var crawl_model = $('#id_crawl_model');
    var model_div = $('#div_id_crawl_model');

    var on_crawler_change = function(){
        if (nutch[0].checked){
            crawl_model.prop("disabled", true);
            model_div.addClass("input-greyed-out");
            model_div.removeClass("input-available");
        } else {
            crawl_model.prop("disabled", false);
            model_div.addClass("input-available");
            model_div.removeClass("input-greyed-out");
        }
    }

    // In case the form is reloaded with ACHE set, fire once
    on_crawler_change();

    crawler.change(on_crawler_change);
});
