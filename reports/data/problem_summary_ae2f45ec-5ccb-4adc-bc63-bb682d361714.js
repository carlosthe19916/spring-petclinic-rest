MIGRATION_ISSUES_DETAILS["ae2f45ec-5ccb-4adc-bc63-bb682d361714"] = [
{description: "<p>Check if there is a Quarkus Extensions with Spring API compatibility for the Spring <code>spring-security-test<\/code> component.<br/> If yes, then replace the <code>org.springframework.security:spring-security-test<\/code> dependency with the Quarkus extension.<br/> If no, consider rewrite the code that relies on this dependency leveraging the Quarkus Guides linked below.<\/p>", ruleID: "springboot-generic-catchall-groovy-00000", issueName: "Spring component spring-security-test requires investigation",
problemSummaryID: "ae2f45ec-5ccb-4adc-bc63-bb682d361714", files: [
{l:"<a class='' href='pom_xml.html?project=176224'>pom.xml<\/a>", oc:"1"},
], resourceLinks: [
{h:"https://quarkus.io/guides/", t:"Quarkus - Guides"},
]},
];
onProblemSummaryLoaded("ae2f45ec-5ccb-4adc-bc63-bb682d361714");