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
import { InventorySitesOnHand } from './InventorySitesOnHand';

/**
 * Request builder class for operations supported on the {@link InventorySitesOnHand} entity.
 */
export class InventorySitesOnHandRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InventorySitesOnHand<T>, T> {
  /**
   * Returns a request builder for querying all `InventorySitesOnHand` entities.
   * @returns A request builder for creating requests to retrieve all `InventorySitesOnHand` entities.
   */
  getAll(): GetAllRequestBuilder<InventorySitesOnHand<T>, T> {
    return new GetAllRequestBuilder<InventorySitesOnHand<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `InventorySitesOnHand` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventorySitesOnHand`.
   */
  create(
    entity: InventorySitesOnHand<T>
  ): CreateRequestBuilder<InventorySitesOnHand<T>, T> {
    return new CreateRequestBuilder<InventorySitesOnHand<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InventorySitesOnHand` entity based on its keys.
   * @param dataAreaId Key property. See {@link InventorySitesOnHand.dataAreaId}.
   * @param itemNumber Key property. See {@link InventorySitesOnHand.itemNumber}.
   * @param productColorId Key property. See {@link InventorySitesOnHand.productColorId}.
   * @param productConfigurationId Key property. See {@link InventorySitesOnHand.productConfigurationId}.
   * @param productSizeId Key property. See {@link InventorySitesOnHand.productSizeId}.
   * @param productStyleId Key property. See {@link InventorySitesOnHand.productStyleId}.
   * @param inventorySiteId Key property. See {@link InventorySitesOnHand.inventorySiteId}.
   * @returns A request builder for creating requests to retrieve one `InventorySitesOnHand` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>,
    productColorId: DeserializedType<T, 'Edm.String'>,
    productConfigurationId: DeserializedType<T, 'Edm.String'>,
    productSizeId: DeserializedType<T, 'Edm.String'>,
    productStyleId: DeserializedType<T, 'Edm.String'>,
    inventorySiteId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<InventorySitesOnHand<T>, T> {
    return new GetByKeyRequestBuilder<InventorySitesOnHand<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ItemNumber: itemNumber,
        ProductColorId: productColorId,
        ProductConfigurationId: productConfigurationId,
        ProductSizeId: productSizeId,
        ProductStyleId: productStyleId,
        InventorySiteId: inventorySiteId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InventorySitesOnHand`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventorySitesOnHand`.
   */
  update(
    entity: InventorySitesOnHand<T>
  ): UpdateRequestBuilder<InventorySitesOnHand<T>, T> {
    return new UpdateRequestBuilder<InventorySitesOnHand<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InventorySitesOnHand`.
   * @param dataAreaId Key property. See {@link InventorySitesOnHand.dataAreaId}.
   * @param itemNumber Key property. See {@link InventorySitesOnHand.itemNumber}.
   * @param productColorId Key property. See {@link InventorySitesOnHand.productColorId}.
   * @param productConfigurationId Key property. See {@link InventorySitesOnHand.productConfigurationId}.
   * @param productSizeId Key property. See {@link InventorySitesOnHand.productSizeId}.
   * @param productStyleId Key property. See {@link InventorySitesOnHand.productStyleId}.
   * @param inventorySiteId Key property. See {@link InventorySitesOnHand.inventorySiteId}.
   * @returns A request builder for creating requests that delete an entity of type `InventorySitesOnHand`.
   */
  delete(
    dataAreaId: string,
    itemNumber: string,
    productColorId: string,
    productConfigurationId: string,
    productSizeId: string,
    productStyleId: string,
    inventorySiteId: string
  ): DeleteRequestBuilder<InventorySitesOnHand<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InventorySitesOnHand`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventorySitesOnHand` by taking the entity as a parameter.
   */
  delete(
    entity: InventorySitesOnHand<T>
  ): DeleteRequestBuilder<InventorySitesOnHand<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    itemNumber?: string,
    productColorId?: string,
    productConfigurationId?: string,
    productSizeId?: string,
    productStyleId?: string,
    inventorySiteId?: string
  ): DeleteRequestBuilder<InventorySitesOnHand<T>, T> {
    return new DeleteRequestBuilder<InventorySitesOnHand<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InventorySitesOnHand
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ItemNumber: itemNumber!,
            ProductColorId: productColorId!,
            ProductConfigurationId: productConfigurationId!,
            ProductSizeId: productSizeId!,
            ProductStyleId: productStyleId!,
            InventorySiteId: inventorySiteId!
          }
    );
  }
}
