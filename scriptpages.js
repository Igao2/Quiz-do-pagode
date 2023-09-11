document.addEventListener('DOMContentLoaded',function(){
    var body = document.body.id
    if(body=="musica1")
    {
        const belo = document.getElementById("belo");
            const revelacao = document.getElementById("revelação");
    
            var arraynfuncional =localStorage.getItem('array');
            var array = JSON.parse(arraynfuncional);
            var tamanho = array.length;
            var numeroaleatorio = Math.floor(Math.random() * tamanho);
    
            belo.addEventListener("click", function() {
                var count = localStorage.getItem('count');
                count++;
                localStorage.setItem('count',count)
                
                if(array.length>=1)
                {
                var musicas = localStorage.getItem('musicas');
               
                
                    musicas = musicas + 'Belo - Pura adrenalina'+",";
                
                  
                localStorage.setItem('musicas',musicas);
                var pagina  = array.splice(numeroaleatorio,1)[0];
                window.location.href = pagina;
                
                var arraystring = JSON.stringify(array)
                localStorage.setItem('array',arraystring);
                }
                else{
                    window.location.href = "final.html";
                    var musicas = localStorage.getItem('musicas');
                musicas = musicas + 'Belo - Pura adrenalina';
                localStorage.setItem('musicas',musicas);
                }
               
                
            });
            revelacao.addEventListener("click",function(){
    
                
                if(array.length>=1)
                {
                var pagina  = array.splice(numeroaleatorio,1)[0];
                window.location.href = pagina;
                var arraystring = JSON.stringify(array)
                localStorage.setItem('array',arraystring);
                }
                else{
                    window.location.href = "final.html";
                }
    
            })
    }
    
    if(body=="musica2")
    {
        const fundo = document.getElementById("fundodequintal");
        const atitude67 = document.getElementById("atitude67");
        var arraynfuncional =localStorage.getItem('array');
        var array = JSON.parse(arraynfuncional);
        var tamanho = array.length;
        var numeroaleatorio = Math.floor(Math.random() * tamanho);
        var count = localStorage.getItem('count');
    
        fundo.addEventListener("click", function() {
            
            count++;
            localStorage.setItem('count',count);
            if(array.length>=1)
            {
            var musicas = localStorage.getItem('musicas');
    
                     musicas = musicas + 'Fundo de Quintal - O Show tem que continuar'+',';
          
            localStorage.setItem('musicas',musicas);
            var pagina  = array.splice(numeroaleatorio,1)[0];
            window.location.href = pagina;
            var arraystring = JSON.stringify(array)
            localStorage.setItem('array',arraystring);
            }
            else{
                window.location.href = "final.html";
                var musicas = localStorage.getItem('musicas');
            musicas = musicas + 'Fundo de Quintal - O Show tem que continuar';
            localStorage.setItem('musicas',musicas);
            }
            
        });
        atitude67.addEventListener("click",function(){
            if(array.length>=1)
            {
            var pagina  = array.splice(numeroaleatorio,1)[0];
            window.location.href = pagina;
            var arraystring = JSON.stringify(array)
            localStorage.setItem('array',arraystring);
            }
            else{
                window.location.href = "final.html";
            }
    
        })
    
    
    }
    
    if(body=="musica3")
    {
        const pagode = document.getElementById("turmadopagode");
        const exalta = document.getElementById("exalta");
        var arraynfuncional =localStorage.getItem('array');
        var array = JSON.parse(arraynfuncional);
        var tamanho = array.length;
        var numeroaleatorio = Math.floor(Math.random() * tamanho);
        
    
            pagode.addEventListener("click", function() {
            var count = localStorage.getItem('count');
            count++;
            localStorage.setItem('count',count);
            
            if(array.length>=1)
            {
            var musicas = localStorage.getItem('musicas');
             
                     musicas = musicas + ' Turma do Pagode - Lancinho'+','
            
            localStorage.setItem('musicas',musicas);
               
                
            
            var pagina  = array.splice(numeroaleatorio,1)[0];
            window.location.href = pagina;
            var arraystring = JSON.stringify(array)
            localStorage.setItem('array',arraystring);
    
            }
            else{
                window.location.href = "final.html"
                var musicas = localStorage.getItem('musicas');
            musicas = musicas + 'Turma do Pagode - Lancinho';
            localStorage.setItem('musicas',musicas);
            }
        });
    
        exalta.addEventListener("click",function() {
            if(array.length>=1)
            {
            
             var pagina  = array.splice(numeroaleatorio,1)[0];
            window.location.href = pagina;
            var arraystring = JSON.stringify(array)
            localStorage.setItem('array',arraystring);   
            }
            else{
                window.location.href = "final.html"
            }
        });
    }
    if(body=="musica4")
    {
    
            
            const pagodinho = document.getElementById("pagodinho");
            const arlindo = document.getElementById("arlindo");
            var arraynfuncional =localStorage.getItem('array');
            var array = JSON.parse(arraynfuncional);
            var tamanho = array.length;
            var numeroaleatorio = Math.floor(Math.random() * tamanho);
    
            pagodinho.addEventListener("click", function() {
                var count = localStorage.getItem('count');
                count++;
                localStorage.setItem('count',count);
                if(array.length>=1)
                {
                    
                var musicas = localStorage.getItem('musicas');
                
                     
                   
                         musicas = musicas + 'Zeca Pagodinho - Esta Melodia'+",";
                    
                
                localStorage.setItem('musicas',musicas);
                var pagina  = array.splice(numeroaleatorio,1)[0];
                window.location.href = pagina;
                var arraystring = JSON.stringify(array)
                localStorage.setItem('array',arraystring);
                }
                else{
                    window.location.href="final.html"
                    var musicas = localStorage.getItem('musicas');
                musicas = musicas + 'Zeca Pagodinho - Esta melodia';
                localStorage.setItem('musicas',musicas);
                }
                
            });
            arlindo.addEventListener("click",function(){
                if(array.length>=1)
                {
                var pagina  = array.splice(numeroaleatorio,1)[0];
                window.location.href = pagina;
                var arraystring = JSON.stringify(array)
                localStorage.setItem('array',arraystring);
                }
                else{
                    window.location.href="final.html"
                }
            })
    
    }
    if(body=="musica5")
    {
       
            
        const exalta = document.getElementById("exalta");
        const bomgosto = document.getElementById("bomgosto");
        var arraynfuncional =localStorage.getItem('array');
        var array = JSON.parse(arraynfuncional);
        var tamanho = array.length;
        var numeroaleatorio = Math.floor(Math.random() * tamanho);
    
        exalta.addEventListener("click", function() {
            var count = localStorage.getItem('count');
            count++;
            localStorage.setItem('count',count);
            if(array.length>=1)
            {
                var musicas = localStorage.getItem('musicas');
               
                     musicas = musicas + 'Exaltasamba- Abandonado'+",";
             
           
            localStorage.setItem('musicas',musicas);
            var pagina  = array.splice(numeroaleatorio,1)[0];
            window.location.href = pagina;
            var arraystring = JSON.stringify(array)
            localStorage.setItem('array',arraystring);
            }
            else{
                window.location.href="final.html";
                var musicas = localStorage.getItem('musicas');
            musicas = musicas + 'Exaltasamba- Abandonado';
            localStorage.setItem('musicas',musicas);
            }
            
        });
        bomgosto.addEventListener("click",function(){
            if(array.length>=1)
            {
             var pagina  = array.splice(numeroaleatorio,1)[0];
            window.location.href = pagina;
            var arraystring = JSON.stringify(array)
            localStorage.setItem('array',arraystring);
            }
            else{
                window.location.href="final.html";
            }
    
        })
    
    }

    if(body=="final")
    {
        
        var twitter = document.getElementById("tt");
        var count = localStorage.getItem('count')
        console.log(count)
        twitter.addEventListener("click",function(){

            
            var siteLink = "https://quizpagode.onrender.com";
            
            
            var mensagem = "Eu acertei "+count+" músicas. Quantas você consegue? "+siteLink;
            
            
            var twitterURL = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(mensagem);
            
            
            window.open(twitterURL, "_blank");
        
        });
        var zap = document.getElementById("zap");
        zap.addEventListener("click",function(){
            var siteLink = "https://quizpagode.onrender.com";
            
            
            var mensagem = "Eu acertei "+count+" músicas. Quantas você consegue? "+siteLink;
            
            var whatsappURL = "https://api.whatsapp.com/send?text=" + encodeURIComponent(mensagem);
            
            
            window.open(whatsappURL, "_blank");
        })
        
      
            
            var musicas = localStorage.getItem('musicas');
            var final = musicas.length;

            if (musicas[final - 1] === ",") 
            {
                musicas = musicas.slice(0, final - 1);
            }
            if(count==0)
            {
                document.getElementById("resultado").innerHTML = "Minha nossa senhora o impossível aconteceu!! Você errou TODAS"
            }
            if(count==1)
            {
                document.getElementById("resultado").innerHTML = "Você realmente ouve pagode? Você acertou uma: "+musicas
            }
            if(count==2)
            {
                document.getElementById("resultado").innerHTML = "Bora ouvir mais pagode? Você acertou duas: "+musicas
            }
            if(count==3)
            {
                document.getElementById("resultado").innerHTML = "Vai bastante em churrasco né? Você acertou três: "+musicas
            }
            if(count==4)
            {
                document.getElementById("resultado").innerHTML = "Mumuzinho, é você? Você acertou quatro: "+musicas;
            }
            if(count==5)
            {
                document.getElementById("resultado").innerHTML = "Você só deixou acontecer naturalmente não é? Você acertou cinco: "+musicas
            }




       
        
        
  
    }
})
