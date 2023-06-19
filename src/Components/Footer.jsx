export default function Footer({text, otherClass}) { 

    return <>
      <footer>
        <p className={otherClass}>{text}</p>
      </footer>
    </>
}