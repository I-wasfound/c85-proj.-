menu_list_array = [ "Veg Margherita Pizza",                  
 "ππΆπππ½πππΎππΆ ππΎπππΆ", "πππππππππΎ ππΎπππΆ", "π·π·π πΈπ½πΎπΈπππ ππΎπππΆ"]; //Add more Pizza item names

function getmenu()
{
    var htmldata="";
    for(var i=0; i<menu_list_array.length; i++)
    {
        htmldata=htmldata+ menu_list_array[i] + '<br>'
    }
    //Give the appropriate id name as display_menu 
    document.getElementById("display_menu").innerHTML = htmldata;
}

function add_suggestion(){
    //Give the appropriate id name as add_item
	var item = document.getElementById("add_item").value;
    //Use the push() function to push the item into menu_list_array
    menu_list_array.push(item);
}

