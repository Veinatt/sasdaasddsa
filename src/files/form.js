document.querySelectorAll('input[type="name"]').forEach(name => {
    name.addEventListener('keyup', function (event) {
        if (checkBorder(name.value, true)) {
            name.style.borderColor = "#f0f0f0";
        } else {
            name.style.borderColor = "#E42C2C";
        }
    });
});

document.querySelectorAll('input[type="tel"]').forEach(tel => {
    tel.addEventListener('keyup', function (event) {
        if (checkBorder(tel.value.replace(/[^0-9]/g, ""), false)) {
            tel.style.borderColor = "#f0f0f0";
        } else {
            tel.style.borderColor = "#E42C2C";
        }
    });
});


var form_name_modal = document.getElementById('FormInputName')
var form_tel_modal = document.getElementById('FormInputTel')



document.querySelector('#Modal').addEventListener('hidden.bs.modal', () => {
    form_name_modal.value = '';
    form_name_modal.style.borderColor = "#313131";
    form_tel_modal.value = '';
    form_tel_modal.style.borderColor = "#313131";
    document.querySelector('.modal .main-cont').style.display = 'block';
    document.querySelector('.modal .success-cont').style.display = 'none';
});


document.querySelector('#Modal').addEventListener('show.bs.modal', event => {
    var button = event.relatedTarget;
    var recipient = button.getAttribute('data-bs-whatever');
    document.getElementById('form').setAttribute('data-bs-whatever', recipient);
})
// document.querySelectorAll('.openDialog').forEach(btn => {
//     btn.addEventListener('click', () => {
//         document.querySelector('#reqModal').showModal();
//     });
// });
// document.querySelector('.closeDialog').addEventListener('click', () => {
//     document.querySelector('#reqModal').close();
// });

function form_submit(e) {
    e.preventDefault();
    var form_name, form_tel, form_type;
    form_name = document.getElementById('FormInputName').value;
    form_tel = document.getElementById('FormInputTel').value;
    form_type = document.getElementById('form').getAttribute('data-bs-whatever');
    if (check(form_name, true) && check(form_tel.replace(/[^0-9]/g, ""), false)) {
        form = new FormData();
        xhr = new XMLHttpRequest();
        form.append('form_name', form_name);
        form.append('form_type', form_type);
        form.append('form_tel', form_tel);

        xhr.open('POST', 'form-handler.php');
        xhr.send(form);
        xhr.onreadystatechange = function () {
            if (xhr.readyState != 4) return;

            if (xhr.status === 200) {
                document.querySelector('.modal .main-cont').style.display = 'none';
                document.querySelector('.modal .success-cont').style.display = 'block';
            }
        }
    }
}

function check(value, condition) {
    var result = false;
    if (condition) {
        var name_reg = /^([А-я])+(( +([А-я])+$)|$)/g;
        if (value.match(name_reg)) {
            result = true;
        }
    } else {
        var tel_reg = /^(^8|7|\+7)((\d{10})|(\s\(\d{3}\)\s\d{3}\s\d{2}\s\d{2}))/g;
        if (value.match(tel_reg)) {
            result = true;
        }
    }
    return result;
}

function checkBorder(value, condition) {
    var result = false;
    if (condition) {
        var name_reg = /^([А-я])+(( +([А-я])+$)|$)/g;
        if (value != '') {
            if (value.match(name_reg)) {
                result = true;
            }
        } else {
            result = true;
        }
    } else {
        var tel_reg = /^(^8|7|\+7)((\d{10})|(\s\(\d{3}\)\s\d{3}\s\d{2}\s\d{2}))/g;
        if (value != '') {
            if (value.match(tel_reg)) {
                result = true;
            }
        } else {
            result = true;
        }
    }
    return result;
}

// $('body').activity({
//     'achieveTime':60
//     ,'testPeriod':10
//     ,useMultiMode: 1
//     ,callBack: function (e) {
//         ga('send', 'event', 'Activity', '60_sec');
//         yaCounterXXXXXXXXX.reachGoal('60_sec');
//     }
// });