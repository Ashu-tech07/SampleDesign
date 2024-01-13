import { Box, 
    Button, 
    Checkbox, 
    Container, 
    FormControl, 
    FormControlLabel, 
    FormLabel, 
    MenuItem, 
    Paper, 
    Radio, 
    RadioGroup, 
    Select,
     Step, 
     StepLabel, 
     Stepper, 
     TextField, 
     Typography} from '@material-ui/core'
import React, { Component } from 'react'

interface IFormControl {
    value?: string,
    isValid?: boolean
}

interface IStates {
    activeStep: number,
    fname?: IFormControl,
    lname?: IFormControl,
    email?: IFormControl,
    dob?: IFormControl,
    phone?: IFormControl,
    city?: IFormControl,
    gender?: IFormControl,
    jobTitle?: IFormControl,
    companyName?: IFormControl,
    companyLocation?: IFormControl,
    currentlyWorking?: boolean,
    from?: IFormControl,
    to?: IFormControl,
    roleDesc?: IFormControl,
    resume?: IFormControl,
    englishLevel?: IFormControl,
    regularEmp?: IFormControl,
    workAuthorisation?: IFormControl,
    consentTermsCondtions?: boolean,
}
interface IProps { }


function getSteps() {
    return ['My Information', 'My Experience', 'Application Questions', 'Voluntary Disclosures'];
}

