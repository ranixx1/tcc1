var calendarDiv = document.getElementById('calendar');


var calendar = new FullCalendar.Calendar(calendarDiv, {
    locales: 'es', 
    initialView: 'dayGridMonth', 
    headerToolbar: { 
        left: 'prev,crearEntrada', // asignamos el botón a la toolbar 
        center: 'title', 
        right: 'next',

    },
    footerToolbar: {
        left: 'prevYear',    
        center: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth,today',
        right: 'nextYear'
    }, 
    buttonText: {
        today: 'Hoje',
        month: 'Mês',
        week: 'Semana',
        day: 'Dia',
        list: 'Lista'
    },
    customButtons: { 
        crearEntrada: {
            text: 'Novo evento', 
            click: ()=>{
                abrirModal('criar');
                vaciarCampos();
            }
        }
    },
    events: [
        {
            title: 'Evento de prueba 1',
            description: 'Esta es una descripción de prueba', 
            start: '20-09-2020 12:00:00', 
            end: '25-09-2020 12:00:00', 
            color: 'yellow', 
            textColor: 'red', 
        },
        {
            title: 'Evento de prueba 2',
            descripcion: 'Este es otro evento de un solo día',
            start: '26-09-2020',
            color: 'red',
            textColor: 'yellow'
        },
        {
            title: 'Evento de prueba 3',
            description: 'Este evento dura un tiempo determinado',
            start: '27-09-2020 08:00:00', 
            end: '27-09-2020 10:00:00', 
            color: 'blue',
            textColor: 'green'
        }        
    ], 
    dateClick: (info) => {
        abrirModal('crear');

        var fecha = document.getElementById('fechaInicio');
        fecha.value = info.dateStr; 
        
    },
    eventClick: (info) => {
        document.getElementById('tituloEntrada').innerHTML = info.event.title;
        document.getElementById('titulo').value = info.event.title;
        fechaInicio = cortarFecha(info.event.startStr);
        document.getElementById('fechaInicio').value = fechaInicio[0];

        if(fechaInicio.length > 1){
            document.getElementById('horaInicio').value = fechaInicio[1];
        }

        fechaFin = cortarFecha(info.event.endStr);
        document.getElementById('fechaFin').value = fechaFin[0];

        if(fechaFin.length > 1){
            document.getElementById('horaFin').value = fechaFin[1];
        }

        if(info.event.extendedProps.description){
            document.getElementById('descripcion').value = info.event.extendedProps.description;
        }
        
        document.getElementById('color').value = info.event.backgroundColor;
        document.getElementById('textColor').value = info.event.textColor;

        abrirModal('editar');
    },
    editable: true
    
});

calendar.render();