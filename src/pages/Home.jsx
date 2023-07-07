import AppBanner from '../components/shared/AppBanner';
import { SectionWrapper } from "../hoc";

const Home = () => {
	return (
		<div className="container mx-auto">
			<AppBanner></AppBanner>
		</div>
	);
};

export default SectionWrapper(Home, "/");
