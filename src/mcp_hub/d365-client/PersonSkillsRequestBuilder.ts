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
import { PersonSkills } from './PersonSkills';
import { HrmSkillLevelType } from './HrmSkillLevelType';

/**
 * Request builder class for operations supported on the {@link PersonSkills} entity.
 */
export class PersonSkillsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PersonSkills<T>, T> {
  /**
   * Returns a request builder for querying all `PersonSkills` entities.
   * @returns A request builder for creating requests to retrieve all `PersonSkills` entities.
   */
  getAll(): GetAllRequestBuilder<PersonSkills<T>, T> {
    return new GetAllRequestBuilder<PersonSkills<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PersonSkills` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PersonSkills`.
   */
  create(entity: PersonSkills<T>): CreateRequestBuilder<PersonSkills<T>, T> {
    return new CreateRequestBuilder<PersonSkills<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `PersonSkills` entity based on its keys.
   * @param partyNumber Key property. See {@link PersonSkills.partyNumber}.
   * @param levelType Key property. See {@link PersonSkills.levelType}.
   * @param skillId Key property. See {@link PersonSkills.skillId}.
   * @param levelDate Key property. See {@link PersonSkills.levelDate}.
   * @returns A request builder for creating requests to retrieve one `PersonSkills` entity based on its keys.
   */
  getByKey(
    partyNumber: DeserializedType<T, 'Edm.String'>,
    levelType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.HrmSkillLevelType'
    >,
    skillId: DeserializedType<T, 'Edm.String'>,
    levelDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<PersonSkills<T>, T> {
    return new GetByKeyRequestBuilder<PersonSkills<T>, T>(this.entityApi, {
      PartyNumber: partyNumber,
      LevelType: levelType,
      SkillId: skillId,
      LevelDate: levelDate
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PersonSkills`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PersonSkills`.
   */
  update(entity: PersonSkills<T>): UpdateRequestBuilder<PersonSkills<T>, T> {
    return new UpdateRequestBuilder<PersonSkills<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PersonSkills`.
   * @param partyNumber Key property. See {@link PersonSkills.partyNumber}.
   * @param levelType Key property. See {@link PersonSkills.levelType}.
   * @param skillId Key property. See {@link PersonSkills.skillId}.
   * @param levelDate Key property. See {@link PersonSkills.levelDate}.
   * @returns A request builder for creating requests that delete an entity of type `PersonSkills`.
   */
  delete(
    partyNumber: string,
    levelType: HrmSkillLevelType,
    skillId: string,
    levelDate: Moment
  ): DeleteRequestBuilder<PersonSkills<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PersonSkills`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PersonSkills` by taking the entity as a parameter.
   */
  delete(entity: PersonSkills<T>): DeleteRequestBuilder<PersonSkills<T>, T>;
  delete(
    partyNumberOrEntity: any,
    levelType?: HrmSkillLevelType,
    skillId?: string,
    levelDate?: Moment
  ): DeleteRequestBuilder<PersonSkills<T>, T> {
    return new DeleteRequestBuilder<PersonSkills<T>, T>(
      this.entityApi,
      partyNumberOrEntity instanceof PersonSkills
        ? partyNumberOrEntity
        : {
            PartyNumber: partyNumberOrEntity!,
            LevelType: levelType!,
            SkillId: skillId!,
            LevelDate: levelDate!
          }
    );
  }
}
