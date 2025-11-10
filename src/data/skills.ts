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
      { name: "Amazon EC2", image: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=400" },
      { name: "Amazon S3", image: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=400" },
      { name: "Amazon RDS", image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400" },
      { name: "Amazon VPC", image: "https://images.pexels.com/photos/8728560/pexels-photo-8728560.jpeg?auto=compress&cs=tinysrgb&w=400" }
    ]
  },
  {
    title: "AWS Compute & Storage",
    items: [
      { name: "AWS Lambda", image: "https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=400" },
      { name: "Amazon EBS", image: "https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=400" },
      { name: "Amazon EFS", image: "https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg?auto=compress&cs=tinysrgb&w=400" },
      { name: "Auto Scaling", image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=400" }
    ]
  },
  {
    title: "AWS Networking & Security",
    items: [
      { name: "Route 53", image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400" },
      { name: "CloudFront", image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400" },
      { name: "AWS IAM", image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400" },
      { name: "Security Groups", image: "https://images.pexels.com/photos/8566570/pexels-photo-8566570.jpeg?auto=compress&cs=tinysrgb&w=400" }
    ]
  },
  {
    title: "Infrastructure Tools",
    items: [
      { name: "Terraform", image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=400" },
      { name: "PuTTY", image: "https://images.pexels.com/photos/5952651/pexels-photo-5952651.jpeg?auto=compress&cs=tinysrgb&w=400" },
      { name: "WinSCP", image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400" },
      { name: "AWS CLI", image: "https://images.pexels.com/photos/13458329/pexels-photo-13458329.jpeg?auto=compress&cs=tinysrgb&w=400" }
    ]
  },
  {
    title: "Programming & Scripting",
    items: [
      { name: "Python", image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400" },
      { name: "Bash Scripting", image: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=400" },
      { name: "PowerShell", image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400" },
      { name: "JSON/YAML", image: "https://images.pexels.com/photos/8728560/pexels-photo-8728560.jpeg?auto=compress&cs=tinysrgb&w=400" }
    ]
  },
  {
    title: "Operating Systems & Databases",
    items: [
      { name: "Linux", image: "https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=400" },
      { name: "Windows Server", image: "https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=400" },
      { name: "MySQL", image: "https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg?auto=compress&cs=tinysrgb&w=400" },
      { name: "PostgreSQL", image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=400" }
    ]
  }
];