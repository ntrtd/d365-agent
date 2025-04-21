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
import { ReportExtraFields } from './ReportExtraFields';

/**
 * Request builder class for operations supported on the {@link ReportExtraFields} entity.
 */
export class ReportExtraFieldsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ReportExtraFields<T>, T> {
  /**
   * Returns a request builder for querying all `ReportExtraFields` entities.
   * @returns A request builder for creating requests to retrieve all `ReportExtraFields` entities.
   */
  getAll(): GetAllRequestBuilder<ReportExtraFields<T>, T> {
    return new GetAllRequestBuilder<ReportExtraFields<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ReportExtraFields` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ReportExtraFields`.
   */
  create(
    entity: ReportExtraFields<T>
  ): CreateRequestBuilder<ReportExtraFields<T>, T> {
    return new CreateRequestBuilder<ReportExtraFields<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ReportExtraFields` entity based on its keys.
   * @param dataAreaId Key property. See {@link ReportExtraFields.dataAreaId}.
   * @param settlementPeriod Key property. See {@link ReportExtraFields.settlementPeriod}.
   * @param fromDate Key property. See {@link ReportExtraFields.fromDate}.
   * @param toDate Key property. See {@link ReportExtraFields.toDate}.
   * @returns A request builder for creating requests to retrieve one `ReportExtraFields` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    settlementPeriod: DeserializedType<T, 'Edm.String'>,
    fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    toDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<ReportExtraFields<T>, T> {
    return new GetByKeyRequestBuilder<ReportExtraFields<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      SettlementPeriod: settlementPeriod,
      FromDate: fromDate,
      ToDate: toDate
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ReportExtraFields`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ReportExtraFields`.
   */
  update(
    entity: ReportExtraFields<T>
  ): UpdateRequestBuilder<ReportExtraFields<T>, T> {
    return new UpdateRequestBuilder<ReportExtraFields<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ReportExtraFields`.
   * @param dataAreaId Key property. See {@link ReportExtraFields.dataAreaId}.
   * @param settlementPeriod Key property. See {@link ReportExtraFields.settlementPeriod}.
   * @param fromDate Key property. See {@link ReportExtraFields.fromDate}.
   * @param toDate Key property. See {@link ReportExtraFields.toDate}.
   * @returns A request builder for creating requests that delete an entity of type `ReportExtraFields`.
   */
  delete(
    dataAreaId: string,
    settlementPeriod: string,
    fromDate: Moment,
    toDate: Moment
  ): DeleteRequestBuilder<ReportExtraFields<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ReportExtraFields`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ReportExtraFields` by taking the entity as a parameter.
   */
  delete(
    entity: ReportExtraFields<T>
  ): DeleteRequestBuilder<ReportExtraFields<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    settlementPeriod?: string,
    fromDate?: Moment,
    toDate?: Moment
  ): DeleteRequestBuilder<ReportExtraFields<T>, T> {
    return new DeleteRequestBuilder<ReportExtraFields<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ReportExtraFields
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SettlementPeriod: settlementPeriod!,
            FromDate: fromDate!,
            ToDate: toDate!
          }
    );
  }
}
