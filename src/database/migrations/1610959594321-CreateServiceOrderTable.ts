import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateServiceOrderTable1610959594321 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')

        await queryRunner.createTable( new Table({
            name: 'order_services',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()',
                },
                {
                    name: 'client_id',
                    type: 'uuid',
                },
                {
                    name: 'user_id',
                    type: 'uuid',
                },
                {
                    name: 'problem',
                    type: 'varchar',
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()',
                },
            ],

        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('order_services')
        await queryRunner.query('DROP EXTENSION "uuid-ossp"')
    }

}
