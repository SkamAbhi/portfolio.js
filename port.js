
var  head=document.createElement("navbar");
     head.setAttribute('id','nav');
     head.setAttribute('style','width:100%;flex-direction: row-reverse;font-size: 22px;display: flex;cursor: pointer;font-weight: 700;');
document.body.style.backgroundColor= "#FFF";

var ul=document.createElement("ul");
      ul.setAttribute('style','display: flex; list-style: none;')
 
document.body.appendChild(head);
     head.appendChild(ul);
    

var list=["home","about","education","project","contact"];
for (let i=0;i<list.length;i++){
     var li =document.createElement('li');
     li.className="lists";
     li.setAttribute('style','width=100%;')


 var a=document.createElement("a");
     a.textContent=list[i];
     ul.appendChild(li);
     li.appendChild(a);
     a.setAttribute('style','color:black;  padding:20px;')
     
}
 var info=document.createElement("info");
     info.className='info';
     info.setAttribute('style','width:100% height:100% font-size:10px')

 var  h1=document.createElement("h1");

      h1.textContent="Hey I am Abhishek Singh"
      h1.setAttribute('style','font-size:70px; padding-left: 18rem; padding-top: 7rem;')

 var  h4=document.createElement("h4");
      
      h4.textContent="I build creative things for web"
      h4.setAttribute('style',' font-size:35px ;padding-left:28rem')

 document.body.appendChild(info);
     info.appendChild(h1)
     info.appendChild(h4)


 const bitmoji = new Image();
     bitmoji.src='memoji.png';
     info.appendChild(bitmoji);
     bitmoji.setAttribute('style','width:19rem;height:18rem; padding-left: 33rem;')

 const about=document.createElement("about");
     about.textContent="AboutMe"
     about.className ='abouttitle'
     about.setAttribute('style','font-size: 50px;padding-left: 37rem;background-color:#6E07F3;width: 100%;display: grid;margin-top: 16px;  grid-template-columns:auto auto auto ;grid-gap: 10px; color:white; padding-bottom:5rem;')

     // INFO TAK NTR :))


 var aboutinf=document.createElement('aboutinfo');
     
     aboutinf.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi non optio quae Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis aspernatur consequatur atque corrupti minus, doloribus rem ullam harum architecto, accusantium accusamus ipsum nemo cupiditate dicta aut illum modi. Ullam, amet?."
    
    aboutinf.setAttribute('style', 'font-size: 25px; font-weight: bolder;position: relative;top: 7rem;right: 84rem; color:white;')

 var ul2=document.createElement('ul');
      ul2.setAttribute('style','display: flex;flex-wrap: wrap;list-style: none; margin-top: 7rem;')

var skills=["HTML","CSS","JAVASCRIPT","REACT","MYSQL","RESPONSIVE DESIGN"];
      for(let i=0; i<skills.length;i++){
          var li =document.createElement("li");
          li.className="myskills";
          li.setAttribute('style','padding:1px;margin-bottom: 30px; margin-right: 1.5rem; font-size: 27px; background: white; border-radius: 15px; font-weight: 600; color: #666;');


 var a=document.createElement("a");
          a.textContent=skills[i];
          ul2.appendChild(li);
          li.appendChild(a);
          a.setAttribute('style','color:black;  padding:20px;')
      }
 
      document.body.appendChild(about)
      about.appendChild(ul2)
      about.appendChild(aboutinf)

     //******************************** PROJECT SECTION **************************************/
var project=document.createElement('project');

var protitle=document.createElement('protitle');
      protitle.textContent="PROJECTS"
      protitle.setAttribute('style','padding-left: 35rem;font-size: 3rem;')


      //*************   Image section      ******************
var proimage=document.createElement('proimage');
      proimage.setAttribute('style','display: flex;flex-direction: row;overflow: hidden;width: 100%;  padding: 32px; padding-left:11rem')   

     const pro1 = new Image();
     pro1.src='pro1.jpg';
     proimage.appendChild(pro1);
     pro1.setAttribute('style','width:19rem;height:18rem;  border-radius: 40px;padding: 29px;')
      
     const pro2 = new Image();
     pro2.src='pro2.jpg';
     proimage.appendChild(pro2);
     pro2.setAttribute('style','width:19rem;height:18rem;   border-radius: 40px;padding: 29px;')

     const pro3 = new Image();
     pro3.src='pro3.jpeg';
     proimage.appendChild(pro3);
     pro3.setAttribute('style','width:19rem;height:18rem;border-radius: 40px;padding: 29px;')

     document.body.appendChild(project)
     project.appendChild(protitle)
     project.appendChild(proimage)


//  *************   CONTACT FORM    ************
var contact=document.createElement('contact');
     contact.textContent='Interested in Collabrating!'
     contact.setAttribute('style','padding-left: 28rem;font-size: 3rem; ')
   
var conform = document.createElement('form');
     conform.setAttribute("action", "");
     conform.setAttribute("method", "post"); 
     conform.setAttribute('style','background-color:#6E07F3; color:white;padding-top: 10px; padding-bottom:20px')
     contact.appendChild(conform);
    
var heading = document.createElement('h2');
     heading.textContent=""                         // Contact info
     heading.setAttribute('style','padding-left: 20rem; padding-right: 28rem; font-size: 36px; ')
     conform.appendChild(heading)
 

var yourname = document.createElement('label');                   //Name
     yourname.textContent='Name'
     yourname.setAttribute('style','padding-left: 17rem ; font-size: 30px;')
     conform.appendChild(yourname);

var emaillabel = document.createElement('label');                 // Email 
     emaillabel.textContent = "Email ";
     emaillabel.setAttribute('style','padding-left: 371px; font-size: 30px')
     conform.appendChild(emaillabel);

var linebreak = document.createElement('br');
     conform.appendChild(linebreak);

var inputelement =document.createElement('input')                // name box
     inputelement.setAttribute("type", "text");
     inputelement.setAttribute("name", "name");
     inputelement.setAttribute('style','margin-left: 268px; height: 57px;width: 20rem; font-size: 30px;')
     conform.appendChild(inputelement);

var email = document.createElement('input')                       // email box
     email.setAttribute("type", "text");
     email.setAttribute("name", "name");
     email.setAttribute('style','margin-left: 129px; height: 57px;width: 20rem;font-size: 30px;')
     conform.appendChild(email);

var emailbreak = document.createElement('br');
     conform.appendChild(emailbreak);

var messagelabel = document.createElement('label');
     messagelabel.textContent =" Message ";                      // message
     messagelabel.setAttribute('style','padding-left: 17rem;margin-right: 10px;font-size: 36px;')
     conform.appendChild(messagelabel);

var messagebreak = document.createElement('br');
     conform.appendChild(messagebreak);

var texareaelement = document.createElement('textarea');
     texareaelement.setAttribute("name", "dmessage");                //MSGBOX
     texareaelement.setAttribute('style','  margin-left: 17rem;margin-top: 0px;padding-top: 0px;width: 48rem;height: 161px; font-size: 30px;')
     conform.appendChild(texareaelement);

var messagebreak = document.createElement('br');
     conform.appendChild(messagebreak);

var submitbtn= document.createElement('input');                       // SUBMIT-BTN
     submitbtn.setAttribute("type", "submit");
     submitbtn.setAttribute("name", "submit");
     submitbtn.setAttribute("value", "Submit");
     submitbtn.setAttribute('style',' margin-left: 36rem; height: 3rem; width: 9rem; font-size: 19px; border-radius: 25px;')
     
     conform.appendChild(submitbtn);

document.body.appendChild(contact);    
     