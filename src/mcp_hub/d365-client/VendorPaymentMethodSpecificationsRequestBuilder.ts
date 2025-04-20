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
import { VendorPaymentMethodSpecifications } from './VendorPaymentMethodSpecifications';

/**
 * Request builder class for operations supported on the {@link VendorPaymentMethodSpecifications} entity.
 */
export class VendorPaymentMethodSpecificationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendorPaymentMethodSpecifications<T>, T> {
  /**
   * Returns a request builder for querying all `VendorPaymentMethodSpecifications` entities.
   * @returns A request builder for creating requests to retrieve all `VendorPaymentMethodSpecifications` entities.
   */
  getAll(): GetAllRequestBuilder<VendorPaymentMethodSpecifications<T>, T> {
    return new GetAllRequestBuilder<VendorPaymentMethodSpecifications<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `VendorPaymentMethodSpecifications` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendorPaymentMethodSpecifications`.
   */
  create(
    entity: VendorPaymentMethodSpecifications<T>
  ): CreateRequestBuilder<VendorPaymentMethodSpecifications<T>, T> {
    return new CreateRequestBuilder<VendorPaymentMethodSpecifications<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VendorPaymentMethodSpecifications` entity based on its keys.
   * @param dataAreaId Key property. See {@link VendorPaymentMethodSpecifications.dataAreaId}.
   * @param paymentMethodName Key property. See {@link VendorPaymentMethodSpecifications.paymentMethodName}.
   * @param name Key property. See {@link VendorPaymentMethodSpecifications.name}.
   * @returns A request builder for creating requests to retrieve one `VendorPaymentMethodSpecifications` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    paymentMethodName: DeserializedType<T, 'Edm.String'>,
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<VendorPaymentMethodSpecifications<T>, T> {
    return new GetByKeyRequestBuilder<VendorPaymentMethodSpecifications<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PaymentMethodName: paymentMethodName,
        Name: name
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `VendorPaymentMethodSpecifications`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendorPaymentMethodSpecifications`.
   */
  update(
    entity: VendorPaymentMethodSpecifications<T>
  ): UpdateRequestBuilder<VendorPaymentMethodSpecifications<T>, T> {
    return new UpdateRequestBuilder<VendorPaymentMethodSpecifications<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VendorPaymentMethodSpecifications`.
   * @param dataAreaId Key property. See {@link VendorPaymentMethodSpecifications.dataAreaId}.
   * @param paymentMethodName Key property. See {@link VendorPaymentMethodSpecifications.paymentMethodName}.
   * @param name Key property. See {@link VendorPaymentMethodSpecifications.name}.
   * @returns A request builder for creating requests that delete an entity of type `VendorPaymentMethodSpecifications`.
   */
  delete(
    dataAreaId: string,
    paymentMethodName: string,
    name: string
  ): DeleteRequestBuilder<VendorPaymentMethodSpecifications<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendorPaymentMethodSpecifications`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendorPaymentMethodSpecifications` by taking the entity as a parameter.
   */
  delete(
    entity: VendorPaymentMethodSpecifications<T>
  ): DeleteRequestBuilder<VendorPaymentMethodSpecifications<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    paymentMethodName?: string,
    name?: string
  ): DeleteRequestBuilder<VendorPaymentMethodSpecifications<T>, T> {
    return new DeleteRequestBuilder<VendorPaymentMethodSpecifications<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VendorPaymentMethodSpecifications
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PaymentMethodName: paymentMethodName!,
            Name: name!
          }
    );
  }
}
