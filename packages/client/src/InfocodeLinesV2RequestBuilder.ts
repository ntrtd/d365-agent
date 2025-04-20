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
import { InfocodeLinesV2 } from './InfocodeLinesV2';
import { RetailInfocodeTransType } from './RetailInfocodeTransType';
import { RetailInfoCodeLineRelatedTableType } from './RetailInfoCodeLineRelatedTableType';

/**
 * Request builder class for operations supported on the {@link InfocodeLinesV2} entity.
 */
export class InfocodeLinesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InfocodeLinesV2<T>, T> {
  /**
   * Returns a request builder for querying all `InfocodeLinesV2` entities.
   * @returns A request builder for creating requests to retrieve all `InfocodeLinesV2` entities.
   */
  getAll(): GetAllRequestBuilder<InfocodeLinesV2<T>, T> {
    return new GetAllRequestBuilder<InfocodeLinesV2<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `InfocodeLinesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InfocodeLinesV2`.
   */
  create(
    entity: InfocodeLinesV2<T>
  ): CreateRequestBuilder<InfocodeLinesV2<T>, T> {
    return new CreateRequestBuilder<InfocodeLinesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InfocodeLinesV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link InfocodeLinesV2.dataAreaId}.
   * @param salesOrderNumber Key property. See {@link InfocodeLinesV2.salesOrderNumber}.
   * @param inventoryLotId Key property. See {@link InfocodeLinesV2.inventoryLotId}.
   * @param journalBatchNumber Key property. See {@link InfocodeLinesV2.journalBatchNumber}.
   * @param journalLineNumber Key property. See {@link InfocodeLinesV2.journalLineNumber}.
   * @param infocodeLineType Key property. See {@link InfocodeLinesV2.infocodeLineType}.
   * @param lineNumber Key property. See {@link InfocodeLinesV2.lineNumber}.
   * @param infocodeLineTableType Key property. See {@link InfocodeLinesV2.infocodeLineTableType}.
   * @returns A request builder for creating requests to retrieve one `InfocodeLinesV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    salesOrderNumber: DeserializedType<T, 'Edm.String'>,
    inventoryLotId: DeserializedType<T, 'Edm.String'>,
    journalBatchNumber: DeserializedType<T, 'Edm.String'>,
    journalLineNumber: DeserializedType<T, 'Edm.Decimal'>,
    infocodeLineType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.RetailInfocodeTransType'
    >,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>,
    infocodeLineTableType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.RetailInfoCodeLineRelatedTableType'
    >
  ): GetByKeyRequestBuilder<InfocodeLinesV2<T>, T> {
    return new GetByKeyRequestBuilder<InfocodeLinesV2<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      SalesOrderNumber: salesOrderNumber,
      InventoryLotId: inventoryLotId,
      JournalBatchNumber: journalBatchNumber,
      JournalLineNumber: journalLineNumber,
      InfocodeLineType: infocodeLineType,
      LineNumber: lineNumber,
      InfocodeLineTableType: infocodeLineTableType
    });
  }

  /**
   * Returns a request builder for updating an entity of type `InfocodeLinesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InfocodeLinesV2`.
   */
  update(
    entity: InfocodeLinesV2<T>
  ): UpdateRequestBuilder<InfocodeLinesV2<T>, T> {
    return new UpdateRequestBuilder<InfocodeLinesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InfocodeLinesV2`.
   * @param dataAreaId Key property. See {@link InfocodeLinesV2.dataAreaId}.
   * @param salesOrderNumber Key property. See {@link InfocodeLinesV2.salesOrderNumber}.
   * @param inventoryLotId Key property. See {@link InfocodeLinesV2.inventoryLotId}.
   * @param journalBatchNumber Key property. See {@link InfocodeLinesV2.journalBatchNumber}.
   * @param journalLineNumber Key property. See {@link InfocodeLinesV2.journalLineNumber}.
   * @param infocodeLineType Key property. See {@link InfocodeLinesV2.infocodeLineType}.
   * @param lineNumber Key property. See {@link InfocodeLinesV2.lineNumber}.
   * @param infocodeLineTableType Key property. See {@link InfocodeLinesV2.infocodeLineTableType}.
   * @returns A request builder for creating requests that delete an entity of type `InfocodeLinesV2`.
   */
  delete(
    dataAreaId: string,
    salesOrderNumber: string,
    inventoryLotId: string,
    journalBatchNumber: string,
    journalLineNumber: BigNumber,
    infocodeLineType: RetailInfocodeTransType,
    lineNumber: BigNumber,
    infocodeLineTableType: RetailInfoCodeLineRelatedTableType
  ): DeleteRequestBuilder<InfocodeLinesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InfocodeLinesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InfocodeLinesV2` by taking the entity as a parameter.
   */
  delete(
    entity: InfocodeLinesV2<T>
  ): DeleteRequestBuilder<InfocodeLinesV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    salesOrderNumber?: string,
    inventoryLotId?: string,
    journalBatchNumber?: string,
    journalLineNumber?: BigNumber,
    infocodeLineType?: RetailInfocodeTransType,
    lineNumber?: BigNumber,
    infocodeLineTableType?: RetailInfoCodeLineRelatedTableType
  ): DeleteRequestBuilder<InfocodeLinesV2<T>, T> {
    return new DeleteRequestBuilder<InfocodeLinesV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InfocodeLinesV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SalesOrderNumber: salesOrderNumber!,
            InventoryLotId: inventoryLotId!,
            JournalBatchNumber: journalBatchNumber!,
            JournalLineNumber: journalLineNumber!,
            InfocodeLineType: infocodeLineType!,
            LineNumber: lineNumber!,
            InfocodeLineTableType: infocodeLineTableType!
          }
    );
  }
}
