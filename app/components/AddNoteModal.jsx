import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const AddNoteModal = ({modalVisible, setModalVisible, newNote, setNewNote, addNote}) => {
    return (
        <Modal
            visible={modalVisible}
            animationType="slide"
            transparent
            onRequestClose={() => setModalVisible(false)}
        >
            <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>Add a New Note</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your note here"
                        value={newNote}
                        onChangeText={setNewNote} />
                    <View style={styles.modalButtons}>
                        <TouchableOpacity
                            style={styles.cancelButton}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={styles.cancelButtonText}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.saveButton}
                            onPress={addNote}
                        >
                            <Text style={styles.saveButtonText}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        width: '80%',
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    input: {
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        fontSize: 16,
        borderRadius: 8,
        marginBottom: 20,
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cancelButton: {
        backgroundColor: '#ccc',
        padding: 10,
        borderRadius: 5,
        flex: 1,
        alignItems: 'center',
        marginRight: 10,
    },
    cancelButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    saveButton: {
        backgroundColor: '#007bff',
        padding: 10,
        flex: 1,
        alignItems: 'center',
        borderRadius: 5,
    },
    saveButtonText: {
        color: '#fff',
        fontSize: 16,
    }
});

export default AddNoteModal;