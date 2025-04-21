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
import { XzReports } from './XzReports';
import { RetailXzReportType } from './RetailXzReportType';

/**
 * Request builder class for operations supported on the {@link XzReports} entity.
 */
export class XzReportsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<XzReports<T>, T> {
  /**
   * Returns a request builder for querying all `XzReports` entities.
   * @returns A request builder for creating requests to retrieve all `XzReports` entities.
   */
  getAll(): GetAllRequestBuilder<XzReports<T>, T> {
    return new GetAllRequestBuilder<XzReports<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `XzReports` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `XzReports`.
   */
  create(entity: XzReports<T>): CreateRequestBuilder<XzReports<T>, T> {
    return new CreateRequestBuilder<XzReports<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `XzReports` entity based on its keys.
   * @param dataAreaId Key property. See {@link XzReports.dataAreaId}.
   * @param storeId Key property. See {@link XzReports.storeId}.
   * @param terminalId Key property. See {@link XzReports.terminalId}.
   * @param batchId Key property. See {@link XzReports.batchId}.
   * @param reportType Key property. See {@link XzReports.reportType}.
   * @param reportId Key property. See {@link XzReports.reportId}.
   * @returns A request builder for creating requests to retrieve one `XzReports` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    storeId: DeserializedType<T, 'Edm.String'>,
    terminalId: DeserializedType<T, 'Edm.String'>,
    batchId: DeserializedType<T, 'Edm.Int64'>,
    reportType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.RetailXZReportType'
    >,
    reportId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<XzReports<T>, T> {
    return new GetByKeyRequestBuilder<XzReports<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      StoreId: storeId,
      TerminalId: terminalId,
      BatchId: batchId,
      ReportType: reportType,
      ReportId: reportId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `XzReports`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `XzReports`.
   */
  update(entity: XzReports<T>): UpdateRequestBuilder<XzReports<T>, T> {
    return new UpdateRequestBuilder<XzReports<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `XzReports`.
   * @param dataAreaId Key property. See {@link XzReports.dataAreaId}.
   * @param storeId Key property. See {@link XzReports.storeId}.
   * @param terminalId Key property. See {@link XzReports.terminalId}.
   * @param batchId Key property. See {@link XzReports.batchId}.
   * @param reportType Key property. See {@link XzReports.reportType}.
   * @param reportId Key property. See {@link XzReports.reportId}.
   * @returns A request builder for creating requests that delete an entity of type `XzReports`.
   */
  delete(
    dataAreaId: string,
    storeId: string,
    terminalId: string,
    batchId: BigNumber,
    reportType: RetailXzReportType,
    reportId: BigNumber
  ): DeleteRequestBuilder<XzReports<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `XzReports`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `XzReports` by taking the entity as a parameter.
   */
  delete(entity: XzReports<T>): DeleteRequestBuilder<XzReports<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    storeId?: string,
    terminalId?: string,
    batchId?: BigNumber,
    reportType?: RetailXzReportType,
    reportId?: BigNumber
  ): DeleteRequestBuilder<XzReports<T>, T> {
    return new DeleteRequestBuilder<XzReports<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof XzReports
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            StoreId: storeId!,
            TerminalId: terminalId!,
            BatchId: batchId!,
            ReportType: reportType!,
            ReportId: reportId!
          }
    );
  }
}
