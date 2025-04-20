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
import { PayIntV1BankAccountDisbursements } from './PayIntV1BankAccountDisbursements';

/**
 * Request builder class for operations supported on the {@link PayIntV1BankAccountDisbursements} entity.
 */
export class PayIntV1BankAccountDisbursementsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PayIntV1BankAccountDisbursements<T>, T> {
  /**
   * Returns a request builder for querying all `PayIntV1BankAccountDisbursements` entities.
   * @returns A request builder for creating requests to retrieve all `PayIntV1BankAccountDisbursements` entities.
   */
  getAll(): GetAllRequestBuilder<PayIntV1BankAccountDisbursements<T>, T> {
    return new GetAllRequestBuilder<PayIntV1BankAccountDisbursements<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PayIntV1BankAccountDisbursements` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayIntV1BankAccountDisbursements`.
   */
  create(
    entity: PayIntV1BankAccountDisbursements<T>
  ): CreateRequestBuilder<PayIntV1BankAccountDisbursements<T>, T> {
    return new CreateRequestBuilder<PayIntV1BankAccountDisbursements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PayIntV1BankAccountDisbursements` entity based on its keys.
   * @param personnelNumber Key property. See {@link PayIntV1BankAccountDisbursements.personnelNumber}.
   * @param accountIdentificationId Key property. See {@link PayIntV1BankAccountDisbursements.accountIdentificationId}.
   * @param company Key property. See {@link PayIntV1BankAccountDisbursements.company}.
   * @returns A request builder for creating requests to retrieve one `PayIntV1BankAccountDisbursements` entity based on its keys.
   */
  getByKey(
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    accountIdentificationId: DeserializedType<T, 'Edm.String'>,
    company: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PayIntV1BankAccountDisbursements<T>, T> {
    return new GetByKeyRequestBuilder<PayIntV1BankAccountDisbursements<T>, T>(
      this.entityApi,
      {
        PersonnelNumber: personnelNumber,
        AccountIdentificationId: accountIdentificationId,
        Company: company
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PayIntV1BankAccountDisbursements`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayIntV1BankAccountDisbursements`.
   */
  update(
    entity: PayIntV1BankAccountDisbursements<T>
  ): UpdateRequestBuilder<PayIntV1BankAccountDisbursements<T>, T> {
    return new UpdateRequestBuilder<PayIntV1BankAccountDisbursements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PayIntV1BankAccountDisbursements`.
   * @param personnelNumber Key property. See {@link PayIntV1BankAccountDisbursements.personnelNumber}.
   * @param accountIdentificationId Key property. See {@link PayIntV1BankAccountDisbursements.accountIdentificationId}.
   * @param company Key property. See {@link PayIntV1BankAccountDisbursements.company}.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1BankAccountDisbursements`.
   */
  delete(
    personnelNumber: string,
    accountIdentificationId: string,
    company: string
  ): DeleteRequestBuilder<PayIntV1BankAccountDisbursements<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PayIntV1BankAccountDisbursements`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1BankAccountDisbursements` by taking the entity as a parameter.
   */
  delete(
    entity: PayIntV1BankAccountDisbursements<T>
  ): DeleteRequestBuilder<PayIntV1BankAccountDisbursements<T>, T>;
  delete(
    personnelNumberOrEntity: any,
    accountIdentificationId?: string,
    company?: string
  ): DeleteRequestBuilder<PayIntV1BankAccountDisbursements<T>, T> {
    return new DeleteRequestBuilder<PayIntV1BankAccountDisbursements<T>, T>(
      this.entityApi,
      personnelNumberOrEntity instanceof PayIntV1BankAccountDisbursements
        ? personnelNumberOrEntity
        : {
            PersonnelNumber: personnelNumberOrEntity!,
            AccountIdentificationId: accountIdentificationId!,
            Company: company!
          }
    );
  }
}
