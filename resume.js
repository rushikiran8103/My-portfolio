function showTab(tabName){
    //hide all content sections
    var contents = document.querySelectorAll('.tab-contents');
    contents.forEach(function(content){
        content.style.display='none';
    });

    //remove active tabs from all tabs
    var tabs=document.querySelectorAll('.tab-links');
    tabs.forEach(function(tab){
        tab.classList.remove('active');
    });

    document.getElementById(tabName).style.display = 'block';
    document.getElementById(tabName + '-tab').classList.add('active');
}
document.addEventListener('DOMContentLoaded', function() {
showTab('skills');

});
