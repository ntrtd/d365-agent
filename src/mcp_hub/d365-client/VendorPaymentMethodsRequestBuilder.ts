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
import { VendorPaymentMethods } from './VendorPaymentMethods';

/**
 * Request builder class for operations supported on the {@link VendorPaymentMethods} entity.
 */
export class VendorPaymentMethodsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendorPaymentMethods<T>, T> {
  /**
   * Returns a request builder for querying all `VendorPaymentMethods` entities.
   * @returns A request builder for creating requests to retrieve all `VendorPaymentMethods` entities.
   */
  getAll(): GetAllRequestBuilder<VendorPaymentMethods<T>, T> {
    return new GetAllRequestBuilder<VendorPaymentMethods<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `VendorPaymentMethods` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendorPaymentMethods`.
   */
  create(
    entity: VendorPaymentMethods<T>
  ): CreateRequestBuilder<VendorPaymentMethods<T>, T> {
    return new CreateRequestBuilder<VendorPaymentMethods<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VendorPaymentMethods` entity based on its keys.
   * @param dataAreaId Key property. See {@link VendorPaymentMethods.dataAreaId}.
   * @param name Key property. See {@link VendorPaymentMethods.name}.
   * @returns A request builder for creating requests to retrieve one `VendorPaymentMethods` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<VendorPaymentMethods<T>, T> {
    return new GetByKeyRequestBuilder<VendorPaymentMethods<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Name: name
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `VendorPaymentMethods`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendorPaymentMethods`.
   */
  update(
    entity: VendorPaymentMethods<T>
  ): UpdateRequestBuilder<VendorPaymentMethods<T>, T> {
    return new UpdateRequestBuilder<VendorPaymentMethods<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VendorPaymentMethods`.
   * @param dataAreaId Key property. See {@link VendorPaymentMethods.dataAreaId}.
   * @param name Key property. See {@link VendorPaymentMethods.name}.
   * @returns A request builder for creating requests that delete an entity of type `VendorPaymentMethods`.
   */
  delete(
    dataAreaId: string,
    name: string
  ): DeleteRequestBuilder<VendorPaymentMethods<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendorPaymentMethods`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendorPaymentMethods` by taking the entity as a parameter.
   */
  delete(
    entity: VendorPaymentMethods<T>
  ): DeleteRequestBuilder<VendorPaymentMethods<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    name?: string
  ): DeleteRequestBuilder<VendorPaymentMethods<T>, T> {
    return new DeleteRequestBuilder<VendorPaymentMethods<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VendorPaymentMethods
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Name: name!
          }
    );
  }
}
