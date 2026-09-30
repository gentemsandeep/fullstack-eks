variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "ap-south-1"
}

variable "project_name" {
  description = "Project name"
  type        = string
  default     = "fullstack-eks"
}

variable "vpc_cidr" {
  description = "VPC CIDR"
  type        = string
  default     = "10.0.0.0/16"
}

variable "kubernetes_version" {
  description = "EKS Kubernetes version"
  type        = string
  default     = "1.33"
}

variable "db_name" {
  description = "PostgreSQL database name"
  type        = string
  default     = "fullstackdb"
}

variable "db_username" {
  description = "PostgreSQL username"
  type        = string
  default     = "postgres"
}
