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
import { FreightBillDetails } from './FreightBillDetails';

/**
 * Request builder class for operations supported on the {@link FreightBillDetails} entity.
 */
export class FreightBillDetailsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FreightBillDetails<T>, T> {
  /**
   * Returns a request builder for querying all `FreightBillDetails` entities.
   * @returns A request builder for creating requests to retrieve all `FreightBillDetails` entities.
   */
  getAll(): GetAllRequestBuilder<FreightBillDetails<T>, T> {
    return new GetAllRequestBuilder<FreightBillDetails<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `FreightBillDetails` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FreightBillDetails`.
   */
  create(
    entity: FreightBillDetails<T>
  ): CreateRequestBuilder<FreightBillDetails<T>, T> {
    return new CreateRequestBuilder<FreightBillDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `FreightBillDetails` entity based on its keys.
   * @param dataAreaId Key property. See {@link FreightBillDetails.dataAreaId}.
   * @param freightBillId Key property. See {@link FreightBillDetails.freightBillId}.
   * @param freightBillDetailEntryNumber Key property. See {@link FreightBillDetails.freightBillDetailEntryNumber}.
   * @returns A request builder for creating requests to retrieve one `FreightBillDetails` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    freightBillId: DeserializedType<T, 'Edm.String'>,
    freightBillDetailEntryNumber: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<FreightBillDetails<T>, T> {
    return new GetByKeyRequestBuilder<FreightBillDetails<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        FreightBillId: freightBillId,
        FreightBillDetailEntryNumber: freightBillDetailEntryNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `FreightBillDetails`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FreightBillDetails`.
   */
  update(
    entity: FreightBillDetails<T>
  ): UpdateRequestBuilder<FreightBillDetails<T>, T> {
    return new UpdateRequestBuilder<FreightBillDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `FreightBillDetails`.
   * @param dataAreaId Key property. See {@link FreightBillDetails.dataAreaId}.
   * @param freightBillId Key property. See {@link FreightBillDetails.freightBillId}.
   * @param freightBillDetailEntryNumber Key property. See {@link FreightBillDetails.freightBillDetailEntryNumber}.
   * @returns A request builder for creating requests that delete an entity of type `FreightBillDetails`.
   */
  delete(
    dataAreaId: string,
    freightBillId: string,
    freightBillDetailEntryNumber: BigNumber
  ): DeleteRequestBuilder<FreightBillDetails<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FreightBillDetails`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FreightBillDetails` by taking the entity as a parameter.
   */
  delete(
    entity: FreightBillDetails<T>
  ): DeleteRequestBuilder<FreightBillDetails<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    freightBillId?: string,
    freightBillDetailEntryNumber?: BigNumber
  ): DeleteRequestBuilder<FreightBillDetails<T>, T> {
    return new DeleteRequestBuilder<FreightBillDetails<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof FreightBillDetails
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FreightBillId: freightBillId!,
            FreightBillDetailEntryNumber: freightBillDetailEntryNumber!
          }
    );
  }
}
