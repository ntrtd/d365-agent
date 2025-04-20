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
import { LedgerAutomaticTransactionAccounts } from './LedgerAutomaticTransactionAccounts';
import { LedgerPostingType } from './LedgerPostingType';

/**
 * Request builder class for operations supported on the {@link LedgerAutomaticTransactionAccounts} entity.
 */
export class LedgerAutomaticTransactionAccountsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LedgerAutomaticTransactionAccounts<T>, T> {
  /**
   * Returns a request builder for querying all `LedgerAutomaticTransactionAccounts` entities.
   * @returns A request builder for creating requests to retrieve all `LedgerAutomaticTransactionAccounts` entities.
   */
  getAll(): GetAllRequestBuilder<LedgerAutomaticTransactionAccounts<T>, T> {
    return new GetAllRequestBuilder<LedgerAutomaticTransactionAccounts<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LedgerAutomaticTransactionAccounts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LedgerAutomaticTransactionAccounts`.
   */
  create(
    entity: LedgerAutomaticTransactionAccounts<T>
  ): CreateRequestBuilder<LedgerAutomaticTransactionAccounts<T>, T> {
    return new CreateRequestBuilder<LedgerAutomaticTransactionAccounts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LedgerAutomaticTransactionAccounts` entity based on its keys.
   * @param dataAreaId Key property. See {@link LedgerAutomaticTransactionAccounts.dataAreaId}.
   * @param postingType Key property. See {@link LedgerAutomaticTransactionAccounts.postingType}.
   * @returns A request builder for creating requests to retrieve one `LedgerAutomaticTransactionAccounts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    postingType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.LedgerPostingType'
    >
  ): GetByKeyRequestBuilder<LedgerAutomaticTransactionAccounts<T>, T> {
    return new GetByKeyRequestBuilder<LedgerAutomaticTransactionAccounts<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PostingType: postingType
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LedgerAutomaticTransactionAccounts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LedgerAutomaticTransactionAccounts`.
   */
  update(
    entity: LedgerAutomaticTransactionAccounts<T>
  ): UpdateRequestBuilder<LedgerAutomaticTransactionAccounts<T>, T> {
    return new UpdateRequestBuilder<LedgerAutomaticTransactionAccounts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LedgerAutomaticTransactionAccounts`.
   * @param dataAreaId Key property. See {@link LedgerAutomaticTransactionAccounts.dataAreaId}.
   * @param postingType Key property. See {@link LedgerAutomaticTransactionAccounts.postingType}.
   * @returns A request builder for creating requests that delete an entity of type `LedgerAutomaticTransactionAccounts`.
   */
  delete(
    dataAreaId: string,
    postingType: LedgerPostingType
  ): DeleteRequestBuilder<LedgerAutomaticTransactionAccounts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LedgerAutomaticTransactionAccounts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LedgerAutomaticTransactionAccounts` by taking the entity as a parameter.
   */
  delete(
    entity: LedgerAutomaticTransactionAccounts<T>
  ): DeleteRequestBuilder<LedgerAutomaticTransactionAccounts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    postingType?: LedgerPostingType
  ): DeleteRequestBuilder<LedgerAutomaticTransactionAccounts<T>, T> {
    return new DeleteRequestBuilder<LedgerAutomaticTransactionAccounts<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LedgerAutomaticTransactionAccounts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PostingType: postingType!
          }
    );
  }
}
