/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { PriceReportDatas } from './PriceReportDatas';

/**
 * Request builder class for operations supported on the {@link PriceReportDatas} entity.
 */
export class PriceReportDatasRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PriceReportDatas<T>, T> {
  /**
   * Returns a request builder for querying all `PriceReportDatas` entities.
   * @returns A request builder for creating requests to retrieve all `PriceReportDatas` entities.
   */
  getAll(): GetAllRequestBuilder<PriceReportDatas<T>, T> {
    return new GetAllRequestBuilder<PriceReportDatas<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PriceReportDatas` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PriceReportDatas`.
   */
  create(
    entity: PriceReportDatas<T>
  ): CreateRequestBuilder<PriceReportDatas<T>, T> {
    return new CreateRequestBuilder<PriceReportDatas<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PriceReportDatas` entity based on its keys.
   * @param dataAreaId Key property. See {@link PriceReportDatas.dataAreaId}.
   * @param reportId Key property. See {@link PriceReportDatas.reportId}.
   * @param accountNum Key property. See {@link PriceReportDatas.accountNum}.
   * @param itemId Key property. See {@link PriceReportDatas.itemId}.
   * @param fromDate Key property. See {@link PriceReportDatas.fromDate}.
   * @param toDate Key property. See {@link PriceReportDatas.toDate}.
   * @returns A request builder for creating requests to retrieve one `PriceReportDatas` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    reportId: DeserializedType<T, 'Edm.Guid'>,
    accountNum: DeserializedType<T, 'Edm.String'>,
    itemId: DeserializedType<T, 'Edm.String'>,
    fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    toDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<PriceReportDatas<T>, T> {
    return new GetByKeyRequestBuilder<PriceReportDatas<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ReportId: reportId,
      AccountNum: accountNum,
      ItemId: itemId,
      FromDate: fromDate,
      ToDate: toDate
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PriceReportDatas`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PriceReportDatas`.
   */
  update(
    entity: PriceReportDatas<T>
  ): UpdateRequestBuilder<PriceReportDatas<T>, T> {
    return new UpdateRequestBuilder<PriceReportDatas<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PriceReportDatas`.
   * @param dataAreaId Key property. See {@link PriceReportDatas.dataAreaId}.
   * @param reportId Key property. See {@link PriceReportDatas.reportId}.
   * @param accountNum Key property. See {@link PriceReportDatas.accountNum}.
   * @param itemId Key property. See {@link PriceReportDatas.itemId}.
   * @param fromDate Key property. See {@link PriceReportDatas.fromDate}.
   * @param toDate Key property. See {@link PriceReportDatas.toDate}.
   * @returns A request builder for creating requests that delete an entity of type `PriceReportDatas`.
   */
  delete(
    dataAreaId: string,
    reportId: string,
    accountNum: string,
    itemId: string,
    fromDate: Moment,
    toDate: Moment
  ): DeleteRequestBuilder<PriceReportDatas<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PriceReportDatas`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PriceReportDatas` by taking the entity as a parameter.
   */
  delete(
    entity: PriceReportDatas<T>
  ): DeleteRequestBuilder<PriceReportDatas<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    reportId?: string,
    accountNum?: string,
    itemId?: string,
    fromDate?: Moment,
    toDate?: Moment
  ): DeleteRequestBuilder<PriceReportDatas<T>, T> {
    return new DeleteRequestBuilder<PriceReportDatas<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PriceReportDatas
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ReportId: reportId!,
            AccountNum: accountNum!,
            ItemId: itemId!,
            FromDate: fromDate!,
            ToDate: toDate!
          }
    );
  }
}
