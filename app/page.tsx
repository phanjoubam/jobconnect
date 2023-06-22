import Image from 'next/image'

function ProfilePicture() {
  return (
    <img
      src="https://www.upwork.com/profile-portraits/c1ftAd6RAi0iaZWHsbdl66CLSURntWZz6CvAtXCHER7ZHdkYZA0m9Yy8PTQsFeSNv6"
      alt="Phanjoubam Herojit" style={{ display: "inline"}}
    />
  );
}

function Biodata(){

	return ( 
		<div  style={{textAlign:'center'}} >
			<p>Phanjoubam Herojit</p>
			<span>Node.Js Developer</span>
		</div>
	);
}


function ShortIntro(){
	
	return(
	<div>
		<p>Hello! I'm a highly experienced web developer with over 12 years of expertise in creating dynamic and innovative web solutions. My passion lies in crafting robust and scalable applications using a variety of technologies.</p>
	</div>
	
	);
}


export default function Main(){

	return(
		<section style={{ width: '200px', border: '1px solid #efefef', textAlign: 'center', padding: "20px", margin: "40px auto"  }}>
			<ProfilePicture/>
			<Biodata />
			<ShortIntro/>
		</section>
		);
	
}
