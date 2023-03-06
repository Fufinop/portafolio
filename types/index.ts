export type Project = {
	id: number;
	title: string;
	desc: string;
	img: string;
	width?: number;
	height?: number;
	link?: string;
	github?: string;
	tags: string[];
};
