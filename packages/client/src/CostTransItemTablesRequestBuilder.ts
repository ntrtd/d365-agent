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
import { CostTransItemTables } from './CostTransItemTables';

/**
 * Request builder class for operations supported on the {@link CostTransItemTables} entity.
 */
export class CostTransItemTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CostTransItemTables<T>, T> {
  /**
   * Returns a request builder for querying all `CostTransItemTables` entities.
   * @returns A request builder for creating requests to retrieve all `CostTransItemTables` entities.
   */
  getAll(): GetAllRequestBuilder<CostTransItemTables<T>, T> {
    return new GetAllRequestBuilder<CostTransItemTables<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CostTransItemTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CostTransItemTables`.
   */
  create(
    entity: CostTransItemTables<T>
  ): CreateRequestBuilder<CostTransItemTables<T>, T> {
    return new CreateRequestBuilder<CostTransItemTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CostTransItemTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link CostTransItemTables.dataAreaId}.
   * @param shipDataArea Key property. See {@link CostTransItemTables.shipDataArea}.
   * @param purchaseOrderId Key property. See {@link CostTransItemTables.purchaseOrderId}.
   * @param purchaseOrderLineNumber Key property. See {@link CostTransItemTables.purchaseOrderLineNumber}.
   * @param lineNumber Key property. See {@link CostTransItemTables.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `CostTransItemTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    shipDataArea: DeserializedType<T, 'Edm.String'>,
    purchaseOrderId: DeserializedType<T, 'Edm.String'>,
    purchaseOrderLineNumber: DeserializedType<T, 'Edm.Int64'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<CostTransItemTables<T>, T> {
    return new GetByKeyRequestBuilder<CostTransItemTables<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ShipDataArea: shipDataArea,
        PurchaseOrderId: purchaseOrderId,
        PurchaseOrderLineNumber: purchaseOrderLineNumber,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CostTransItemTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CostTransItemTables`.
   */
  update(
    entity: CostTransItemTables<T>
  ): UpdateRequestBuilder<CostTransItemTables<T>, T> {
    return new UpdateRequestBuilder<CostTransItemTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CostTransItemTables`.
   * @param dataAreaId Key property. See {@link CostTransItemTables.dataAreaId}.
   * @param shipDataArea Key property. See {@link CostTransItemTables.shipDataArea}.
   * @param purchaseOrderId Key property. See {@link CostTransItemTables.purchaseOrderId}.
   * @param purchaseOrderLineNumber Key property. See {@link CostTransItemTables.purchaseOrderLineNumber}.
   * @param lineNumber Key property. See {@link CostTransItemTables.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `CostTransItemTables`.
   */
  delete(
    dataAreaId: string,
    shipDataArea: string,
    purchaseOrderId: string,
    purchaseOrderLineNumber: BigNumber,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<CostTransItemTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CostTransItemTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CostTransItemTables` by taking the entity as a parameter.
   */
  delete(
    entity: CostTransItemTables<T>
  ): DeleteRequestBuilder<CostTransItemTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    shipDataArea?: string,
    purchaseOrderId?: string,
    purchaseOrderLineNumber?: BigNumber,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<CostTransItemTables<T>, T> {
    return new DeleteRequestBuilder<CostTransItemTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CostTransItemTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ShipDataArea: shipDataArea!,
            PurchaseOrderId: purchaseOrderId!,
            PurchaseOrderLineNumber: purchaseOrderLineNumber!,
            LineNumber: lineNumber!
          }
    );
  }
}
