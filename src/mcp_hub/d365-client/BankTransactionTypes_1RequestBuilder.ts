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
import { BankTransactionTypes_1 } from './BankTransactionTypes_1';

/**
 * Request builder class for operations supported on the {@link BankTransactionTypes_1} entity.
 */
export class BankTransactionTypes_1RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BankTransactionTypes_1<T>, T> {
  /**
   * Returns a request builder for querying all `BankTransactionTypes_1` entities.
   * @returns A request builder for creating requests to retrieve all `BankTransactionTypes_1` entities.
   */
  getAll(): GetAllRequestBuilder<BankTransactionTypes_1<T>, T> {
    return new GetAllRequestBuilder<BankTransactionTypes_1<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BankTransactionTypes_1` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BankTransactionTypes_1`.
   */
  create(
    entity: BankTransactionTypes_1<T>
  ): CreateRequestBuilder<BankTransactionTypes_1<T>, T> {
    return new CreateRequestBuilder<BankTransactionTypes_1<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BankTransactionTypes_1` entity based on its keys.
   * @param dataAreaId Key property. See {@link BankTransactionTypes_1.dataAreaId}.
   * @param transactionTypeId Key property. See {@link BankTransactionTypes_1.transactionTypeId}.
   * @returns A request builder for creating requests to retrieve one `BankTransactionTypes_1` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    transactionTypeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BankTransactionTypes_1<T>, T> {
    return new GetByKeyRequestBuilder<BankTransactionTypes_1<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TransactionTypeId: transactionTypeId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BankTransactionTypes_1`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BankTransactionTypes_1`.
   */
  update(
    entity: BankTransactionTypes_1<T>
  ): UpdateRequestBuilder<BankTransactionTypes_1<T>, T> {
    return new UpdateRequestBuilder<BankTransactionTypes_1<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BankTransactionTypes_1`.
   * @param dataAreaId Key property. See {@link BankTransactionTypes_1.dataAreaId}.
   * @param transactionTypeId Key property. See {@link BankTransactionTypes_1.transactionTypeId}.
   * @returns A request builder for creating requests that delete an entity of type `BankTransactionTypes_1`.
   */
  delete(
    dataAreaId: string,
    transactionTypeId: string
  ): DeleteRequestBuilder<BankTransactionTypes_1<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BankTransactionTypes_1`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BankTransactionTypes_1` by taking the entity as a parameter.
   */
  delete(
    entity: BankTransactionTypes_1<T>
  ): DeleteRequestBuilder<BankTransactionTypes_1<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    transactionTypeId?: string
  ): DeleteRequestBuilder<BankTransactionTypes_1<T>, T> {
    return new DeleteRequestBuilder<BankTransactionTypes_1<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BankTransactionTypes_1
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TransactionTypeId: transactionTypeId!
          }
    );
  }
}
