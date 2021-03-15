import Button from './button'
import Navbar from './navbar'
import CheckBox from './checkbox'
import TextArea from './textarea'
import InputField from './inputfield'
import SelectOption from './selectoption'
import Typography from './typography'
function Home() {


    return(
        <div>
            <Navbar text="Whizzy Academy" color="#1e88e5"/>
            <h1>My Components</h1>
            <Button text="Clear" color="#d50000"/>
            <Button text="Login" color="#1e88e5"/>
            <Button text="Cancel" color="#880e4f"/>
            <Button text="Submit" color="#003300"/>


            <CheckBox/>

            <TextArea row="8" cols="25"/>

             <h1>Input Field</h1>
            <InputField type="text" placeholder="username"/>
            <InputField type="text" placeholder="password"/>
            <h1>Radio Buttom</h1>

            <InputField type="radio"/>
            <SelectOption/>

            <h1>Typography</h1>
            <Typography color="blue" fontsize="50px" />
        </div>
    )
}

export default Home;