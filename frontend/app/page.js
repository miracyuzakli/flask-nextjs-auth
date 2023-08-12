
export default function Home() {
  
  var value = "sdfasd";
 
  const fetchValues = async () => {
    try {
      const response = await axios.get('/api/values');
      setValues(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddValue = async () => {
    try {
      await axios.post(`/api/values/${value}`);
      fetchValues();
      setValue('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Values</h1>
      
    </div>
  );
}
