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
import { BankAccountDisbursements } from './BankAccountDisbursements';

/**
 * Request builder class for operations supported on the {@link BankAccountDisbursements} entity.
 */
export class BankAccountDisbursementsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BankAccountDisbursements<T>, T> {
  /**
   * Returns a request builder for querying all `BankAccountDisbursements` entities.
   * @returns A request builder for creating requests to retrieve all `BankAccountDisbursements` entities.
   */
  getAll(): GetAllRequestBuilder<BankAccountDisbursements<T>, T> {
    return new GetAllRequestBuilder<BankAccountDisbursements<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BankAccountDisbursements` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BankAccountDisbursements`.
   */
  create(
    entity: BankAccountDisbursements<T>
  ): CreateRequestBuilder<BankAccountDisbursements<T>, T> {
    return new CreateRequestBuilder<BankAccountDisbursements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BankAccountDisbursements` entity based on its keys.
   * @param personnelNumber Key property. See {@link BankAccountDisbursements.personnelNumber}.
   * @param accountIdentificationId Key property. See {@link BankAccountDisbursements.accountIdentificationId}.
   * @param company Key property. See {@link BankAccountDisbursements.company}.
   * @returns A request builder for creating requests to retrieve one `BankAccountDisbursements` entity based on its keys.
   */
  getByKey(
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    accountIdentificationId: DeserializedType<T, 'Edm.String'>,
    company: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BankAccountDisbursements<T>, T> {
    return new GetByKeyRequestBuilder<BankAccountDisbursements<T>, T>(
      this.entityApi,
      {
        PersonnelNumber: personnelNumber,
        AccountIdentificationId: accountIdentificationId,
        Company: company
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BankAccountDisbursements`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BankAccountDisbursements`.
   */
  update(
    entity: BankAccountDisbursements<T>
  ): UpdateRequestBuilder<BankAccountDisbursements<T>, T> {
    return new UpdateRequestBuilder<BankAccountDisbursements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BankAccountDisbursements`.
   * @param personnelNumber Key property. See {@link BankAccountDisbursements.personnelNumber}.
   * @param accountIdentificationId Key property. See {@link BankAccountDisbursements.accountIdentificationId}.
   * @param company Key property. See {@link BankAccountDisbursements.company}.
   * @returns A request builder for creating requests that delete an entity of type `BankAccountDisbursements`.
   */
  delete(
    personnelNumber: string,
    accountIdentificationId: string,
    company: string
  ): DeleteRequestBuilder<BankAccountDisbursements<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BankAccountDisbursements`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BankAccountDisbursements` by taking the entity as a parameter.
   */
  delete(
    entity: BankAccountDisbursements<T>
  ): DeleteRequestBuilder<BankAccountDisbursements<T>, T>;
  delete(
    personnelNumberOrEntity: any,
    accountIdentificationId?: string,
    company?: string
  ): DeleteRequestBuilder<BankAccountDisbursements<T>, T> {
    return new DeleteRequestBuilder<BankAccountDisbursements<T>, T>(
      this.entityApi,
      personnelNumberOrEntity instanceof BankAccountDisbursements
        ? personnelNumberOrEntity
        : {
            PersonnelNumber: personnelNumberOrEntity!,
            AccountIdentificationId: accountIdentificationId!,
            Company: company!
          }
    );
  }
}
