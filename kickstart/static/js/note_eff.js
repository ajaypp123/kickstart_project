  $(document).ready(function() {
                notify('black');
            });
            
            // #Disabled only if checkbox is checked
            window.onload = toggleSelect();
            function toggleSelect()
            {
              var isChecked = document.getElementById("display-checkbox").checked;
              document.getElementById("first-boot").disabled = !isChecked;
            }
            
            function notify(style) {
                $.notify({
                    title: 'Please select your choice for configuration !',
                    text: 'Later you can preview and save it as .cfg file.',
                    image: "<img src='file.png'/>"
                }, {
                    style: 'notify',
                    className: style,
                    autoHide: true,
                    clickToHide: true,
                      globalPosition: 'bottom left',
            
                });
            }
