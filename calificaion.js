function calculateAverage() {
    
    var grade1 = parseFloat(document.getElementById('grade1').value);
    var grade2 = parseFloat(document.getElementById('grade2').value);
    var grade3 = parseFloat(document.getElementById('grade3').value);

   
    var average = (grade1 + grade2 + grade3) / 3;

   
    document.getElementById('average').value = average.toFixed(2);
}