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
import { Vendors } from './Vendors';

/**
 * Request builder class for operations supported on the {@link Vendors} entity.
 */
export class VendorsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Vendors<T>, T> {
  /**
   * Returns a request builder for querying all `Vendors` entities.
   * @returns A request builder for creating requests to retrieve all `Vendors` entities.
   */
  getAll(): GetAllRequestBuilder<Vendors<T>, T> {
    return new GetAllRequestBuilder<Vendors<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Vendors` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Vendors`.
   */
  create(entity: Vendors<T>): CreateRequestBuilder<Vendors<T>, T> {
    return new CreateRequestBuilder<Vendors<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `Vendors` entity based on its keys.
   * @param dataAreaId Key property. See {@link Vendors.dataAreaId}.
   * @param vendorAccountNumber Key property. See {@link Vendors.vendorAccountNumber}.
   * @returns A request builder for creating requests to retrieve one `Vendors` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    vendorAccountNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Vendors<T>, T> {
    return new GetByKeyRequestBuilder<Vendors<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      VendorAccountNumber: vendorAccountNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Vendors`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Vendors`.
   */
  update(entity: Vendors<T>): UpdateRequestBuilder<Vendors<T>, T> {
    return new UpdateRequestBuilder<Vendors<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Vendors`.
   * @param dataAreaId Key property. See {@link Vendors.dataAreaId}.
   * @param vendorAccountNumber Key property. See {@link Vendors.vendorAccountNumber}.
   * @returns A request builder for creating requests that delete an entity of type `Vendors`.
   */
  delete(
    dataAreaId: string,
    vendorAccountNumber: string
  ): DeleteRequestBuilder<Vendors<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Vendors`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Vendors` by taking the entity as a parameter.
   */
  delete(entity: Vendors<T>): DeleteRequestBuilder<Vendors<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    vendorAccountNumber?: string
  ): DeleteRequestBuilder<Vendors<T>, T> {
    return new DeleteRequestBuilder<Vendors<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof Vendors
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            VendorAccountNumber: vendorAccountNumber!
          }
    );
  }
}
