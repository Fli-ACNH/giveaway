window.onload = () => {
    const form = document.querySelector('form')
    
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        
        const userId = document.querySelector('.userId').value
        const username = document.querySelector('.username').value
        const user = document.querySelector('.user').value
        const prize = document.querySelector('.prize').value
        const time = document.querySelector('.time').value
        let winners = ''
        if(document.querySelector('.winners').value !== '') {
            winners = `${document.querySelector('.winners').value}`
        }

        const paragraph = 
        `**__•• ${prize} ••__**\n• Thank you, <@${userId}>, for giving away ${prize}! If you are drawn as a winner, you have 24 hours to message ${user} to claim your prize. Do not message them unless you are the winner. Thank you, ${user}, once again for the generosity! Good luck to all who enter!`

        const giveaway = `/start duration:${time} prize:${prize} winners:${winners} host:<@${userId}>`

        const mobile = `${time} prize:${prize} winners:${winners} host:@${username}`
        
        document.querySelector('.paragraph').innerHTML = paragraph
        document.querySelector('.giveaway').innerHTML = giveaway
        document.querySelector('.mobile').innerHTML = mobile
    })
}