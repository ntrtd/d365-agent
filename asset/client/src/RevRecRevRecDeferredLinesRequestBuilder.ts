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
import { RevRecRevRecDeferredLines } from './RevRecRevRecDeferredLines';
import { NoYes } from './NoYes';

/**
 * Request builder class for operations supported on the {@link RevRecRevRecDeferredLines} entity.
 */
export class RevRecRevRecDeferredLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RevRecRevRecDeferredLines<T>, T> {
  /**
   * Returns a request builder for querying all `RevRecRevRecDeferredLines` entities.
   * @returns A request builder for creating requests to retrieve all `RevRecRevRecDeferredLines` entities.
   */
  getAll(): GetAllRequestBuilder<RevRecRevRecDeferredLines<T>, T> {
    return new GetAllRequestBuilder<RevRecRevRecDeferredLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RevRecRevRecDeferredLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RevRecRevRecDeferredLines`.
   */
  create(
    entity: RevRecRevRecDeferredLines<T>
  ): CreateRequestBuilder<RevRecRevRecDeferredLines<T>, T> {
    return new CreateRequestBuilder<RevRecRevRecDeferredLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RevRecRevRecDeferredLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link RevRecRevRecDeferredLines.dataAreaId}.
   * @param origSalesId Key property. See {@link RevRecRevRecDeferredLines.origSalesId}.
   * @param projId Key property. See {@link RevRecRevRecDeferredLines.projId}.
   * @param lineNum Key property. See {@link RevRecRevRecDeferredLines.lineNum}.
   * @param inventTransId Key property. See {@link RevRecRevRecDeferredLines.inventTransId}.
   * @param revenueScheduleId Key property. See {@link RevRecRevRecDeferredLines.revenueScheduleId}.
   * @param recPeriodNumber Key property. See {@link RevRecRevRecDeferredLines.recPeriodNumber}.
   * @param latestNewValues Key property. See {@link RevRecRevRecDeferredLines.latestNewValues}.
   * @param reallocationId Key property. See {@link RevRecRevRecDeferredLines.reallocationId}.
   * @param reallocationReversal Key property. See {@link RevRecRevRecDeferredLines.reallocationReversal}.
   * @param invoiceId Key property. See {@link RevRecRevRecDeferredLines.invoiceId}.
   * @returns A request builder for creating requests to retrieve one `RevRecRevRecDeferredLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    origSalesId: DeserializedType<T, 'Edm.String'>,
    projId: DeserializedType<T, 'Edm.String'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>,
    inventTransId: DeserializedType<T, 'Edm.String'>,
    revenueScheduleId: DeserializedType<T, 'Edm.String'>,
    recPeriodNumber: DeserializedType<T, 'Edm.Int32'>,
    latestNewValues: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.NoYes'
    >,
    reallocationId: DeserializedType<T, 'Edm.String'>,
    reallocationReversal: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.NoYes'
    >,
    invoiceId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RevRecRevRecDeferredLines<T>, T> {
    return new GetByKeyRequestBuilder<RevRecRevRecDeferredLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        OrigSalesId: origSalesId,
        ProjID: projId,
        LineNum: lineNum,
        InventTransId: inventTransId,
        RevenueScheduleID: revenueScheduleId,
        RecPeriodNumber: recPeriodNumber,
        LatestNewValues: latestNewValues,
        ReallocationId: reallocationId,
        ReallocationReversal: reallocationReversal,
        InvoiceId: invoiceId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RevRecRevRecDeferredLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RevRecRevRecDeferredLines`.
   */
  update(
    entity: RevRecRevRecDeferredLines<T>
  ): UpdateRequestBuilder<RevRecRevRecDeferredLines<T>, T> {
    return new UpdateRequestBuilder<RevRecRevRecDeferredLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RevRecRevRecDeferredLines`.
   * @param dataAreaId Key property. See {@link RevRecRevRecDeferredLines.dataAreaId}.
   * @param origSalesId Key property. See {@link RevRecRevRecDeferredLines.origSalesId}.
   * @param projId Key property. See {@link RevRecRevRecDeferredLines.projId}.
   * @param lineNum Key property. See {@link RevRecRevRecDeferredLines.lineNum}.
   * @param inventTransId Key property. See {@link RevRecRevRecDeferredLines.inventTransId}.
   * @param revenueScheduleId Key property. See {@link RevRecRevRecDeferredLines.revenueScheduleId}.
   * @param recPeriodNumber Key property. See {@link RevRecRevRecDeferredLines.recPeriodNumber}.
   * @param latestNewValues Key property. See {@link RevRecRevRecDeferredLines.latestNewValues}.
   * @param reallocationId Key property. See {@link RevRecRevRecDeferredLines.reallocationId}.
   * @param reallocationReversal Key property. See {@link RevRecRevRecDeferredLines.reallocationReversal}.
   * @param invoiceId Key property. See {@link RevRecRevRecDeferredLines.invoiceId}.
   * @returns A request builder for creating requests that delete an entity of type `RevRecRevRecDeferredLines`.
   */
  delete(
    dataAreaId: string,
    origSalesId: string,
    projId: string,
    lineNum: BigNumber,
    inventTransId: string,
    revenueScheduleId: string,
    recPeriodNumber: number,
    latestNewValues: NoYes,
    reallocationId: string,
    reallocationReversal: NoYes,
    invoiceId: string
  ): DeleteRequestBuilder<RevRecRevRecDeferredLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RevRecRevRecDeferredLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RevRecRevRecDeferredLines` by taking the entity as a parameter.
   */
  delete(
    entity: RevRecRevRecDeferredLines<T>
  ): DeleteRequestBuilder<RevRecRevRecDeferredLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    origSalesId?: string,
    projId?: string,
    lineNum?: BigNumber,
    inventTransId?: string,
    revenueScheduleId?: string,
    recPeriodNumber?: number,
    latestNewValues?: NoYes,
    reallocationId?: string,
    reallocationReversal?: NoYes,
    invoiceId?: string
  ): DeleteRequestBuilder<RevRecRevRecDeferredLines<T>, T> {
    return new DeleteRequestBuilder<RevRecRevRecDeferredLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RevRecRevRecDeferredLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            OrigSalesId: origSalesId!,
            ProjID: projId!,
            LineNum: lineNum!,
            InventTransId: inventTransId!,
            RevenueScheduleID: revenueScheduleId!,
            RecPeriodNumber: recPeriodNumber!,
            LatestNewValues: latestNewValues!,
            ReallocationId: reallocationId!,
            ReallocationReversal: reallocationReversal!,
            InvoiceId: invoiceId!
          }
    );
  }
}
