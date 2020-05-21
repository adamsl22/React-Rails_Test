import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
    background-color: #d74234;
    min-height: 550px;
    padding: 100px 0;
    color: #fff;
`
const H1 = styled.h1`
    color: #fff;
    font-weight: 700;
    font-size: 40px;
    line-height: 52px;
`

export default function Jumbotron(){
    return(
        <Section className='home-section--1'>
            <div className='container'>
                <div className='row'>
                    <div className='col col-sm-12 col-md-5'>
                        <div className='pt-4 mt-4'>
                            <H1>React-Rails Test</H1>
                        </div>
                    </div>
                    <div className='col col-sm-12 col-md-7'>
                        <div className='pt-4 mt-4 text-center'>
                            <p>jumbotron vid goes here.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}