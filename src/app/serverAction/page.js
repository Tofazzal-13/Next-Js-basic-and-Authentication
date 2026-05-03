import { getPosts } from '@/database/postdb';
import React from 'react';
import { FloppyDisk } from "@gravity-ui/icons";
import {
    Button,
    Description,
    FieldError,
    FieldGroup,
    Fieldset,
    Form,
    Input,
    Label,
    TextArea,
    TextField,
} from "@heroui/react";

const ServerActionPage = () => {
    const posts = getPosts()
    return (
        <div>

            <Form className="w-full max-w-96 mx-auto border rounded-lg p-3 my-10" >
                <Fieldset>
                    <Fieldset.Legend>Add post</Fieldset.Legend>
                    <Description>Update your profile information.</Description>
                    <FieldGroup>
                        <TextField
                            isRequired
                            name="title"
                          
                        >
                            <Label>Title</Label>
                            <Input placeholder="Title" />
                            <FieldError />
                        </TextField>
                        <TextField isRequired name="description" type="text">
                            <Label>Description</Label>
                            <Input placeholder="Description" />
                            <FieldError />
                        </TextField>
                        
                    </FieldGroup>
                    <Fieldset.Actions>
                        <Button type="submit">
                            <FloppyDisk />
                            Save changes
                        </Button>
                        <Button type="reset" variant="secondary">
                            Cancel
                        </Button>
                    </Fieldset.Actions>
                </Fieldset>
            </Form>

            <div className='grid grid-cols-3 gap-5 mt-10 mx-2'>
                {
                    posts.map(post => <div className='border-2 p-10 rounded-2xl ' key={post.id}>
                        <h1 className='font-bold text-xl'>{post.title}</h1>
                        <p>{post.description}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ServerActionPage;