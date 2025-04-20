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
import { ProductionProductLotAssociations } from './ProductionProductLotAssociations';

/**
 * Request builder class for operations supported on the {@link ProductionProductLotAssociations} entity.
 */
export class ProductionProductLotAssociationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductionProductLotAssociations<T>, T> {
  /**
   * Returns a request builder for querying all `ProductionProductLotAssociations` entities.
   * @returns A request builder for creating requests to retrieve all `ProductionProductLotAssociations` entities.
   */
  getAll(): GetAllRequestBuilder<ProductionProductLotAssociations<T>, T> {
    return new GetAllRequestBuilder<ProductionProductLotAssociations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProductionProductLotAssociations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductionProductLotAssociations`.
   */
  create(
    entity: ProductionProductLotAssociations<T>
  ): CreateRequestBuilder<ProductionProductLotAssociations<T>, T> {
    return new CreateRequestBuilder<ProductionProductLotAssociations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductionProductLotAssociations` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProductionProductLotAssociations.dataAreaId}.
   * @param productionOrderNumber Key property. See {@link ProductionProductLotAssociations.productionOrderNumber}.
   * @param inventoryLotId Key property. See {@link ProductionProductLotAssociations.inventoryLotId}.
   * @param itemNumber Key property. See {@link ProductionProductLotAssociations.itemNumber}.
   * @param groupMatchId Key property. See {@link ProductionProductLotAssociations.groupMatchId}.
   * @param sequenceId Key property. See {@link ProductionProductLotAssociations.sequenceId}.
   * @returns A request builder for creating requests to retrieve one `ProductionProductLotAssociations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    productionOrderNumber: DeserializedType<T, 'Edm.String'>,
    inventoryLotId: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>,
    groupMatchId: DeserializedType<T, 'Edm.String'>,
    sequenceId: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<ProductionProductLotAssociations<T>, T> {
    return new GetByKeyRequestBuilder<ProductionProductLotAssociations<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ProductionOrderNumber: productionOrderNumber,
        InventoryLotId: inventoryLotId,
        ItemNumber: itemNumber,
        GroupMatchId: groupMatchId,
        SequenceId: sequenceId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductionProductLotAssociations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductionProductLotAssociations`.
   */
  update(
    entity: ProductionProductLotAssociations<T>
  ): UpdateRequestBuilder<ProductionProductLotAssociations<T>, T> {
    return new UpdateRequestBuilder<ProductionProductLotAssociations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductionProductLotAssociations`.
   * @param dataAreaId Key property. See {@link ProductionProductLotAssociations.dataAreaId}.
   * @param productionOrderNumber Key property. See {@link ProductionProductLotAssociations.productionOrderNumber}.
   * @param inventoryLotId Key property. See {@link ProductionProductLotAssociations.inventoryLotId}.
   * @param itemNumber Key property. See {@link ProductionProductLotAssociations.itemNumber}.
   * @param groupMatchId Key property. See {@link ProductionProductLotAssociations.groupMatchId}.
   * @param sequenceId Key property. See {@link ProductionProductLotAssociations.sequenceId}.
   * @returns A request builder for creating requests that delete an entity of type `ProductionProductLotAssociations`.
   */
  delete(
    dataAreaId: string,
    productionOrderNumber: string,
    inventoryLotId: string,
    itemNumber: string,
    groupMatchId: string,
    sequenceId: number
  ): DeleteRequestBuilder<ProductionProductLotAssociations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductionProductLotAssociations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductionProductLotAssociations` by taking the entity as a parameter.
   */
  delete(
    entity: ProductionProductLotAssociations<T>
  ): DeleteRequestBuilder<ProductionProductLotAssociations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    productionOrderNumber?: string,
    inventoryLotId?: string,
    itemNumber?: string,
    groupMatchId?: string,
    sequenceId?: number
  ): DeleteRequestBuilder<ProductionProductLotAssociations<T>, T> {
    return new DeleteRequestBuilder<ProductionProductLotAssociations<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProductionProductLotAssociations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProductionOrderNumber: productionOrderNumber!,
            InventoryLotId: inventoryLotId!,
            ItemNumber: itemNumber!,
            GroupMatchId: groupMatchId!,
            SequenceId: sequenceId!
          }
    );
  }
}
