function BuildResume() {
    
    const Firstname = document.getElementById('Firstname').value;
    const Middlename = document.getElementById('Middlename').value;
    const Lastname = document.getElementById('Lastname').value;
    const Bio = document.getElementById('Bio').value;
    const Address = document.getElementById('Addr').value;
    const Email = document.getElementById('email').value;
    const Phone = document.getElementById('phone').value;
    const Summary = document.getElementById('Sumry').value;
    const Title = document.getElementById('Title').value;
    const Description = document.getElementById('Descrp').value;

    const EdSchool = document.getElementById('EdSchool').value;
    const EdDegree = document.getElementById('EdDegree').value;
    const EdLocation = document.getElementById('EdLoc').value;
    const EdSdate = document.getElementById('EdSdate').value;
    const EdEdate = document.getElementById('EdEdate').value;
    const EdDescription = document.getElementById('EdDescrp').value;

    const ExTitle = document.getElementById('ExTitle').value;
    const ExCompany = document.getElementById('Comp').value;
    const ExLocation = document.getElementById('Loc').value;
    const ExSdate = document.getElementById('Sdate').value;
    const ExEdate = document.getElementById('Edate').value;
    const ExDescription = document.getElementById('EDescrp').value;

    const Pname = document.getElementById('Pname').value;
    const Plink = document.getElementById('Plink').value;
    const PDescrp = document.getElementById('PDescrp').value;

    const Skill1 = document.getElementById('Skill1').value;
    const Skill2 = document.getElementById('Skill2').value;
    const Skill3 = document.getElementById('Skill3').value;
    const Skill4 = document.getElementById('Skill4').value;

        const resumeOutput = document.getElementById('Display-Resume');
        resumeOutput.innerHTML = `
        <div class="resume">
            <div class="profile">
                <div class="pname">
                    <h2>${Firstname} ${Middlename} ${Lastname}</h2> 
                    <h2 class="h2bio">${Bio}</h2>
                </div 
            </div>
            <div id="resumesec223">  
                <div class="sec2">      
                <h4>About</h4>
                <p>${Address}</p>
                <p>${Email}</p>
                <p>${Phone}</p>
                <p>${Summary}</p>
                </div> 
                <div class="sec223">
                <h4>Skills</h4>
                <p>${Skill1}</p> <p>${Skill2}</p>
                <p>${Skill3}</p> <p>${Skill4}</p>
                </div> 
            </div>
            <div id="resumesec22"> 
                <div class="sec2">
                <h4>Achievement</h4>
                <p><b>${Title}</b></p>
                <p>${Description}</p>
                </div> 
                <div class="sec22">
                <h4>Project</h4>
                <p><b>${Pname}</b></p>
                <p>${Plink}</p> <p class="p1">${PDescrp}</p>
                </div> 
            </div>
            <h4>Education</h4>
            <p><b>${EdSchool}</b></p>
            <p>${EdDegree}</p>
            <p>${EdLocation}</p>
            <p><b>${EdSdate} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ${EdEdate}</b></p>
            <p>${EdDescription}</p>    
            <h4>Experience</h4>
            <p><b>${ExTitle}</b></p>
            <p>${ExCompany}</p>
            <p>${ExLocation}</p>
            <p><b>${ExSdate} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ${ExEdate}</b></p>
            <p>${ExDescription}</p>
        </div>`;
    }



function DownloadCV(){
    window.print();
}