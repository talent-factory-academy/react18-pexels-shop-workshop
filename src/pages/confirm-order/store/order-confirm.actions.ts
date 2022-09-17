import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { clearCart } from '../../../core/store/cart/cart-items.store';
import { AppThunk, RootState } from '../../../main';

export const sendOrderSuccess = createAction('sendOrderSuccess')

/**
 * createAsyncThunk
 */
export const sendOrder = createAsyncThunk<'OK' | 'ERROR', string, { state: RootState}>(
  'order-confirm/sendOrder',
  async (payload, { dispatch, rejectWithValue, getState })  => {

    const data = {
      service_id: 'service_h3aq19u',
      template_id: 'template_i583f5c',
      user_id: 'user_cIFUFcsaVXxVhJEAhG2nv',
      template_params: {
        from_name: payload,
        email: payload,
        message: `
 - Order Date 3: ${new Date().toDateString()}<br> 
 - Email: ${payload} <br> 
 - Your videos: ${getState().cart.items.map(item => `<a href="${item.url}">${item.id}</a>`)},
`
      }
    };

    try {
      const res = await axios.post<'OK' | 'ERROR'>(
        'https://api.emailjs.com/api/v1.0/email/send', data
      );

      dispatch(sendOrderSuccess())
      dispatch(clearCart())
      return res.data;
    } catch (err) {
      // dispatch(setHttpStatus({ status: 'error', actionType: 'addProduct' }))
      return rejectWithValue('ERROR')
    }
  }
)


/**
 * Simple Async thunk to send an email
 * @param emailAddress
 */
export const sendOrder_2 = (emailAddress: string): AppThunk => async (dispatch, getState) => {
    const data = {
      service_id: 'service_h3aq19u',
      template_id: 'template_i583f5c',
      user_id: 'user_cIFUFcsaVXxVhJEAhG2nv',
      template_params: {
        from_name: emailAddress,
        email: emailAddress,
        message: 'your order IDS: \n' + JSON.stringify(getState().cart.items.map(item => item.id)),
      }
    };

    axios.post('https://api.emailjs.com/api/v1.0/email/send', data)
      .then(() => {
        console.log(emailAddress, getState().cart.items)
        dispatch(sendOrderSuccess())
        dispatch(clearCart())

      })
}

/**
 * Simple Thunk (no server side calls)
 * @param emailAddress
 */
export const sendOrder_1 = (emailAddress: string): AppThunk => async (dispatch, getState) => {
  console.log(emailAddress, getState().cart.items)
  dispatch(sendOrderSuccess())
}
