function calculatePaint(){
    const length = parseFloat(document.getElementById("length").value);
    const width = parseFloat(document.getElementById("width").value);
    const height = parseFloat(document.getElementById("height").value);
    const layer = parseFloat(document.getElementById("layer").value);
    const coverage = parseFloat(document.getElementById("coverage").value);
    const canSize = parseFloat(document.getElementById("canSize").value);

    if (!length || !width || !height){
        alert('mohon isi semua ukuran kapal')
        return;
    }
    // estimasi total kapal
    const area = (2 * (length * height)) + (length * width)
    // total cat
    const totalPaint = (area * layer) / coverage
    const totalCans = Math.ceil(totalPaint/canSize)
    document.getElementById('area').innerText = area.toFixed(2)
    document.getElementById('paint').innerText = totalPaint.toFixed(2)
    document.getElementById('cans').innerText = totalCans
    document.getElementById('result').style.display = 'block'
}