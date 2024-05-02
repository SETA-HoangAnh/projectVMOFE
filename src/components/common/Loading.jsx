import ScaleLoader from 'react-spinners/FadeLoader';

const Loading = () => {
  return (
    <div className="flex h-full min-h-[100vh] w-full flex-col items-center justify-center">
      <ScaleLoader height={12} width={4} margin={0} radius={10} color={'#161616'} speedMultiplier={1.5} />
    </div>
  );
};

export default Loading;
