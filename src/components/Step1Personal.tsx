import { TextField, Stack } from '@mui/material';
import { useFormContext } from 'react-hook-form'; 

export default function Step1Personal() {
  
  const { register, formState: { errors } } = useFormContext();

  return (
    <Stack spacing={3}>
      <TextField 
        label="Nome Completo" 
        variant="outlined" 
        fullWidth 
        
        {...register('nome', { required: 'O nome é obrigatório' })}
        error={!!errors.nome} 
        helperText={errors.nome?.message as string} 
      />
      
      <TextField 
        label="E-mail" 
        type="email" 
        variant="outlined" 
        fullWidth 
        {...register('email', { 
          required: 'O e-mail é obrigatório',
          pattern: { value: /^\S+@\S+$/i, message: 'Digite um e-mail válido' } 
        })}
        error={!!errors.email}
        helperText={errors.email?.message as string}
      />
      
      <TextField 
        label="CPF" 
        variant="outlined" 
        fullWidth 
        {...register('cpf', { required: 'O CPF é obrigatório' })}
        error={!!errors.cpf}
        helperText={errors.cpf?.message as string}
      />
      
      <TextField 
        label="Data de Nascimento" 
        type="date" 
        InputLabelProps={{ shrink: true }} 
        variant="outlined" 
        fullWidth 
        {...register('dataNascimento', { required: 'A data é obrigatória' })}
        error={!!errors.dataNascimento}
        helperText={errors.dataNascimento?.message as string}
      />
    </Stack>
  );
}