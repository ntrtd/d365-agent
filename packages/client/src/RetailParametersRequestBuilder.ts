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
import { RetailParameters } from './RetailParameters';

/**
 * Request builder class for operations supported on the {@link RetailParameters} entity.
 */
export class RetailParametersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailParameters<T>, T> {
  /**
   * Returns a request builder for querying all `RetailParameters` entities.
   * @returns A request builder for creating requests to retrieve all `RetailParameters` entities.
   */
  getAll(): GetAllRequestBuilder<RetailParameters<T>, T> {
    return new GetAllRequestBuilder<RetailParameters<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailParameters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailParameters`.
   */
  create(
    entity: RetailParameters<T>
  ): CreateRequestBuilder<RetailParameters<T>, T> {
    return new CreateRequestBuilder<RetailParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailParameters` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailParameters.dataAreaId}.
   * @returns A request builder for creating requests to retrieve one `RetailParameters` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailParameters<T>, T> {
    return new GetByKeyRequestBuilder<RetailParameters<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailParameters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailParameters`.
   */
  update(
    entity: RetailParameters<T>
  ): UpdateRequestBuilder<RetailParameters<T>, T> {
    return new UpdateRequestBuilder<RetailParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailParameters`.
   * @param dataAreaId Key property. See {@link RetailParameters.dataAreaId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailParameters`.
   */
  delete(dataAreaId: string): DeleteRequestBuilder<RetailParameters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailParameters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailParameters` by taking the entity as a parameter.
   */
  delete(
    entity: RetailParameters<T>
  ): DeleteRequestBuilder<RetailParameters<T>, T>;
  delete(
    dataAreaIdOrEntity: any
  ): DeleteRequestBuilder<RetailParameters<T>, T> {
    return new DeleteRequestBuilder<RetailParameters<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailParameters
        ? dataAreaIdOrEntity
        : { dataAreaId: dataAreaIdOrEntity! }
    );
  }
}
