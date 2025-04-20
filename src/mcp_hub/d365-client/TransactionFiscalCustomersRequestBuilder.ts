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
import { TransactionFiscalCustomers } from './TransactionFiscalCustomers';

/**
 * Request builder class for operations supported on the {@link TransactionFiscalCustomers} entity.
 */
export class TransactionFiscalCustomersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TransactionFiscalCustomers<T>, T> {
  /**
   * Returns a request builder for querying all `TransactionFiscalCustomers` entities.
   * @returns A request builder for creating requests to retrieve all `TransactionFiscalCustomers` entities.
   */
  getAll(): GetAllRequestBuilder<TransactionFiscalCustomers<T>, T> {
    return new GetAllRequestBuilder<TransactionFiscalCustomers<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `TransactionFiscalCustomers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TransactionFiscalCustomers`.
   */
  create(
    entity: TransactionFiscalCustomers<T>
  ): CreateRequestBuilder<TransactionFiscalCustomers<T>, T> {
    return new CreateRequestBuilder<TransactionFiscalCustomers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TransactionFiscalCustomers` entity based on its keys.
   * @param dataAreaId Key property. See {@link TransactionFiscalCustomers.dataAreaId}.
   * @param store Key property. See {@link TransactionFiscalCustomers.store}.
   * @param terminal Key property. See {@link TransactionFiscalCustomers.terminal}.
   * @param transactionId Key property. See {@link TransactionFiscalCustomers.transactionId}.
   * @param operatingUnitNumber Key property. See {@link TransactionFiscalCustomers.operatingUnitNumber}.
   * @returns A request builder for creating requests to retrieve one `TransactionFiscalCustomers` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    store: DeserializedType<T, 'Edm.String'>,
    terminal: DeserializedType<T, 'Edm.String'>,
    transactionId: DeserializedType<T, 'Edm.String'>,
    operatingUnitNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TransactionFiscalCustomers<T>, T> {
    return new GetByKeyRequestBuilder<TransactionFiscalCustomers<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Store: store,
        Terminal: terminal,
        TransactionId: transactionId,
        OperatingUnitNumber: operatingUnitNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TransactionFiscalCustomers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TransactionFiscalCustomers`.
   */
  update(
    entity: TransactionFiscalCustomers<T>
  ): UpdateRequestBuilder<TransactionFiscalCustomers<T>, T> {
    return new UpdateRequestBuilder<TransactionFiscalCustomers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TransactionFiscalCustomers`.
   * @param dataAreaId Key property. See {@link TransactionFiscalCustomers.dataAreaId}.
   * @param store Key property. See {@link TransactionFiscalCustomers.store}.
   * @param terminal Key property. See {@link TransactionFiscalCustomers.terminal}.
   * @param transactionId Key property. See {@link TransactionFiscalCustomers.transactionId}.
   * @param operatingUnitNumber Key property. See {@link TransactionFiscalCustomers.operatingUnitNumber}.
   * @returns A request builder for creating requests that delete an entity of type `TransactionFiscalCustomers`.
   */
  delete(
    dataAreaId: string,
    store: string,
    terminal: string,
    transactionId: string,
    operatingUnitNumber: string
  ): DeleteRequestBuilder<TransactionFiscalCustomers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TransactionFiscalCustomers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TransactionFiscalCustomers` by taking the entity as a parameter.
   */
  delete(
    entity: TransactionFiscalCustomers<T>
  ): DeleteRequestBuilder<TransactionFiscalCustomers<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    store?: string,
    terminal?: string,
    transactionId?: string,
    operatingUnitNumber?: string
  ): DeleteRequestBuilder<TransactionFiscalCustomers<T>, T> {
    return new DeleteRequestBuilder<TransactionFiscalCustomers<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TransactionFiscalCustomers
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Store: store!,
            Terminal: terminal!,
            TransactionId: transactionId!,
            OperatingUnitNumber: operatingUnitNumber!
          }
    );
  }
}
