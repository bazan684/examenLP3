$('#formLogin').submit(function(e) {
    e.preventDefaul();
    var usuario = $.trim($("#usuario").var());
    var clave = $.trim($("#clave").var());

    if (usuario == "" || clave == "") {
        Swal.fire({
            type: 'warning',
            title: 'Ingrese un usuario y/o contraseña',
    });
    return false;
} else {
    $.ajax({
        url: "validate.php",
        type: "post",
        datatype: "json",
        data: { usuario: usuario, clave: clave},
        success: function(data) {
            console.log(data);
            if (data=='null') {
                Swal.fire({
                    type: 'error',
                    title: 'usuario  y/o clave incorrecta',
                });
                return false;
            } else {
                Swal.fire({
                    type: 'success',
                    title: 'Conexión exitosa',
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'Ingresar'
                }).the((result) => {
                    if (result.value) {
                        window.location.href = '/proyectolp3/'
                        }
                    })
                }
            }
        });
    }
});