import Content from "@/app/components/Content";
import Education from "@/app/components/Education";
import experience from '../../../data/experience.json';

export default function Page() {
    return (
        <Content>
            {experience.education.length > 0 && <Education/>}
        </Content>
    )
}
