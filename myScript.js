// 메뉴바 클릭 시 스크롤처럼 올라가는 효과
document.querySelector('.menuBarLogo a').addEventListener('click', function(event) {
    event.preventDefault(); // 기본 클릭 동작 방지
    const targetPosition = document.getElementById('mainBox').offsetTop; // 목표 위치

    // 부드러운 스크롤 애니메이션
    window.scrollTo({
        top: targetPosition - 20, // 약간 위로 이동
        behavior: 'smooth' // 부드러운 스크롤 효과
    });
});

// Warning 이미지를 호버했을 때 회전하는 효과
const warnings = document.querySelectorAll('.Warning, .Warning2, .Warning3, .Warning3_2, .Warning4, .Warning5, .Warning6, .Warning7');
warnings.forEach((warning, index) => {
    warning.style.transition = 'transform 0.5s ease-in-out';
    
    // 서로 다른 회전 방향 설정
    const rotationDegrees = index % 2 === 0 ? 10 : -10; // 짝수 인덱스는 오른쪽 회전, 홀수 인덱스는 왼쪽 회전

    warning.addEventListener('mouseover', () => {
        warning.style.transform = `rotate(${rotationDegrees}deg)`; // 회전
    });
    
    warning.addEventListener('mouseout', () => {
        warning.style.transform = 'rotate(0deg)'; // 원래 위치로 복귀
    });
});
