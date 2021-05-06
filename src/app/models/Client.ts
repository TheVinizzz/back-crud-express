import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm'

@Entity('clients')
class Client {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string
}

export default Client