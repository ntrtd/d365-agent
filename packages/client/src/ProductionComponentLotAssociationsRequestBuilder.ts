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
import { ProductionComponentLotAssociations } from './ProductionComponentLotAssociations';

/**
 * Request builder class for operations supported on the {@link ProductionComponentLotAssociations} entity.
 */
export class ProductionComponentLotAssociationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductionComponentLotAssociations<T>, T> {
  /**
   * Returns a request builder for querying all `ProductionComponentLotAssociations` entities.
   * @returns A request builder for creating requests to retrieve all `ProductionComponentLotAssociations` entities.
   */
  getAll(): GetAllRequestBuilder<ProductionComponentLotAssociations<T>, T> {
    return new GetAllRequestBuilder<ProductionComponentLotAssociations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProductionComponentLotAssociations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductionComponentLotAssociations`.
   */
  create(
    entity: ProductionComponentLotAssociations<T>
  ): CreateRequestBuilder<ProductionComponentLotAssociations<T>, T> {
    return new CreateRequestBuilder<ProductionComponentLotAssociations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductionComponentLotAssociations` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProductionComponentLotAssociations.dataAreaId}.
   * @param productionOrderNumber Key property. See {@link ProductionComponentLotAssociations.productionOrderNumber}.
   * @param inventoryLotId Key property. See {@link ProductionComponentLotAssociations.inventoryLotId}.
   * @param itemNumber Key property. See {@link ProductionComponentLotAssociations.itemNumber}.
   * @param groupMatchId Key property. See {@link ProductionComponentLotAssociations.groupMatchId}.
   * @param sequenceId Key property. See {@link ProductionComponentLotAssociations.sequenceId}.
   * @returns A request builder for creating requests to retrieve one `ProductionComponentLotAssociations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    productionOrderNumber: DeserializedType<T, 'Edm.String'>,
    inventoryLotId: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>,
    groupMatchId: DeserializedType<T, 'Edm.String'>,
    sequenceId: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<ProductionComponentLotAssociations<T>, T> {
    return new GetByKeyRequestBuilder<ProductionComponentLotAssociations<T>, T>(
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
   * Returns a request builder for updating an entity of type `ProductionComponentLotAssociations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductionComponentLotAssociations`.
   */
  update(
    entity: ProductionComponentLotAssociations<T>
  ): UpdateRequestBuilder<ProductionComponentLotAssociations<T>, T> {
    return new UpdateRequestBuilder<ProductionComponentLotAssociations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductionComponentLotAssociations`.
   * @param dataAreaId Key property. See {@link ProductionComponentLotAssociations.dataAreaId}.
   * @param productionOrderNumber Key property. See {@link ProductionComponentLotAssociations.productionOrderNumber}.
   * @param inventoryLotId Key property. See {@link ProductionComponentLotAssociations.inventoryLotId}.
   * @param itemNumber Key property. See {@link ProductionComponentLotAssociations.itemNumber}.
   * @param groupMatchId Key property. See {@link ProductionComponentLotAssociations.groupMatchId}.
   * @param sequenceId Key property. See {@link ProductionComponentLotAssociations.sequenceId}.
   * @returns A request builder for creating requests that delete an entity of type `ProductionComponentLotAssociations`.
   */
  delete(
    dataAreaId: string,
    productionOrderNumber: string,
    inventoryLotId: string,
    itemNumber: string,
    groupMatchId: string,
    sequenceId: number
  ): DeleteRequestBuilder<ProductionComponentLotAssociations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductionComponentLotAssociations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductionComponentLotAssociations` by taking the entity as a parameter.
   */
  delete(
    entity: ProductionComponentLotAssociations<T>
  ): DeleteRequestBuilder<ProductionComponentLotAssociations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    productionOrderNumber?: string,
    inventoryLotId?: string,
    itemNumber?: string,
    groupMatchId?: string,
    sequenceId?: number
  ): DeleteRequestBuilder<ProductionComponentLotAssociations<T>, T> {
    return new DeleteRequestBuilder<ProductionComponentLotAssociations<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProductionComponentLotAssociations
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
