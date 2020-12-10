        
            //etiqueta
            var ctx = document.getElementById('graficoDos').getContext('2d');
            var graficoDos = new Chart(ctx, {
                // The type of chart we want to create
                type: 'line',
            
                // The data for our dataset
                data: {
                    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
                    datasets: [{
                        label: 'cambiados',
                        backgroundColor: 'rgb(0, 99, 132,0.3)',
                        borderColor: 'rgb(255, 99, 132)',
                        data: [10, 10, 5, 20, 20, 10, 9]},
                        
                    {    
                        label: 'iguales',
                        backgroundColor: 'rgb(120, 9, 132,0.3)',
                        borderColor: 'rgb(255, 199, 132)',
                        data: [0, 10, 5, 2, 20, 30, 45]

                    }]
                },   

                 // Configuration options go here
                options: {
                    title: {
                        display: true,
                        text: 'custom Mi segundo dataset'
                        
                    }
                }
        });