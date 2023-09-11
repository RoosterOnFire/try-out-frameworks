export async function GET({ params, request }) {
  return new Response(
    JSON.stringify({
      id: 1,
      name: "FirstForm",
      blocks: [
        {
          header: "Profile",
          content:
            "This information will be displayed publicly so be careful what you share.",
          elements: [
            {
              type: "inputWithPrefix",
              inputType: "text",
              name: "username",
              label: "Username",
              prefix: "workcation.com/",
              placeholder: "smithjanes",
            },
            {
              type: "textarea",
              name: "about",
              label: "About",
              placeholder: "Write a few sentences about yourself.",
            },
            {
              type: "photo",
              name: "photo",
              label: "Photo",
            },
            {
              type: "upload",
              name: "coverphoto",
              label: "Cover photo",
              fileTypes: ["png,jpg,gif"],
              fileMaxSize: "10MB",
            },
          ],
        },
        {
          type: "grid",
          header: "Personal Information",
          content: "Use a permanent address where you can receive mail.",
          elements: [
            {
              type: "input",
              name: "first-name",
              label: "First name",
            },
            {
              type: "input",
              name: "last-name",
              label: "Last name",
            },
            {
              type: "input",
              name: "email",
              label: "Email address",
              colspan: 6,
            },
            {
              type: "select",
              name: "country",
              label: "Country",
              options: ["United States", "Canada", "Mexico"],
            },
            {
              type: "input",
              name: "street-address",
              label: "Street address",
              colspan: 6,
            },
            {
              type: "input",
              name: "city",
              label: "City",
              colspan: 2,
            },
            {
              type: "input",
              name: "region",
              label: "State / Province",
              colspan: 2,
            },
            {
              type: "input",
              name: "postal-code",
              label: "ZIP / Postal code",
              colspan: 2,
            },
          ],
        },
        {
          header: "Notifications",
          content:
            "We'll always let you know about important changes, but you pick what else you want to hear about.",
          elements: [
            {
              type: "checkbox-list-with-description",
              legend: "By Email",
              items: [
                {
                  name: "comments",
                  label: "Comments",
                  description:
                    "Get notified when someones posts a comment on a posting.",
                },
                {
                  name: "candidates",
                  label: "Candidates",
                  description:
                    "Get notified when a candidate applies for a job.",
                },
                {
                  name: "offers",
                  label: "Offers",
                  description:
                    "Get notified when a candidate accepts or rejects an offer.",
                },
              ],
            },
          ],
        },
        {
          header: "Push Notifications",
          content: "These are delivered via SMS to your mobile phone.",
          elements: [
            {
              type: "radio-list",
              name: "push-notifications",
              labels: [
                { name: "push-everything", label: "Everything" },
                { name: "push-email", label: "Same as email" },
                { name: "push-nothing", label: "No push notifications" },
              ],
            },
          ],
        },
      ],
    })
  );
}
