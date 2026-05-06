import { useState } from 'react'
import Layout from '../../components/Layout'

export default function SEOAnalyzer(){

  const [url,setUrl] = useState('')
  const [loading,setLoading] = useState(false)
  const [result,setResult] = useState(null)

  const analyze = ()=>{

    setLoading(true)

    setTimeout(()=>{

      setResult({
        score:82,
        speed:'Fast',
        mobile:'Responsive',
        seo:'Good SEO structure',
        ssl:'Secure HTTPS enabled'
      })

      setLoading(false)

    },2000)
  }

  return(
    <Layout>

      <div style={{
        background:'rgba(255,255,255,0.06)',
        padding:'30px',
        borderRadius:'25px'
      }}>
     
