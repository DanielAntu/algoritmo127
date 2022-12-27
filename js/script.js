const enviar_nome = document.querySelector('#enviar-nome')
const nome = document.querySelector('#nome')
const input_nome = document.querySelector('.input-nome')
const nome_aluno = document.querySelector('#nome-aluno')
const bv = document.querySelector('.bv')
const input_container = document.querySelector('.input-container')
const nota1 = document.querySelector('#nota1')
const nota2 = document.querySelector('#nota2')
const nota3 = document.querySelector('#nota3')
const nota4 = document.querySelector('#nota4')
const calcular = document.querySelector('#calcular')
const modal = document.querySelector('.modal')
const erro = document.querySelector('.erro')
const media = document.querySelector('#med')
const sem1 = document.querySelector('#sem1')
const sem2 = document.querySelector('#sem2')
const sem3 = document.querySelector('#sem3')
const sem4 = document.querySelector('#sem4')
const sit = document.querySelector('#sit')
const maluno = document.querySelector('#maluno')
const naluno = document.querySelector('#naluno')

//funçoes

//calcula a media
const calculoMedia = (n1, n2, n3, n4) => {
    let soma = n1 + n2 + n3 + n4
    let media = soma /4
    return media
}

//verifica a media
const verificarMedia = (media) => {
    if (media <= 3) {
        return 'Reprovado'
    } else if (media < 7) {
        return 'Recuperação'
    } else {
        return 'Aprovado'
    }
}

// gera um id
const generateId = () => {
    let id = Math.floor(Math.random() * 5000)
    return id
}

// verifica o texto
const validDigit = (text) => {
    return text.replace(/[^0-9.]/g, '')
}


//eventos

// evento de verificação
[nota1, nota2, nota3, nota4].forEach((el) => {
    el.addEventListener('input', (e) => {
        const updateValor = validDigit(e.target.value)
        e.target.value = updateValor
    })
})

//verifica o input
nome.addEventListener('input', () => {
    if (nome.value.length > 3) {
        enviar_nome.removeAttribute('disabled')
    } else {
        enviar_nome.setAttribute('disabled', '')
    }
})

//evento de click de autenticação
enviar_nome.addEventListener('click', () => {
    input_nome.classList.add('hide')
    nome_aluno.classList.remove('hide')
    nome_aluno.innerHTML = `<i class="bi bi-person"></i> ${nome.value}`
    bv.classList.add('hide')
    input_container.classList.remove('hide')
})

// evento de calculo
calcular.addEventListener('click', () => {
    if (nota1.value.length > 0 || nota2.value.length > 0 || nota3.value.length > 0 || nota4.value.length > 0) {
        modal.classList.remove('hide')
        erro.classList.add('hide')
        maluno.innerHTML = generateId()
        naluno.innerHTML = nome.value
        media.innerHTML = calculoMedia(+nota1.value, +nota2.value, +nota3.value, +nota4.value).toFixed(1)
        sem1.innerHTML = Number(nota1.value).toFixed(1)
        sem2.innerHTML = Number(nota2.value).toFixed(1)
        sem3.innerHTML = Number(nota3.value).toFixed(1)
        sem4.innerHTML = Number(nota4.value).toFixed(1)
        sit.innerHTML = verificarMedia(calculoMedia(+nota1.value, +nota2.value, +nota3.value, +nota4.value))
        nota1.value = ''
        nota2.value = ''
        nota3.value = ''
        nota4.value = ''
    } else {
        erro.classList.remove('hide')
    }
})

// evento de fechar modal
document.querySelector('.bi-x-lg').addEventListener('click', () => {
    modal.classList.add('hide')
})