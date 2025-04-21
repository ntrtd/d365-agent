/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
import { DualWriteSkills } from './DualWriteSkills';

/**
 * Request builder class for operations supported on the {@link DualWriteSkills} entity.
 */
export class DualWriteSkillsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DualWriteSkills<T>, T> {
  /**
   * Returns a request builder for querying all `DualWriteSkills` entities.
   * @returns A request builder for creating requests to retrieve all `DualWriteSkills` entities.
   */
  getAll(): GetAllRequestBuilder<DualWriteSkills<T>, T> {
    return new GetAllRequestBuilder<DualWriteSkills<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `DualWriteSkills` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DualWriteSkills`.
   */
  create(
    entity: DualWriteSkills<T>
  ): CreateRequestBuilder<DualWriteSkills<T>, T> {
    return new CreateRequestBuilder<DualWriteSkills<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DualWriteSkills` entity based on its keys.
   * @param skill Key property. See {@link DualWriteSkills.skill}.
   * @param characteristicType Key property. See {@link DualWriteSkills.characteristicType}.
   * @returns A request builder for creating requests to retrieve one `DualWriteSkills` entity based on its keys.
   */
  getByKey(
    skill: DeserializedType<T, 'Edm.String'>,
    characteristicType: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DualWriteSkills<T>, T> {
    return new GetByKeyRequestBuilder<DualWriteSkills<T>, T>(this.entityApi, {
      Skill: skill,
      CharacteristicType: characteristicType
    });
  }

  /**
   * Returns a request builder for updating an entity of type `DualWriteSkills`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DualWriteSkills`.
   */
  update(
    entity: DualWriteSkills<T>
  ): UpdateRequestBuilder<DualWriteSkills<T>, T> {
    return new UpdateRequestBuilder<DualWriteSkills<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DualWriteSkills`.
   * @param skill Key property. See {@link DualWriteSkills.skill}.
   * @param characteristicType Key property. See {@link DualWriteSkills.characteristicType}.
   * @returns A request builder for creating requests that delete an entity of type `DualWriteSkills`.
   */
  delete(
    skill: string,
    characteristicType: string
  ): DeleteRequestBuilder<DualWriteSkills<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DualWriteSkills`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DualWriteSkills` by taking the entity as a parameter.
   */
  delete(
    entity: DualWriteSkills<T>
  ): DeleteRequestBuilder<DualWriteSkills<T>, T>;
  delete(
    skillOrEntity: any,
    characteristicType?: string
  ): DeleteRequestBuilder<DualWriteSkills<T>, T> {
    return new DeleteRequestBuilder<DualWriteSkills<T>, T>(
      this.entityApi,
      skillOrEntity instanceof DualWriteSkills
        ? skillOrEntity
        : {
            Skill: skillOrEntity!,
            CharacteristicType: characteristicType!
          }
    );
  }
}
