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
import { CodaTransactionGroups } from './CodaTransactionGroups';

/**
 * Request builder class for operations supported on the {@link CodaTransactionGroups} entity.
 */
export class CodaTransactionGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CodaTransactionGroups<T>, T> {
  /**
   * Returns a request builder for querying all `CodaTransactionGroups` entities.
   * @returns A request builder for creating requests to retrieve all `CodaTransactionGroups` entities.
   */
  getAll(): GetAllRequestBuilder<CodaTransactionGroups<T>, T> {
    return new GetAllRequestBuilder<CodaTransactionGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CodaTransactionGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CodaTransactionGroups`.
   */
  create(
    entity: CodaTransactionGroups<T>
  ): CreateRequestBuilder<CodaTransactionGroups<T>, T> {
    return new CreateRequestBuilder<CodaTransactionGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CodaTransactionGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link CodaTransactionGroups.dataAreaId}.
   * @param code Key property. See {@link CodaTransactionGroups.code}.
   * @param transactionCategory Key property. See {@link CodaTransactionGroups.transactionCategory}.
   * @param transaction Key property. See {@link CodaTransactionGroups.transaction}.
   * @returns A request builder for creating requests to retrieve one `CodaTransactionGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    code: DeserializedType<T, 'Edm.String'>,
    transactionCategory: DeserializedType<T, 'Edm.String'>,
    transaction: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CodaTransactionGroups<T>, T> {
    return new GetByKeyRequestBuilder<CodaTransactionGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Code: code,
        TransactionCategory: transactionCategory,
        Transaction: transaction
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CodaTransactionGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CodaTransactionGroups`.
   */
  update(
    entity: CodaTransactionGroups<T>
  ): UpdateRequestBuilder<CodaTransactionGroups<T>, T> {
    return new UpdateRequestBuilder<CodaTransactionGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CodaTransactionGroups`.
   * @param dataAreaId Key property. See {@link CodaTransactionGroups.dataAreaId}.
   * @param code Key property. See {@link CodaTransactionGroups.code}.
   * @param transactionCategory Key property. See {@link CodaTransactionGroups.transactionCategory}.
   * @param transaction Key property. See {@link CodaTransactionGroups.transaction}.
   * @returns A request builder for creating requests that delete an entity of type `CodaTransactionGroups`.
   */
  delete(
    dataAreaId: string,
    code: string,
    transactionCategory: string,
    transaction: string
  ): DeleteRequestBuilder<CodaTransactionGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CodaTransactionGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CodaTransactionGroups` by taking the entity as a parameter.
   */
  delete(
    entity: CodaTransactionGroups<T>
  ): DeleteRequestBuilder<CodaTransactionGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    code?: string,
    transactionCategory?: string,
    transaction?: string
  ): DeleteRequestBuilder<CodaTransactionGroups<T>, T> {
    return new DeleteRequestBuilder<CodaTransactionGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CodaTransactionGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Code: code!,
            TransactionCategory: transactionCategory!,
            Transaction: transaction!
          }
    );
  }
}
