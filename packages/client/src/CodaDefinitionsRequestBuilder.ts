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
import { CodaDefinitions } from './CodaDefinitions';

/**
 * Request builder class for operations supported on the {@link CodaDefinitions} entity.
 */
export class CodaDefinitionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CodaDefinitions<T>, T> {
  /**
   * Returns a request builder for querying all `CodaDefinitions` entities.
   * @returns A request builder for creating requests to retrieve all `CodaDefinitions` entities.
   */
  getAll(): GetAllRequestBuilder<CodaDefinitions<T>, T> {
    return new GetAllRequestBuilder<CodaDefinitions<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CodaDefinitions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CodaDefinitions`.
   */
  create(
    entity: CodaDefinitions<T>
  ): CreateRequestBuilder<CodaDefinitions<T>, T> {
    return new CreateRequestBuilder<CodaDefinitions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CodaDefinitions` entity based on its keys.
   * @param dataAreaId Key property. See {@link CodaDefinitions.dataAreaId}.
   * @param bankAccount Key property. See {@link CodaDefinitions.bankAccount}.
   * @param transactionGroup Key property. See {@link CodaDefinitions.transactionGroup}.
   * @param transaction Key property. See {@link CodaDefinitions.transaction}.
   * @param transactionCategory Key property. See {@link CodaDefinitions.transactionCategory}.
   * @returns A request builder for creating requests to retrieve one `CodaDefinitions` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    bankAccount: DeserializedType<T, 'Edm.String'>,
    transactionGroup: DeserializedType<T, 'Edm.String'>,
    transaction: DeserializedType<T, 'Edm.String'>,
    transactionCategory: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CodaDefinitions<T>, T> {
    return new GetByKeyRequestBuilder<CodaDefinitions<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      BankAccount: bankAccount,
      TransactionGroup: transactionGroup,
      Transaction: transaction,
      TransactionCategory: transactionCategory
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CodaDefinitions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CodaDefinitions`.
   */
  update(
    entity: CodaDefinitions<T>
  ): UpdateRequestBuilder<CodaDefinitions<T>, T> {
    return new UpdateRequestBuilder<CodaDefinitions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CodaDefinitions`.
   * @param dataAreaId Key property. See {@link CodaDefinitions.dataAreaId}.
   * @param bankAccount Key property. See {@link CodaDefinitions.bankAccount}.
   * @param transactionGroup Key property. See {@link CodaDefinitions.transactionGroup}.
   * @param transaction Key property. See {@link CodaDefinitions.transaction}.
   * @param transactionCategory Key property. See {@link CodaDefinitions.transactionCategory}.
   * @returns A request builder for creating requests that delete an entity of type `CodaDefinitions`.
   */
  delete(
    dataAreaId: string,
    bankAccount: string,
    transactionGroup: string,
    transaction: string,
    transactionCategory: string
  ): DeleteRequestBuilder<CodaDefinitions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CodaDefinitions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CodaDefinitions` by taking the entity as a parameter.
   */
  delete(
    entity: CodaDefinitions<T>
  ): DeleteRequestBuilder<CodaDefinitions<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    bankAccount?: string,
    transactionGroup?: string,
    transaction?: string,
    transactionCategory?: string
  ): DeleteRequestBuilder<CodaDefinitions<T>, T> {
    return new DeleteRequestBuilder<CodaDefinitions<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CodaDefinitions
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            BankAccount: bankAccount!,
            TransactionGroup: transactionGroup!,
            Transaction: transaction!,
            TransactionCategory: transactionCategory!
          }
    );
  }
}
