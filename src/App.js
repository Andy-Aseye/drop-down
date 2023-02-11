import React, {useState, useRef} from 'react';
import './App.css';



const faqs = [
  {
      id: 1,
      header: "Select Wallet Type",
      text: {
        first: 'Internal',
        second: 'Swap'
      }
  },
  {
      id: 2,
      header: "Select Blockchain",
      text: {
        first: 'Internal',
        second: 'Swap'
      }
  },
  {
      id: 3,
      header: "Select Token/ Coin",
      text: {
        first: 'Metamask',
        second: 'Coinbase',
        third: 'Mycellium'
      }
  },
];


const AccordionItem = (props) => {
  const contentEl = useRef();
  const { handleToggle, active, faq } = props;
  const { header, id, text } = faq;

  return (
      <div className="rc-accordion-card">
          <div className="rc-accordion-header">
              <div className={`rc-accordion-toggle p-3 ${active === id ? 'active' : ''}`} onClick={() => handleToggle(id)}>
                  <h5 className="rc-accordion-title">{header}</h5>
                  <i className="fa fa-chevron-down rc-accordion-icon"></i>
              </div>
          </div>
          <div ref={contentEl} className={`rc-collapse ${active === id ? 'show' : ''}`} style={
              active === id
                  ? { height: contentEl.current.scrollHeight }
                  : { height: "0px" }
          }>
              <div className="rc-accordion-body">
                  <ul className='list'>
                    <li>{text.first}</li>
                    <li>{text.second}</li>
                    <li>{text.third}</li>
                  </ul>
              </div>
          </div>
      </div>
  )
}



const App = () => {
  const [active, setActive] = useState(null);

  const handleToggle = (index) => {
      if (active === index) {
          setActive(null);
      } else {
          setActive(index);
      }
  }


  return (
    <div>
         <>
            <div className="container-main">
                <div className="row justify-content-center">
                    <div className="col-md-8 mt-2">
                        <div className="card">
                            <div className="card-body">
                              <h4 className="form-heading mb-4 text-center mt-3">Charts</h4>
                              <h3 className="form-subheading">Customize your charts from the dropdown menus below</h3>
                                {faqs.map((faq, index) => {
                                     return (
                                            <AccordionItem key={index} active={active} handleToggle={handleToggle} faq={faq} />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    </div>
  )
}

export default App;