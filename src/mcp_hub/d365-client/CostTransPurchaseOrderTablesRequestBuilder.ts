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
import { CostTransPurchaseOrderTables } from './CostTransPurchaseOrderTables';

/**
 * Request builder class for operations supported on the {@link CostTransPurchaseOrderTables} entity.
 */
export class CostTransPurchaseOrderTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CostTransPurchaseOrderTables<T>, T> {
  /**
   * Returns a request builder for querying all `CostTransPurchaseOrderTables` entities.
   * @returns A request builder for creating requests to retrieve all `CostTransPurchaseOrderTables` entities.
   */
  getAll(): GetAllRequestBuilder<CostTransPurchaseOrderTables<T>, T> {
    return new GetAllRequestBuilder<CostTransPurchaseOrderTables<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CostTransPurchaseOrderTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CostTransPurchaseOrderTables`.
   */
  create(
    entity: CostTransPurchaseOrderTables<T>
  ): CreateRequestBuilder<CostTransPurchaseOrderTables<T>, T> {
    return new CreateRequestBuilder<CostTransPurchaseOrderTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CostTransPurchaseOrderTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link CostTransPurchaseOrderTables.dataAreaId}.
   * @param shipDataArea Key property. See {@link CostTransPurchaseOrderTables.shipDataArea}.
   * @param purchaseOrderId Key property. See {@link CostTransPurchaseOrderTables.purchaseOrderId}.
   * @param lineNumber Key property. See {@link CostTransPurchaseOrderTables.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `CostTransPurchaseOrderTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    shipDataArea: DeserializedType<T, 'Edm.String'>,
    purchaseOrderId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<CostTransPurchaseOrderTables<T>, T> {
    return new GetByKeyRequestBuilder<CostTransPurchaseOrderTables<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ShipDataArea: shipDataArea,
        PurchaseOrderId: purchaseOrderId,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CostTransPurchaseOrderTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CostTransPurchaseOrderTables`.
   */
  update(
    entity: CostTransPurchaseOrderTables<T>
  ): UpdateRequestBuilder<CostTransPurchaseOrderTables<T>, T> {
    return new UpdateRequestBuilder<CostTransPurchaseOrderTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CostTransPurchaseOrderTables`.
   * @param dataAreaId Key property. See {@link CostTransPurchaseOrderTables.dataAreaId}.
   * @param shipDataArea Key property. See {@link CostTransPurchaseOrderTables.shipDataArea}.
   * @param purchaseOrderId Key property. See {@link CostTransPurchaseOrderTables.purchaseOrderId}.
   * @param lineNumber Key property. See {@link CostTransPurchaseOrderTables.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `CostTransPurchaseOrderTables`.
   */
  delete(
    dataAreaId: string,
    shipDataArea: string,
    purchaseOrderId: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<CostTransPurchaseOrderTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CostTransPurchaseOrderTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CostTransPurchaseOrderTables` by taking the entity as a parameter.
   */
  delete(
    entity: CostTransPurchaseOrderTables<T>
  ): DeleteRequestBuilder<CostTransPurchaseOrderTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    shipDataArea?: string,
    purchaseOrderId?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<CostTransPurchaseOrderTables<T>, T> {
    return new DeleteRequestBuilder<CostTransPurchaseOrderTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CostTransPurchaseOrderTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ShipDataArea: shipDataArea!,
            PurchaseOrderId: purchaseOrderId!,
            LineNumber: lineNumber!
          }
    );
  }
}
