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
import { Responsibilities } from './Responsibilities';

/**
 * Request builder class for operations supported on the {@link Responsibilities} entity.
 */
export class ResponsibilitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Responsibilities<T>, T> {
  /**
   * Returns a request builder for querying all `Responsibilities` entities.
   * @returns A request builder for creating requests to retrieve all `Responsibilities` entities.
   */
  getAll(): GetAllRequestBuilder<Responsibilities<T>, T> {
    return new GetAllRequestBuilder<Responsibilities<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Responsibilities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Responsibilities`.
   */
  create(
    entity: Responsibilities<T>
  ): CreateRequestBuilder<Responsibilities<T>, T> {
    return new CreateRequestBuilder<Responsibilities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `Responsibilities` entity based on its keys.
   * @param responsibilityId Key property. See {@link Responsibilities.responsibilityId}.
   * @returns A request builder for creating requests to retrieve one `Responsibilities` entity based on its keys.
   */
  getByKey(
    responsibilityId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Responsibilities<T>, T> {
    return new GetByKeyRequestBuilder<Responsibilities<T>, T>(this.entityApi, {
      ResponsibilityId: responsibilityId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Responsibilities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Responsibilities`.
   */
  update(
    entity: Responsibilities<T>
  ): UpdateRequestBuilder<Responsibilities<T>, T> {
    return new UpdateRequestBuilder<Responsibilities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `Responsibilities`.
   * @param responsibilityId Key property. See {@link Responsibilities.responsibilityId}.
   * @returns A request builder for creating requests that delete an entity of type `Responsibilities`.
   */
  delete(
    responsibilityId: string
  ): DeleteRequestBuilder<Responsibilities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Responsibilities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Responsibilities` by taking the entity as a parameter.
   */
  delete(
    entity: Responsibilities<T>
  ): DeleteRequestBuilder<Responsibilities<T>, T>;
  delete(
    responsibilityIdOrEntity: any
  ): DeleteRequestBuilder<Responsibilities<T>, T> {
    return new DeleteRequestBuilder<Responsibilities<T>, T>(
      this.entityApi,
      responsibilityIdOrEntity instanceof Responsibilities
        ? responsibilityIdOrEntity
        : { ResponsibilityId: responsibilityIdOrEntity! }
    );
  }
}
