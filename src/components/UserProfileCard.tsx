interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  avatarUrl?: string;
}
 
interface UserProfileCardProps {
  user: User;
  showEmail?: boolean;
  showRole?: boolean;
  onEdit?: (userId: string) => void;
  children?: React.ReactNode;
}

function UserProfileCard ({user, showEmail, showRole, onEdit, children}: UserProfileCardProps) {
    return (
        <div className="border p-4 border-white rounded-xl w-100 shadow-xl text-center">
            <div className="grid grid-cols-6 bg-green-300">
                <div className='self-center justify-center'>
                    <img className="w-20 p-1 rounded-full" src={user.avatarUrl} alt="profile icon" />
                </div>
                <div className="col-span-4 text-center">
                    <h3 className="font-bold text-lg">{user.name}</h3>
                    {showEmail && <p>{user.email}</p>}
                    {showRole && <p>{user.role}</p>}
                </div>
            </div>
            <div className="m-3">
                {children}
            </div>
            
            {onEdit && <button className="text-lg bg-blue-400 text-white w-91 my-3 p-2" onClick={() => onEdit(user.id)}>Edit Profile</button>}
        </div>
    )
}

export default UserProfileCard