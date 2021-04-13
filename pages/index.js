import Head from 'next/head'
import {useRef, useEffect} from "react"
import Layout, { siteTitle } from 'components/layout'
import utilStyles from 'styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from 'components/date'
import HomeStyle from "./home.module.scss"
import { makeStyles,  createStyles  } from "@material-ui/core"

const useStyle = makeStyles(theme=>{
  return createStyles({
    item: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
  })
})


export default function Home({ allPostsData }) {

  const sectionRef = useRef(null)

  const classes  = useStyle()


  useEffect(()=>{

    if ("IntersectionObserver" in window) {

      if(sectionRef.current){

        let imgs = sectionRef.current.querySelectorAll("img")

        let options = {
          root: sectionRef.current,
          // threshold: 1.0,
        }
        let imageObserver  = new IntersectionObserver((entries, observer)=>{
          entries.forEach(entry=>{
            if(entry.isIntersecting){
              let currentItem  = entry.target;
              currentItem.classList.add("timg")
              console.log('====================================');
              console.log(currentItem);
              console.log('====================================');
              
            }
          })
       })   
       

        //  put all item from observe
       imgs.forEach(i=>{
          imageObserver.observe(i)
       })

       
      }
    }
  }, [])



  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>

        <img src="/images/products/infinix-hot-s4.jpg" />


      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>

      <section>

          
        <div ref={sectionRef} className={HomeStyle.wrapper}>

            { new Array(10).fill(1).map((i, item)=>{
              return (
                <div className={HomeStyle.item}>
                  <h2 style={{textAlign: "center"}}>{item}</h2>
                  <div className="div">
                    <img  src={"/images/products/infinix-hot-s4.jpg"} alt="sdf"/>
                  </div>
                  <p>ditiis ienetur, vel. Ad exercitationem nam, illo tenetur eos consectetur id reiciendis, dolorum itaque voluptatibus ipsam perspiciatis, eius deserunt placeat eum? Nulla nemo nihil unde ex eius labore quas dolorum officia, velit sequi veritatis eveniet animi, aspernatur debitis vitae rem sint! Quam, consequuntur totam quos explicabo repudiandae maiores dolorem doloremque reprehenderit repellat, sequi quo optio nemo illum. Inventore quo necessitatibus beatae quidem a itaque repudiandae tempore quasi in quibusdam ut non accusantium eius, nihil totam suscipit! Unde ad doloremque ipsam aliquid maiores et voluptate impedit sit, est magni fugit quibusdam? Similique officia voluptates vel commodi impedit omnis sapiente minima, vero rem error in quidem possimus a optio qui eaque quas doloremque voluptas porro. Quo similique repellendus, odit facilis suscipit maiores officia excepturi debitis laboriosam minus labore reprehenderit repellat et, sequi nesciunt numquam ex quod architecto animi aspernatur repudiandae eum ipsam? Officia quasi placeat est laboriosam alias, odit architecto provident assumenda veritatis dicta inventore omnis expedita excepturi? Quibusdam dignissimos perspiciatis nam perferendis incidunt quidem sit eos, pariatur ea blanditiis ut odit suscipit eligendi, porro hic soluta rem, nemo ad dolorem quod similique voluptatibus fugit? Reiciendis sit dolor nam.</p>
                </div>

              )
            }) }


        </div>
          


      </section>


    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
