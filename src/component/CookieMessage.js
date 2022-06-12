
function CookieMessage(){
   
    return(
        <div className="alert text-center cookiealert" role="alert">
        <b>Do you like cookies?</b> We use cookies to ensure you get the best experience on our website. <a href="https://demo.templatetrip.com/Html/HTML001_victoria/" rel="noreferrer">learn more</a>
        <button type="button" className="btn btn-primary btn-sm acceptcookies" aria-label="Close">
          I agree
        </button>
      </div>
    )
}
export default CookieMessage