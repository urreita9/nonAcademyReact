import { CircularProgressBar } from '@tomik23/react-circular-progress-bar';

export const SingleExamAnalysis = () => {
	const examData = [
		{
			text: 'Total questions',
			result: 10,
		},
		{
			text: 'Total correct',
			result: 8,
		},
		{
			text: 'Total incorrect',
			result: 2,
		},
		{
			text: 'Not answered',
			result: 0,
		},
		{
			text: 'Total marks',
			result: 3,
		},
		{
			text: 'Difficulty',
			result: 56,
		},

		{
			text: 'Accuracy',
			result: 80,
		},
	];
	return (
		<div className='drop-shadow-lg font-sans container bg-grey mx-auto mt-10 p-5 rounded-lg'>
			<div className='ml-10'>
				<p className='text-white tracking-wide text-4xl subpixel-antialiased font-semibold underline decoration-lightBlue underline-offset-8 '>
					Biology
				</p>
			</div>

			<div className='w-5/6 mx-auto bg-lightBlue rounded-lg mt-5'>
				<ul className='flex mx-auto flex-wrap p-10 align-center justify-around'>
					{examData.map((exam, i) => {
						if (exam.text !== 'Accuracy') {
							return (
								<div className='w-1/3 m-1 rounded flex flex-col items-center '>
									<p className='text-white text-2xl subpixel-antialiased font-normal'>
										{exam.text}
									</p>
									<div>
										<p className='tracking-wide text-white text-8xl subpixel-antialiased font-semibold white'>
											{exam.result}
										</p>
									</div>
								</div>
							);
						} else {
							return (
								<div className='w-1/3 m-1 rounded flex flex-col items-center'>
									<p className='text-white text-2xl subpixel-antialiased font-normal'>
										{exam.text}
									</p>
									<div>
										<CircularProgressBar
											colorCircle='#595959'
											colorSlice='#3B82F6'
											fontColor='#FFFFFF'
											fontWeight={0}
											percent={exam.result}
											round
											size={140}
										/>
									</div>
								</div>
							);
						}
					})}
				</ul>
			</div>
		</div>
	);
};
