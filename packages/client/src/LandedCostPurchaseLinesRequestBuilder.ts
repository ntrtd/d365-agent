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
import { LandedCostPurchaseLines } from './LandedCostPurchaseLines';

/**
 * Request builder class for operations supported on the {@link LandedCostPurchaseLines} entity.
 */
export class LandedCostPurchaseLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LandedCostPurchaseLines<T>, T> {
  /**
   * Returns a request builder for querying all `LandedCostPurchaseLines` entities.
   * @returns A request builder for creating requests to retrieve all `LandedCostPurchaseLines` entities.
   */
  getAll(): GetAllRequestBuilder<LandedCostPurchaseLines<T>, T> {
    return new GetAllRequestBuilder<LandedCostPurchaseLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LandedCostPurchaseLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LandedCostPurchaseLines`.
   */
  create(
    entity: LandedCostPurchaseLines<T>
  ): CreateRequestBuilder<LandedCostPurchaseLines<T>, T> {
    return new CreateRequestBuilder<LandedCostPurchaseLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LandedCostPurchaseLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link LandedCostPurchaseLines.dataAreaId}.
   * @param shipDataArea Key property. See {@link LandedCostPurchaseLines.shipDataArea}.
   * @param purchaseLineNumber Key property. See {@link LandedCostPurchaseLines.purchaseLineNumber}.
   * @param purchaseOrderId Key property. See {@link LandedCostPurchaseLines.purchaseOrderId}.
   * @param shipId Key property. See {@link LandedCostPurchaseLines.shipId}.
   * @returns A request builder for creating requests to retrieve one `LandedCostPurchaseLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    shipDataArea: DeserializedType<T, 'Edm.String'>,
    purchaseLineNumber: DeserializedType<T, 'Edm.Int64'>,
    purchaseOrderId: DeserializedType<T, 'Edm.String'>,
    shipId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LandedCostPurchaseLines<T>, T> {
    return new GetByKeyRequestBuilder<LandedCostPurchaseLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ShipDataArea: shipDataArea,
        PurchaseLineNumber: purchaseLineNumber,
        PurchaseOrderId: purchaseOrderId,
        ShipId: shipId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LandedCostPurchaseLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LandedCostPurchaseLines`.
   */
  update(
    entity: LandedCostPurchaseLines<T>
  ): UpdateRequestBuilder<LandedCostPurchaseLines<T>, T> {
    return new UpdateRequestBuilder<LandedCostPurchaseLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LandedCostPurchaseLines`.
   * @param dataAreaId Key property. See {@link LandedCostPurchaseLines.dataAreaId}.
   * @param shipDataArea Key property. See {@link LandedCostPurchaseLines.shipDataArea}.
   * @param purchaseLineNumber Key property. See {@link LandedCostPurchaseLines.purchaseLineNumber}.
   * @param purchaseOrderId Key property. See {@link LandedCostPurchaseLines.purchaseOrderId}.
   * @param shipId Key property. See {@link LandedCostPurchaseLines.shipId}.
   * @returns A request builder for creating requests that delete an entity of type `LandedCostPurchaseLines`.
   */
  delete(
    dataAreaId: string,
    shipDataArea: string,
    purchaseLineNumber: BigNumber,
    purchaseOrderId: string,
    shipId: string
  ): DeleteRequestBuilder<LandedCostPurchaseLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LandedCostPurchaseLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LandedCostPurchaseLines` by taking the entity as a parameter.
   */
  delete(
    entity: LandedCostPurchaseLines<T>
  ): DeleteRequestBuilder<LandedCostPurchaseLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    shipDataArea?: string,
    purchaseLineNumber?: BigNumber,
    purchaseOrderId?: string,
    shipId?: string
  ): DeleteRequestBuilder<LandedCostPurchaseLines<T>, T> {
    return new DeleteRequestBuilder<LandedCostPurchaseLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LandedCostPurchaseLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ShipDataArea: shipDataArea!,
            PurchaseLineNumber: purchaseLineNumber!,
            PurchaseOrderId: purchaseOrderId!,
            ShipId: shipId!
          }
    );
  }
}
