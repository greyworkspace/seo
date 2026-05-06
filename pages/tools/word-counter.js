import { useState } from 'react'
import Layout from '../../components/Layout'

export default function WordCounter(){

  const [text,setText] = useState('')

  const words = text.trim()
  ? text.trim().split(/\s+/).length
  : 0

  const copyText = async()=>{
    await navigator.clipboard.writeText(text)
    alert('Copied!')
  }

  return(
    <Layout>

      <div style={{
        background:'rgba(255,255,255,0.06)',
        padding:'30px',
        borderRadius:'25px'
      }}>

        <h1>Word Counter</h1>

        <textarea
          rows='12'
          value={text}
          onChange={(e)=>setText(e.target.value)}
        />

        <div style={{display:'flex',gap:'20px',marginTop:'20px'}}>

          <div style={{
            background:'#111827',
            padding:'20px',
            borderRadius:'15px'
          }}>
            <h2>{words}</h2>
            <p>Words</p>
          </div>

          <div style={{
            background:'#2563eb',
            padding:'20px',
            borderRadius:'15px'
          }}>
            <h2>{text.length}</h2>
            <p>Characters</p>
          </div>

        </div>

        <button onClick={copyText}>
          Copy Text
        </button>

      </div>

    </Layout>
  )
}
