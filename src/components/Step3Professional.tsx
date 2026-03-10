import { TextField, Stack } from '@mui/material';
import { useFormContext } from 'react-hook-form';

export default function Step3Professional() {
  const { register, formState: { errors } } = useFormContext();

  return (
    <Stack spacing={3}>
      <TextField 
        label="Cargo Pretendido" 
        variant="outlined" 
        fullWidth 
        {...register('cargo', { required: 'O cargo é obrigatório' })}
        error={!!errors.cargo}
        helperText={errors.cargo?.message as string}
      />
      <TextField 
        label="Salário Esperado" 
        type="number" 
        variant="outlined" 
        fullWidth 
        {...register('salario', { required: 'O salário é obrigatório' })}
        error={!!errors.salario}
        helperText={errors.salario?.message as string}
      />
      <TextField 
        label="Link do LinkedIn" 
        type="url" 
        variant="outlined" 
        fullWidth 
        {...register('linkedin', { required: 'O link do LinkedIn é obrigatório' })}
        error={!!errors.linkedin}
        helperText={errors.linkedin?.message as string}
      />
    </Stack>
  );
}