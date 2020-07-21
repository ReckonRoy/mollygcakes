/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var menu = document.getElementById("m_i");

menu.onclick = function showMenu()
{
	var m_c = document.getElementById("menu");
    if(m_c.className=="m_dflt")
    {
        m_c.className = "menu";
    }else{
        m_c.className = "m_dflt";
    }
}