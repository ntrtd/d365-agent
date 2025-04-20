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
import { PayIntV1WorkerBankAccounts } from './PayIntV1WorkerBankAccounts';

/**
 * Request builder class for operations supported on the {@link PayIntV1WorkerBankAccounts} entity.
 */
export class PayIntV1WorkerBankAccountsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PayIntV1WorkerBankAccounts<T>, T> {
  /**
   * Returns a request builder for querying all `PayIntV1WorkerBankAccounts` entities.
   * @returns A request builder for creating requests to retrieve all `PayIntV1WorkerBankAccounts` entities.
   */
  getAll(): GetAllRequestBuilder<PayIntV1WorkerBankAccounts<T>, T> {
    return new GetAllRequestBuilder<PayIntV1WorkerBankAccounts<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PayIntV1WorkerBankAccounts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayIntV1WorkerBankAccounts`.
   */
  create(
    entity: PayIntV1WorkerBankAccounts<T>
  ): CreateRequestBuilder<PayIntV1WorkerBankAccounts<T>, T> {
    return new CreateRequestBuilder<PayIntV1WorkerBankAccounts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PayIntV1WorkerBankAccounts` entity based on its keys.
   * @param personnelNumber Key property. See {@link PayIntV1WorkerBankAccounts.personnelNumber}.
   * @param accountIdentification Key property. See {@link PayIntV1WorkerBankAccounts.accountIdentification}.
   * @returns A request builder for creating requests to retrieve one `PayIntV1WorkerBankAccounts` entity based on its keys.
   */
  getByKey(
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    accountIdentification: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PayIntV1WorkerBankAccounts<T>, T> {
    return new GetByKeyRequestBuilder<PayIntV1WorkerBankAccounts<T>, T>(
      this.entityApi,
      {
        PersonnelNumber: personnelNumber,
        AccountIdentification: accountIdentification
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PayIntV1WorkerBankAccounts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayIntV1WorkerBankAccounts`.
   */
  update(
    entity: PayIntV1WorkerBankAccounts<T>
  ): UpdateRequestBuilder<PayIntV1WorkerBankAccounts<T>, T> {
    return new UpdateRequestBuilder<PayIntV1WorkerBankAccounts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PayIntV1WorkerBankAccounts`.
   * @param personnelNumber Key property. See {@link PayIntV1WorkerBankAccounts.personnelNumber}.
   * @param accountIdentification Key property. See {@link PayIntV1WorkerBankAccounts.accountIdentification}.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1WorkerBankAccounts`.
   */
  delete(
    personnelNumber: string,
    accountIdentification: string
  ): DeleteRequestBuilder<PayIntV1WorkerBankAccounts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PayIntV1WorkerBankAccounts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1WorkerBankAccounts` by taking the entity as a parameter.
   */
  delete(
    entity: PayIntV1WorkerBankAccounts<T>
  ): DeleteRequestBuilder<PayIntV1WorkerBankAccounts<T>, T>;
  delete(
    personnelNumberOrEntity: any,
    accountIdentification?: string
  ): DeleteRequestBuilder<PayIntV1WorkerBankAccounts<T>, T> {
    return new DeleteRequestBuilder<PayIntV1WorkerBankAccounts<T>, T>(
      this.entityApi,
      personnelNumberOrEntity instanceof PayIntV1WorkerBankAccounts
        ? personnelNumberOrEntity
        : {
            PersonnelNumber: personnelNumberOrEntity!,
            AccountIdentification: accountIdentification!
          }
    );
  }
}
