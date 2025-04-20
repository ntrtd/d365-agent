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
import { VendorsV2 } from './VendorsV2';

/**
 * Request builder class for operations supported on the {@link VendorsV2} entity.
 */
export class VendorsV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendorsV2<T>, T> {
  /**
   * Returns a request builder for querying all `VendorsV2` entities.
   * @returns A request builder for creating requests to retrieve all `VendorsV2` entities.
   */
  getAll(): GetAllRequestBuilder<VendorsV2<T>, T> {
    return new GetAllRequestBuilder<VendorsV2<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `VendorsV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendorsV2`.
   */
  create(entity: VendorsV2<T>): CreateRequestBuilder<VendorsV2<T>, T> {
    return new CreateRequestBuilder<VendorsV2<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `VendorsV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link VendorsV2.dataAreaId}.
   * @param vendorAccountNumber Key property. See {@link VendorsV2.vendorAccountNumber}.
   * @returns A request builder for creating requests to retrieve one `VendorsV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    vendorAccountNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<VendorsV2<T>, T> {
    return new GetByKeyRequestBuilder<VendorsV2<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      VendorAccountNumber: vendorAccountNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `VendorsV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendorsV2`.
   */
  update(entity: VendorsV2<T>): UpdateRequestBuilder<VendorsV2<T>, T> {
    return new UpdateRequestBuilder<VendorsV2<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `VendorsV2`.
   * @param dataAreaId Key property. See {@link VendorsV2.dataAreaId}.
   * @param vendorAccountNumber Key property. See {@link VendorsV2.vendorAccountNumber}.
   * @returns A request builder for creating requests that delete an entity of type `VendorsV2`.
   */
  delete(
    dataAreaId: string,
    vendorAccountNumber: string
  ): DeleteRequestBuilder<VendorsV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendorsV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendorsV2` by taking the entity as a parameter.
   */
  delete(entity: VendorsV2<T>): DeleteRequestBuilder<VendorsV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    vendorAccountNumber?: string
  ): DeleteRequestBuilder<VendorsV2<T>, T> {
    return new DeleteRequestBuilder<VendorsV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VendorsV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            VendorAccountNumber: vendorAccountNumber!
          }
    );
  }
}
