function startclassification()
{
navigator.mediaDevices.getUserMedia({ audio:true})
classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/NfGPKy65H/model.json', modelReady);
}

function modelReady()
    {
        classifier.classify(gotResults);
    }

    function gotResults(error, results)
    {   
        if (error) {
            console.error(error);
        } else{
        console.log(results);
        random_num_r = Math.floor(Math.random() * 255)+1;
        random_num_g = Math.floor(Math.random() * 255)+1;
        random_num_b = Math.floor(Math.random() * 255)+1;

        document.getElementById("result_label").innerHTML='I can hear - '+ results[0].label;

        document.getElementById("result_confidence").innerHTML= 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+"%";

        document.getElementById("result_label").style.color = "rgb(" + random_num_r +"," + random_num_g + "," + random_num_b + ")";
        
        document.getElementById("result_confidence").style.color = "rgb(" + random_num_r +"," + random_num_g + "," + random_num_b + ")";


    img = document.getElementById("imge")

    if (results[0].label == "dog bark")
    {
    img.src = "dog.png"
    }
    
    else if (results[0].label == "cat meow")
    {
    img.src = "cat.jpg"
    }

    else if (results[0].label == "cow moo")
    {
    img.src = "cow.png"
    }

    else if (results[0].label == "lion roar")
    {
    img.src = "lion.jpg"
           }
        }
    }    
