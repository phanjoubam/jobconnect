import { ProfileImage } from "./UserProfile"
import UserProfile from "./UserProfile" 

export default function Main(){

	return(
		<section style={{ width: '300px', borderRadius: "10px", boxShadow: "10px 10px 10px #232323", border: '1px solid #efefef', textAlign: 'center', padding: "20px", margin: "40px auto"  }}>
			
			<ProfileImage/>
			<UserProfile/>
		</section>
		);
	
}
