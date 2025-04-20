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
import { CustomerBankAccounts } from './CustomerBankAccounts';

/**
 * Request builder class for operations supported on the {@link CustomerBankAccounts} entity.
 */
export class CustomerBankAccountsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustomerBankAccounts<T>, T> {
  /**
   * Returns a request builder for querying all `CustomerBankAccounts` entities.
   * @returns A request builder for creating requests to retrieve all `CustomerBankAccounts` entities.
   */
  getAll(): GetAllRequestBuilder<CustomerBankAccounts<T>, T> {
    return new GetAllRequestBuilder<CustomerBankAccounts<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CustomerBankAccounts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustomerBankAccounts`.
   */
  create(
    entity: CustomerBankAccounts<T>
  ): CreateRequestBuilder<CustomerBankAccounts<T>, T> {
    return new CreateRequestBuilder<CustomerBankAccounts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CustomerBankAccounts` entity based on its keys.
   * @param dataAreaId Key property. See {@link CustomerBankAccounts.dataAreaId}.
   * @param customerAccountNumber Key property. See {@link CustomerBankAccounts.customerAccountNumber}.
   * @param bankAccountId Key property. See {@link CustomerBankAccounts.bankAccountId}.
   * @returns A request builder for creating requests to retrieve one `CustomerBankAccounts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    customerAccountNumber: DeserializedType<T, 'Edm.String'>,
    bankAccountId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CustomerBankAccounts<T>, T> {
    return new GetByKeyRequestBuilder<CustomerBankAccounts<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        CustomerAccountNumber: customerAccountNumber,
        BankAccountId: bankAccountId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CustomerBankAccounts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomerBankAccounts`.
   */
  update(
    entity: CustomerBankAccounts<T>
  ): UpdateRequestBuilder<CustomerBankAccounts<T>, T> {
    return new UpdateRequestBuilder<CustomerBankAccounts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CustomerBankAccounts`.
   * @param dataAreaId Key property. See {@link CustomerBankAccounts.dataAreaId}.
   * @param customerAccountNumber Key property. See {@link CustomerBankAccounts.customerAccountNumber}.
   * @param bankAccountId Key property. See {@link CustomerBankAccounts.bankAccountId}.
   * @returns A request builder for creating requests that delete an entity of type `CustomerBankAccounts`.
   */
  delete(
    dataAreaId: string,
    customerAccountNumber: string,
    bankAccountId: string
  ): DeleteRequestBuilder<CustomerBankAccounts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustomerBankAccounts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustomerBankAccounts` by taking the entity as a parameter.
   */
  delete(
    entity: CustomerBankAccounts<T>
  ): DeleteRequestBuilder<CustomerBankAccounts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    customerAccountNumber?: string,
    bankAccountId?: string
  ): DeleteRequestBuilder<CustomerBankAccounts<T>, T> {
    return new DeleteRequestBuilder<CustomerBankAccounts<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CustomerBankAccounts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CustomerAccountNumber: customerAccountNumber!,
            BankAccountId: bankAccountId!
          }
    );
  }
}
