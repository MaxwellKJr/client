import './globals.css';
import Header from '../components/Navigation/Header';
import { Poppins } from '@next/font/google';

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<head />
			<body className={``}>
				<Header />
				{children}
			</body>
		</html>
	);
}
