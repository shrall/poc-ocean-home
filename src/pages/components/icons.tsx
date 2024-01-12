import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

function Icons() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Icons</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 gap-x-2 gap-y-4">
        <div className="flex items-center gap-2">
          <Icon icon="home" fill="ocean-primary-10" />
          <Icon icon="home" fill="ocean-primary-20" />
          <Icon icon="home" fill="ocean-primary-30" />
          <Icon icon="home" fill="ocean-danger-10" />
          <Icon icon="home" fill="ocean-danger-20" />
          <Icon icon="home" fill="ocean-success-10" />
          <Icon icon="home" fill="ocean-success-20" />
          <Icon icon="home" fill="ocean-warning-10" />
          <Icon icon="home" fill="ocean-warning-20" />
          <Icon icon="home" fill="ocean-orange" />
          <Icon icon="home" fill="ocean-yellow" />
        </div>
        <div className="flex items-center gap-2">
          <Icon icon="home" fill="ocean-primary-10" />
          <Icon icon="company" fill="ocean-primary-10" />
          <Icon icon="dashboard" fill="ocean-primary-10" />
          <Icon icon="document" fill="ocean-primary-10" />
          <Icon icon="information" fill="ocean-primary-10" />
          <Icon icon="notification" fill="ocean-primary-10" />
          <Icon icon="user-group" fill="ocean-primary-10" />
          <Icon icon="chevron-down" fill="ocean-primary-10" />
          <Icon icon="chevron-up" fill="ocean-primary-10" />
          <Icon icon="chevron-left" fill="ocean-primary-10" />
          <Icon icon="chevron-right" fill="ocean-primary-10" />
        </div>
        <div className="flex items-center gap-2">
          <Icon icon="home" fill="ocean-primary-10" size="lg" />
          <Icon icon="company" fill="ocean-primary-10" size="lg" />
          <Icon icon="dashboard" fill="ocean-primary-10" size="lg" />
          <Icon icon="document" fill="ocean-primary-10" size="lg" />
          <Icon icon="information" fill="ocean-primary-10" size="lg" />
          <Icon icon="notification" fill="ocean-primary-10" size="lg" />
          <Icon icon="user-group" fill="ocean-primary-10" size="lg" />
          <Icon icon="chevron-down" fill="ocean-primary-10" size="lg" />
          <Icon icon="chevron-up" fill="ocean-primary-10" size="lg" />
          <Icon icon="chevron-left" fill="ocean-primary-10" size="lg" />
          <Icon icon="chevron-right" fill="ocean-primary-10" size="lg" />
        </div>
        <div className="flex items-center gap-2">
          <Icon icon="home" fill="ocean-primary-10" size="xl" />
          <Icon icon="company" fill="ocean-primary-10" size="xl" />
          <Icon icon="dashboard" fill="ocean-primary-10" size="xl" />
          <Icon icon="document" fill="ocean-primary-10" size="xl" />
          <Icon icon="information" fill="ocean-primary-10" size="xl" />
          <Icon icon="notification" fill="ocean-primary-10" size="xl" />
          <Icon icon="user-group" fill="ocean-primary-10" size="xl" />
          <Icon icon="chevron-down" fill="ocean-primary-10" size="xl" />
          <Icon icon="chevron-up" fill="ocean-primary-10" size="xl" />
          <Icon icon="chevron-left" fill="ocean-primary-10" size="xl" />
          <Icon icon="chevron-right" fill="ocean-primary-10" size="xl" />
        </div>
      </CardContent>
    </Card>
  );
}

export default Icons;