function getStepContent(stepIndex: number, state: IStates, handleChangeCallback: any) {
    switch (stepIndex) {
        case 0:
            return (
                <Box style={Styles.mainBox}>
                    <Typography style={Styles.heading}> My Information</Typography>
                    <Box style={Styles.formBox}>
                        <TextField variant='outlined' size='small' label='First Name' name='fname' style={Styles.input} 
                            value={state.fname?.value} error={!state.fname?.isValid} helperText={state.fname?.isValid ? '' : 'Please Enter Your Fisrt Name'} onChange={handleChangeCallback} />
                        <TextField variant='outlined' size='small' label='Last Name' name='lname' style={Styles.input}
                            value={state.lname?.value} error={!state.lname?.isValid} helperText={state.lname?.isValid ? '' : 'Please Enter Your Last Name'} onChange={handleChangeCallback} />
                    </Box>
                    <Box style={Styles.formBox}>
                        <TextField type='email' variant='outlined' size='small' label='Email' name='email'
                            placeholder='abcd@xyz.com' style={Styles.input}
                            value={state.email?.value} error={!state.email?.isValid} helperText={state.email?.isValid ? '' : 'Please Enter Valid Email'} onChange={handleChangeCallback} />
                        <TextField type='text' variant='outlined' label='Phone'
                            placeholder='eg. 9495959595' name='phone' size='small' style={Styles.input}
                            value={state.phone?.value} error={!state.phone?.isValid} helperText={state.phone?.isValid ? '' : 'Please Enter Valid Number'} onChange={handleChangeCallback}
                        />
                    </Box>
                    <Box style={Styles.formBox}>
                        <TextField type='date' variant='outlined' label='Date of Birth' 
                            name='dob' size='small' style={Styles.input} InputLabelProps={{ shrink: true }}
                            value={state.dob?.value} error={!state.dob?.isValid} helperText={state.dob?.isValid ? '' : 'Please Enter Valid Value'} onChange={handleChangeCallback} />
                        <TextField variant='outlined' size='small' label='City' name='city' style={Styles.input}
                            value={state.city?.value} error={!state.city?.isValid} helperText={state.city?.isValid ? '' : 'Please Enter Valid Value'} onChange={handleChangeCallback} />
                    </Box>

                    <FormControl component="fieldset" style={{ marginTop: 5, paddingLeft: '50px' }}>
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }}
                            value={state.gender?.value} onChange={handleChangeCallback}>
                            <FormControlLabel value="male" control={<Radio color='primary' />} label="Male" />
                            <FormControlLabel value="female" control={<Radio color='primary' />} label="Female" />
                            <FormControlLabel value="other" control={<Radio color='primary' />} label="Others" />
                        </RadioGroup>
                    </FormControl>
                </Box>
            );
        case 1:
            return (
                <Box style={Styles.mainBox}>
                    <Typography style={Styles.heading}> My Experience </Typography>
                    <Box style={Styles.formBox}>
                        <TextField variant='outlined' size='small' label='Job Title' name='jobTitle'
                            style={Styles.input} value={state.jobTitle?.value} error={!state.jobTitle?.isValid} helperText={state.jobTitle?.isValid ? '' : 'Please Enter Valid Value'} onChange={handleChangeCallback} />
                        <TextField variant='outlined' size='small' label='Company Name' name='companyName'
                            style={Styles.input} value={state.companyName?.value} error={!state.companyName?.isValid} helperText={state.companyName?.isValid ? '' : 'Please Enter Valid Value'} onChange={handleChangeCallback} />
                    </Box>
                    <Box style={Styles.formBox}>
                        <TextField variant='outlined' size='small' label='Location' name='companyLocation'
                            style={Styles.input} value={state.companyLocation?.value} error={!state.companyLocation?.isValid} helperText={state.companyLocation?.isValid ? '' : 'Please Enter Valid Value'} onChange={handleChangeCallback} />
                        <Box style={{ width: '40%' }}>
                            <FormControlLabel
                                control={<Checkbox size='small' name="currentlyWorking" color='default'
                                    checked={state.currentlyWorking} onChange={handleChangeCallback} />}
                                label="I currently work here"
                            />
                        </Box>
                    </Box>
                    <Box style={Styles.formBox}>
                        <TextField type='date' variant='outlined' label='From'
                            name='from' size='small' style={Styles.input} InputLabelProps={{ shrink: true }}
                            value={state.from?.value} error={!state.from?.isValid} helperText={state.from?.isValid ? '' : 'Please Enter Valid Value'} onChange={handleChangeCallback} />
                        <TextField type='date' variant='outlined' label='To' name='to'
                            size='small' style={Styles.input} InputLabelProps={{ shrink: true }}
                            value={state.to?.value} error={!state.to?.isValid} helperText={state.to?.isValid ? '' : 'Please Enter Valid Value'} onChange={handleChangeCallback} />
                    </Box>
                    <TextField variant='outlined' size='small' multiline minRows={2} label='Role Descriptions' name='roleDesc'
                        placeholder='Your role and responsibilities...' style={Styles.descriptionText}
                        value={state.roleDesc?.value} error={!state.roleDesc?.isValid} helperText={state.roleDesc?.isValid ? '' : 'Please Enter Valid Value'} onChange={handleChangeCallback} />
                    <TextField type='file' variant='outlined' size='small' label='Resume/CV' name='resume'
                        InputLabelProps={{ shrink: true }} style={Styles.descriptionText}
                        value={state.resume?.value} error={!state.resume?.isValid} helperText={state.resume?.isValid ? '' : 'Please Enter Valid Value'} onChange={handleChangeCallback} />

                </Box>
            );
        case 2:
            return (
                <Box style={Styles.mainBox}>
                    <Typography style={Styles.heading}> Application Questions </Typography>
                    <Typography style={{ marginBottom: 6 }}>
                        Have you ever been a Regular Employee in this company? Please note that Agency temporaries/contractors should answer "no".
                        <span style={Styles.spanText}>*</span>
                    </Typography>
                    <FormControl style={Styles.selectForm} variant="outlined" size='small'>
                        <Select name='regularEmp' displayEmpty
                            value={state.regularEmp?.value} error={!state.regularEmp?.isValid} onChange={handleChangeCallback}
                        >
                            <MenuItem disabled value=''>Select one</MenuItem>
                            <MenuItem value='yes'>Yes</MenuItem>
                            <MenuItem value='no'>No</MenuItem>
                        </Select>
                    </FormControl>

                    <Typography style={{ marginBottom: 6 }}>Which one of the following sentences best describes your level of English?<span style={Styles.spanText}>*</span></Typography>
                    <FormControl style={Styles.selectForm} variant="outlined" size='small'>
                        <Select name="englishLevel" displayEmpty
                            value={state.englishLevel?.value} error={!state.englishLevel?.isValid} onChange={handleChangeCallback}>
                            <MenuItem disabled value=''>select one</MenuItem>
                            <MenuItem value='naive'>Naive</MenuItem>
                            <MenuItem value='beginner'>Beginner</MenuItem>
                            <MenuItem value='good'>Good</MenuItem>
                            <MenuItem value='intermediate'>Intermediate</MenuItem>
                            <MenuItem value='expert'>Expert</MenuItem>

                        </Select>
                    </FormControl>

                    <Typography style={{ marginBottom: 6 }}>
                        Are you authorised to work in the country which you are applying?
                        <span style={Styles.spanText}>*</span>
                    </Typography>
                    <FormControl style={Styles.selectForm} variant="outlined" size='small'>
                        <Select name='workAuthorisation' displayEmpty
                            value={state.workAuthorisation?.value} error={!state.workAuthorisation?.isValid} onChange={handleChangeCallback}>
                            <MenuItem disabled value=''>select one</MenuItem>
                            <MenuItem value='yes'>Yes</MenuItem>
                            <MenuItem value='no'>No</MenuItem>

                        </Select>
                    </FormControl>


                </Box>
            );
        case 3:
            return (
                <Box style={Styles.mainBox}>
                    <Typography style={Styles.heading}> Voluntary Disclosures </Typography>

                    <FormControlLabel
                        control={<Checkbox size='small' name='consentTermsCondtions' color='default'
                            checked={state.consentTermsCondtions} onChange={handleChangeCallback} />}
                        label="Yes, I have consent to terms and conditions *"
                    />


                </Box>
            );
        default:
            return 'Unknown index';
    }
}

