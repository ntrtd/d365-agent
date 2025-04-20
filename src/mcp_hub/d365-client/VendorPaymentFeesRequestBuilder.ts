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
import { VendorPaymentFees } from './VendorPaymentFees';

/**
 * Request builder class for operations supported on the {@link VendorPaymentFees} entity.
 */
export class VendorPaymentFeesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendorPaymentFees<T>, T> {
  /**
   * Returns a request builder for querying all `VendorPaymentFees` entities.
   * @returns A request builder for creating requests to retrieve all `VendorPaymentFees` entities.
   */
  getAll(): GetAllRequestBuilder<VendorPaymentFees<T>, T> {
    return new GetAllRequestBuilder<VendorPaymentFees<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `VendorPaymentFees` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendorPaymentFees`.
   */
  create(
    entity: VendorPaymentFees<T>
  ): CreateRequestBuilder<VendorPaymentFees<T>, T> {
    return new CreateRequestBuilder<VendorPaymentFees<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VendorPaymentFees` entity based on its keys.
   * @param dataAreaId Key property. See {@link VendorPaymentFees.dataAreaId}.
   * @param name Key property. See {@link VendorPaymentFees.name}.
   * @returns A request builder for creating requests to retrieve one `VendorPaymentFees` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<VendorPaymentFees<T>, T> {
    return new GetByKeyRequestBuilder<VendorPaymentFees<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      Name: name
    });
  }

  /**
   * Returns a request builder for updating an entity of type `VendorPaymentFees`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendorPaymentFees`.
   */
  update(
    entity: VendorPaymentFees<T>
  ): UpdateRequestBuilder<VendorPaymentFees<T>, T> {
    return new UpdateRequestBuilder<VendorPaymentFees<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VendorPaymentFees`.
   * @param dataAreaId Key property. See {@link VendorPaymentFees.dataAreaId}.
   * @param name Key property. See {@link VendorPaymentFees.name}.
   * @returns A request builder for creating requests that delete an entity of type `VendorPaymentFees`.
   */
  delete(
    dataAreaId: string,
    name: string
  ): DeleteRequestBuilder<VendorPaymentFees<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendorPaymentFees`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendorPaymentFees` by taking the entity as a parameter.
   */
  delete(
    entity: VendorPaymentFees<T>
  ): DeleteRequestBuilder<VendorPaymentFees<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    name?: string
  ): DeleteRequestBuilder<VendorPaymentFees<T>, T> {
    return new DeleteRequestBuilder<VendorPaymentFees<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VendorPaymentFees
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Name: name!
          }
    );
  }
}
