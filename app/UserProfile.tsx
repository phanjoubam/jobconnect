import Image from 'next/image'


function ProfileCard(){
	
	return (
	
	<div style={{ textAlign: 'center' }} >
    <img src="https://www.upwork.com/profile-portraits/c1ftAd6RAi0iaZWHsbdl66CLSURntWZz6CvAtXCHER7ZHdkYZA0m9Yy8PTQsFeSNv6"
      alt="Phanjoubam Herojit" style={{ display: "inline"}} />
	
		<div  style={{textAlign:'center'}} >
			<p>Phanjoubam Herojit</p>
			<span>Node.Js Developer</span>
		</div>
		
		<div>
			<p>Hello! I'm a highly experienced web developer with over 12 years of expertise in creating dynamic and innovative web solutions. My passion lies in crafting robust and scalable applications using a variety of technologies.</p>
		</div>
	
	</div>
  );
  
}


export default function UserProfile(){
	
	return (
	
	<ProfileCard/>
	
	
	);
}