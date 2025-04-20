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
import { RetailStoreCashDeclarations } from './RetailStoreCashDeclarations';
import { RetailCoinNote } from './RetailCoinNote';

/**
 * Request builder class for operations supported on the {@link RetailStoreCashDeclarations} entity.
 */
export class RetailStoreCashDeclarationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailStoreCashDeclarations<T>, T> {
  /**
   * Returns a request builder for querying all `RetailStoreCashDeclarations` entities.
   * @returns A request builder for creating requests to retrieve all `RetailStoreCashDeclarations` entities.
   */
  getAll(): GetAllRequestBuilder<RetailStoreCashDeclarations<T>, T> {
    return new GetAllRequestBuilder<RetailStoreCashDeclarations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailStoreCashDeclarations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailStoreCashDeclarations`.
   */
  create(
    entity: RetailStoreCashDeclarations<T>
  ): CreateRequestBuilder<RetailStoreCashDeclarations<T>, T> {
    return new CreateRequestBuilder<RetailStoreCashDeclarations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailStoreCashDeclarations` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailStoreCashDeclarations.dataAreaId}.
   * @param currency Key property. See {@link RetailStoreCashDeclarations.currency}.
   * @param amount Key property. See {@link RetailStoreCashDeclarations.amount}.
   * @param omOperatingUnitNumber Key property. See {@link RetailStoreCashDeclarations.omOperatingUnitNumber}.
   * @param type Key property. See {@link RetailStoreCashDeclarations.type}.
   * @returns A request builder for creating requests to retrieve one `RetailStoreCashDeclarations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    currency: DeserializedType<T, 'Edm.String'>,
    amount: DeserializedType<T, 'Edm.Decimal'>,
    omOperatingUnitNumber: DeserializedType<T, 'Edm.String'>,
    type: DeserializedType<T, 'Microsoft.Dynamics.DataEntities.RetailCoinNote'>
  ): GetByKeyRequestBuilder<RetailStoreCashDeclarations<T>, T> {
    return new GetByKeyRequestBuilder<RetailStoreCashDeclarations<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Currency: currency,
        Amount: amount,
        OMOperatingUnitNumber: omOperatingUnitNumber,
        Type: type
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailStoreCashDeclarations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailStoreCashDeclarations`.
   */
  update(
    entity: RetailStoreCashDeclarations<T>
  ): UpdateRequestBuilder<RetailStoreCashDeclarations<T>, T> {
    return new UpdateRequestBuilder<RetailStoreCashDeclarations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailStoreCashDeclarations`.
   * @param dataAreaId Key property. See {@link RetailStoreCashDeclarations.dataAreaId}.
   * @param currency Key property. See {@link RetailStoreCashDeclarations.currency}.
   * @param amount Key property. See {@link RetailStoreCashDeclarations.amount}.
   * @param omOperatingUnitNumber Key property. See {@link RetailStoreCashDeclarations.omOperatingUnitNumber}.
   * @param type Key property. See {@link RetailStoreCashDeclarations.type}.
   * @returns A request builder for creating requests that delete an entity of type `RetailStoreCashDeclarations`.
   */
  delete(
    dataAreaId: string,
    currency: string,
    amount: BigNumber,
    omOperatingUnitNumber: string,
    type: RetailCoinNote
  ): DeleteRequestBuilder<RetailStoreCashDeclarations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailStoreCashDeclarations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailStoreCashDeclarations` by taking the entity as a parameter.
   */
  delete(
    entity: RetailStoreCashDeclarations<T>
  ): DeleteRequestBuilder<RetailStoreCashDeclarations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    currency?: string,
    amount?: BigNumber,
    omOperatingUnitNumber?: string,
    type?: RetailCoinNote
  ): DeleteRequestBuilder<RetailStoreCashDeclarations<T>, T> {
    return new DeleteRequestBuilder<RetailStoreCashDeclarations<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailStoreCashDeclarations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Currency: currency!,
            Amount: amount!,
            OMOperatingUnitNumber: omOperatingUnitNumber!,
            Type: type!
          }
    );
  }
}
