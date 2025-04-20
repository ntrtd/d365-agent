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
import { VendorsV3 } from './VendorsV3';

/**
 * Request builder class for operations supported on the {@link VendorsV3} entity.
 */
export class VendorsV3RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendorsV3<T>, T> {
  /**
   * Returns a request builder for querying all `VendorsV3` entities.
   * @returns A request builder for creating requests to retrieve all `VendorsV3` entities.
   */
  getAll(): GetAllRequestBuilder<VendorsV3<T>, T> {
    return new GetAllRequestBuilder<VendorsV3<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `VendorsV3` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendorsV3`.
   */
  create(entity: VendorsV3<T>): CreateRequestBuilder<VendorsV3<T>, T> {
    return new CreateRequestBuilder<VendorsV3<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `VendorsV3` entity based on its keys.
   * @param dataAreaId Key property. See {@link VendorsV3.dataAreaId}.
   * @param vendorAccountNumber Key property. See {@link VendorsV3.vendorAccountNumber}.
   * @returns A request builder for creating requests to retrieve one `VendorsV3` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    vendorAccountNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<VendorsV3<T>, T> {
    return new GetByKeyRequestBuilder<VendorsV3<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      VendorAccountNumber: vendorAccountNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `VendorsV3`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendorsV3`.
   */
  update(entity: VendorsV3<T>): UpdateRequestBuilder<VendorsV3<T>, T> {
    return new UpdateRequestBuilder<VendorsV3<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `VendorsV3`.
   * @param dataAreaId Key property. See {@link VendorsV3.dataAreaId}.
   * @param vendorAccountNumber Key property. See {@link VendorsV3.vendorAccountNumber}.
   * @returns A request builder for creating requests that delete an entity of type `VendorsV3`.
   */
  delete(
    dataAreaId: string,
    vendorAccountNumber: string
  ): DeleteRequestBuilder<VendorsV3<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendorsV3`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendorsV3` by taking the entity as a parameter.
   */
  delete(entity: VendorsV3<T>): DeleteRequestBuilder<VendorsV3<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    vendorAccountNumber?: string
  ): DeleteRequestBuilder<VendorsV3<T>, T> {
    return new DeleteRequestBuilder<VendorsV3<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VendorsV3
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            VendorAccountNumber: vendorAccountNumber!
          }
    );
  }
}
