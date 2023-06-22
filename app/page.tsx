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



export default function Main(){

	return(
		<section style={{ width: '200px', border: '1px solid #efefef', textAlign: 'center', padding: "20px", margin: "40px auto"  }}>
			<ProfilePicture/>
			<Biodata />
		</section>
		);
	
}
