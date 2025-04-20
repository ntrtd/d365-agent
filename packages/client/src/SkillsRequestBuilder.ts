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
import { Skills } from './Skills';

/**
 * Request builder class for operations supported on the {@link Skills} entity.
 */
export class SkillsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Skills<T>, T> {
  /**
   * Returns a request builder for querying all `Skills` entities.
   * @returns A request builder for creating requests to retrieve all `Skills` entities.
   */
  getAll(): GetAllRequestBuilder<Skills<T>, T> {
    return new GetAllRequestBuilder<Skills<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Skills` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Skills`.
   */
  create(entity: Skills<T>): CreateRequestBuilder<Skills<T>, T> {
    return new CreateRequestBuilder<Skills<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `Skills` entity based on its keys.
   * @param skill Key property. See {@link Skills.skill}.
   * @returns A request builder for creating requests to retrieve one `Skills` entity based on its keys.
   */
  getByKey(
    skill: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Skills<T>, T> {
    return new GetByKeyRequestBuilder<Skills<T>, T>(this.entityApi, {
      Skill: skill
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Skills`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Skills`.
   */
  update(entity: Skills<T>): UpdateRequestBuilder<Skills<T>, T> {
    return new UpdateRequestBuilder<Skills<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Skills`.
   * @param skill Key property. See {@link Skills.skill}.
   * @returns A request builder for creating requests that delete an entity of type `Skills`.
   */
  delete(skill: string): DeleteRequestBuilder<Skills<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Skills`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Skills` by taking the entity as a parameter.
   */
  delete(entity: Skills<T>): DeleteRequestBuilder<Skills<T>, T>;
  delete(skillOrEntity: any): DeleteRequestBuilder<Skills<T>, T> {
    return new DeleteRequestBuilder<Skills<T>, T>(
      this.entityApi,
      skillOrEntity instanceof Skills
        ? skillOrEntity
        : { Skill: skillOrEntity! }
    );
  }
}
