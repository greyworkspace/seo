import Link from 'next/link'

export default function Sidebar(){

  const items = [
    ['Home','/'],
    ['Word Counter','/tools/word-counter'],
    ['Meta Generator','/tools/meta-generator'],
    ['SEO Analyzer','/tools/seo-analyzer'],
    ['AI SEO Assistant','/tools/ai-seo-assistant']
  ]

  return(
    <div style={{
      width:'260px',
      minHeight:'100vh',
      background:'rgba(255,255,255,0.05)',
      backdropFilter:'blur(20px)',
      borderRight:'1px solid rgba(255,255,255,0.1)',
      padding:'25px'
    }}>

      <h2>🚀 SEO Tools</h2>

      <div style={{marginTop:'30px'}}>

        {items.map((item,index)=>(
          <Link
            href={item[1]}
            key={index}
            style={{textDecoration:'none'}}
          >
            <div style={{
              background:'rgba(255,255,255,0.08)',
              padding:'14px',
              borderRadius:'12px',
              marginBottom:'12px',
              color:'white'
            }}>
              {item[0]}
            </div>
          </Link>
        ))}

      </div>

    </div>
  )
}
