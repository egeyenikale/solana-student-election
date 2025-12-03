export const project = {
  slug: "solana-student-election",
  title: "Solana Student Election",
  description: "NFT-verified student election system on Solana.",
  features: [
  "Election program",
  "NFT eligibility check",
  "Candidate management",
  "Vote casting",
  "Result calculation",
  "Frontend integration"
  ]
};

export function summarizeProject() {
  return `${project.title}: ${project.features.length} planned features`;
}
