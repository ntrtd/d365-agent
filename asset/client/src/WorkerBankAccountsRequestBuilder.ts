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
import { WorkerBankAccounts } from './WorkerBankAccounts';

/**
 * Request builder class for operations supported on the {@link WorkerBankAccounts} entity.
 */
export class WorkerBankAccountsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WorkerBankAccounts<T>, T> {
  /**
   * Returns a request builder for querying all `WorkerBankAccounts` entities.
   * @returns A request builder for creating requests to retrieve all `WorkerBankAccounts` entities.
   */
  getAll(): GetAllRequestBuilder<WorkerBankAccounts<T>, T> {
    return new GetAllRequestBuilder<WorkerBankAccounts<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `WorkerBankAccounts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WorkerBankAccounts`.
   */
  create(
    entity: WorkerBankAccounts<T>
  ): CreateRequestBuilder<WorkerBankAccounts<T>, T> {
    return new CreateRequestBuilder<WorkerBankAccounts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WorkerBankAccounts` entity based on its keys.
   * @param personnelNumber Key property. See {@link WorkerBankAccounts.personnelNumber}.
   * @param accountIdentification Key property. See {@link WorkerBankAccounts.accountIdentification}.
   * @returns A request builder for creating requests to retrieve one `WorkerBankAccounts` entity based on its keys.
   */
  getByKey(
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    accountIdentification: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WorkerBankAccounts<T>, T> {
    return new GetByKeyRequestBuilder<WorkerBankAccounts<T>, T>(
      this.entityApi,
      {
        PersonnelNumber: personnelNumber,
        AccountIdentification: accountIdentification
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WorkerBankAccounts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WorkerBankAccounts`.
   */
  update(
    entity: WorkerBankAccounts<T>
  ): UpdateRequestBuilder<WorkerBankAccounts<T>, T> {
    return new UpdateRequestBuilder<WorkerBankAccounts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WorkerBankAccounts`.
   * @param personnelNumber Key property. See {@link WorkerBankAccounts.personnelNumber}.
   * @param accountIdentification Key property. See {@link WorkerBankAccounts.accountIdentification}.
   * @returns A request builder for creating requests that delete an entity of type `WorkerBankAccounts`.
   */
  delete(
    personnelNumber: string,
    accountIdentification: string
  ): DeleteRequestBuilder<WorkerBankAccounts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WorkerBankAccounts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WorkerBankAccounts` by taking the entity as a parameter.
   */
  delete(
    entity: WorkerBankAccounts<T>
  ): DeleteRequestBuilder<WorkerBankAccounts<T>, T>;
  delete(
    personnelNumberOrEntity: any,
    accountIdentification?: string
  ): DeleteRequestBuilder<WorkerBankAccounts<T>, T> {
    return new DeleteRequestBuilder<WorkerBankAccounts<T>, T>(
      this.entityApi,
      personnelNumberOrEntity instanceof WorkerBankAccounts
        ? personnelNumberOrEntity
        : {
            PersonnelNumber: personnelNumberOrEntity!,
            AccountIdentification: accountIdentification!
          }
    );
  }
}
