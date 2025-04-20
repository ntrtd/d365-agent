/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { RetailBuyersPushLineQuantities } from './RetailBuyersPushLineQuantities';

/**
 * Request builder class for operations supported on the {@link RetailBuyersPushLineQuantities} entity.
 */
export class RetailBuyersPushLineQuantitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailBuyersPushLineQuantities<T>, T> {
  /**
   * Returns a request builder for querying all `RetailBuyersPushLineQuantities` entities.
   * @returns A request builder for creating requests to retrieve all `RetailBuyersPushLineQuantities` entities.
   */
  getAll(): GetAllRequestBuilder<RetailBuyersPushLineQuantities<T>, T> {
    return new GetAllRequestBuilder<RetailBuyersPushLineQuantities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailBuyersPushLineQuantities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailBuyersPushLineQuantities`.
   */
  create(
    entity: RetailBuyersPushLineQuantities<T>
  ): CreateRequestBuilder<RetailBuyersPushLineQuantities<T>, T> {
    return new CreateRequestBuilder<RetailBuyersPushLineQuantities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailBuyersPushLineQuantities` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailBuyersPushLineQuantities.dataAreaId}.
   * @param buyersPushId Key property. See {@link RetailBuyersPushLineQuantities.buyersPushId}.
   * @param lineNumber Key property. See {@link RetailBuyersPushLineQuantities.lineNumber}.
   * @param warehouseId Key property. See {@link RetailBuyersPushLineQuantities.warehouseId}.
   * @param warehouseLegalEntity Key property. See {@link RetailBuyersPushLineQuantities.warehouseLegalEntity}.
   * @returns A request builder for creating requests to retrieve one `RetailBuyersPushLineQuantities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    buyersPushId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>,
    warehouseId: DeserializedType<T, 'Edm.String'>,
    warehouseLegalEntity: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailBuyersPushLineQuantities<T>, T> {
    return new GetByKeyRequestBuilder<RetailBuyersPushLineQuantities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        BuyersPushId: buyersPushId,
        LineNumber: lineNumber,
        WarehouseId: warehouseId,
        WarehouseLegalEntity: warehouseLegalEntity
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailBuyersPushLineQuantities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailBuyersPushLineQuantities`.
   */
  update(
    entity: RetailBuyersPushLineQuantities<T>
  ): UpdateRequestBuilder<RetailBuyersPushLineQuantities<T>, T> {
    return new UpdateRequestBuilder<RetailBuyersPushLineQuantities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailBuyersPushLineQuantities`.
   * @param dataAreaId Key property. See {@link RetailBuyersPushLineQuantities.dataAreaId}.
   * @param buyersPushId Key property. See {@link RetailBuyersPushLineQuantities.buyersPushId}.
   * @param lineNumber Key property. See {@link RetailBuyersPushLineQuantities.lineNumber}.
   * @param warehouseId Key property. See {@link RetailBuyersPushLineQuantities.warehouseId}.
   * @param warehouseLegalEntity Key property. See {@link RetailBuyersPushLineQuantities.warehouseLegalEntity}.
   * @returns A request builder for creating requests that delete an entity of type `RetailBuyersPushLineQuantities`.
   */
  delete(
    dataAreaId: string,
    buyersPushId: string,
    lineNumber: BigNumber,
    warehouseId: string,
    warehouseLegalEntity: string
  ): DeleteRequestBuilder<RetailBuyersPushLineQuantities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailBuyersPushLineQuantities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailBuyersPushLineQuantities` by taking the entity as a parameter.
   */
  delete(
    entity: RetailBuyersPushLineQuantities<T>
  ): DeleteRequestBuilder<RetailBuyersPushLineQuantities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    buyersPushId?: string,
    lineNumber?: BigNumber,
    warehouseId?: string,
    warehouseLegalEntity?: string
  ): DeleteRequestBuilder<RetailBuyersPushLineQuantities<T>, T> {
    return new DeleteRequestBuilder<RetailBuyersPushLineQuantities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailBuyersPushLineQuantities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            BuyersPushId: buyersPushId!,
            LineNumber: lineNumber!,
            WarehouseId: warehouseId!,
            WarehouseLegalEntity: warehouseLegalEntity!
          }
    );
  }
}
