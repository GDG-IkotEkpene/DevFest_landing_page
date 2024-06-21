<!-- Fetch data -->
async fetchContactMessages() {
      this.loading = true
      try {
        const db = this.$firestore
        const querySnapshot = await this.$getDocs(this.$collection(db, 'contactMessages'))
        const messages = []
        querySnapshot.forEach((doc) => {
          messages.push(doc.data())
        })
        this.messages = messages
        console.log(messages, 'kkkk')
      } catch (error) {
        console.error('Error fetching messages:', error)
      } finally {
        this.loading = false
      }
    }

    <!-- Send Data  -->
    async submitForm(values, { resetForm }) {
      this.isLoading = true
      try {
        const db = getFirestore(firebaseApp)
        await addDoc(collection(db, 'contactMessages'), {
          name: values.name,
          email: values.email,
          message: values.message,
          timestamp: new Date().toISOString()
        })
        // alert('Message sent successfully!')
        this.$toastify({
          text: 'Message sent successfully!',
          duration: 3000,
          className: 'info',
          style: {
            background: '#333',
            fontSize: '12px',
            borderRadius: '5px'
          }
        }).showToast()
        // Clear form data after submission
        resetForm()
      } catch (error) {
        console.error('Error sending message:', error)
        console.log(error)
        alert('An error occurred while sending the message. Please try again later.')
      } finally {
        this.isLoading = false
      }
    }