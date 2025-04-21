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
import { CustomerPaymentFees } from './CustomerPaymentFees';

/**
 * Request builder class for operations supported on the {@link CustomerPaymentFees} entity.
 */
export class CustomerPaymentFeesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustomerPaymentFees<T>, T> {
  /**
   * Returns a request builder for querying all `CustomerPaymentFees` entities.
   * @returns A request builder for creating requests to retrieve all `CustomerPaymentFees` entities.
   */
  getAll(): GetAllRequestBuilder<CustomerPaymentFees<T>, T> {
    return new GetAllRequestBuilder<CustomerPaymentFees<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CustomerPaymentFees` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustomerPaymentFees`.
   */
  create(
    entity: CustomerPaymentFees<T>
  ): CreateRequestBuilder<CustomerPaymentFees<T>, T> {
    return new CreateRequestBuilder<CustomerPaymentFees<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CustomerPaymentFees` entity based on its keys.
   * @param dataAreaId Key property. See {@link CustomerPaymentFees.dataAreaId}.
   * @param name Key property. See {@link CustomerPaymentFees.name}.
   * @returns A request builder for creating requests to retrieve one `CustomerPaymentFees` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CustomerPaymentFees<T>, T> {
    return new GetByKeyRequestBuilder<CustomerPaymentFees<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Name: name
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CustomerPaymentFees`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomerPaymentFees`.
   */
  update(
    entity: CustomerPaymentFees<T>
  ): UpdateRequestBuilder<CustomerPaymentFees<T>, T> {
    return new UpdateRequestBuilder<CustomerPaymentFees<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CustomerPaymentFees`.
   * @param dataAreaId Key property. See {@link CustomerPaymentFees.dataAreaId}.
   * @param name Key property. See {@link CustomerPaymentFees.name}.
   * @returns A request builder for creating requests that delete an entity of type `CustomerPaymentFees`.
   */
  delete(
    dataAreaId: string,
    name: string
  ): DeleteRequestBuilder<CustomerPaymentFees<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustomerPaymentFees`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustomerPaymentFees` by taking the entity as a parameter.
   */
  delete(
    entity: CustomerPaymentFees<T>
  ): DeleteRequestBuilder<CustomerPaymentFees<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    name?: string
  ): DeleteRequestBuilder<CustomerPaymentFees<T>, T> {
    return new DeleteRequestBuilder<CustomerPaymentFees<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CustomerPaymentFees
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Name: name!
          }
    );
  }
}
