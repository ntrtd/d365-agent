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
import { BankTransactionGroups } from './BankTransactionGroups';

/**
 * Request builder class for operations supported on the {@link BankTransactionGroups} entity.
 */
export class BankTransactionGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BankTransactionGroups<T>, T> {
  /**
   * Returns a request builder for querying all `BankTransactionGroups` entities.
   * @returns A request builder for creating requests to retrieve all `BankTransactionGroups` entities.
   */
  getAll(): GetAllRequestBuilder<BankTransactionGroups<T>, T> {
    return new GetAllRequestBuilder<BankTransactionGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BankTransactionGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BankTransactionGroups`.
   */
  create(
    entity: BankTransactionGroups<T>
  ): CreateRequestBuilder<BankTransactionGroups<T>, T> {
    return new CreateRequestBuilder<BankTransactionGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BankTransactionGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link BankTransactionGroups.dataAreaId}.
   * @param transactionGroupId Key property. See {@link BankTransactionGroups.transactionGroupId}.
   * @param transactionTypeId Key property. See {@link BankTransactionGroups.transactionTypeId}.
   * @returns A request builder for creating requests to retrieve one `BankTransactionGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    transactionGroupId: DeserializedType<T, 'Edm.String'>,
    transactionTypeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BankTransactionGroups<T>, T> {
    return new GetByKeyRequestBuilder<BankTransactionGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TransactionGroupId: transactionGroupId,
        TransactionTypeId: transactionTypeId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BankTransactionGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BankTransactionGroups`.
   */
  update(
    entity: BankTransactionGroups<T>
  ): UpdateRequestBuilder<BankTransactionGroups<T>, T> {
    return new UpdateRequestBuilder<BankTransactionGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BankTransactionGroups`.
   * @param dataAreaId Key property. See {@link BankTransactionGroups.dataAreaId}.
   * @param transactionGroupId Key property. See {@link BankTransactionGroups.transactionGroupId}.
   * @param transactionTypeId Key property. See {@link BankTransactionGroups.transactionTypeId}.
   * @returns A request builder for creating requests that delete an entity of type `BankTransactionGroups`.
   */
  delete(
    dataAreaId: string,
    transactionGroupId: string,
    transactionTypeId: string
  ): DeleteRequestBuilder<BankTransactionGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BankTransactionGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BankTransactionGroups` by taking the entity as a parameter.
   */
  delete(
    entity: BankTransactionGroups<T>
  ): DeleteRequestBuilder<BankTransactionGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    transactionGroupId?: string,
    transactionTypeId?: string
  ): DeleteRequestBuilder<BankTransactionGroups<T>, T> {
    return new DeleteRequestBuilder<BankTransactionGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BankTransactionGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TransactionGroupId: transactionGroupId!,
            TransactionTypeId: transactionTypeId!
          }
    );
  }
}
