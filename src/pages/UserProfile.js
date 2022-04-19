import React from "react";
import Title from "../components/Title";
import FlexBox from "../components/FlexBox";
import DetailInformation from "../components/DetailInformation";
import { getUserProfileFromData } from "../utilities/real-helpers";

/**
 * The user's profile screen.
 * @returns <UserProfile />
 */
export default function UserProfile() {
  // Create the key value pairs
  const map = {
    firstName: "First name",
    lastName: "Last Name",
    phone: "Phone",
    email: "Email",
    bio: "Bio",
  };
  // Gets the user's profile from our helper function
  const userProfile = getUserProfileFromData();
  return (
    <div>
      <FlexBox>
        <Title>Profile</Title>
      </FlexBox>
      <FlexBox>
        <img
          src={userProfile.avatarImage}
          style={{ width: "200px", height: "200px" }}
          alt="Picture of the current user"
        />
        {/* Don't render the DetailInformation if we don't have data for it yet */}
        {userProfile ? (
          <DetailInformation map={map} data={userProfile} />
        ) : (
          <></>
        )}
      </FlexBox>
    </div>
  );
}