const stepFormAttributes = [
    ['fname', 'lname', 'email', 'phone', 'dob', 'gender', 'city'],
    ['jobTitle', 'companyName', 'companyLocation', 'currentlyWorking', 'from', 'to', 'roleDesc', 'resume'],
    ['regularEmp', 'englishLevel', 'workAuthorisation'],
    ['consentTermsConditions']
]


export default class StepperForm extends Component<IProps, IStates>{

    initialState: IStates = {
        activeStep: 0,
        fname: {
            value: '',
            isValid: true
        },
        lname: {
            value: '',
            isValid: true
        },
        email: {
            value: '',
            isValid: true
        },
        dob: {
            value: '',
            isValid: true
        },
        phone: {
            value: '',
            isValid: true
        },
        city: {
            value: '',
            isValid: true
        },
        gender: {
            value: '',
            isValid: true
        },

        jobTitle: {
            value: '',
            isValid: true
        },
        companyName: {
            value: '',
            isValid: true
        },
        companyLocation: {
            value: '',
            isValid: true
        },
        currentlyWorking: false,
        from: {
            value: '',
            isValid: true
        },
        to: {
            value: '',
            isValid: true
        },
        roleDesc: {
            value: '',
            isValid: true
        },
        resume: {
            value: '',
            isValid: true
        },
        englishLevel: {
            value: '',
            isValid: true
        },
        regularEmp: {
            value: '',
            isValid: true
        },
        workAuthorisation: {
            value: '',
            isValid: true
        },
        consentTermsCondtions: false
    }

    constructor(props: IProps) {
        super(props);

        this.state = {
            ...this.initialState,
        }
    }

    handleNext = (e: any) => {
        e.preventDefault();
        let formValid = true;
        if (this.state.phone && !this.isValidPhoneNumber(this.state.phone)) {
            this.setState((prevState) => ({ ...prevState, phone: { value: prevState.phone?.value || '', isValid: false } }));
            formValid = false;
        }

        const stateCopy = JSON.parse(JSON.stringify(this.state));
        Object.keys(stateCopy)
            .filter(formAttribute => stepFormAttributes[this.state.activeStep].indexOf(formAttribute) !== -1)
            .forEach((

                (formAttribute: string) => {
                    if (stateCopy[formAttribute]?.value === '') {
                        this.setState(prevState => ({ ...prevState, [formAttribute]: { value: stateCopy[formAttribute].value, isValid: false } }));
                        formValid = false;
                    }
                }

            ));
        if (!formValid) return;

       

        this.setState((prevState) => ({
            ...prevState,
            activeStep: prevState.activeStep + 1,
        }))

        if(this.state.activeStep=== 3){
            console.log(this.state);
        }
    }

