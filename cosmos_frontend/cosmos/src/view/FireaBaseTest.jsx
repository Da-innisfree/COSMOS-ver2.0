import React, { useState } from 'react'; 
import { firebaseStorage } from '../service/firebase.js'; 

function FireBaseTest () {
    
    const [attachment, setAttachment] = useState() 
    const [file, setFile] = useState('')
    const [attachmentUrl, setAttachmentUrl] = useState('')
    
    const onFileChange = (event) => {
        const {target:{files, value}} = event;
        const theFile = files[0];
        const reader = new FileReader();
        setFile(value)
        reader.onloadend = (finishedEvent) => {
          const { currentTarget: {result}} = finishedEvent
          setAttachment(result)
        }
        reader.readAsDataURL(theFile);
      }

      const onClearAttachment = () => {
        setAttachment(null)
        setFile('')
      };

      const saveFile = async () => {
        console.log('file', file);
        console.log('attachment', attachment);
        setAttachmentUrl("");
        if(attachment !== ""){
            const storageRef = firebaseStorage.ref();
            const newFileName = 'testfile';
            let childName = `test/${newFileName}`;
            const attachmentRef = storageRef.child(childName);
            // let uploadTask = storageRef.child(childName).put(f.file);
            const response = await attachmentRef.putString(attachment, "data_url")
            setAttachmentUrl(await response.ref.getDownloadURL())
        }

        if(attachmentUrl !== ""){
            console.log('attachmentUrl',attachmentUrl);
        }

        // const attachmentRef = storageService.ref().child(`${userObj.uid}/${uuidv4()}`);
      }

    return (
        <div>
            <input type="file" accept="image/*" onChange={onFileChange} value={file}/>
            <button onClick={saveFile}>저장</button>
            {attachment && (
            <div>
                <img src={attachment} width="50px" height="50px" alt="attachment"/>
                <img src={attachmentUrl} width="50px" height="50px" alt="attachment"/>
                <button onClick={onClearAttachment}>Clear</button>
            </div>
            )}
        </div>
    )
}

export default FireBaseTest;