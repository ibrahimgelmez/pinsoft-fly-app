import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import CreditCardForm from './CreditCardForm';
import { useNavigate } from 'react-router';
import Footer from '../components/UI/footer';
import AnimatedRoute from '../components/UI/AnimatedRoute';

const PaymentScreen = () => {
  const [iban, setIban] = useState('');
  const [nameSurname, setNameSurname] = useState('');
  const [installments, setInstallments] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [paymentOption, setPaymentOption] = useState('');
  const [accountNumber, setAccountNumber] = useState('');

  const handleIbanChange = (event) => {
    const inputValue = event.target.value;
    const numericValue = inputValue.replace(/\D/g, '');
    const formattedValue = numericValue
      .replace(
        /(\d{1,2})(\d{1,4})(\d{1,4})(\d{1,4})(\d{1,4})(\d{1,4})(\d{1,4})(\d{1,2})/,
        'TR$1 $2 $3 $4 $5 $6 $7 $8'
      )
      .trim();
    setIban(formattedValue.slice(0, 33));
  };

  const handleAccountNumber = (event) => {
    const inputValue = event.target.value;
    const numericValue = inputValue.replace(/\D/g, '');
    const formattedValue = numericValue.replace(/(\d{1,2})/, '$1').trim();
    setAccountNumber(formattedValue.slice(0, 10));
  };

  const handleFinishPayment = () => {
    navigate('/ticket');
  };
  const navigate = useNavigate();

  const handleNameSurnameChange = (event) => {
    const inputValue = event.target.value;
    const alphabeticValue = inputValue.replace(/[^a-zA-ZğüşıöçĞÜŞİÖÇ\s]/g, '');
    setNameSurname(alphabeticValue);
  };

  const handleInstallmentChange = (event) => {
    const { value } = event.target;
    setInstallments(value);
  };

  const handleAcceptTermsChange = (event) => {
    setAcceptTerms(event.target.checked);
  };

  const handlePaymentOptionClick = (option) => {
    setPaymentOption(option);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Ödeme işlemi için gerekli adımları burada gerçekleştirin
    // Ödeme işlemi tamamlandığında kullanıcıyı bilgilendirin
  };

  return (
    <>
      <AnimatedRoute>
        <div className='bg-fourth bg-cover bg-fixed  bg-no-repeat min-h-screen flex items-center justify-center -z-1'>
          <div className='flex justify-center items-center max-w-[1200px] my-20 h-auto max-h-full rounded-lg shadow-xl bg-white backdrop-blur-sm bg-white/95'>
            <form
              className=' p-4 max-h-full border shadow-xl  rounded-lg'
              onSubmit={handleSubmit}
            >
              <h2 className='text-center text-4xl mb-5 font-Headlines'>
                Payment Information
              </h2>
              <div className='flex  justify-center gap-5  mb-8 '>
                <div
                  className={`payment-option ${
                    paymentOption === 'card' ? 'active' : ''
                  } border border-gray-300 rounded-lg p-4 cursor-pointer ${
                    paymentOption === 'card'
                      ? 'bg-primary-color-extra-light text-white'
                      : 'bg-transparent'
                  }`}
                  onClick={() => handlePaymentOptionClick('card')}
                >
                  <h3 className='m-0'>Credit card/Debt card</h3>
                </div>
                <div
                  className={`payment-option ${
                    paymentOption === 'transfer' ? 'active' : ''
                  } border border-gray-300 rounded-lg p-4 cursor-pointer ${
                    paymentOption === 'transfer'
                      ? 'bg-primary-color-extra-light text-white'
                      : 'bg-transparent'
                  }`}
                  onClick={() => handlePaymentOptionClick('transfer')}
                >
                  <h3 className='m-0'>Bank Transfer</h3>
                </div>
                <div
                  className={`payment-option ${
                    paymentOption === 'papara' ? 'active' : ''
                  } border border-gray-300 rounded-lg p-4 cursor-pointer ${
                    paymentOption === 'papara'
                      ? 'bg-primary-color-extra-light text-white'
                      : 'bg-transparent'
                  }`}
                  onClick={() => handlePaymentOptionClick('papara')}
                >
                  <h3 className='m-0'>Papara</h3>
                </div>
              </div>
              {paymentOption === 'card' && <CreditCardForm />}
              {paymentOption === 'transfer' && (
                <div className='transfer-details'>
                  <label>IBAN Number</label>
                  <input
                    type='text'
                    value={iban}
                    onChange={handleIbanChange}
                    className='border border-gray-300 rounded-lg p-2 w-full'
                  />
                </div>
              )}
              {paymentOption === 'papara' && (
                <div className='papara-details'>
                  <label>Account Number</label>
                  <input
                    type='text'
                    value={accountNumber}
                    onChange={handleAccountNumber}
                    className='border border-gray-300 rounded-lg p-2 w-full mb-4'
                  />
                  <div className='name-surname-details'>
                    <label>Name-Surname</label>
                    <input
                      type='text'
                      value={nameSurname}
                      onChange={handleNameSurnameChange}
                      className='border border-gray-300 rounded-lg p-2 w-full'
                    />
                  </div>
                </div>
              )}
              {paymentOption !== 'transfer' && (
                <>
                  <h3 className='text-center text-xl font-Headlines'>
                    installment Options
                  </h3>
                  <div className=' flex flex-row items-center justify-center gap-5 mb-5'>
                    <label>
                      <input
                        type='radio'
                        name='installment'
                        value='single'
                        checked={installments === 'single'}
                        onChange={handleInstallmentChange}
                        className='mr-1'
                      />
                      Tek Çekim
                    </label>
                    <label>
                      <input
                        type='radio'
                        name='installment'
                        value='threeMonths'
                        checked={installments === 'threeMonths'}
                        onChange={handleInstallmentChange}
                        className='mr-1'
                      />
                      3 Ay
                    </label>
                    <label>
                      <input
                        type='radio'
                        name='installment'
                        value='sixMonths'
                        checked={installments === 'sixMonths'}
                        onChange={handleInstallmentChange}
                        className='mr-1'
                      />
                      6 Ay
                    </label>
                  </div>
                </>
              )}

              <h3 className='text-center'>
                Total Payment<p className='font-bold'>40$</p>
              </h3>
              <div className='terms'>
                <label>
                  <input
                    type='checkbox'
                    checked={acceptTerms}
                    required
                    onChange={handleAcceptTermsChange}
                    className='mr-1'
                  />
                  Agree to All Rules and Terms
                </label>
              </div>
              <button
                type='submit'
                className='w-full bg-primary-color text-white rounded-lg  hover:scale-[105%] hover:bg-primary-color-light py-2 mt-1 cursor-pointer'
                onClick={handleFinishPayment}
              >
                Finish Payment
              </button>
            </form>
          </div>
        </div>
      </AnimatedRoute>
      <Footer />
    </>
  );
};

export default PaymentScreen;
