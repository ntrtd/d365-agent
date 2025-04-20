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
import { BankAccountDisbursementsDualWrite } from './BankAccountDisbursementsDualWrite';

/**
 * Request builder class for operations supported on the {@link BankAccountDisbursementsDualWrite} entity.
 */
export class BankAccountDisbursementsDualWriteRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BankAccountDisbursementsDualWrite<T>, T> {
  /**
   * Returns a request builder for querying all `BankAccountDisbursementsDualWrite` entities.
   * @returns A request builder for creating requests to retrieve all `BankAccountDisbursementsDualWrite` entities.
   */
  getAll(): GetAllRequestBuilder<BankAccountDisbursementsDualWrite<T>, T> {
    return new GetAllRequestBuilder<BankAccountDisbursementsDualWrite<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BankAccountDisbursementsDualWrite` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BankAccountDisbursementsDualWrite`.
   */
  create(
    entity: BankAccountDisbursementsDualWrite<T>
  ): CreateRequestBuilder<BankAccountDisbursementsDualWrite<T>, T> {
    return new CreateRequestBuilder<BankAccountDisbursementsDualWrite<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BankAccountDisbursementsDualWrite` entity based on its keys.
   * @param dataAreaId Key property. See {@link BankAccountDisbursementsDualWrite.dataAreaId}.
   * @param personnelNumber Key property. See {@link BankAccountDisbursementsDualWrite.personnelNumber}.
   * @param accountIdentificationId Key property. See {@link BankAccountDisbursementsDualWrite.accountIdentificationId}.
   * @returns A request builder for creating requests to retrieve one `BankAccountDisbursementsDualWrite` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    accountIdentificationId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BankAccountDisbursementsDualWrite<T>, T> {
    return new GetByKeyRequestBuilder<BankAccountDisbursementsDualWrite<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PersonnelNumber: personnelNumber,
        AccountIdentificationId: accountIdentificationId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BankAccountDisbursementsDualWrite`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BankAccountDisbursementsDualWrite`.
   */
  update(
    entity: BankAccountDisbursementsDualWrite<T>
  ): UpdateRequestBuilder<BankAccountDisbursementsDualWrite<T>, T> {
    return new UpdateRequestBuilder<BankAccountDisbursementsDualWrite<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BankAccountDisbursementsDualWrite`.
   * @param dataAreaId Key property. See {@link BankAccountDisbursementsDualWrite.dataAreaId}.
   * @param personnelNumber Key property. See {@link BankAccountDisbursementsDualWrite.personnelNumber}.
   * @param accountIdentificationId Key property. See {@link BankAccountDisbursementsDualWrite.accountIdentificationId}.
   * @returns A request builder for creating requests that delete an entity of type `BankAccountDisbursementsDualWrite`.
   */
  delete(
    dataAreaId: string,
    personnelNumber: string,
    accountIdentificationId: string
  ): DeleteRequestBuilder<BankAccountDisbursementsDualWrite<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BankAccountDisbursementsDualWrite`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BankAccountDisbursementsDualWrite` by taking the entity as a parameter.
   */
  delete(
    entity: BankAccountDisbursementsDualWrite<T>
  ): DeleteRequestBuilder<BankAccountDisbursementsDualWrite<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    personnelNumber?: string,
    accountIdentificationId?: string
  ): DeleteRequestBuilder<BankAccountDisbursementsDualWrite<T>, T> {
    return new DeleteRequestBuilder<BankAccountDisbursementsDualWrite<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BankAccountDisbursementsDualWrite
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PersonnelNumber: personnelNumber!,
            AccountIdentificationId: accountIdentificationId!
          }
    );
  }
}
