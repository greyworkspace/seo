import { useState } from 'react'
import Layout from '../../components/Layout'

export default function MetaGenerator(){

  const [title,setTitle] = useState('')
  const [desc,setDesc] = useState('')

  const result = `<title>${title}</title>\n<meta name="description" content="${desc}" />`

  const copyMeta = async()=>{
    await navigator.clipboard.writeText(result)
    alert('Copied!')
  }

  return(
    <Layout>

      <div style={{
        background:'rgba(255,255,255,0.06)',
        padding:'30px',
        borderRadius:'25px'
      }}>

        <h1>Meta Tag Generator</h1>

        <input
          placeholder='Page title'
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
        />

        <textarea
          rows='5'
          placeholder='Meta description'
          value={desc}
}
