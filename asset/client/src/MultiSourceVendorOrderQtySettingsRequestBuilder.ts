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
import { MultiSourceVendorOrderQtySettings } from './MultiSourceVendorOrderQtySettings';

/**
 * Request builder class for operations supported on the {@link MultiSourceVendorOrderQtySettings} entity.
 */
export class MultiSourceVendorOrderQtySettingsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MultiSourceVendorOrderQtySettings<T>, T> {
  /**
   * Returns a request builder for querying all `MultiSourceVendorOrderQtySettings` entities.
   * @returns A request builder for creating requests to retrieve all `MultiSourceVendorOrderQtySettings` entities.
   */
  getAll(): GetAllRequestBuilder<MultiSourceVendorOrderQtySettings<T>, T> {
    return new GetAllRequestBuilder<MultiSourceVendorOrderQtySettings<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `MultiSourceVendorOrderQtySettings` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MultiSourceVendorOrderQtySettings`.
   */
  create(
    entity: MultiSourceVendorOrderQtySettings<T>
  ): CreateRequestBuilder<MultiSourceVendorOrderQtySettings<T>, T> {
    return new CreateRequestBuilder<MultiSourceVendorOrderQtySettings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MultiSourceVendorOrderQtySettings` entity based on its keys.
   * @param dataAreaId Key property. See {@link MultiSourceVendorOrderQtySettings.dataAreaId}.
   * @param vendorAccountNumber Key property. See {@link MultiSourceVendorOrderQtySettings.vendorAccountNumber}.
   * @param itemNumber Key property. See {@link MultiSourceVendorOrderQtySettings.itemNumber}.
   * @returns A request builder for creating requests to retrieve one `MultiSourceVendorOrderQtySettings` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    vendorAccountNumber: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<MultiSourceVendorOrderQtySettings<T>, T> {
    return new GetByKeyRequestBuilder<MultiSourceVendorOrderQtySettings<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        VendorAccountNumber: vendorAccountNumber,
        ItemNumber: itemNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `MultiSourceVendorOrderQtySettings`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MultiSourceVendorOrderQtySettings`.
   */
  update(
    entity: MultiSourceVendorOrderQtySettings<T>
  ): UpdateRequestBuilder<MultiSourceVendorOrderQtySettings<T>, T> {
    return new UpdateRequestBuilder<MultiSourceVendorOrderQtySettings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MultiSourceVendorOrderQtySettings`.
   * @param dataAreaId Key property. See {@link MultiSourceVendorOrderQtySettings.dataAreaId}.
   * @param vendorAccountNumber Key property. See {@link MultiSourceVendorOrderQtySettings.vendorAccountNumber}.
   * @param itemNumber Key property. See {@link MultiSourceVendorOrderQtySettings.itemNumber}.
   * @returns A request builder for creating requests that delete an entity of type `MultiSourceVendorOrderQtySettings`.
   */
  delete(
    dataAreaId: string,
    vendorAccountNumber: string,
    itemNumber: string
  ): DeleteRequestBuilder<MultiSourceVendorOrderQtySettings<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MultiSourceVendorOrderQtySettings`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MultiSourceVendorOrderQtySettings` by taking the entity as a parameter.
   */
  delete(
    entity: MultiSourceVendorOrderQtySettings<T>
  ): DeleteRequestBuilder<MultiSourceVendorOrderQtySettings<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    vendorAccountNumber?: string,
    itemNumber?: string
  ): DeleteRequestBuilder<MultiSourceVendorOrderQtySettings<T>, T> {
    return new DeleteRequestBuilder<MultiSourceVendorOrderQtySettings<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof MultiSourceVendorOrderQtySettings
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            VendorAccountNumber: vendorAccountNumber!,
            ItemNumber: itemNumber!
          }
    );
  }
}
