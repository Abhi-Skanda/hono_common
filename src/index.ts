import z, { custom } from "zod";

export const signupInput = z.object({
    email : z.email('Invalid email'),
    password : z.string()
    .min(8, "Minimun 8 characters required")
    .max(64, "Maximum of 64 characters are allowed ")
    .superRefine((val,ctx)=>{
        if(!/[a-z]/.test(val))
            ctx.addIssue({code:'custom',message:'Lower case letter needed'})
        if(!/[A-Z]/.test(val))
            ctx.addIssue({code:'custom',message:'Upper case letter needed'})
        if(!/\d/.test(val))
            ctx.addIssue({code:'custom',message:'Number required'})
        if(!/[^A-Za-z0-9\s]/.test(val))
            ctx.addIssue({code:'custom',message:'Special character required'})
    }),
    username: z.string()
})

export const signinInput = z.object({
    email : z.email('Invalid email'),
    password : z.string().min(1)
})

export const createBlogInput = z.object({
    title : z.string().min(1),
    content : z.string().min(1)
})

export const updateBlogInput = z.object({
    title : z.string().min(1),
    content : z.string().min(1),
    id : z.number().min(1)
})

export type SignupInput = z.infer<typeof signupInput>;
export type SigninInput = z.infer<typeof signinInput>;
export type CreateBlogInput = z.infer<typeof createBlogInput>;
export type UpdateBlogInput = z.infer<typeof updateBlogInput>;