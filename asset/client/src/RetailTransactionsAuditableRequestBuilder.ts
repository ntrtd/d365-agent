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
import { RetailTransactionsAuditable } from './RetailTransactionsAuditable';

/**
 * Request builder class for operations supported on the {@link RetailTransactionsAuditable} entity.
 */
export class RetailTransactionsAuditableRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTransactionsAuditable<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTransactionsAuditable` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTransactionsAuditable` entities.
   */
  getAll(): GetAllRequestBuilder<RetailTransactionsAuditable<T>, T> {
    return new GetAllRequestBuilder<RetailTransactionsAuditable<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailTransactionsAuditable` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTransactionsAuditable`.
   */
  create(
    entity: RetailTransactionsAuditable<T>
  ): CreateRequestBuilder<RetailTransactionsAuditable<T>, T> {
    return new CreateRequestBuilder<RetailTransactionsAuditable<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailTransactionsAuditable` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailTransactionsAuditable.dataAreaId}.
   * @param operatingUnitNumber Key property. See {@link RetailTransactionsAuditable.operatingUnitNumber}.
   * @param storeNumber Key property. See {@link RetailTransactionsAuditable.storeNumber}.
   * @param registerNumber Key property. See {@link RetailTransactionsAuditable.registerNumber}.
   * @param transactionId Key property. See {@link RetailTransactionsAuditable.transactionId}.
   * @returns A request builder for creating requests to retrieve one `RetailTransactionsAuditable` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    operatingUnitNumber: DeserializedType<T, 'Edm.String'>,
    storeNumber: DeserializedType<T, 'Edm.String'>,
    registerNumber: DeserializedType<T, 'Edm.String'>,
    transactionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailTransactionsAuditable<T>, T> {
    return new GetByKeyRequestBuilder<RetailTransactionsAuditable<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        OperatingUnitNumber: operatingUnitNumber,
        StoreNumber: storeNumber,
        RegisterNumber: registerNumber,
        TransactionId: transactionId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTransactionsAuditable`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTransactionsAuditable`.
   */
  update(
    entity: RetailTransactionsAuditable<T>
  ): UpdateRequestBuilder<RetailTransactionsAuditable<T>, T> {
    return new UpdateRequestBuilder<RetailTransactionsAuditable<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionsAuditable`.
   * @param dataAreaId Key property. See {@link RetailTransactionsAuditable.dataAreaId}.
   * @param operatingUnitNumber Key property. See {@link RetailTransactionsAuditable.operatingUnitNumber}.
   * @param storeNumber Key property. See {@link RetailTransactionsAuditable.storeNumber}.
   * @param registerNumber Key property. See {@link RetailTransactionsAuditable.registerNumber}.
   * @param transactionId Key property. See {@link RetailTransactionsAuditable.transactionId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionsAuditable`.
   */
  delete(
    dataAreaId: string,
    operatingUnitNumber: string,
    storeNumber: string,
    registerNumber: string,
    transactionId: string
  ): DeleteRequestBuilder<RetailTransactionsAuditable<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionsAuditable`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionsAuditable` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTransactionsAuditable<T>
  ): DeleteRequestBuilder<RetailTransactionsAuditable<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    operatingUnitNumber?: string,
    storeNumber?: string,
    registerNumber?: string,
    transactionId?: string
  ): DeleteRequestBuilder<RetailTransactionsAuditable<T>, T> {
    return new DeleteRequestBuilder<RetailTransactionsAuditable<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailTransactionsAuditable
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            OperatingUnitNumber: operatingUnitNumber!,
            StoreNumber: storeNumber!,
            RegisterNumber: registerNumber!,
            TransactionId: transactionId!
          }
    );
  }
}
