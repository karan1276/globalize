(function($) {
    var cultures = $.cultures,
        invariant = cultures.invariant,
        standard = invariant.calendars.standard,
        culture = cultures["sr"] = $.extend(true, {}, invariant, {
        name: "sr",
        englishName: "Serbian",
        nativeName: "srpski",
        language: "sr",
        numberFormat: {
            ',': ".",
            '.': ",",
            percent: {
                pattern: ["-n%","n%"],
                ',': ".",
                '.': ","
            },
            currency: {
                pattern: ["-n $","n $"],
                ',': ".",
                '.': ",",
                symbol: "Din."
            }
        },
        calendars: {
            standard: $.extend(true, {}, standard, {
                name: "Gregorian_Localized",
                '/': ".",
                firstDay: 1,
                days: [["nedelja","ponedeljak","utorak","sreda","četvrtak","petak","subota"],["ned","pon","uto","sre","čet","pet","sub"],["ne","po","ut","sr","če","pe","su"]],
                months: [["januar","februar","mart","april","maj","jun","jul","avgust","septembar","oktobar","novembar","decembar",""],["jan","feb","mar","apr","maj","jun","jul","avg","sep","okt","nov","dec",""]],
                AM: null,
                PM: null,
                eras: [{"name":"n.e.","start":null,"offset":0}],
                patterns: {
                    d: "d.M.yyyy",
                    D: "d. MMMM yyyy",
                    t: "H:mm",
                    T: "H:mm:ss",
                    f: "d. MMMM yyyy H:mm",
                    F: "d. MMMM yyyy H:mm:ss",
                    M: "d. MMMM",
                    Y: "MMMM yyyy"
                }
            })
        }
    }, cultures["sr"]);
    culture.calendar = culture.calendars.standard;
})(jQuery);