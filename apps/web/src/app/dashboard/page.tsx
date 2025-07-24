"use client";

import { useUser } from "@/hooks/use-user";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function DashboardPage() {
  const { user } = useUser();

  const stats = [
    {
      title: "Total Users",
      value: "1,234",
      description: "Active users in the system",
      trend: "+12%",
    },
    {
      title: "Revenue",
      value: "$45,231",
      description: "Total revenue this month",
      trend: "+8%",
    },
    {
      title: "Performance",
      value: "98.2%",
      description: "System uptime",
      trend: "+0.1%",
    },
    {
      title: "Growth",
      value: "24.5%",
      description: "Month over month growth",
      trend: "+3.2%",
    },
  ];

  const recentActivity = [
    {
      id: 1,
      action: "User registered",
      user: "john@example.com",
      time: "2 minutes ago",
      status: "success",
    },
    {
      id: 2,
      action: "Payment processed",
      user: "sarah@example.com",
      time: "5 minutes ago",
      status: "success",
    },
    {
      id: 3,
      action: "Login failed",
      user: "unknown@example.com",
      time: "8 minutes ago",
      status: "error",
    },
    {
      id: 4,
      action: "Profile updated",
      user: "mike@example.com",
      time: "12 minutes ago",
      status: "info",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold">Welcome back, {user?.name}!</h1>
        <p className="text-muted-foreground mt-2">
          Here's what's happening with your application today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <Badge variant="secondary" className="text-xs">
                {stat.trend}
              </Badge>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              Latest actions in your application
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-center justify-between p-3 rounded-lg border"
                >
                  <div className="space-y-1">
                    <p className="text-sm font-medium">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">
                      {activity.user}
                    </p>
                  </div>
                  <div className="text-right space-y-1">
                    <Badge
                      variant={
                        activity.status === "success"
                          ? "default"
                          : activity.status === "error"
                          ? "destructive"
                          : "secondary"
                      }
                      className="text-xs"
                    >
                      {activity.status}
                    </Badge>
                    <p className="text-xs text-muted-foreground">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Common tasks and shortcuts
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Button className="w-full justify-start" variant="outline">
                <span className="mr-2">👤</span>
                Manage Users
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <span className="mr-2">📊</span>
                View Analytics
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <span className="mr-2">⚙️</span>
                System Settings
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <span className="mr-2">📄</span>
                Generate Report
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <span className="mr-2">🔧</span>
                Configuration
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* User Info Card */}
      <Card>
        <CardHeader>
          <CardTitle>Your Account</CardTitle>
          <CardDescription>
            Account information and preferences
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <p className="text-sm font-medium">Email</p>
              <p className="text-sm text-muted-foreground">{user?.email}</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium">Account Status</p>
              <Badge variant="default">Active</Badge>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium">Email Verified</p>
              <Badge variant={user?.emailVerified ? "default" : "destructive"}>
                {user?.emailVerified ? "Verified" : "Not Verified"}
              </Badge>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium">Data Saving</p>
              <Badge variant={user?.allowedSavingData ? "default" : "secondary"}>
                {user?.allowedSavingData ? "Enabled" : "Disabled"}
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}