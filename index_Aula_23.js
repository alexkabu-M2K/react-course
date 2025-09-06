const container = document.querySelector('#container');

        const element = (() => {
            return (
                    <div>

                    <h1> Hello World!</h1>
                    <p> Bem vindo ao React </p>

            </div>

            )
            
        });

        ReactDOM.createRoot(container).render(element());
