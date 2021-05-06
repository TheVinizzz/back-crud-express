import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn} from 'typeorm'

@Entity('order_services')
class OrderServices {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    client_id: string;

    @Column()
    user_id: string;

    @Column()
    problem: string

    @CreateDateColumn()
    created_at: Date;
}

export default OrderServices