import {create} from "zustand"
interface AuthModalStore{
    isOpen:boolean,
    onOpen:()=>void;
    onClose:()=>void;

}

const useSubscribeModel=create<AuthModalStore>((set)=>({
    isOpen:false,
    onOpen:()=>set({isOpen:true}),
    onClose:()=>set({isOpen:false})
}))

export default useSubscribeModel;