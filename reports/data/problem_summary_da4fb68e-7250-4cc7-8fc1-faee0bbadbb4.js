MIGRATION_ISSUES_DETAILS["da4fb68e-7250-4cc7-8fc1-faee0bbadbb4"] = [
{description: "<p>Replace the SpringBoot JPA artifact with Quarkus <code>spring-data-jpa<\/code> extension<\/p><p>Spring Data JPA is in spring-data-jpa artifact brought transitively by any <code>org.springframework.data:spring-data-*<\/code> dependency<br/>Add Quarkus dependency <code>io.quarkus:quarkus-spring-data-jpa<\/code><\/p>", ruleID: "springboot-jpa-to-quarkus-00000", issueName: "Replace the SpringBoot Data JPA artifact with Quarkus \'spring-data-jpa\' extension",
problemSummaryID: "da4fb68e-7250-4cc7-8fc1-faee0bbadbb4", files: [
{l:"<a class='' href='pom_xml.html?project=176224'>pom.xml<\/a>", oc:"1"},
], resourceLinks: [
{h:"https://quarkus.io/guides/spring-data-jpa", t:"Quarkus JPA Guide"},
]},
];
onProblemSummaryLoaded("da4fb68e-7250-4cc7-8fc1-faee0bbadbb4");