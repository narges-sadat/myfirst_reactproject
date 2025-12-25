import "./App.css";
import ProfilePage from "./components/ProfilePage";
import avatarImage from "./assets/avatar.png";

export default function App() {
  const user = {
    name: "narges sadat",
    username: "@nargessadat",
    avatarImage: avatarImage, // if you are using image later, we can replace this with avatarUrl
    xp: 80,
    lastActive: "Dec 22, 2025",
    streakDays: 2,
    longestStreak: 2,
    recentBadgesText: "No badges earned yet.",
  
    personalInfo: {
      Email: "nargessadat098@gmail.com",
      Gender: "Female",
      Country: "Afghanistan",
      "Province orState ": "Herat",
      "Teaching Experience (in years)": "21",
      "Date Of Birth": "2/16/86",
      "Online Portfolio Link": "N/A",
      "LinkedIn Link": "Open the Link",
      Languages: "farsi, english",
      Bio: "Student @CodeToImspire",
    },
  
    accountDetails: {
      Role: "Mentor",
      Status: "Active",
      Verification: "Verified",
    },
  };
  
return (
   <div className="page">
      <ProfilePage user={user} />
      </div>
)
 
}
