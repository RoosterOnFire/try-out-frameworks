export async function GET({ params, request }) {
  return new Response(
    JSON.stringify({
      id: 1,
      name: "FirstForm",
      blocks: {
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
    })
  );
}
