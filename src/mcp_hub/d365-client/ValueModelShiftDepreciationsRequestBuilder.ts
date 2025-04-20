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
import { ValueModelShiftDepreciations } from './ValueModelShiftDepreciations';

/**
 * Request builder class for operations supported on the {@link ValueModelShiftDepreciations} entity.
 */
export class ValueModelShiftDepreciationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ValueModelShiftDepreciations<T>, T> {
  /**
   * Returns a request builder for querying all `ValueModelShiftDepreciations` entities.
   * @returns A request builder for creating requests to retrieve all `ValueModelShiftDepreciations` entities.
   */
  getAll(): GetAllRequestBuilder<ValueModelShiftDepreciations<T>, T> {
    return new GetAllRequestBuilder<ValueModelShiftDepreciations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ValueModelShiftDepreciations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ValueModelShiftDepreciations`.
   */
  create(
    entity: ValueModelShiftDepreciations<T>
  ): CreateRequestBuilder<ValueModelShiftDepreciations<T>, T> {
    return new CreateRequestBuilder<ValueModelShiftDepreciations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ValueModelShiftDepreciations` entity based on its keys.
   * @param dataAreaId Key property. See {@link ValueModelShiftDepreciations.dataAreaId}.
   * @param fixedAssetNumber Key property. See {@link ValueModelShiftDepreciations.fixedAssetNumber}.
   * @param valueModel Key property. See {@link ValueModelShiftDepreciations.valueModel}.
   * @param fromDate Key property. See {@link ValueModelShiftDepreciations.fromDate}.
   * @param toDate Key property. See {@link ValueModelShiftDepreciations.toDate}.
   * @returns A request builder for creating requests to retrieve one `ValueModelShiftDepreciations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    fixedAssetNumber: DeserializedType<T, 'Edm.String'>,
    valueModel: DeserializedType<T, 'Edm.String'>,
    fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    toDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<ValueModelShiftDepreciations<T>, T> {
    return new GetByKeyRequestBuilder<ValueModelShiftDepreciations<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        FixedAssetNumber: fixedAssetNumber,
        ValueModel: valueModel,
        FromDate: fromDate,
        ToDate: toDate
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ValueModelShiftDepreciations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ValueModelShiftDepreciations`.
   */
  update(
    entity: ValueModelShiftDepreciations<T>
  ): UpdateRequestBuilder<ValueModelShiftDepreciations<T>, T> {
    return new UpdateRequestBuilder<ValueModelShiftDepreciations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ValueModelShiftDepreciations`.
   * @param dataAreaId Key property. See {@link ValueModelShiftDepreciations.dataAreaId}.
   * @param fixedAssetNumber Key property. See {@link ValueModelShiftDepreciations.fixedAssetNumber}.
   * @param valueModel Key property. See {@link ValueModelShiftDepreciations.valueModel}.
   * @param fromDate Key property. See {@link ValueModelShiftDepreciations.fromDate}.
   * @param toDate Key property. See {@link ValueModelShiftDepreciations.toDate}.
   * @returns A request builder for creating requests that delete an entity of type `ValueModelShiftDepreciations`.
   */
  delete(
    dataAreaId: string,
    fixedAssetNumber: string,
    valueModel: string,
    fromDate: Moment,
    toDate: Moment
  ): DeleteRequestBuilder<ValueModelShiftDepreciations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ValueModelShiftDepreciations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ValueModelShiftDepreciations` by taking the entity as a parameter.
   */
  delete(
    entity: ValueModelShiftDepreciations<T>
  ): DeleteRequestBuilder<ValueModelShiftDepreciations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    fixedAssetNumber?: string,
    valueModel?: string,
    fromDate?: Moment,
    toDate?: Moment
  ): DeleteRequestBuilder<ValueModelShiftDepreciations<T>, T> {
    return new DeleteRequestBuilder<ValueModelShiftDepreciations<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ValueModelShiftDepreciations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FixedAssetNumber: fixedAssetNumber!,
            ValueModel: valueModel!,
            FromDate: fromDate!,
            ToDate: toDate!
          }
    );
  }
}
