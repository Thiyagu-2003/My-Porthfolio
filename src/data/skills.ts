// interface SkillItem {
//   name: string;
//   image: string;
// }

// interface SkillCategory {
//   title: string;
//   items: SkillItem[];
// }

// export const skills: SkillCategory[] = [
//   {
//     title: "AWS Core Services",
//     items: [
//       { name: "Amazon EC2", image: "/asset/EC2.png" },
//       { name: "Amazon S3", image: "/asset/s3.png" },
//       { name: "Amazon RDS", image: "/asset/rds.png" },
//       { name: "Amazon VPC", image: "/asset/vpc.png" }
//     ]
//   },
//   {
//     title: "AWS Compute & Storage",
//     items: [
//       { name: "AWS Lambda", image: "/asset/Lambda.png" },
//       { name: "Amazon EBS", image: "/asset/Elastic Block Store.png" },
//       { name: "Amazon EFS", image: "/asset/EFS.png" },
//       { name: "Auto Scaling", image: "/asset/Auto Scaling.png" }
//     ]
//   },
//   {
//     title: "AWS Networking & Security",
//     items: [
//       { name: "Route 53", image: "/asset/Route 53.png" },
//       { name: "CloudFront", image: "/asset/CloudFront.png" },
//       { name: "AWS IAM", image: "/asset/Identity and Access Management.png" },
//       { name: "Security Groups", image: "/asset/security hub.png" }
//     ]
//   },
//   {
//     title: "Infrastructure Tools",
//     items: [
//       { name: "Terraform", image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=400" },
//       { name: "PuTTY", image: "https://images.pexels.com/photos/5952651/pexels-photo-5952651.jpeg?auto=compress&cs=tinysrgb&w=400" },
//       { name: "WinSCP", image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400" },
//       { name: "AWS CLI", image: "https://images.pexels.com/photos/13458329/pexels-photo-13458329.jpeg?auto=compress&cs=tinysrgb&w=400" }
//     ]
//   },
//   {
//     title: "Programming & Scripting",
//     items: [
//       { name: "Python", image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400" },
//       { name: "Bash Scripting", image: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=400" },
//       { name: "PowerShell", image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400" },
//       { name: "JSON/YAML", image: "https://images.pexels.com/photos/8728560/pexels-photo-8728560.jpeg?auto=compress&cs=tinysrgb&w=400" }
//     ]
//   },
//   {
//     title: "Operating Systems & Databases",
//     items: [
//       { name: "Linux", image: "https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=400" },
//       { name: "Windows Server", image: "https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=400" },
//       { name: "MySQL", image: "https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg?auto=compress&cs=tinysrgb&w=400" },
//       { name: "PostgreSQL", image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=400" }
//     ]
//   }
// ];




interface SkillItem {
  name: string;
  image: string;
}

interface SkillCategory {
  title: string;
  items: SkillItem[];
}

export const skills: SkillCategory[] = [
  {
    title: "AWS Core Services",
    items: [
      { name: "Amazon EC2", image: "/asset/EC2.png" },
      { name: "Amazon S3", image: "/asset/s3.png" },
      { name: "Amazon RDS", image: "/asset/rds.png" },
      { name: "Amazon VPC", image: "/asset/vpc.png" }
    ]
  },
  {
    title: "AWS Compute & Storage",
    items: [
      { name: "AWS Lambda", image: "/asset/Lambda.png" },
      { name: "Amazon EBS", image: "/asset/Elastic Block Store.png" },
      { name: "Amazon EFS", image: "/asset/EFS.png" },
      { name: "Auto Scaling", image: "/asset/Auto Scaling.png" }
    ]
  },
  {
    title: "AWS Networking & Security",
    items: [
      { name: "Route 53", image: "/asset/Route 53.png" },
      { name: "CloudFront", image: "/asset/CloudFront.png" },
      { name: "AWS IAM", image: "/asset/Identity and Access Management.png" },
      { name: "Security Groups", image: "/asset/security hub.png" }
    ]
  },
  {
    title: "Infrastructure Tools",
    items: [
      { name: "Terraform", image: "/asset/Terraform.png" },
      { name: "PuTTY", image: "/asset/PuTTY.png" },
      { name: "WinSCP", image: "/asset/winscp.png" },
      { name: "AWS CLI", image: "/asset/Command Line Interface.png" }
    ]
  },
  {
    title: "Programming & Scripting",
    items: [
      { name: "Python", image: "/asset/python.png" },
      { name: "Bash Scripting", image: "/asset/Linux.png" },
      { name: "PowerShell", image: "/asset/PowerShell.png" },
      { name: "JSON/YAML", image: "/asset/Terraform.png" } // optional placeholder
    ]
  },
  {
    title: "Operating Systems & Databases",
    items: [
      { name: "Linux", image: "/asset/Linux.png" },
      { name: "Windows Server", image: "/asset/windows.png" },
      { name: "MySQL", image: "/asset/mysql.png" }, // reused RDS as DB icon
      { name: "PostgreSQL", image: "/asset/postgresql.png" } // same if you don’t have a separate logo
    ]
  }
];
