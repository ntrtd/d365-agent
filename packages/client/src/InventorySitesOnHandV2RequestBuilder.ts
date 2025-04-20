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
import { InventorySitesOnHandV2 } from './InventorySitesOnHandV2';

/**
 * Request builder class for operations supported on the {@link InventorySitesOnHandV2} entity.
 */
export class InventorySitesOnHandV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InventorySitesOnHandV2<T>, T> {
  /**
   * Returns a request builder for querying all `InventorySitesOnHandV2` entities.
   * @returns A request builder for creating requests to retrieve all `InventorySitesOnHandV2` entities.
   */
  getAll(): GetAllRequestBuilder<InventorySitesOnHandV2<T>, T> {
    return new GetAllRequestBuilder<InventorySitesOnHandV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `InventorySitesOnHandV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventorySitesOnHandV2`.
   */
  create(
    entity: InventorySitesOnHandV2<T>
  ): CreateRequestBuilder<InventorySitesOnHandV2<T>, T> {
    return new CreateRequestBuilder<InventorySitesOnHandV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InventorySitesOnHandV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link InventorySitesOnHandV2.dataAreaId}.
   * @param itemNumber Key property. See {@link InventorySitesOnHandV2.itemNumber}.
   * @param productColorId Key property. See {@link InventorySitesOnHandV2.productColorId}.
   * @param productConfigurationId Key property. See {@link InventorySitesOnHandV2.productConfigurationId}.
   * @param productSizeId Key property. See {@link InventorySitesOnHandV2.productSizeId}.
   * @param productStyleId Key property. See {@link InventorySitesOnHandV2.productStyleId}.
   * @param productVersionId Key property. See {@link InventorySitesOnHandV2.productVersionId}.
   * @param inventorySiteId Key property. See {@link InventorySitesOnHandV2.inventorySiteId}.
   * @returns A request builder for creating requests to retrieve one `InventorySitesOnHandV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>,
    productColorId: DeserializedType<T, 'Edm.String'>,
    productConfigurationId: DeserializedType<T, 'Edm.String'>,
    productSizeId: DeserializedType<T, 'Edm.String'>,
    productStyleId: DeserializedType<T, 'Edm.String'>,
    productVersionId: DeserializedType<T, 'Edm.String'>,
    inventorySiteId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<InventorySitesOnHandV2<T>, T> {
    return new GetByKeyRequestBuilder<InventorySitesOnHandV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ItemNumber: itemNumber,
        ProductColorId: productColorId,
        ProductConfigurationId: productConfigurationId,
        ProductSizeId: productSizeId,
        ProductStyleId: productStyleId,
        ProductVersionId: productVersionId,
        InventorySiteId: inventorySiteId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InventorySitesOnHandV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventorySitesOnHandV2`.
   */
  update(
    entity: InventorySitesOnHandV2<T>
  ): UpdateRequestBuilder<InventorySitesOnHandV2<T>, T> {
    return new UpdateRequestBuilder<InventorySitesOnHandV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InventorySitesOnHandV2`.
   * @param dataAreaId Key property. See {@link InventorySitesOnHandV2.dataAreaId}.
   * @param itemNumber Key property. See {@link InventorySitesOnHandV2.itemNumber}.
   * @param productColorId Key property. See {@link InventorySitesOnHandV2.productColorId}.
   * @param productConfigurationId Key property. See {@link InventorySitesOnHandV2.productConfigurationId}.
   * @param productSizeId Key property. See {@link InventorySitesOnHandV2.productSizeId}.
   * @param productStyleId Key property. See {@link InventorySitesOnHandV2.productStyleId}.
   * @param productVersionId Key property. See {@link InventorySitesOnHandV2.productVersionId}.
   * @param inventorySiteId Key property. See {@link InventorySitesOnHandV2.inventorySiteId}.
   * @returns A request builder for creating requests that delete an entity of type `InventorySitesOnHandV2`.
   */
  delete(
    dataAreaId: string,
    itemNumber: string,
    productColorId: string,
    productConfigurationId: string,
    productSizeId: string,
    productStyleId: string,
    productVersionId: string,
    inventorySiteId: string
  ): DeleteRequestBuilder<InventorySitesOnHandV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InventorySitesOnHandV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventorySitesOnHandV2` by taking the entity as a parameter.
   */
  delete(
    entity: InventorySitesOnHandV2<T>
  ): DeleteRequestBuilder<InventorySitesOnHandV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    itemNumber?: string,
    productColorId?: string,
    productConfigurationId?: string,
    productSizeId?: string,
    productStyleId?: string,
    productVersionId?: string,
    inventorySiteId?: string
  ): DeleteRequestBuilder<InventorySitesOnHandV2<T>, T> {
    return new DeleteRequestBuilder<InventorySitesOnHandV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InventorySitesOnHandV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ItemNumber: itemNumber!,
            ProductColorId: productColorId!,
            ProductConfigurationId: productConfigurationId!,
            ProductSizeId: productSizeId!,
            ProductStyleId: productStyleId!,
            ProductVersionId: productVersionId!,
            InventorySiteId: inventorySiteId!
          }
    );
  }
}
