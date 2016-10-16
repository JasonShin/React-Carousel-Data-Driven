import {observable} from 'mobx';

/**
 * Data driven Geometry store. Supports automatic state management
 */
class GeometryStore {
    @observable topic = '';
    @observable subtopics = [];


    fetchGeometries() {
        this.topic = 'Geometry';
        this.subtopics = [
            { index: 1, title: 'Triangles', completed: true },
            { index: 2, title: 'Angle Sum', completed: true },
            { index: 3, title: 'Similar Triangles', completed: true },
            { index: 4, title: 'Congruence', completed: false },
            { index: 5, title: 'Enlargements', completed: false },
            { index: 6, title: 'Parallel Lines', completed: false },
            { index: 7, title: 'Pythagoras Theorem', completed: false },
            { index: 8, title: 'Revision', completed: false },
            { index: 9, title: 'Revision', completed: false },
            { index: 10, title: 'Revision', completed: false }
        ];
    }

    addNew(subtopic) {
        if(subtopic.title === '' || subtopic.title === undefined) {
            //Failed to add new subtopic
            return false;
        }
        subtopic['index'] = this.subtopics.length + 1;
        this.subtopics.push(subtopic);
        //Successfully added new subtopic
        return true;
    }

}

export default new GeometryStore;