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
import { DeferralsLedgerAccounts } from './DeferralsLedgerAccounts';
import { RDeferralsTransType } from './RDeferralsTransType';
import { RDeferralsTableGroupAllBook } from './RDeferralsTableGroupAllBook';
import { RDeferralsPostValue } from './RDeferralsPostValue';

/**
 * Request builder class for operations supported on the {@link DeferralsLedgerAccounts} entity.
 */
export class DeferralsLedgerAccountsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DeferralsLedgerAccounts<T>, T> {
  /**
   * Returns a request builder for querying all `DeferralsLedgerAccounts` entities.
   * @returns A request builder for creating requests to retrieve all `DeferralsLedgerAccounts` entities.
   */
  getAll(): GetAllRequestBuilder<DeferralsLedgerAccounts<T>, T> {
    return new GetAllRequestBuilder<DeferralsLedgerAccounts<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DeferralsLedgerAccounts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DeferralsLedgerAccounts`.
   */
  create(
    entity: DeferralsLedgerAccounts<T>
  ): CreateRequestBuilder<DeferralsLedgerAccounts<T>, T> {
    return new CreateRequestBuilder<DeferralsLedgerAccounts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DeferralsLedgerAccounts` entity based on its keys.
   * @param dataAreaId Key property. See {@link DeferralsLedgerAccounts.dataAreaId}.
   * @param num Key property. See {@link DeferralsLedgerAccounts.num}.
   * @param transactionType Key property. See {@link DeferralsLedgerAccounts.transactionType}.
   * @param groupings Key property. See {@link DeferralsLedgerAccounts.groupings}.
   * @param postingProfile Key property. See {@link DeferralsLedgerAccounts.postingProfile}.
   * @param postValue Key property. See {@link DeferralsLedgerAccounts.postValue}.
   * @returns A request builder for creating requests to retrieve one `DeferralsLedgerAccounts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    num: DeserializedType<T, 'Edm.String'>,
    transactionType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.RDeferralsTransType'
    >,
    groupings: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.RDeferralsTableGroupAllBook'
    >,
    postingProfile: DeserializedType<T, 'Edm.String'>,
    postValue: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.RDeferralsPostValue'
    >
  ): GetByKeyRequestBuilder<DeferralsLedgerAccounts<T>, T> {
    return new GetByKeyRequestBuilder<DeferralsLedgerAccounts<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Num: num,
        TransactionType: transactionType,
        Groupings: groupings,
        PostingProfile: postingProfile,
        PostValue: postValue
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DeferralsLedgerAccounts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DeferralsLedgerAccounts`.
   */
  update(
    entity: DeferralsLedgerAccounts<T>
  ): UpdateRequestBuilder<DeferralsLedgerAccounts<T>, T> {
    return new UpdateRequestBuilder<DeferralsLedgerAccounts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DeferralsLedgerAccounts`.
   * @param dataAreaId Key property. See {@link DeferralsLedgerAccounts.dataAreaId}.
   * @param num Key property. See {@link DeferralsLedgerAccounts.num}.
   * @param transactionType Key property. See {@link DeferralsLedgerAccounts.transactionType}.
   * @param groupings Key property. See {@link DeferralsLedgerAccounts.groupings}.
   * @param postingProfile Key property. See {@link DeferralsLedgerAccounts.postingProfile}.
   * @param postValue Key property. See {@link DeferralsLedgerAccounts.postValue}.
   * @returns A request builder for creating requests that delete an entity of type `DeferralsLedgerAccounts`.
   */
  delete(
    dataAreaId: string,
    num: string,
    transactionType: RDeferralsTransType,
    groupings: RDeferralsTableGroupAllBook,
    postingProfile: string,
    postValue: RDeferralsPostValue
  ): DeleteRequestBuilder<DeferralsLedgerAccounts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DeferralsLedgerAccounts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DeferralsLedgerAccounts` by taking the entity as a parameter.
   */
  delete(
    entity: DeferralsLedgerAccounts<T>
  ): DeleteRequestBuilder<DeferralsLedgerAccounts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    num?: string,
    transactionType?: RDeferralsTransType,
    groupings?: RDeferralsTableGroupAllBook,
    postingProfile?: string,
    postValue?: RDeferralsPostValue
  ): DeleteRequestBuilder<DeferralsLedgerAccounts<T>, T> {
    return new DeleteRequestBuilder<DeferralsLedgerAccounts<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DeferralsLedgerAccounts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Num: num!,
            TransactionType: transactionType!,
            Groupings: groupings!,
            PostingProfile: postingProfile!,
            PostValue: postValue!
          }
    );
  }
}
