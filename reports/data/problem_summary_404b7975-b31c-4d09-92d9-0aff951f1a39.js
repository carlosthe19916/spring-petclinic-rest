MIGRATION_ISSUES_DETAILS["404b7975-b31c-4d09-92d9-0aff951f1a39"] = [
{description: "<p>Check if there is a Quarkus Extensions with Spring API compatibility for the Spring <code>spring-data-jdbc-core<\/code> component.<br/> If yes, then replace the <code>org.springframework.data:spring-data-jdbc-core<\/code> dependency with the Quarkus extension.<br/> If no, consider rewrite the code that relies on this dependency leveraging the Quarkus Guides linked below.<\/p>", ruleID: "springboot-generic-catchall-groovy-00000", issueName: "Spring component spring-data-jdbc-core requires investigation",
problemSummaryID: "404b7975-b31c-4d09-92d9-0aff951f1a39", files: [
{l:"<a class='' href='pom_xml.html?project=176224'>pom.xml<\/a>", oc:"1"},
], resourceLinks: [
{h:"https://quarkus.io/guides/", t:"Quarkus - Guides"},
]},
];
onProblemSummaryLoaded("404b7975-b31c-4d09-92d9-0aff951f1a39");