    handleBack = () => {
        this.setState((prevState) => ({
            ...prevState,
            activeStep: prevState.activeStep - 1,
        }))
    }

    handleReset = () => {
        this.setState({
            ...this.initialState
        })
        console.log(this.state);
    }

 

    isValidPhoneNumber = (phoneNumber: IFormControl) => {
        const phonePattern: RegExp = /^[6-9][0-9]{9}$/
        return (phoneNumber?.value) ? phonePattern.test(phoneNumber.value) : false;
    }

    handleChange = (event: any) => {
        if (event.target.name === 'currentlyWorking') {
            this.setState((prevState) => ({ ...prevState, [event.target.name]: event.target.checked }))
        } else if (event.target.name === 'consentTermsCondtions') {
            this.setState((prevState) => ({ ...prevState, [event.target.name]: event.target.checked }))
        } else {
            if (event.target.name === 'phone') {
                const re = /^[0-9]*$/
                if (re.test(event.target.value) && event.target.value.length <= 10) {
                    this.setState((prevState) => ({ ...prevState, [event.target.name]: { value: event.target.value, isValid: true } }))
                }
            } else {
                this.setState((prevState) => ({ ...prevState, [event.target.name]: { value: event.target.value, isValid: true } }))
            }
        }
    }

    render() {
        const steps = getSteps();

        return (
            <>
                <Container maxWidth='md' fixed >
                    <Paper elevation={8} style={{
                        minHeight: '72vh',
                        padding: '20px 20px 15px 10px', borderRadius: '10px'
                    }}>
                        <Stepper style={{ paddingBottom: '5px' }} activeStep={this.state.activeStep} alternativeLabel>
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                        <Box component='div' style={{ paddingRight: '50px', paddingLeft: '50px' }}>
                            {this.state.activeStep === steps.length ? (
                                <Box style={Styles.mainBox}>
                                    <Typography style={Styles.instructions}>All steps completed</Typography>
                                    <Typography variant='h4' align='center'>Thank You !!</Typography>
                                    <Button onClick={this.handleReset}>Reset</Button>
                                </Box>
                            ) : (
                                <Box component='div'>

                                    <form id='form-step1' onSubmit={this.handleNext}>
                                        {getStepContent(this.state.activeStep, this.state, this.handleChange)}
                                    </form>

                                    <Box style={{
                                        display: 'flex', justifyContent: 'right',
                                        paddingTop: '20px'
                                    }}>
                                        <Box >
                                            <Button variant='outlined'
                                                disabled={this.state.activeStep === 0}
                                                onClick={this.handleBack}
                                                style={Styles.btn}
                                            >
                                                Back
                                            </Button>

                                            <Button variant='contained' type='submit' form='form-step1'
                                                style={Styles.nextBtn} >
                                                {this.state.activeStep === steps.length - 1 ? 'Submit' : 'Save and Continue'}
                                            </Button>
                                        </Box>
                                    </Box>
                                </Box>
                            )
                            }
                        </Box>
                    </Paper>
                </Container>
            </>
        )
    }
}

const Styles = {
    mainBox: {
        display: 'flex',
        flexDirection: 'column' as 'column',
        maxHeight: '58vh',
        overflow: 'auto',
    },
    formBox: {
        display: 'inline-flex',
        justifyContent: 'space-evenly'
    },
    paper: {

    },
    btn: {
        marginRight: '1rem',
        textTransform: 'capitalize' as 'capitalize',
        borderRadius: '20px',

    },
    nextBtn: {
        marginRight: '2rem',
        textTransform: 'capitalize' as 'capitalize',
        borderRadius: '20px',
        backgroundColor: '#057bfa',
        color: 'white',


    },
    input: {
        width: '40%',
        marginBottom: 20
    },
    instructions: {
        marginTop: 20,
        marginBottom: 20,
        textAlign: 'center' as 'center',
    },
    heading: {
        textAlign: 'center' as 'center',
        fontSize: '16px',
        fontWeight: 'bold',
        marginBottom: 8,
    },
    spanText: {
        color: 'red',
    },
    descriptionText: {
        width: '87%',
        marginBottom: 20,
        marginLeft: '50px'
    },
    selectForm: {
        width: '50%',
        marginBottom: 10
    },
}