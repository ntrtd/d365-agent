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
import { ValueModelSetupShiftDepreciations } from './ValueModelSetupShiftDepreciations';

/**
 * Request builder class for operations supported on the {@link ValueModelSetupShiftDepreciations} entity.
 */
export class ValueModelSetupShiftDepreciationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ValueModelSetupShiftDepreciations<T>, T> {
  /**
   * Returns a request builder for querying all `ValueModelSetupShiftDepreciations` entities.
   * @returns A request builder for creating requests to retrieve all `ValueModelSetupShiftDepreciations` entities.
   */
  getAll(): GetAllRequestBuilder<ValueModelSetupShiftDepreciations<T>, T> {
    return new GetAllRequestBuilder<ValueModelSetupShiftDepreciations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ValueModelSetupShiftDepreciations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ValueModelSetupShiftDepreciations`.
   */
  create(
    entity: ValueModelSetupShiftDepreciations<T>
  ): CreateRequestBuilder<ValueModelSetupShiftDepreciations<T>, T> {
    return new CreateRequestBuilder<ValueModelSetupShiftDepreciations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ValueModelSetupShiftDepreciations` entity based on its keys.
   * @param dataAreaId Key property. See {@link ValueModelSetupShiftDepreciations.dataAreaId}.
   * @param valueModel Key property. See {@link ValueModelSetupShiftDepreciations.valueModel}.
   * @param fromDate Key property. See {@link ValueModelSetupShiftDepreciations.fromDate}.
   * @param toDate Key property. See {@link ValueModelSetupShiftDepreciations.toDate}.
   * @returns A request builder for creating requests to retrieve one `ValueModelSetupShiftDepreciations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    valueModel: DeserializedType<T, 'Edm.String'>,
    fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    toDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<ValueModelSetupShiftDepreciations<T>, T> {
    return new GetByKeyRequestBuilder<ValueModelSetupShiftDepreciations<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ValueModel: valueModel,
        FromDate: fromDate,
        ToDate: toDate
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ValueModelSetupShiftDepreciations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ValueModelSetupShiftDepreciations`.
   */
  update(
    entity: ValueModelSetupShiftDepreciations<T>
  ): UpdateRequestBuilder<ValueModelSetupShiftDepreciations<T>, T> {
    return new UpdateRequestBuilder<ValueModelSetupShiftDepreciations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ValueModelSetupShiftDepreciations`.
   * @param dataAreaId Key property. See {@link ValueModelSetupShiftDepreciations.dataAreaId}.
   * @param valueModel Key property. See {@link ValueModelSetupShiftDepreciations.valueModel}.
   * @param fromDate Key property. See {@link ValueModelSetupShiftDepreciations.fromDate}.
   * @param toDate Key property. See {@link ValueModelSetupShiftDepreciations.toDate}.
   * @returns A request builder for creating requests that delete an entity of type `ValueModelSetupShiftDepreciations`.
   */
  delete(
    dataAreaId: string,
    valueModel: string,
    fromDate: Moment,
    toDate: Moment
  ): DeleteRequestBuilder<ValueModelSetupShiftDepreciations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ValueModelSetupShiftDepreciations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ValueModelSetupShiftDepreciations` by taking the entity as a parameter.
   */
  delete(
    entity: ValueModelSetupShiftDepreciations<T>
  ): DeleteRequestBuilder<ValueModelSetupShiftDepreciations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    valueModel?: string,
    fromDate?: Moment,
    toDate?: Moment
  ): DeleteRequestBuilder<ValueModelSetupShiftDepreciations<T>, T> {
    return new DeleteRequestBuilder<ValueModelSetupShiftDepreciations<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ValueModelSetupShiftDepreciations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ValueModel: valueModel!,
            FromDate: fromDate!,
            ToDate: toDate!
          }
    );
  }
}
