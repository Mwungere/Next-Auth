"use client"
import React, { useCallback, useEffect, useState } from 'react'
import { CardWrapper } from '@/components/auth/card-wrapper'
import { BeatLoader } from "react-spinners"
import { useSearchParams } from 'next/navigation'
import { NewVerification } from '@/actions/new-verification'
import { FormSuccess } from '@/components/form-success'
import { FormError } from '@/components/form-error'

export const NewVerificationForm = () => {
    const [error, setError] = useState<string | undefined>()
    const [success, setSuccess] = useState<string | undefined>()
    const searchParams = useSearchParams()

    const token = searchParams.get('token')

    const onSubmit = useCallback(() => {
        if(!token) {
            setError('Missing token!')
            return
        };

        NewVerification(token)
        .then((data) => {
            setError(data.error);
            setSuccess(data.success);
        })
        .catch(() => {
            setError("Something went wrong!");
        })

    }, [token])

    useEffect(() => {
        onSubmit()
    }, [onSubmit])

  return (
    <CardWrapper
    headerLabel='Confirming your verification'
    backButtonHref='/auth/login'
    backButtonLabel='Back to login'
    >
        <div className=' flex items-center w-full justify-center'>
            {
                !success && !error && (
                    <BeatLoader color='#42A5F5' />
                )
            }
            <FormSuccess message={success} />
            <FormError message={error} />
        </div>

    </CardWrapper>
  )
}