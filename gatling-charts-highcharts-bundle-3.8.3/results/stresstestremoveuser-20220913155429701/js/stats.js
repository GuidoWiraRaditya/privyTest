var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "24",
        "ok": "14",
        "ko": "10"
    },
    "minResponseTime": {
        "total": "55",
        "ok": "55",
        "ko": "66"
    },
    "maxResponseTime": {
        "total": "1132",
        "ok": "1132",
        "ko": "537"
    },
    "meanResponseTime": {
        "total": "320",
        "ok": "330",
        "ko": "307"
    },
    "standardDeviation": {
        "total": "294",
        "ok": "367",
        "ko": "134"
    },
    "percentiles1": {
        "total": "215",
        "ok": "114",
        "ko": "280"
    },
    "percentiles2": {
        "total": "422",
        "ok": "469",
        "ko": "404"
    },
    "percentiles3": {
        "total": "909",
        "ok": "988",
        "ko": "504"
    },
    "percentiles4": {
        "total": "1081",
        "ok": "1103",
        "ko": "530"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 11,
    "percentage": 46
},
    "group2": {
    "name": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 3,
    "percentage": 13
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 10,
    "percentage": 42
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.412",
        "ok": "0.824",
        "ko": "0.588"
    }
},
contents: {
"req_pre-step---crea-31afd": {
        type: "REQUEST",
        name: "pre-step : create user",
path: "pre-step : create user",
pathFormatted: "req_pre-step---crea-31afd",
stats: {
    "name": "pre-step : create user",
    "numberOfRequests": {
        "total": "12",
        "ok": "3",
        "ko": "9"
    },
    "minResponseTime": {
        "total": "213",
        "ok": "905",
        "ko": "213"
    },
    "maxResponseTime": {
        "total": "1132",
        "ok": "1132",
        "ko": "537"
    },
    "meanResponseTime": {
        "total": "496",
        "ok": "982",
        "ko": "334"
    },
    "standardDeviation": {
        "total": "302",
        "ok": "106",
        "ko": "113"
    },
    "percentiles1": {
        "total": "400",
        "ok": "910",
        "ko": "290"
    },
    "percentiles2": {
        "total": "629",
        "ok": "1021",
        "ko": "408"
    },
    "percentiles3": {
        "total": "1010",
        "ok": "1110",
        "ko": "507"
    },
    "percentiles4": {
        "total": "1108",
        "ok": "1128",
        "ko": "531"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 3,
    "percentage": 25
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 9,
    "percentage": 75
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.706",
        "ok": "0.176",
        "ko": "0.529"
    }
}
    },"req_stress-user-del-df3b5": {
        type: "REQUEST",
        name: "Stress User deleted",
path: "Stress User deleted",
pathFormatted: "req_stress-user-del-df3b5",
stats: {
    "name": "Stress User deleted",
    "numberOfRequests": {
        "total": "12",
        "ok": "11",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "55",
        "ok": "55",
        "ko": "66"
    },
    "maxResponseTime": {
        "total": "493",
        "ok": "493",
        "ko": "66"
    },
    "meanResponseTime": {
        "total": "145",
        "ok": "152",
        "ko": "66"
    },
    "standardDeviation": {
        "total": "139",
        "ok": "143",
        "ko": "0"
    },
    "percentiles1": {
        "total": "79",
        "ok": "85",
        "ko": "66"
    },
    "percentiles2": {
        "total": "135",
        "ok": "142",
        "ko": "66"
    },
    "percentiles3": {
        "total": "441",
        "ok": "446",
        "ko": "66"
    },
    "percentiles4": {
        "total": "483",
        "ok": "484",
        "ko": "66"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 11,
    "percentage": 92
},
    "group2": {
    "name": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 1,
    "percentage": 8
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.706",
        "ok": "0.647",
        "ko": "0.059"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
