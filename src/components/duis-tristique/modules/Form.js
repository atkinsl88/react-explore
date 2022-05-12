import React from 'react';
import { Formik, Field, Form } from 'formik';

// Bootstrap form with Formik structure
// Need to add functionality behind this

const Basic = () => (
  <>

    <div className="container text-image">
      <div className="text-col">
        <p>Vivamus porta luctus maximus. Donec a nunc neque. Pellentesque et eros non lectus vulputate hendrerit. Nam eget eleifend nisi. Nunc pulvinar at lorem nec finibus. Maecenas fringilla rutrum nulla eget pretium. Praesent felis arcu, facilisis eget est quis, imperdiet sagittis turpis. Maecenas faucibus justo et nisi sagittis, a pellentesque risus finibus. Vestibulum vel metus at ligula eleifend faucibus quis vel ipsum. Donec dictum fringilla dui vitae tincidunt.</p>
      </div>
      <div className="form-col">
        <h2>Vivamus porta</h2>
        <Formik
          initialValues={{
            name: '',
            email: '',
          }}
        >
          <Form>
          <div className="form-group">
              <label 
                for="exampleInputEmail1">Name
              </label>
              <Field 
                type="name" 
                className="form-control" 
                aria-describedby="emailHelp" 
                placeholder="Enter name" 
              />
              <small 
                id="emailHelp" 
                className="form-text text-muted">We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label 
                for="exampleInputEmail1">Email address
              </label>
              <Field 
                type="email" 
                className="form-control" 
                aria-describedby="emailHelp" 
                placeholder="Enter email" 
              />
              <small 
                id="emailHelp" 
                className="form-text text-muted">We'll never share your email with anyone else.
              </small>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </Form>
        </Formik>
      </div>
    </div>
  </>
)

export default Basic