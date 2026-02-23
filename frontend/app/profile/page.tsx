'use client';

import { useState } from 'react';
import { ProfileHeader } from '@/components/profile/profile-header';
import { ProfileTabs, type ProfileTab } from '@/components/profile/profile-tabs';
import { OverviewTab } from '@/components/profile/overview-tab';
import { ResumeTab } from '@/components/profile/resume-tab';

export default function ProfilePage() {
  const [tab, setTab] = useState<ProfileTab>('overview');

  return (
    <div className="min-h-screen pt-14">
      <div className="px-4 py-8 md:px-8">
        <ProfileHeader />

        {/* Separator */}
        <div className="my-8 -mx-4 h-px bg-border md:-mx-8" />

        <ProfileTabs tab={tab} onTabChange={setTab} />

        {tab === 'overview' ? <OverviewTab /> : <ResumeTab />}
      </div>
    </div>
  );
}
