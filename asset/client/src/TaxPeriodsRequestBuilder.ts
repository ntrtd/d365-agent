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
import { TaxPeriods } from './TaxPeriods';

/**
 * Request builder class for operations supported on the {@link TaxPeriods} entity.
 */
export class TaxPeriodsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TaxPeriods<T>, T> {
  /**
   * Returns a request builder for querying all `TaxPeriods` entities.
   * @returns A request builder for creating requests to retrieve all `TaxPeriods` entities.
   */
  getAll(): GetAllRequestBuilder<TaxPeriods<T>, T> {
    return new GetAllRequestBuilder<TaxPeriods<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TaxPeriods` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TaxPeriods`.
   */
  create(entity: TaxPeriods<T>): CreateRequestBuilder<TaxPeriods<T>, T> {
    return new CreateRequestBuilder<TaxPeriods<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `TaxPeriods` entity based on its keys.
   * @param dataAreaId Key property. See {@link TaxPeriods.dataAreaId}.
   * @param taxPeriodId Key property. See {@link TaxPeriods.taxPeriodId}.
   * @param fromDate Key property. See {@link TaxPeriods.fromDate}.
   * @param toDate Key property. See {@link TaxPeriods.toDate}.
   * @returns A request builder for creating requests to retrieve one `TaxPeriods` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    taxPeriodId: DeserializedType<T, 'Edm.String'>,
    fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    toDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<TaxPeriods<T>, T> {
    return new GetByKeyRequestBuilder<TaxPeriods<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      TaxPeriodId: taxPeriodId,
      FromDate: fromDate,
      ToDate: toDate
    });
  }

  /**
   * Returns a request builder for updating an entity of type `TaxPeriods`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TaxPeriods`.
   */
  update(entity: TaxPeriods<T>): UpdateRequestBuilder<TaxPeriods<T>, T> {
    return new UpdateRequestBuilder<TaxPeriods<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `TaxPeriods`.
   * @param dataAreaId Key property. See {@link TaxPeriods.dataAreaId}.
   * @param taxPeriodId Key property. See {@link TaxPeriods.taxPeriodId}.
   * @param fromDate Key property. See {@link TaxPeriods.fromDate}.
   * @param toDate Key property. See {@link TaxPeriods.toDate}.
   * @returns A request builder for creating requests that delete an entity of type `TaxPeriods`.
   */
  delete(
    dataAreaId: string,
    taxPeriodId: string,
    fromDate: Moment,
    toDate: Moment
  ): DeleteRequestBuilder<TaxPeriods<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TaxPeriods`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TaxPeriods` by taking the entity as a parameter.
   */
  delete(entity: TaxPeriods<T>): DeleteRequestBuilder<TaxPeriods<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    taxPeriodId?: string,
    fromDate?: Moment,
    toDate?: Moment
  ): DeleteRequestBuilder<TaxPeriods<T>, T> {
    return new DeleteRequestBuilder<TaxPeriods<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TaxPeriods
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TaxPeriodId: taxPeriodId!,
            FromDate: fromDate!,
            ToDate: toDate!
          }
    );
  }
}
