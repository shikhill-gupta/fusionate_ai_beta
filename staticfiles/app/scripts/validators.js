// ALL JS VALIDATIONS SHOULD BE PLACED HERE

$(document).ready(function() {

    // INPUT RESTRICTIONS
    const TEXTFIELDS_REGEX = /[^a-zA-Z\.-\s]/g
    const NUMBERFIELDS_REGEX = /[^\d]/g

        // formatter functions
        function formatSSS(value) {
            if (!value) return value;
            const sss = value.replace(/[^\d]/g, '');
            const sssLength = sss.length;
    
            if (sssLength < 3) return sss;
    
            if (sssLength < 10) {
              return `${sss.slice(0, 2)}-${sss.slice(2)}`;
            }
    
            return `${sss.slice(0, 2)}-${sss.slice(2, 9)}-${sss.slice(9)}`;
        }
    
        function formatHMDF(value) {
            if (!value) return value;
            const hmdf = value.replace(/[^\d]/g, '');
            const hmdfLength = hmdf.length;
    
            if (hmdfLength < 5) return hmdf;
    
            if (hmdfLength < 9) {
              return `${hmdf.slice(0, 4)}-${hmdf.slice(4)}`;
            }
    
            return `${hmdf.slice(0, 4)}-${hmdf.slice(4, 8)}-${hmdf.slice(8)}`;
        }

        function formatTIN(value) {
            if (!value) return value;
            console.log(value, 'tin')
            const tin = value.replace(/[^\d]/g, '');
            const tinLength = tin.length;
    
            if (tinLength < 4) return tin;
    
            if (tinLength < 7) {
              return `${tin.slice(0, 3)}-${tin.slice(3)}`;
            }
    
            return `${tin.slice(0, 3)}-${tin.slice(3, 6)}-${tin.slice(6)}`;
        }
    
        function formatPhilHealth(value) {
            if (!value) return value;
            const philHealth = value.replace(/[^\d]/g, '');
            const philHealthLength = philHealth.length;
    
            if (philHealthLength < 3) return philHealth;
    
            if (philHealthLength < 11) {
              return `${philHealth.slice(0, 2)}-${philHealth.slice(2)}`;
            }
    
            return `${philHealth.slice(0, 2)}-${philHealth.slice(2, 10)}-${philHealth.slice(10)}`;
        }
    
        // function formatEmpNumber(value) {
        //     if (!value) return value;
        //     const empNumber = value.replace(/[^\d]/g, '');
        //     const empNumberLength = empNumber.length;
    
        //     if (empNumberLength < 3) return empNumber;
    
        //     return `${empNumber.slice(0, 2)}-${empNumber.slice(2)}`;
        // }

    // FORMAT SSS, EMP NUMBER, TIN, PHILHEALTH, PAGIBIG ON DATA LOAD
    $("#id_sss_no").val(formatSSS($("#id_sss_no").val()))
    $("#id_hmdf_no").val(formatHMDF($("#id_hmdf_no").val()))
    $("#id_philhealth_no").val(formatPhilHealth($("#id_philhealth_no").val()))
    $("#id_tin_no").val(formatTIN($("#id_tin_no").val()))
    // $("#id_employee_no").val(formatEmpNumber($("#id_employee_no").val()))
    
    // UPDATE REQUEST FORM  KEYDOWN EVENTS
    $('#id_fname').on('keyup', function(e) {
        $(this).val($(this).val().replace(TEXTFIELDS_REGEX, ''));
    });

    $('#id_mname').on('keyup', function(e) {
        $(this).val($(this).val().replace(TEXTFIELDS_REGEX, ''));
    });
    
    $('#id_lname').on('keyup', function(e) {
        $(this).val($(this).val().replace(TEXTFIELDS_REGEX, ''));
    });

    $('#id_city').on('keyup', function(e) {
        $(this).val($(this).val().replace(TEXTFIELDS_REGEX, ''));
    });

    $('#id_province').on('keyup', function(e) {
        $(this).val($(this).val().replace(TEXTFIELDS_REGEX, ''));
    });

    $('#id_country').on('keyup', function(e) {
        $(this).val($(this).val().replace(TEXTFIELDS_REGEX, ''));
    });
    
    $('#id_emerg_person').on('keyup', function(e) {
        $(this).val($(this).val().replace(TEXTFIELDS_REGEX, ''));
    });
    $('#id_emerg_relation').on('keyup', function(e) {
        $(this).val($(this).val().replace(TEXTFIELDS_REGEX, ''));
    });

    $('#id_contact_no').on('keyup', function(e) {
        $(this).val($(this).val().replace(NUMBERFIELDS_REGEX, ''));
    });
    $('#id_emerg_contact').on('keyup', function(e) {
        $(this).val($(this).val().replace(NUMBERFIELDS_REGEX, ''));
    });
    $('#id_zipcode').on('keyup', function(e) {
        $(this).val($(this).val().replace(NUMBERFIELDS_REGEX, ''));
    });

    // $('#id_employee_no').on('keyup', function(e) {
    //     $(this).val($(this).val().replace(NUMBERFIELDS_REGEX, ''));
    // });

    $('#id_sss_no').on('keyup', function(e) {
        $(this).val($(this).val().replace(NUMBERFIELDS_REGEX, ''));
        // numberOnlyRestriction(e, $(this))
    });
    $('#id_hmdf_no').on('keyup', function(e) {
        $(this).val($(this).val().replace(NUMBERFIELDS_REGEX, ''));
    });
    $('#id_philhealth_no').on('keyup', function(e) {
        $(this).val($(this).val().replace(NUMBERFIELDS_REGEX, ''));
    });
    $('#id_tin_no').on('keyup', function(e) {
        $(this).val($(this).val().replace(NUMBERFIELDS_REGEX, ''));
    });

    // format when not on focused
    $("#id_sss_no").blur(function(e) {
        $(this).val(formatSSS($(this).val()))
    });
    $("#id_hmdf_no").blur(function(e) {
        $(this).val(formatHMDF($(this).val()))
    });
    $("#id_philhealth_no").blur(function(e) {
        $(this).val(formatPhilHealth($(this).val()))
    });
    $("#id_tin_no").blur(function(e) {
        $(this).val(formatTIN($(this).val()))
    });
    // $("#id_employee_no").blur(function(e) {
    //     $(this).val(formatEmpNumber($(this).val()))
    // });
    
    // unformat when focused
    $("#id_sss_no").focus(function(e) {
        $(this).val($(this).val().replace(/[-]/g, ''));
    });
    $("#id_hmdf_no").focus(function(e) {
        $(this).val($(this).val().replace(/[-]/g, ''));
    });
    $("#id_philhealth_no").focus(function(e) {
        $(this).val($(this).val().replace(/[-]/g, ''));
    });
    $("#id_tin_no").focus(function(e) {
        $(this).val($(this).val().replace(/[-]/g, ''));
    });
    // $("#id_employee_no").focus(function(e) {
    //     $(this).val($(this).val().replace(/[-]/g, ''));
    // });
    

  

    // UPDATE REQUEST FORM SUBMIT EVENT
    
 
  
 
    
  

    // end 
});