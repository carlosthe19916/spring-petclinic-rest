MIGRATION_ISSUES_DETAILS["2241c1f4-ff41-4187-8864-2c5c074c1763"] = [
{description: "<p>Replace the Spring Web artifact with Quarkus <code>spring-web<\/code> extension<\/p><p>Spring Web is a spring-web artifact brought transitively by any <code>org.springframework:spring-web*<\/code> dependency<br/>Add Quarkus dependency <code>io.quarkus:quarkus-spring-web<\/code><\/p>", ruleID: "springboot-web-to-quarkus-00000", issueName: "Replace the Spring Web artifact with Quarkus \'spring-web\' extension",
problemSummaryID: "2241c1f4-ff41-4187-8864-2c5c074c1763", files: [
{l:"<a class='' href='pom_xml.html?project=176224'>pom.xml<\/a>", oc:"1"},
], resourceLinks: [
{h:"https://quarkus.io/guides/spring-web", t:"Quarkus Spring Web Guide"},
]},
];
onProblemSummaryLoaded("2241c1f4-ff41-4187-8864-2c5c074c1763");