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
import { CustomerPaymentMethodSpecifications } from './CustomerPaymentMethodSpecifications';

/**
 * Request builder class for operations supported on the {@link CustomerPaymentMethodSpecifications} entity.
 */
export class CustomerPaymentMethodSpecificationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustomerPaymentMethodSpecifications<T>, T> {
  /**
   * Returns a request builder for querying all `CustomerPaymentMethodSpecifications` entities.
   * @returns A request builder for creating requests to retrieve all `CustomerPaymentMethodSpecifications` entities.
   */
  getAll(): GetAllRequestBuilder<CustomerPaymentMethodSpecifications<T>, T> {
    return new GetAllRequestBuilder<CustomerPaymentMethodSpecifications<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CustomerPaymentMethodSpecifications` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustomerPaymentMethodSpecifications`.
   */
  create(
    entity: CustomerPaymentMethodSpecifications<T>
  ): CreateRequestBuilder<CustomerPaymentMethodSpecifications<T>, T> {
    return new CreateRequestBuilder<CustomerPaymentMethodSpecifications<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CustomerPaymentMethodSpecifications` entity based on its keys.
   * @param dataAreaId Key property. See {@link CustomerPaymentMethodSpecifications.dataAreaId}.
   * @param paymentMethodName Key property. See {@link CustomerPaymentMethodSpecifications.paymentMethodName}.
   * @param name Key property. See {@link CustomerPaymentMethodSpecifications.name}.
   * @returns A request builder for creating requests to retrieve one `CustomerPaymentMethodSpecifications` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    paymentMethodName: DeserializedType<T, 'Edm.String'>,
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CustomerPaymentMethodSpecifications<T>, T> {
    return new GetByKeyRequestBuilder<
      CustomerPaymentMethodSpecifications<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      PaymentMethodName: paymentMethodName,
      Name: name
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CustomerPaymentMethodSpecifications`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomerPaymentMethodSpecifications`.
   */
  update(
    entity: CustomerPaymentMethodSpecifications<T>
  ): UpdateRequestBuilder<CustomerPaymentMethodSpecifications<T>, T> {
    return new UpdateRequestBuilder<CustomerPaymentMethodSpecifications<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CustomerPaymentMethodSpecifications`.
   * @param dataAreaId Key property. See {@link CustomerPaymentMethodSpecifications.dataAreaId}.
   * @param paymentMethodName Key property. See {@link CustomerPaymentMethodSpecifications.paymentMethodName}.
   * @param name Key property. See {@link CustomerPaymentMethodSpecifications.name}.
   * @returns A request builder for creating requests that delete an entity of type `CustomerPaymentMethodSpecifications`.
   */
  delete(
    dataAreaId: string,
    paymentMethodName: string,
    name: string
  ): DeleteRequestBuilder<CustomerPaymentMethodSpecifications<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustomerPaymentMethodSpecifications`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustomerPaymentMethodSpecifications` by taking the entity as a parameter.
   */
  delete(
    entity: CustomerPaymentMethodSpecifications<T>
  ): DeleteRequestBuilder<CustomerPaymentMethodSpecifications<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    paymentMethodName?: string,
    name?: string
  ): DeleteRequestBuilder<CustomerPaymentMethodSpecifications<T>, T> {
    return new DeleteRequestBuilder<CustomerPaymentMethodSpecifications<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CustomerPaymentMethodSpecifications
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PaymentMethodName: paymentMethodName!,
            Name: name!
          }
    );
  }
}
