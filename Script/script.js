

//Smoth Scroll ----------------------------------------------------------------
$('.navbar-links a').on('click',function(e){
    if(this.hash != '')
    {
        e.preventDefault();
        const hash = this.hash;
        $('html,body').animate({
            scrollTop: $(hash).offset().top
        },800);
    }


});


function Dropdown()
{
    $('#DropDown-div').toggleClass("drop-down-contentShow");
}