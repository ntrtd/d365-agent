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
import { VendorsForAi } from './VendorsForAi';

/**
 * Request builder class for operations supported on the {@link VendorsForAi} entity.
 */
export class VendorsForAiRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendorsForAi<T>, T> {
  /**
   * Returns a request builder for querying all `VendorsForAi` entities.
   * @returns A request builder for creating requests to retrieve all `VendorsForAi` entities.
   */
  getAll(): GetAllRequestBuilder<VendorsForAi<T>, T> {
    return new GetAllRequestBuilder<VendorsForAi<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `VendorsForAi` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendorsForAi`.
   */
  create(entity: VendorsForAi<T>): CreateRequestBuilder<VendorsForAi<T>, T> {
    return new CreateRequestBuilder<VendorsForAi<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `VendorsForAi` entity based on its keys.
   * @param dataAreaId Key property. See {@link VendorsForAi.dataAreaId}.
   * @param vendorAccountNumber Key property. See {@link VendorsForAi.vendorAccountNumber}.
   * @returns A request builder for creating requests to retrieve one `VendorsForAi` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    vendorAccountNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<VendorsForAi<T>, T> {
    return new GetByKeyRequestBuilder<VendorsForAi<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      VendorAccountNumber: vendorAccountNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `VendorsForAi`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendorsForAi`.
   */
  update(entity: VendorsForAi<T>): UpdateRequestBuilder<VendorsForAi<T>, T> {
    return new UpdateRequestBuilder<VendorsForAi<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `VendorsForAi`.
   * @param dataAreaId Key property. See {@link VendorsForAi.dataAreaId}.
   * @param vendorAccountNumber Key property. See {@link VendorsForAi.vendorAccountNumber}.
   * @returns A request builder for creating requests that delete an entity of type `VendorsForAi`.
   */
  delete(
    dataAreaId: string,
    vendorAccountNumber: string
  ): DeleteRequestBuilder<VendorsForAi<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendorsForAi`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendorsForAi` by taking the entity as a parameter.
   */
  delete(entity: VendorsForAi<T>): DeleteRequestBuilder<VendorsForAi<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    vendorAccountNumber?: string
  ): DeleteRequestBuilder<VendorsForAi<T>, T> {
    return new DeleteRequestBuilder<VendorsForAi<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VendorsForAi
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            VendorAccountNumber: vendorAccountNumber!
          }
    );
  }
}
