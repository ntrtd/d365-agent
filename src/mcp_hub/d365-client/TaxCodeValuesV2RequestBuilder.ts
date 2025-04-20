/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { TaxCodeValuesV2 } from './TaxCodeValuesV2';

/**
 * Request builder class for operations supported on the {@link TaxCodeValuesV2} entity.
 */
export class TaxCodeValuesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TaxCodeValuesV2<T>, T> {
  /**
   * Returns a request builder for querying all `TaxCodeValuesV2` entities.
   * @returns A request builder for creating requests to retrieve all `TaxCodeValuesV2` entities.
   */
  getAll(): GetAllRequestBuilder<TaxCodeValuesV2<T>, T> {
    return new GetAllRequestBuilder<TaxCodeValuesV2<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TaxCodeValuesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TaxCodeValuesV2`.
   */
  create(
    entity: TaxCodeValuesV2<T>
  ): CreateRequestBuilder<TaxCodeValuesV2<T>, T> {
    return new CreateRequestBuilder<TaxCodeValuesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TaxCodeValuesV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link TaxCodeValuesV2.dataAreaId}.
   * @param taxCodeId Key property. See {@link TaxCodeValuesV2.taxCodeId}.
   * @param fromDate Key property. See {@link TaxCodeValuesV2.fromDate}.
   * @param toDate Key property. See {@link TaxCodeValuesV2.toDate}.
   * @param minimumLimit Key property. See {@link TaxCodeValuesV2.minimumLimit}.
   * @param maximumLimit Key property. See {@link TaxCodeValuesV2.maximumLimit}.
   * @returns A request builder for creating requests to retrieve one `TaxCodeValuesV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    taxCodeId: DeserializedType<T, 'Edm.String'>,
    fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    toDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    minimumLimit: DeserializedType<T, 'Edm.Decimal'>,
    maximumLimit: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<TaxCodeValuesV2<T>, T> {
    return new GetByKeyRequestBuilder<TaxCodeValuesV2<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      TaxCodeId: taxCodeId,
      FromDate: fromDate,
      ToDate: toDate,
      MinimumLimit: minimumLimit,
      MaximumLimit: maximumLimit
    });
  }

  /**
   * Returns a request builder for updating an entity of type `TaxCodeValuesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TaxCodeValuesV2`.
   */
  update(
    entity: TaxCodeValuesV2<T>
  ): UpdateRequestBuilder<TaxCodeValuesV2<T>, T> {
    return new UpdateRequestBuilder<TaxCodeValuesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TaxCodeValuesV2`.
   * @param dataAreaId Key property. See {@link TaxCodeValuesV2.dataAreaId}.
   * @param taxCodeId Key property. See {@link TaxCodeValuesV2.taxCodeId}.
   * @param fromDate Key property. See {@link TaxCodeValuesV2.fromDate}.
   * @param toDate Key property. See {@link TaxCodeValuesV2.toDate}.
   * @param minimumLimit Key property. See {@link TaxCodeValuesV2.minimumLimit}.
   * @param maximumLimit Key property. See {@link TaxCodeValuesV2.maximumLimit}.
   * @returns A request builder for creating requests that delete an entity of type `TaxCodeValuesV2`.
   */
  delete(
    dataAreaId: string,
    taxCodeId: string,
    fromDate: Moment,
    toDate: Moment,
    minimumLimit: BigNumber,
    maximumLimit: BigNumber
  ): DeleteRequestBuilder<TaxCodeValuesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TaxCodeValuesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TaxCodeValuesV2` by taking the entity as a parameter.
   */
  delete(
    entity: TaxCodeValuesV2<T>
  ): DeleteRequestBuilder<TaxCodeValuesV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    taxCodeId?: string,
    fromDate?: Moment,
    toDate?: Moment,
    minimumLimit?: BigNumber,
    maximumLimit?: BigNumber
  ): DeleteRequestBuilder<TaxCodeValuesV2<T>, T> {
    return new DeleteRequestBuilder<TaxCodeValuesV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TaxCodeValuesV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TaxCodeId: taxCodeId!,
            FromDate: fromDate!,
            ToDate: toDate!,
            MinimumLimit: minimumLimit!,
            MaximumLimit: maximumLimit!
          }
    );
  }
}
