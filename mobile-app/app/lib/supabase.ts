import 'react-native-url-polyfill/auto';
import {createClient} from '@supabase/supabase-js';

const SUPABASE_URL ='https://ayblsvqzctwlkapuwfzt.supabase.co';
const SUPABASE_KEY ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF5YmxzdnF6Y3R3bGthcHV3Znp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQxNzY3NDksImV4cCI6MjA3OTc1Mjc0OX0.i2FxNArdYwPAZmaZeUEMS4AfAl0xtNzN84Soof9oMQg';

export const supabase = createClient(SUPABASE_URL,SUPABASE_KEY);

