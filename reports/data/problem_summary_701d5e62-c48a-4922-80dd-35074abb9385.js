MIGRATION_ISSUES_DETAILS["701d5e62-c48a-4922-80dd-35074abb9385"] = [
{description: "<p>Check if there is a Quarkus Extensions with Spring API compatibility for the Spring <code>spring-boot-starter-jdbc<\/code> component.<br/> If yes, then replace the <code>org.springframework.boot:spring-boot-starter-jdbc<\/code> dependency with the Quarkus extension.<br/> If no, consider rewrite the code that relies on this dependency leveraging the Quarkus Guides linked below.<\/p>", ruleID: "springboot-generic-catchall-groovy-00000", issueName: "Spring component spring-boot-starter-jdbc requires investigation",
problemSummaryID: "701d5e62-c48a-4922-80dd-35074abb9385", files: [
{l:"<a class='' href='pom_xml.html?project=176224'>pom.xml<\/a>", oc:"1"},
], resourceLinks: [
{h:"https://quarkus.io/guides/", t:"Quarkus - Guides"},
]},
];
onProblemSummaryLoaded("701d5e62-c48a-4922-80dd-35074abb9385");