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
import { BankAccounts } from './BankAccounts';

/**
 * Request builder class for operations supported on the {@link BankAccounts} entity.
 */
export class BankAccountsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BankAccounts<T>, T> {
  /**
   * Returns a request builder for querying all `BankAccounts` entities.
   * @returns A request builder for creating requests to retrieve all `BankAccounts` entities.
   */
  getAll(): GetAllRequestBuilder<BankAccounts<T>, T> {
    return new GetAllRequestBuilder<BankAccounts<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BankAccounts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BankAccounts`.
   */
  create(entity: BankAccounts<T>): CreateRequestBuilder<BankAccounts<T>, T> {
    return new CreateRequestBuilder<BankAccounts<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `BankAccounts` entity based on its keys.
   * @param dataAreaId Key property. See {@link BankAccounts.dataAreaId}.
   * @param bankAccountId Key property. See {@link BankAccounts.bankAccountId}.
   * @returns A request builder for creating requests to retrieve one `BankAccounts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    bankAccountId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BankAccounts<T>, T> {
    return new GetByKeyRequestBuilder<BankAccounts<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      BankAccountId: bankAccountId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `BankAccounts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BankAccounts`.
   */
  update(entity: BankAccounts<T>): UpdateRequestBuilder<BankAccounts<T>, T> {
    return new UpdateRequestBuilder<BankAccounts<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `BankAccounts`.
   * @param dataAreaId Key property. See {@link BankAccounts.dataAreaId}.
   * @param bankAccountId Key property. See {@link BankAccounts.bankAccountId}.
   * @returns A request builder for creating requests that delete an entity of type `BankAccounts`.
   */
  delete(
    dataAreaId: string,
    bankAccountId: string
  ): DeleteRequestBuilder<BankAccounts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BankAccounts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BankAccounts` by taking the entity as a parameter.
   */
  delete(entity: BankAccounts<T>): DeleteRequestBuilder<BankAccounts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    bankAccountId?: string
  ): DeleteRequestBuilder<BankAccounts<T>, T> {
    return new DeleteRequestBuilder<BankAccounts<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BankAccounts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            BankAccountId: bankAccountId!
          }
    );
  }
}
