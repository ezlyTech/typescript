enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }

interface Resource<T> {
    uid: number;
    resourceType: ResourceType;
    data: T;
}

const docfive: Resource<object> = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: { title: 'name of the wind' }
}

const docSix: Resource<object> = {
    uid: 2,
    resourceType: ResourceType.PERSON,
    data: { name: 'yoshi' }
}