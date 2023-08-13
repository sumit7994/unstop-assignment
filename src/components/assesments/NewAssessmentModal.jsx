import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'

export default function NewAssessmentModal({
    show,
    handleClose
}) {

    const [showDropdown, setShowDropdown] = useState(false);

    const [selectedOptions, setSelectedOptions] = useState([
        {
            value: '1',
            label: 'UI/UX and Design'
        },
        {
            value: '2',
            label: 'No of Question'
        },
        {
            value: '3',
            label: 'Web Development'
        },
        {
            value: '4',
            label: 'UI/UX and Design'
        },
        {
            value: '5',
            label: 'Web Development'
        }
    ]);

    let options = [
        {
            value: '1',
            label: 'UI/UX and Design'
        },
        {
            value: '2',
            label: 'No of Question'
        },
        {
            value: '3',
            label: 'Web Development'
        },
        {
            value: '4',
            label: 'UI/UX and Design'
        },
        {
            value: '5',
            label: 'Web Development'
        }
    ]

    const handleChange = (e) => {
        let selected = selectedOptions.filter((opt) => {
            return opt?.value === e?.value
        })
        console.log(selected);
        if (selected?.length === 0) {
            setSelectedOptions([...selectedOptions, e])
        }
        setShowDropdown(false)
    }

    const handleRemove = (e) => {
        let leftouts = selectedOptions.filter((option) => {
            return option?.value !== e?.value
        })

        setSelectedOptions(leftouts)
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header className='justify-content-between' >
                <h2 className='modal-heading'>Create new assessment</h2>
                <svg
                    role='button'
                    onClick={handleClose}
                    width={30} height={30} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.3033 22.071L15 16.7677L9.6967 22.071L7.92893 20.3033L13.2322 15L7.92893 9.69668L9.6967 7.92891L15 13.2322L20.3033 7.92891L22.0711 9.69668L16.7678 15L22.0711 20.3033L20.3033 22.071Z" fill="#323232" />
                </svg>
            </Modal.Header>
            <Modal.Body className='d-flex flex-column new-assessment-form gap-3'>
                <div className='d-flex flex-column gap-2'>
                    <label htmlFor="name">Name of Assessment</label>
                    <input name='name' type="text" placeholder='Type Here' />
                </div>

                <div className='d-flex flex-column gap-2'>
                    <label htmlFor="purpose">Purpose of test is</label>
                    <select name="purpose">
                        <option value="">Select</option>
                        <option value="">Job</option>
                    </select>
                </div>

                <div className='d-flex flex-column gap-2'>
                    <label htmlFor="description">Description</label>
                    <select name="description">
                        <option value="">Select</option>
                        <option value="">Job</option>
                    </select>
                </div>

                <div className='d-flex flex-column gap-2'>
                    <label htmlFor="skills">Skills</label>
                    <div className='d-flex flex-column'>
                        <div className='multi-select-box d-flex flex-wrap gap-2'>
                            {
                                selectedOptions.map((option) => {
                                    return (
                                        <div key={option?.value} className='d-flex gap-3'>
                                            <p className='m-0'>{option?.label}</p>
                                            <svg
                                                onClick={() => { handleRemove(option) }}
                                                role='button' width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_0_1698)">
                                                    <path d="M14.25 4.8075L13.1925 3.75L9 7.9425L4.8075 3.75L3.75 4.8075L7.9425 9L3.75 13.1925L4.8075 14.25L9 10.0575L13.1925 14.25L14.25 13.1925L10.0575 9L14.25 4.8075Z" fill="#1C4980" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_0_1698">
                                                        <rect width={18} height={18} rx={9} fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <input
                            onFocus={() => { setShowDropdown(true) }}
                            className='multi-select-box-input' list='skills' name='skills' type="text" placeholder='Type Here' />
                        <div style={showDropdown ? { display: 'block' } : { display: 'none' }} id="skills" className='my-dropdown'>
                            {
                                options.map((opt, index) => {
                                    return <option key={index} onClick={(e) => handleChange(JSON.parse(e.target.value))} value={JSON.stringify(opt)}>{opt.label}</option>
                                })
                            }
                        </div>
                    </div>
                </div>

                <div className='d-flex flex-column gap-2'>
                    <label htmlFor="duration">Duration of Assessment</label>
                    <input name='duration' type="text" placeholder='HH:MM:SS' />
                </div>

            </Modal.Body>
            <Modal.Footer className='d-flex'>
                <button className='modal-button'>Save</button>
            </Modal.Footer>
        </Modal >
    )
}
