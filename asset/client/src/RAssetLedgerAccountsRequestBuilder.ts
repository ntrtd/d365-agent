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
import { RAssetLedgerAccounts } from './RAssetLedgerAccounts';
import { RAssetTransType } from './RAssetTransType';
import { RAssetTableGroupAllStandard } from './RAssetTableGroupAllStandard';

/**
 * Request builder class for operations supported on the {@link RAssetLedgerAccounts} entity.
 */
export class RAssetLedgerAccountsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RAssetLedgerAccounts<T>, T> {
  /**
   * Returns a request builder for querying all `RAssetLedgerAccounts` entities.
   * @returns A request builder for creating requests to retrieve all `RAssetLedgerAccounts` entities.
   */
  getAll(): GetAllRequestBuilder<RAssetLedgerAccounts<T>, T> {
    return new GetAllRequestBuilder<RAssetLedgerAccounts<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RAssetLedgerAccounts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RAssetLedgerAccounts`.
   */
  create(
    entity: RAssetLedgerAccounts<T>
  ): CreateRequestBuilder<RAssetLedgerAccounts<T>, T> {
    return new CreateRequestBuilder<RAssetLedgerAccounts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RAssetLedgerAccounts` entity based on its keys.
   * @param dataAreaId Key property. See {@link RAssetLedgerAccounts.dataAreaId}.
   * @param accountGroupNumber Key property. See {@link RAssetLedgerAccounts.accountGroupNumber}.
   * @param transactionType Key property. See {@link RAssetLedgerAccounts.transactionType}.
   * @param groupings Key property. See {@link RAssetLedgerAccounts.groupings}.
   * @param postingProfile Key property. See {@link RAssetLedgerAccounts.postingProfile}.
   * @returns A request builder for creating requests to retrieve one `RAssetLedgerAccounts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    accountGroupNumber: DeserializedType<T, 'Edm.String'>,
    transactionType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.RAssetTransType'
    >,
    groupings: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.RAssetTableGroupAllStandard'
    >,
    postingProfile: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RAssetLedgerAccounts<T>, T> {
    return new GetByKeyRequestBuilder<RAssetLedgerAccounts<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        AccountGroupNumber: accountGroupNumber,
        TransactionType: transactionType,
        Groupings: groupings,
        PostingProfile: postingProfile
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RAssetLedgerAccounts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RAssetLedgerAccounts`.
   */
  update(
    entity: RAssetLedgerAccounts<T>
  ): UpdateRequestBuilder<RAssetLedgerAccounts<T>, T> {
    return new UpdateRequestBuilder<RAssetLedgerAccounts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RAssetLedgerAccounts`.
   * @param dataAreaId Key property. See {@link RAssetLedgerAccounts.dataAreaId}.
   * @param accountGroupNumber Key property. See {@link RAssetLedgerAccounts.accountGroupNumber}.
   * @param transactionType Key property. See {@link RAssetLedgerAccounts.transactionType}.
   * @param groupings Key property. See {@link RAssetLedgerAccounts.groupings}.
   * @param postingProfile Key property. See {@link RAssetLedgerAccounts.postingProfile}.
   * @returns A request builder for creating requests that delete an entity of type `RAssetLedgerAccounts`.
   */
  delete(
    dataAreaId: string,
    accountGroupNumber: string,
    transactionType: RAssetTransType,
    groupings: RAssetTableGroupAllStandard,
    postingProfile: string
  ): DeleteRequestBuilder<RAssetLedgerAccounts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RAssetLedgerAccounts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RAssetLedgerAccounts` by taking the entity as a parameter.
   */
  delete(
    entity: RAssetLedgerAccounts<T>
  ): DeleteRequestBuilder<RAssetLedgerAccounts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    accountGroupNumber?: string,
    transactionType?: RAssetTransType,
    groupings?: RAssetTableGroupAllStandard,
    postingProfile?: string
  ): DeleteRequestBuilder<RAssetLedgerAccounts<T>, T> {
    return new DeleteRequestBuilder<RAssetLedgerAccounts<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RAssetLedgerAccounts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            AccountGroupNumber: accountGroupNumber!,
            TransactionType: transactionType!,
            Groupings: groupings!,
            PostingProfile: postingProfile!
          }
    );
  }
}
