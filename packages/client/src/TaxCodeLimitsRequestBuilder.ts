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
import { TaxCodeLimits } from './TaxCodeLimits';

/**
 * Request builder class for operations supported on the {@link TaxCodeLimits} entity.
 */
export class TaxCodeLimitsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TaxCodeLimits<T>, T> {
  /**
   * Returns a request builder for querying all `TaxCodeLimits` entities.
   * @returns A request builder for creating requests to retrieve all `TaxCodeLimits` entities.
   */
  getAll(): GetAllRequestBuilder<TaxCodeLimits<T>, T> {
    return new GetAllRequestBuilder<TaxCodeLimits<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TaxCodeLimits` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TaxCodeLimits`.
   */
  create(entity: TaxCodeLimits<T>): CreateRequestBuilder<TaxCodeLimits<T>, T> {
    return new CreateRequestBuilder<TaxCodeLimits<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TaxCodeLimits` entity based on its keys.
   * @param dataAreaId Key property. See {@link TaxCodeLimits.dataAreaId}.
   * @param taxCodeId Key property. See {@link TaxCodeLimits.taxCodeId}.
   * @param fromDate Key property. See {@link TaxCodeLimits.fromDate}.
   * @param toDate Key property. See {@link TaxCodeLimits.toDate}.
   * @returns A request builder for creating requests to retrieve one `TaxCodeLimits` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    taxCodeId: DeserializedType<T, 'Edm.String'>,
    fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    toDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<TaxCodeLimits<T>, T> {
    return new GetByKeyRequestBuilder<TaxCodeLimits<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      TaxCodeId: taxCodeId,
      FromDate: fromDate,
      ToDate: toDate
    });
  }

  /**
   * Returns a request builder for updating an entity of type `TaxCodeLimits`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TaxCodeLimits`.
   */
  update(entity: TaxCodeLimits<T>): UpdateRequestBuilder<TaxCodeLimits<T>, T> {
    return new UpdateRequestBuilder<TaxCodeLimits<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TaxCodeLimits`.
   * @param dataAreaId Key property. See {@link TaxCodeLimits.dataAreaId}.
   * @param taxCodeId Key property. See {@link TaxCodeLimits.taxCodeId}.
   * @param fromDate Key property. See {@link TaxCodeLimits.fromDate}.
   * @param toDate Key property. See {@link TaxCodeLimits.toDate}.
   * @returns A request builder for creating requests that delete an entity of type `TaxCodeLimits`.
   */
  delete(
    dataAreaId: string,
    taxCodeId: string,
    fromDate: Moment,
    toDate: Moment
  ): DeleteRequestBuilder<TaxCodeLimits<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TaxCodeLimits`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TaxCodeLimits` by taking the entity as a parameter.
   */
  delete(entity: TaxCodeLimits<T>): DeleteRequestBuilder<TaxCodeLimits<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    taxCodeId?: string,
    fromDate?: Moment,
    toDate?: Moment
  ): DeleteRequestBuilder<TaxCodeLimits<T>, T> {
    return new DeleteRequestBuilder<TaxCodeLimits<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TaxCodeLimits
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TaxCodeId: taxCodeId!,
            FromDate: fromDate!,
            ToDate: toDate!
          }
    );
  }
}
