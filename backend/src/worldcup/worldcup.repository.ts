import { WorldCup } from 'src/entities/worldcup.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(WorldCup)
export class WorldCupRepository extends Repository<WorldCup> {}
