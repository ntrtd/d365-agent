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
import { SkillTypes } from './SkillTypes';

/**
 * Request builder class for operations supported on the {@link SkillTypes} entity.
 */
export class SkillTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SkillTypes<T>, T> {
  /**
   * Returns a request builder for querying all `SkillTypes` entities.
   * @returns A request builder for creating requests to retrieve all `SkillTypes` entities.
   */
  getAll(): GetAllRequestBuilder<SkillTypes<T>, T> {
    return new GetAllRequestBuilder<SkillTypes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SkillTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SkillTypes`.
   */
  create(entity: SkillTypes<T>): CreateRequestBuilder<SkillTypes<T>, T> {
    return new CreateRequestBuilder<SkillTypes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `SkillTypes` entity based on its keys.
   * @param skillType Key property. See {@link SkillTypes.skillType}.
   * @returns A request builder for creating requests to retrieve one `SkillTypes` entity based on its keys.
   */
  getByKey(
    skillType: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SkillTypes<T>, T> {
    return new GetByKeyRequestBuilder<SkillTypes<T>, T>(this.entityApi, {
      SkillType: skillType
    });
  }

  /**
   * Returns a request builder for updating an entity of type `SkillTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SkillTypes`.
   */
  update(entity: SkillTypes<T>): UpdateRequestBuilder<SkillTypes<T>, T> {
    return new UpdateRequestBuilder<SkillTypes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `SkillTypes`.
   * @param skillType Key property. See {@link SkillTypes.skillType}.
   * @returns A request builder for creating requests that delete an entity of type `SkillTypes`.
   */
  delete(skillType: string): DeleteRequestBuilder<SkillTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SkillTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SkillTypes` by taking the entity as a parameter.
   */
  delete(entity: SkillTypes<T>): DeleteRequestBuilder<SkillTypes<T>, T>;
  delete(skillTypeOrEntity: any): DeleteRequestBuilder<SkillTypes<T>, T> {
    return new DeleteRequestBuilder<SkillTypes<T>, T>(
      this.entityApi,
      skillTypeOrEntity instanceof SkillTypes
        ? skillTypeOrEntity
        : { SkillType: skillTypeOrEntity! }
    );
  }
}
