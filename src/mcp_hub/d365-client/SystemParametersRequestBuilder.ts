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
import { SystemParameters } from './SystemParameters';

/**
 * Request builder class for operations supported on the {@link SystemParameters} entity.
 */
export class SystemParametersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SystemParameters<T>, T> {
  /**
   * Returns a request builder for querying all `SystemParameters` entities.
   * @returns A request builder for creating requests to retrieve all `SystemParameters` entities.
   */
  getAll(): GetAllRequestBuilder<SystemParameters<T>, T> {
    return new GetAllRequestBuilder<SystemParameters<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SystemParameters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SystemParameters`.
   */
  create(
    entity: SystemParameters<T>
  ): CreateRequestBuilder<SystemParameters<T>, T> {
    return new CreateRequestBuilder<SystemParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SystemParameters` entity based on its keys.
   * @param id Key property. See {@link SystemParameters.id}.
   * @returns A request builder for creating requests to retrieve one `SystemParameters` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<SystemParameters<T>, T> {
    return new GetByKeyRequestBuilder<SystemParameters<T>, T>(this.entityApi, {
      ID: id
    });
  }

  /**
   * Returns a request builder for updating an entity of type `SystemParameters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SystemParameters`.
   */
  update(
    entity: SystemParameters<T>
  ): UpdateRequestBuilder<SystemParameters<T>, T> {
    return new UpdateRequestBuilder<SystemParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SystemParameters`.
   * @param id Key property. See {@link SystemParameters.id}.
   * @returns A request builder for creating requests that delete an entity of type `SystemParameters`.
   */
  delete(id: number): DeleteRequestBuilder<SystemParameters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SystemParameters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SystemParameters` by taking the entity as a parameter.
   */
  delete(
    entity: SystemParameters<T>
  ): DeleteRequestBuilder<SystemParameters<T>, T>;
  delete(idOrEntity: any): DeleteRequestBuilder<SystemParameters<T>, T> {
    return new DeleteRequestBuilder<SystemParameters<T>, T>(
      this.entityApi,
      idOrEntity instanceof SystemParameters ? idOrEntity : { ID: idOrEntity! }
    );
  }
}
