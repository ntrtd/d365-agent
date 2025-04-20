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
import { ReportPeriods } from './ReportPeriods';

/**
 * Request builder class for operations supported on the {@link ReportPeriods} entity.
 */
export class ReportPeriodsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ReportPeriods<T>, T> {
  /**
   * Returns a request builder for querying all `ReportPeriods` entities.
   * @returns A request builder for creating requests to retrieve all `ReportPeriods` entities.
   */
  getAll(): GetAllRequestBuilder<ReportPeriods<T>, T> {
    return new GetAllRequestBuilder<ReportPeriods<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ReportPeriods` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ReportPeriods`.
   */
  create(entity: ReportPeriods<T>): CreateRequestBuilder<ReportPeriods<T>, T> {
    return new CreateRequestBuilder<ReportPeriods<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ReportPeriods` entity based on its keys.
   * @param dataAreaId Key property. See {@link ReportPeriods.dataAreaId}.
   * @param settlementPeriod Key property. See {@link ReportPeriods.settlementPeriod}.
   * @param toDate Key property. See {@link ReportPeriods.toDate}.
   * @param fromDate Key property. See {@link ReportPeriods.fromDate}.
   * @returns A request builder for creating requests to retrieve one `ReportPeriods` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    settlementPeriod: DeserializedType<T, 'Edm.String'>,
    toDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<ReportPeriods<T>, T> {
    return new GetByKeyRequestBuilder<ReportPeriods<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      SettlementPeriod: settlementPeriod,
      ToDate: toDate,
      FromDate: fromDate
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ReportPeriods`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ReportPeriods`.
   */
  update(entity: ReportPeriods<T>): UpdateRequestBuilder<ReportPeriods<T>, T> {
    return new UpdateRequestBuilder<ReportPeriods<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ReportPeriods`.
   * @param dataAreaId Key property. See {@link ReportPeriods.dataAreaId}.
   * @param settlementPeriod Key property. See {@link ReportPeriods.settlementPeriod}.
   * @param toDate Key property. See {@link ReportPeriods.toDate}.
   * @param fromDate Key property. See {@link ReportPeriods.fromDate}.
   * @returns A request builder for creating requests that delete an entity of type `ReportPeriods`.
   */
  delete(
    dataAreaId: string,
    settlementPeriod: string,
    toDate: Moment,
    fromDate: Moment
  ): DeleteRequestBuilder<ReportPeriods<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ReportPeriods`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ReportPeriods` by taking the entity as a parameter.
   */
  delete(entity: ReportPeriods<T>): DeleteRequestBuilder<ReportPeriods<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    settlementPeriod?: string,
    toDate?: Moment,
    fromDate?: Moment
  ): DeleteRequestBuilder<ReportPeriods<T>, T> {
    return new DeleteRequestBuilder<ReportPeriods<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ReportPeriods
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SettlementPeriod: settlementPeriod!,
            ToDate: toDate!,
            FromDate: fromDate!
          }
    );
  }
}
