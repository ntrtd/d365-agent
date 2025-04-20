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
import { CustomerParameters } from './CustomerParameters';

/**
 * Request builder class for operations supported on the {@link CustomerParameters} entity.
 */
export class CustomerParametersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustomerParameters<T>, T> {
  /**
   * Returns a request builder for querying all `CustomerParameters` entities.
   * @returns A request builder for creating requests to retrieve all `CustomerParameters` entities.
   */
  getAll(): GetAllRequestBuilder<CustomerParameters<T>, T> {
    return new GetAllRequestBuilder<CustomerParameters<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CustomerParameters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustomerParameters`.
   */
  create(
    entity: CustomerParameters<T>
  ): CreateRequestBuilder<CustomerParameters<T>, T> {
    return new CreateRequestBuilder<CustomerParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CustomerParameters` entity based on its keys.
   * @param dataAreaId Key property. See {@link CustomerParameters.dataAreaId}.
   * @returns A request builder for creating requests to retrieve one `CustomerParameters` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CustomerParameters<T>, T> {
    return new GetByKeyRequestBuilder<CustomerParameters<T>, T>(
      this.entityApi,
      { dataAreaId: dataAreaId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CustomerParameters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomerParameters`.
   */
  update(
    entity: CustomerParameters<T>
  ): UpdateRequestBuilder<CustomerParameters<T>, T> {
    return new UpdateRequestBuilder<CustomerParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CustomerParameters`.
   * @param dataAreaId Key property. See {@link CustomerParameters.dataAreaId}.
   * @returns A request builder for creating requests that delete an entity of type `CustomerParameters`.
   */
  delete(dataAreaId: string): DeleteRequestBuilder<CustomerParameters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustomerParameters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustomerParameters` by taking the entity as a parameter.
   */
  delete(
    entity: CustomerParameters<T>
  ): DeleteRequestBuilder<CustomerParameters<T>, T>;
  delete(
    dataAreaIdOrEntity: any
  ): DeleteRequestBuilder<CustomerParameters<T>, T> {
    return new DeleteRequestBuilder<CustomerParameters<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CustomerParameters
        ? dataAreaIdOrEntity
        : { dataAreaId: dataAreaIdOrEntity! }
    );
  }
}
