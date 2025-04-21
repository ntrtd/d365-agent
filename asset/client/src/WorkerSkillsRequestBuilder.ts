/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import {
  CreateRequestBuilder,
  DeSerializers,
  DefaultDeSerializers,
  DeleteRequestBuilder,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder,
  UpdateRequestBuilder
} from '@sap-cloud-sdk/odata-v4';
import { WorkerSkills } from './WorkerSkills';
import { HrmSkillLevelType } from './HrmSkillLevelType';

/**
 * Request builder class for operations supported on the {@link WorkerSkills} entity.
 */
export class WorkerSkillsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WorkerSkills<T>, T> {
  /**
   * Returns a request builder for querying all `WorkerSkills` entities.
   * @returns A request builder for creating requests to retrieve all `WorkerSkills` entities.
   */
  getAll(): GetAllRequestBuilder<WorkerSkills<T>, T> {
    return new GetAllRequestBuilder<WorkerSkills<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `WorkerSkills` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WorkerSkills`.
   */
  create(entity: WorkerSkills<T>): CreateRequestBuilder<WorkerSkills<T>, T> {
    return new CreateRequestBuilder<WorkerSkills<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `WorkerSkills` entity based on its keys.
   * @param personnelNumber Key property. See {@link WorkerSkills.personnelNumber}.
   * @param levelType Key property. See {@link WorkerSkills.levelType}.
   * @param skillId Key property. See {@link WorkerSkills.skillId}.
   * @param levelDate Key property. See {@link WorkerSkills.levelDate}.
   * @returns A request builder for creating requests to retrieve one `WorkerSkills` entity based on its keys.
   */
  getByKey(
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    levelType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.HrmSkillLevelType'
    >,
    skillId: DeserializedType<T, 'Edm.String'>,
    levelDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<WorkerSkills<T>, T> {
    return new GetByKeyRequestBuilder<WorkerSkills<T>, T>(this.entityApi, {
      PersonnelNumber: personnelNumber,
      LevelType: levelType,
      SkillId: skillId,
      LevelDate: levelDate
    });
  }

  /**
   * Returns a request builder for updating an entity of type `WorkerSkills`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WorkerSkills`.
   */
  update(entity: WorkerSkills<T>): UpdateRequestBuilder<WorkerSkills<T>, T> {
    return new UpdateRequestBuilder<WorkerSkills<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `WorkerSkills`.
   * @param personnelNumber Key property. See {@link WorkerSkills.personnelNumber}.
   * @param levelType Key property. See {@link WorkerSkills.levelType}.
   * @param skillId Key property. See {@link WorkerSkills.skillId}.
   * @param levelDate Key property. See {@link WorkerSkills.levelDate}.
   * @returns A request builder for creating requests that delete an entity of type `WorkerSkills`.
   */
  delete(
    personnelNumber: string,
    levelType: HrmSkillLevelType,
    skillId: string,
    levelDate: Moment
  ): DeleteRequestBuilder<WorkerSkills<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WorkerSkills`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WorkerSkills` by taking the entity as a parameter.
   */
  delete(entity: WorkerSkills<T>): DeleteRequestBuilder<WorkerSkills<T>, T>;
  delete(
    personnelNumberOrEntity: any,
    levelType?: HrmSkillLevelType,
    skillId?: string,
    levelDate?: Moment
  ): DeleteRequestBuilder<WorkerSkills<T>, T> {
    return new DeleteRequestBuilder<WorkerSkills<T>, T>(
      this.entityApi,
      personnelNumberOrEntity instanceof WorkerSkills
        ? personnelNumberOrEntity
        : {
            PersonnelNumber: personnelNumberOrEntity!,
            LevelType: levelType!,
            SkillId: skillId!,
            LevelDate: levelDate!
          }
    );
  }
}
