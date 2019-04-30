$(document).ready(function () {
 
var list1 = document.getElementById('state1');
 
list1.options[0] = new Option('--Select State--', '');
list1.options[1] = new Option('Chattisgarh', 'Chattisgarh', 'Chattisgarh', 'Chattisgarh', 'Chattisgarh');
list1.options[2] = new Option('MadhyaPradesh', 'MadhyaPradesh', 'MadhyaPradesh', 'MadhyaPradesh', 'MadhyaPradesh');
list1.options[3] = new Option('Mizoram', 'Mizoram', 'Mizoram', 'Mizoram', 'Mizoram');
list1.options[4] = new Option('Rajasthan', 'Rajasthan', 'Rajasthan', 'Rajasthan', 'Rajasthan');
list1.options[5] = new Option('Telangana', 'Telangana', 'Telangana', 'Telangana', 'Telangana');
});






function update(){
 
            var list1 = document.getElementById('state1');
            var list2 = document.getElementById("constituency1");
            var list1SelectedValue = list1.options[list1.selectedIndex].value;
             
            if (list1SelectedValue=='Chattisgarh')
            {
                 
                list2.options.length=0;
                list2.options[0] = new Option('--Select Constituency--', '');
                list2.options[1] = new Option('Abhanpur', 'Abhanpur', 'Abhanpur', 'Abhanpur', 'Abhanpur');
                list2.options[2] = new Option('Ahiwara', 'Ahiwara', 'Ahiwara', 'Ahiwara', 'Ahiwara');
                list2.options[3] = new Option('Akaltara', 'Akaltara', 'Akaltara', 'Akaltara', 'Akaltara');
                list2.options[4] = new Option('Arang', 'Arang', 'Arang', 'Arang', 'Arang');
                list2.options[5] = new Option('Basna', 'Basna', 'Basna', 'Basna', 'Basna');
                list2.options[6] = new Option('Bastar', 'Bastar', 'Bastar', 'Bastar', 'Bastar');
				list2.options[7] = new Option('Bijapur', 'Bijapur', 'Bijapur', 'Bijapur', 'Bijapur');
				list2.options[8] = new Option('Beltara', 'Beltara', 'Beltara', 'Beltara', 'Beltara');
				list2.options[9] = new Option('Bilha', 'Bilha', 'Bilha', 'Bilha', 'Bilha');
				list2.options[10] = new Option('Durg City', 'Durg City', 'Durg City', 'Durg City', 'Durg City');

                 
            }
            else if (list1SelectedValue=='Telangana')
            {
                 
                list2.options.length=0;
                list2.options[0] = new Option('--Select Constituency--', '');
                list2.options[1] = new Option('Aliar','Aliar','Aliar','Aliar','Aliar');
                list2.options[2] = new Option('Armur','Armur','Armur','Armur','Armur');
                list2.options[3] = new Option('Boath','Boath','Boath','Boath','Boath');
                list2.options[4] = new Option('Chennur','Chennur','Chennur','Chennur','Chennur');
                list2.options[5] = new Option('Chevella','Chevella','Chevella','Chevella','Chevella');
				list2.options[6] = new Option('Dubbak','Dubbak','Dubbak','Dubbak','Dubbak');
                list2.options[7] = new Option('Gadwal','Gadwal','Gadwal','Gadwal','Gadwal');
                list2.options[8] = new Option('Jagtial','Jagtial','Jagtial','Jagtial','Jagtial');
                list2.options[9] = new Option('Jukkal','Jukkal','Jukkal','Jukkal','Jukkal');
                list2.options[10] = new Option('Mulug','Mulug','Mulug','Mulug','Mulug');
                 
            }
			else if (list1SelectedValue=='Mizoram')
            {
                 
                list2.options.length=0;
                list2.options[0] = new Option('--Select Constituency--', '');
                list2.options[1] = new Option('Aizawl North-i','Aizawl North-i','Aizawl North-i','Aizawl North-i','Aizawl North-i');
                list2.options[2] = new Option('Aizawl North-ii','Aizawl North-ii','Aizawl North-ii','Aizawl North-ii','Aizawl North-ii');
                list2.options[3] = new Option('Aizawl North-iii','Aizawl North-iii','Aizawl North-iii','Aizawl North-iii','Aizawl North-iii');
                list2.options[4] = new Option('Aizawl East-i','Aizawl East-i','Aizawl East-i','Aizawl East-i','Aizawl East-i');
                list2.options[5] = new Option('Aizawl East-ii','Aizawl East-ii','Aizawl East-ii','Aizawl East-ii','Aizawl East-ii');
				list2.options[6] = new Option('Aizawl South-i','Aizawl South-i','Aizawl South-i','Aizawl South-i','Aizawl South-i');
                list2.options[7] = new Option('Aizawl South-ii','Aizawl South-ii','Aizawl South-ii','Aizawl South-ii','Aizawl South-ii');
                list2.options[8] = new Option('Aizawl South-iii','Aizawl South-iii','Aizawl South-iii','Aizawl South-iii','Aizawl South-iii');
                list2.options[9] = new Option('Aizawl West-i','Aizawl West-i','Aizawl West-i','Aizawl West-i','Aizawl West-i');
                list2.options[10] = new Option('Aizawl West-ii','Aizawl West-ii','Aizawl West-ii','Aizawl West-ii','Aizawl West-ii');
				list2.options[11] = new Option('Aizawl West-iii','Aizawl West-iii','Aizawl West-iii','Aizawl West-iii','Aizawl West-iii');
                 
            }
			else if (list1SelectedValue=='Rajasthan')
            {
                 
                list2.options.length=0;
                list2.options[0] = new Option('--Select--', '');
                list2.options[0] = new Option('--Select Constituency--', '');
                list2.options[1] = new Option('Ahore','Ahore','Ahore','Ahore','Ahore');
                list2.options[2] = new Option('Amber','Amber','Amber','Amber','Amber');
                list2.options[3] = new Option('Anta','Anta','Anta','Anta','Anta');
                list2.options[4] = new Option('Asind','Asind','Asind','Asind','Asind');
                list2.options[5] = new Option('Bali','Bali','Bali','Bali','Bali');
				list2.options[6] = new Option('Bagru','Bagru','Bagru','Bagru','Bagru');
                list2.options[7] = new Option('Bansur','Bansur','Bansur','Bansur','Bansur');
                list2.options[8] = new Option('Bari','Bari','Bari','Bari','Bari');
                list2.options[9] = new Option('Bassi','Bassi','Bassi','Bassi','Bassi');
                list2.options[10] = new Option('Bhim','Bhim','Bhim','Bhim','Bhim');
             
            }
			else if (list1SelectedValue=='MadhyaPradesh')
            {
                 
                list2.options.length=0;
                list2.options[0] = new Option('--Select Constituency--', '');
                list2.options[1] = new Option('AGAR','AGAR','AGAR','AGAR','AGAR');
                list2.options[2] = new Option('ALOTE','ALOTE','ALOTE','ALOTE','ALOTE');
                list2.options[3] = new Option('AMLA','AMLA','AMLA','AMLA','AMLA');
                list2.options[4] = new Option('ASHTA','ASHTA','ASHTA','ASHTA','ASHTA');
                list2.options[5] = new Option('ATER','ATER','ATER','ATER','ATER');
				list2.options[6] = new Option('BAGLI','BAGLI','BAGLI','BAGLI','BAGLI');
                list2.options[7] = new Option('BAIHAR','BAIHAR','BAIHAR','BAIHAR','BAIHAR');
                list2.options[8] = new Option('BANDA','BANDA','BANDA','BANDA','BANDA');
                list2.options[9] = new Option('BARGI','BARGI','BARGI','BARGI','BARGI');
                list2.options[10] = new Option('BETUL','BETUL','BETUL','BETUL','BETUL');
               
            }
}
