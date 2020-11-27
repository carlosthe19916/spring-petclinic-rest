MIGRATION_ISSUES_DETAILS["6b1ea01d-8fc3-4f5f-9ca9-cd8f610adbd5"] = [
{description: "<p>Replace the SpringBoot Security artifact with Quarkus <code>spring-security<\/code> extension<\/p><p>Spring Security is in spring-security-core artifact brought transitively by <code>org.springframework.boot:spring-boot-starter-security<\/code> dependency.<br/>Add Quarkus dependency <code>io.quarkus:quarkus-spring-security<\/code><\/p>", ruleID: "springboot-security-to-quarkus-00000", issueName: "Replace the SpringBoot Security artifact with Quarkus \'spring-security\' extension",
problemSummaryID: "6b1ea01d-8fc3-4f5f-9ca9-cd8f610adbd5", files: [
{l:"<a class='' href='pom_xml.html?project=176224'>pom.xml<\/a>", oc:"1"},
], resourceLinks: [
{h:"https://quarkus.io/guides/spring-security", t:"Quarkus Extension for Spring Security API Guide"},
]},
];
onProblemSummaryLoaded("6b1ea01d-8fc3-4f5f-9ca9-cd8f610adbd5");