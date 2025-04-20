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
import { CustomerPaymentMethods } from './CustomerPaymentMethods';

/**
 * Request builder class for operations supported on the {@link CustomerPaymentMethods} entity.
 */
export class CustomerPaymentMethodsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustomerPaymentMethods<T>, T> {
  /**
   * Returns a request builder for querying all `CustomerPaymentMethods` entities.
   * @returns A request builder for creating requests to retrieve all `CustomerPaymentMethods` entities.
   */
  getAll(): GetAllRequestBuilder<CustomerPaymentMethods<T>, T> {
    return new GetAllRequestBuilder<CustomerPaymentMethods<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CustomerPaymentMethods` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustomerPaymentMethods`.
   */
  create(
    entity: CustomerPaymentMethods<T>
  ): CreateRequestBuilder<CustomerPaymentMethods<T>, T> {
    return new CreateRequestBuilder<CustomerPaymentMethods<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CustomerPaymentMethods` entity based on its keys.
   * @param dataAreaId Key property. See {@link CustomerPaymentMethods.dataAreaId}.
   * @param name Key property. See {@link CustomerPaymentMethods.name}.
   * @returns A request builder for creating requests to retrieve one `CustomerPaymentMethods` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CustomerPaymentMethods<T>, T> {
    return new GetByKeyRequestBuilder<CustomerPaymentMethods<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Name: name
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CustomerPaymentMethods`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomerPaymentMethods`.
   */
  update(
    entity: CustomerPaymentMethods<T>
  ): UpdateRequestBuilder<CustomerPaymentMethods<T>, T> {
    return new UpdateRequestBuilder<CustomerPaymentMethods<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CustomerPaymentMethods`.
   * @param dataAreaId Key property. See {@link CustomerPaymentMethods.dataAreaId}.
   * @param name Key property. See {@link CustomerPaymentMethods.name}.
   * @returns A request builder for creating requests that delete an entity of type `CustomerPaymentMethods`.
   */
  delete(
    dataAreaId: string,
    name: string
  ): DeleteRequestBuilder<CustomerPaymentMethods<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustomerPaymentMethods`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustomerPaymentMethods` by taking the entity as a parameter.
   */
  delete(
    entity: CustomerPaymentMethods<T>
  ): DeleteRequestBuilder<CustomerPaymentMethods<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    name?: string
  ): DeleteRequestBuilder<CustomerPaymentMethods<T>, T> {
    return new DeleteRequestBuilder<CustomerPaymentMethods<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CustomerPaymentMethods
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Name: name!
          }
    );
  }
}
