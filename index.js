class Queue {
    constructor() {
        this.items = {};
        this.front = 0;
        this.tail = 0;
        this.count = 0;
    }
    //Create Add Method
    enqueue(item) {
        this.items[this.tail] = item;
        this.tail++;
        this.count++;
    }
    //Craete Delete method
    dequeue() {
        if (this.areEmpty()) {
            return console.log('Sorry Queue is empty...!');
        }
        let removedEle = this.items[this.front]
        delete this.items[this.front]
        this.front++;
        this.count--;
        return removedEle
    }
    //Get Length
    getLingth() {
        return this.count;
    }
    //Create Check Empty method
    areEmpty() {
        return this.count == 0 ? true : false;
    }
    //Craete Display method
    printValues(){
        for(let item in this.items){
            console.log(this.items[item]);
        }
    }
}
const q = new Queue();
q.enqueue(5)
q.enqueue(10)
q.enqueue(15)
q.enqueue(20)
q.enqueue(25)

console.log(q);

q.dequeue()
q.dequeue()

console.log(q.getLingth());
console.log(q.printValues());
