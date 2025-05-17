function drawLots() {
  const candidates = Array.from({ length: 25 }, (_, i) => i + 1);
  const selected = [];

  while (selected.length < 4) {
    const randomIndex = Math.floor(Math.random() * candidates.length);
    selected.push(candidates.splice(randomIndex, 1)[0]);
  }

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = ''; // 이전 결과 지우기

  // 카드 UI 출력 (Tailwind로)
  selected.sort((a, b) => a - b).forEach(num => {
    const div = document.createElement('div');
    div.className = "bg-white text-purple-700 font-bold px-4 py-2 rounded-xl shadow-md text-lg";
    div.textContent = `${num}번`;
    resultDiv.appendChild(div);
  });

  // SweetAlert2 팝업 출력
  Swal.fire({
    title: '🎉 청소당번 선정!',
    html: `<b>${selected.sort((a, b) => a - b).join(', ')}번</b>`,
    icon: 'success',
    confirmButtonText: '확인',
    background: '#f0f9ff',
    color: '#333',
    confirmButtonColor: '#8b5cf6',
    customClass: {
      popup: 'rounded-xl shadow-lg'
    }
  });
}
