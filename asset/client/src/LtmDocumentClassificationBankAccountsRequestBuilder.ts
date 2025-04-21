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
import { LtmDocumentClassificationBankAccounts } from './LtmDocumentClassificationBankAccounts';

/**
 * Request builder class for operations supported on the {@link LtmDocumentClassificationBankAccounts} entity.
 */
export class LtmDocumentClassificationBankAccountsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LtmDocumentClassificationBankAccounts<T>, T> {
  /**
   * Returns a request builder for querying all `LtmDocumentClassificationBankAccounts` entities.
   * @returns A request builder for creating requests to retrieve all `LtmDocumentClassificationBankAccounts` entities.
   */
  getAll(): GetAllRequestBuilder<LtmDocumentClassificationBankAccounts<T>, T> {
    return new GetAllRequestBuilder<
      LtmDocumentClassificationBankAccounts<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LtmDocumentClassificationBankAccounts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LtmDocumentClassificationBankAccounts`.
   */
  create(
    entity: LtmDocumentClassificationBankAccounts<T>
  ): CreateRequestBuilder<LtmDocumentClassificationBankAccounts<T>, T> {
    return new CreateRequestBuilder<
      LtmDocumentClassificationBankAccounts<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `LtmDocumentClassificationBankAccounts` entity based on its keys.
   * @param dataAreaId Key property. See {@link LtmDocumentClassificationBankAccounts.dataAreaId}.
   * @param bankAccountId Key property. See {@link LtmDocumentClassificationBankAccounts.bankAccountId}.
   * @param documentClassificationId Key property. See {@link LtmDocumentClassificationBankAccounts.documentClassificationId}.
   * @returns A request builder for creating requests to retrieve one `LtmDocumentClassificationBankAccounts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    bankAccountId: DeserializedType<T, 'Edm.String'>,
    documentClassificationId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LtmDocumentClassificationBankAccounts<T>, T> {
    return new GetByKeyRequestBuilder<
      LtmDocumentClassificationBankAccounts<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      BankAccountID: bankAccountId,
      DocumentClassificationId: documentClassificationId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `LtmDocumentClassificationBankAccounts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LtmDocumentClassificationBankAccounts`.
   */
  update(
    entity: LtmDocumentClassificationBankAccounts<T>
  ): UpdateRequestBuilder<LtmDocumentClassificationBankAccounts<T>, T> {
    return new UpdateRequestBuilder<
      LtmDocumentClassificationBankAccounts<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `LtmDocumentClassificationBankAccounts`.
   * @param dataAreaId Key property. See {@link LtmDocumentClassificationBankAccounts.dataAreaId}.
   * @param bankAccountId Key property. See {@link LtmDocumentClassificationBankAccounts.bankAccountId}.
   * @param documentClassificationId Key property. See {@link LtmDocumentClassificationBankAccounts.documentClassificationId}.
   * @returns A request builder for creating requests that delete an entity of type `LtmDocumentClassificationBankAccounts`.
   */
  delete(
    dataAreaId: string,
    bankAccountId: string,
    documentClassificationId: string
  ): DeleteRequestBuilder<LtmDocumentClassificationBankAccounts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LtmDocumentClassificationBankAccounts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LtmDocumentClassificationBankAccounts` by taking the entity as a parameter.
   */
  delete(
    entity: LtmDocumentClassificationBankAccounts<T>
  ): DeleteRequestBuilder<LtmDocumentClassificationBankAccounts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    bankAccountId?: string,
    documentClassificationId?: string
  ): DeleteRequestBuilder<LtmDocumentClassificationBankAccounts<T>, T> {
    return new DeleteRequestBuilder<
      LtmDocumentClassificationBankAccounts<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof LtmDocumentClassificationBankAccounts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            BankAccountID: bankAccountId!,
            DocumentClassificationId: documentClassificationId!
          }
    );
  }
}
