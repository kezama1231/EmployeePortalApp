import { Link } from 'react-router-dom';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

export default function NotFoundPage() {
    return (
        <Card title={"404 - Page Not Found"}>
            <p>The page you are looking for does not exist.</p>
            <Link to="/">
                <Button label={"Go Home"} />
            </Link>
        </Card>
    )
}