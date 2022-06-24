
import './App.css';

import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { Authenticator} from '@aws-amplify/ui-react';

import '@aws-amplify/ui-react/styles.css';
import React from 'react';

import {Tabs, TabItem, Text, Heading } from '@aws-amplify/ui-react'
import {Radio, RadioGroupField} from '@aws-amplify/ui-react'
import {CheckboxField} from '@aws-amplify/ui-react'
import { SelectField, TextField } from '@aws-amplify/ui-react'
import {SwitchField} from '@aws-amplify/ui-react'
import {Grid, Card } from '@aws-amplify/ui-react'
import './styles.css'



Amplify.configure (awsconfig)

function App() {
  
  return (
       

        <Authenticator>
        {({ signOut, user}) => (
          <main>
          <Tabs justifyContent={"center"} 
          backgroundColor={'black'}
          >  
          <TabItem title="Employee Training"
           color="white"
            >
           </TabItem>                  
           <TabItem  onClick={signOut} title= "Sign out"         
            color="white" 
            >         
          </TabItem>                  
          </Tabs>
                    
            <Heading            
            level={1}>Welcome to Employee Training</Heading>
            
           
            <Heading             
             level={3}>Hallo {user.username}</Heading>   
            <Grid 
          templateColumns="1fr 1fr 1fr"
          templateRows="1fr 1fr 1fr" 
          backgroundColor={'yellow.20'} >
                     
            
            <Card
            columnStart="1"
            columnEnd="3"
            backgroundColor={'yellow.20'}  
             >                     
             <Text className='styled-text'>1.	At which level are you in Cloud Computing?  
             </Text>
            
             <RadioGroupField name="cloud"  labelHidden >     
             <Radio value='Beginner'>Beginner</Radio>
             <Radio value='Basic'>Basic</Radio>
             <Radio value='Advanced'>Advanced</Radio>
             </RadioGroupField>           
             </Card> 
             <Card
             columnStart="3"
             columnEnd="1" 
             backgroundColor={'yellow.20'}
               >      
             <Text className='styled-text'>2.	Please Scale your Programming language?
             </Text>
             <CheckboxField label="Java" name="Java" value="yes" size="small"  />
             <CheckboxField label="Python" name="Python" value="yes" size="small"  />
             <CheckboxField label=".NET" name=".NET" value="yes" size="small"  />
             </Card>
             <Card
              columnStart="1"
              columnEnd="3"  
              backgroundColor={'yellow.20'}
            >
             <Text className='styled-text'>3.	Knowledge in Database
             </Text>
             
             <SelectField width={300} >   
             <option value=""></option>          
              <option value="relational">Relational Database</option>
              <option value="object oriented">Object-oriented Database</option>
              <option value="distributed">Distributed Database</option>
              <option value="NoSQL">NoSQL Database</option>
             </SelectField>
             </Card>
             
              <Card
              columnStart="4"
              columnEnd="1" 
              backgroundColor={'yellow.20'}
               >
             <Text className='styled-text'>4.	Knowledge in the following fields
             </Text>
             <CheckboxField label="Security" name="Security" value="yes" size="small"  />
             <CheckboxField label="Virtualization" name="Virtualization" value="yes" size="small"  />
             <CheckboxField label="Networking" name="Networking" value="yes" size="small"  />
              </Card>
              
              <Card
              columnStart="5"
              columnEnd="1"  
              backgroundColor={'yellow.20'}
            >
             <Text className='styled-text'>5.	In which Operating system are you familiar with
             </Text>
             <RadioGroupField name="OS"  labelHidden >     
             <Radio value='Windows'>Windows</Radio>
             <Radio value='MacOS'>MacOS</Radio>
             <Radio value='Linux'>Linux</Radio>
             </RadioGroupField> 
             </Card>
             <Card
             columnStart="3"
             columnEnd="1"  
             backgroundColor={'yellow.20'}
             >
             <SwitchField label="6. Do you have knowledge in programming APIs?" fontWeight={"bold"} fontSize={"large"} />
             <SwitchField label="7. Do you have knowledge in UI/UX design?" fontWeight={"bold"} fontSize={"large"} color={"black"}/>
             <SwitchField label="8. Knowledge in designing Figma?" fontWeight={"bold"} fontSize={"large"} />
              <Card
              columnStart="6"
               columnEnd="1"  
               backgroundColor={'yellow.20'}
                >
             <Text className='styled-text'>9. Are you familier with Java script Frameworks? If yes then please mention which Frameworks
             are you able to work?
             </Text>
             <CheckboxField label="Nodejs" name="Node.js" value="yes" size="small"  />
             <CheckboxField label="Vuejs" name="Vue.js" value="yes" size="small"  />
             <CheckboxField label="Reactjs" name="Reactjs" value="yes" size="small"  />
             <CheckboxField label="Nextjs" name="Nextjs" value="yes" size="small"  />
             </Card>
             <Card
             columnStart="3"
             columnEnd="1"
             backgroundColor={'yellow.20'}  
             >
             <Text className='styled-text'>10. Describe if you are working with any cloud related project?
             </Text>
             <TextField  width={500}/>
             
             </Card>
             </Card>
             </Grid>           

             </main>
        )
        }
        </Authenticator>
        
  );
}

export default (App);
