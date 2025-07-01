import { StyleSheet, Text, View } from 'react-native';

const NoteItem = ({note}) => {
    return (
        <View style={styles.noteItem}>
            <Text style={styles.noteText}>{note.text}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    noteItem: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-between',
        borderRadius: 5,
        backgroundColor: '#f5f5f5',
        marginVertical: 5
    },
    noteText: {
        fontSize: 18
    },
});

export default NoteItem;