import { useMemo } from "react";
import { getFeaturesFromData } from "../utilities/real-helpers";
/**
 * A custom hook used to retrieve a feature by its ID in the JSON data.
 * @param {String} id - the unique id of the feature being retrieved
 * @returns
 */
export default function useFeatureFromId(id) {
  // Retrieve the features
  const features = getFeaturesFromData();

  // Get feature from ID
  const featureFromId = useMemo(() => {
    return features.find((item) => item.id === id);
  }, [id]);

  return { featureFromId };
}
