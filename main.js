menu_list_array = [ "Veg Margherita Pizza",                  
 "𝓂𝒶𝓇𝑔𝒽𝑒𝓇𝒾𝓉𝒶 𝓅𝒾𝓏𝓏𝒶", "𝓅𝑒𝓅𝓅𝑒𝓇𝑜𝓃𝒾 𝓅𝒾𝓏𝓏𝒶", "𝒷𝒷𝓆 𝒸𝒽𝒾𝒸𝓀𝑒𝓃 𝓅𝒾𝓏𝓏𝒶"]; //Add more Pizza item names

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

