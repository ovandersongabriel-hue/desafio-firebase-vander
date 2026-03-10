import { TextField, Stack } from '@mui/material';
import { useFormContext } from 'react-hook-form';

export default function Step2Address() {
  const { register, formState: { errors } } = useFormContext();

  return (
    <Stack spacing={3}>
      <TextField 
        label="CEP" 
        variant="outlined" 
        fullWidth 
        {...register('cep', { required: 'O CEP é obrigatório' })}
        error={!!errors.cep}
        helperText={errors.cep?.message as string}
      />
      <TextField 
        label="Rua/Avenida" 
        variant="outlined" 
        fullWidth 
        {...register('rua', { required: 'A rua é obrigatória' })}
        error={!!errors.rua}
        helperText={errors.rua?.message as string}
      />
      <TextField 
        label="Número" 
        variant="outlined" 
        fullWidth 
        {...register('numero', { required: 'O número é obrigatório' })}
        error={!!errors.numero}
        helperText={errors.numero?.message as string}
      />
      <TextField 
        label="Cidade" 
        variant="outlined" 
        fullWidth 
        {...register('cidade', { required: 'A cidade é obrigatória' })}
        error={!!errors.cidade}
        helperText={errors.cidade?.message as string}
      />
    </Stack>
  );
}