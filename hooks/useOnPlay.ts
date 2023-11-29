import { Song } from "@/types";
import usePlayer from "./usePlayer";
import useAuthModal from "./useAuthModal";
import { useUser } from "./useUser";
import useSubscribeModel from "./useSubscribeModel";

const useOnPlay=(songs:Song[])=>{
    const player=usePlayer();
    const authModal=useAuthModal();
    const {user,subscription}=useUser()
    const subscribeModal=useSubscribeModel()
    
    const onPlay=(id:string)=>{
      if(!user){
        return authModal.onOpen();
      } 
      if(!subscription){
        return subscribeModal.onOpen()
      }
      player.setId(id);
      player.setIds(songs.map((song)=>song.id))
     
    }
    return onPlay;
}

export default useOnPlay