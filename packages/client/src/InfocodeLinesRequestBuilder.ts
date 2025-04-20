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
import { InfocodeLines } from './InfocodeLines';
import { RetailInfocodeTransType } from './RetailInfocodeTransType';

/**
 * Request builder class for operations supported on the {@link InfocodeLines} entity.
 */
export class InfocodeLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InfocodeLines<T>, T> {
  /**
   * Returns a request builder for querying all `InfocodeLines` entities.
   * @returns A request builder for creating requests to retrieve all `InfocodeLines` entities.
   */
  getAll(): GetAllRequestBuilder<InfocodeLines<T>, T> {
    return new GetAllRequestBuilder<InfocodeLines<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `InfocodeLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InfocodeLines`.
   */
  create(entity: InfocodeLines<T>): CreateRequestBuilder<InfocodeLines<T>, T> {
    return new CreateRequestBuilder<InfocodeLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InfocodeLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link InfocodeLines.dataAreaId}.
   * @param salesOrderNumber Key property. See {@link InfocodeLines.salesOrderNumber}.
   * @param inventoryLotId Key property. See {@link InfocodeLines.inventoryLotId}.
   * @param journalBatchNumber Key property. See {@link InfocodeLines.journalBatchNumber}.
   * @param journalLineNumber Key property. See {@link InfocodeLines.journalLineNumber}.
   * @param infocodeLineType Key property. See {@link InfocodeLines.infocodeLineType}.
   * @param lineNumber Key property. See {@link InfocodeLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `InfocodeLines` entity based on its keys.
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
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<InfocodeLines<T>, T> {
    return new GetByKeyRequestBuilder<InfocodeLines<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      SalesOrderNumber: salesOrderNumber,
      InventoryLotId: inventoryLotId,
      JournalBatchNumber: journalBatchNumber,
      JournalLineNumber: journalLineNumber,
      InfocodeLineType: infocodeLineType,
      LineNumber: lineNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `InfocodeLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InfocodeLines`.
   */
  update(entity: InfocodeLines<T>): UpdateRequestBuilder<InfocodeLines<T>, T> {
    return new UpdateRequestBuilder<InfocodeLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InfocodeLines`.
   * @param dataAreaId Key property. See {@link InfocodeLines.dataAreaId}.
   * @param salesOrderNumber Key property. See {@link InfocodeLines.salesOrderNumber}.
   * @param inventoryLotId Key property. See {@link InfocodeLines.inventoryLotId}.
   * @param journalBatchNumber Key property. See {@link InfocodeLines.journalBatchNumber}.
   * @param journalLineNumber Key property. See {@link InfocodeLines.journalLineNumber}.
   * @param infocodeLineType Key property. See {@link InfocodeLines.infocodeLineType}.
   * @param lineNumber Key property. See {@link InfocodeLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `InfocodeLines`.
   */
  delete(
    dataAreaId: string,
    salesOrderNumber: string,
    inventoryLotId: string,
    journalBatchNumber: string,
    journalLineNumber: BigNumber,
    infocodeLineType: RetailInfocodeTransType,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<InfocodeLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InfocodeLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InfocodeLines` by taking the entity as a parameter.
   */
  delete(entity: InfocodeLines<T>): DeleteRequestBuilder<InfocodeLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    salesOrderNumber?: string,
    inventoryLotId?: string,
    journalBatchNumber?: string,
    journalLineNumber?: BigNumber,
    infocodeLineType?: RetailInfocodeTransType,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<InfocodeLines<T>, T> {
    return new DeleteRequestBuilder<InfocodeLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InfocodeLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SalesOrderNumber: salesOrderNumber!,
            InventoryLotId: inventoryLotId!,
            JournalBatchNumber: journalBatchNumber!,
            JournalLineNumber: journalLineNumber!,
            InfocodeLineType: infocodeLineType!,
            LineNumber: lineNumber!
          }
    );
  }
}
