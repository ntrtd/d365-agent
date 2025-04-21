/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
import { InflationAdjustmentJournals } from './InflationAdjustmentJournals';

/**
 * Request builder class for operations supported on the {@link InflationAdjustmentJournals} entity.
 */
export class InflationAdjustmentJournalsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InflationAdjustmentJournals<T>, T> {
  /**
   * Returns a request builder for querying all `InflationAdjustmentJournals` entities.
   * @returns A request builder for creating requests to retrieve all `InflationAdjustmentJournals` entities.
   */
  getAll(): GetAllRequestBuilder<InflationAdjustmentJournals<T>, T> {
    return new GetAllRequestBuilder<InflationAdjustmentJournals<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `InflationAdjustmentJournals` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InflationAdjustmentJournals`.
   */
  create(
    entity: InflationAdjustmentJournals<T>
  ): CreateRequestBuilder<InflationAdjustmentJournals<T>, T> {
    return new CreateRequestBuilder<InflationAdjustmentJournals<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InflationAdjustmentJournals` entity based on its keys.
   * @param dataAreaId Key property. See {@link InflationAdjustmentJournals.dataAreaId}.
   * @param voucher Key property. See {@link InflationAdjustmentJournals.voucher}.
   * @param reversedVoucher Key property. See {@link InflationAdjustmentJournals.reversedVoucher}.
   * @returns A request builder for creating requests to retrieve one `InflationAdjustmentJournals` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    voucher: DeserializedType<T, 'Edm.String'>,
    reversedVoucher: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<InflationAdjustmentJournals<T>, T> {
    return new GetByKeyRequestBuilder<InflationAdjustmentJournals<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Voucher: voucher,
        ReversedVoucher: reversedVoucher
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InflationAdjustmentJournals`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InflationAdjustmentJournals`.
   */
  update(
    entity: InflationAdjustmentJournals<T>
  ): UpdateRequestBuilder<InflationAdjustmentJournals<T>, T> {
    return new UpdateRequestBuilder<InflationAdjustmentJournals<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InflationAdjustmentJournals`.
   * @param dataAreaId Key property. See {@link InflationAdjustmentJournals.dataAreaId}.
   * @param voucher Key property. See {@link InflationAdjustmentJournals.voucher}.
   * @param reversedVoucher Key property. See {@link InflationAdjustmentJournals.reversedVoucher}.
   * @returns A request builder for creating requests that delete an entity of type `InflationAdjustmentJournals`.
   */
  delete(
    dataAreaId: string,
    voucher: string,
    reversedVoucher: string
  ): DeleteRequestBuilder<InflationAdjustmentJournals<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InflationAdjustmentJournals`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InflationAdjustmentJournals` by taking the entity as a parameter.
   */
  delete(
    entity: InflationAdjustmentJournals<T>
  ): DeleteRequestBuilder<InflationAdjustmentJournals<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    voucher?: string,
    reversedVoucher?: string
  ): DeleteRequestBuilder<InflationAdjustmentJournals<T>, T> {
    return new DeleteRequestBuilder<InflationAdjustmentJournals<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InflationAdjustmentJournals
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Voucher: voucher!,
            ReversedVoucher: reversedVoucher!
          }
    );
  }
}
