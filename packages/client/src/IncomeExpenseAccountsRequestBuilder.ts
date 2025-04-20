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
import { IncomeExpenseAccounts } from './IncomeExpenseAccounts';

/**
 * Request builder class for operations supported on the {@link IncomeExpenseAccounts} entity.
 */
export class IncomeExpenseAccountsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<IncomeExpenseAccounts<T>, T> {
  /**
   * Returns a request builder for querying all `IncomeExpenseAccounts` entities.
   * @returns A request builder for creating requests to retrieve all `IncomeExpenseAccounts` entities.
   */
  getAll(): GetAllRequestBuilder<IncomeExpenseAccounts<T>, T> {
    return new GetAllRequestBuilder<IncomeExpenseAccounts<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `IncomeExpenseAccounts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `IncomeExpenseAccounts`.
   */
  create(
    entity: IncomeExpenseAccounts<T>
  ): CreateRequestBuilder<IncomeExpenseAccounts<T>, T> {
    return new CreateRequestBuilder<IncomeExpenseAccounts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `IncomeExpenseAccounts` entity based on its keys.
   * @param dataAreaId Key property. See {@link IncomeExpenseAccounts.dataAreaId}.
   * @param storeNumber Key property. See {@link IncomeExpenseAccounts.storeNumber}.
   * @param accountNumber Key property. See {@link IncomeExpenseAccounts.accountNumber}.
   * @returns A request builder for creating requests to retrieve one `IncomeExpenseAccounts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    storeNumber: DeserializedType<T, 'Edm.String'>,
    accountNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<IncomeExpenseAccounts<T>, T> {
    return new GetByKeyRequestBuilder<IncomeExpenseAccounts<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        StoreNumber: storeNumber,
        AccountNumber: accountNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `IncomeExpenseAccounts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `IncomeExpenseAccounts`.
   */
  update(
    entity: IncomeExpenseAccounts<T>
  ): UpdateRequestBuilder<IncomeExpenseAccounts<T>, T> {
    return new UpdateRequestBuilder<IncomeExpenseAccounts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `IncomeExpenseAccounts`.
   * @param dataAreaId Key property. See {@link IncomeExpenseAccounts.dataAreaId}.
   * @param storeNumber Key property. See {@link IncomeExpenseAccounts.storeNumber}.
   * @param accountNumber Key property. See {@link IncomeExpenseAccounts.accountNumber}.
   * @returns A request builder for creating requests that delete an entity of type `IncomeExpenseAccounts`.
   */
  delete(
    dataAreaId: string,
    storeNumber: string,
    accountNumber: string
  ): DeleteRequestBuilder<IncomeExpenseAccounts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `IncomeExpenseAccounts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `IncomeExpenseAccounts` by taking the entity as a parameter.
   */
  delete(
    entity: IncomeExpenseAccounts<T>
  ): DeleteRequestBuilder<IncomeExpenseAccounts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    storeNumber?: string,
    accountNumber?: string
  ): DeleteRequestBuilder<IncomeExpenseAccounts<T>, T> {
    return new DeleteRequestBuilder<IncomeExpenseAccounts<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof IncomeExpenseAccounts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            StoreNumber: storeNumber!,
            AccountNumber: accountNumber!
          }
    );
  }
}
