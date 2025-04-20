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
import { FixedAssetPostingProfiles } from './FixedAssetPostingProfiles';
import { AssetTransType } from './AssetTransType';
import { TableGroupAll } from './TableGroupAll';

/**
 * Request builder class for operations supported on the {@link FixedAssetPostingProfiles} entity.
 */
export class FixedAssetPostingProfilesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FixedAssetPostingProfiles<T>, T> {
  /**
   * Returns a request builder for querying all `FixedAssetPostingProfiles` entities.
   * @returns A request builder for creating requests to retrieve all `FixedAssetPostingProfiles` entities.
   */
  getAll(): GetAllRequestBuilder<FixedAssetPostingProfiles<T>, T> {
    return new GetAllRequestBuilder<FixedAssetPostingProfiles<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `FixedAssetPostingProfiles` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FixedAssetPostingProfiles`.
   */
  create(
    entity: FixedAssetPostingProfiles<T>
  ): CreateRequestBuilder<FixedAssetPostingProfiles<T>, T> {
    return new CreateRequestBuilder<FixedAssetPostingProfiles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `FixedAssetPostingProfiles` entity based on its keys.
   * @param dataAreaId Key property. See {@link FixedAssetPostingProfiles.dataAreaId}.
   * @param postingProfileId Key property. See {@link FixedAssetPostingProfiles.postingProfileId}.
   * @param transactionType Key property. See {@link FixedAssetPostingProfiles.transactionType}.
   * @param valueModelId Key property. See {@link FixedAssetPostingProfiles.valueModelId}.
   * @param accountGroupings Key property. See {@link FixedAssetPostingProfiles.accountGroupings}.
   * @param accountRelation Key property. See {@link FixedAssetPostingProfiles.accountRelation}.
   * @returns A request builder for creating requests to retrieve one `FixedAssetPostingProfiles` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    postingProfileId: DeserializedType<T, 'Edm.String'>,
    transactionType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.AssetTransType'
    >,
    valueModelId: DeserializedType<T, 'Edm.String'>,
    accountGroupings: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.TableGroupAll'
    >,
    accountRelation: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<FixedAssetPostingProfiles<T>, T> {
    return new GetByKeyRequestBuilder<FixedAssetPostingProfiles<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PostingProfileId: postingProfileId,
        TransactionType: transactionType,
        ValueModelId: valueModelId,
        AccountGroupings: accountGroupings,
        AccountRelation: accountRelation
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `FixedAssetPostingProfiles`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FixedAssetPostingProfiles`.
   */
  update(
    entity: FixedAssetPostingProfiles<T>
  ): UpdateRequestBuilder<FixedAssetPostingProfiles<T>, T> {
    return new UpdateRequestBuilder<FixedAssetPostingProfiles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `FixedAssetPostingProfiles`.
   * @param dataAreaId Key property. See {@link FixedAssetPostingProfiles.dataAreaId}.
   * @param postingProfileId Key property. See {@link FixedAssetPostingProfiles.postingProfileId}.
   * @param transactionType Key property. See {@link FixedAssetPostingProfiles.transactionType}.
   * @param valueModelId Key property. See {@link FixedAssetPostingProfiles.valueModelId}.
   * @param accountGroupings Key property. See {@link FixedAssetPostingProfiles.accountGroupings}.
   * @param accountRelation Key property. See {@link FixedAssetPostingProfiles.accountRelation}.
   * @returns A request builder for creating requests that delete an entity of type `FixedAssetPostingProfiles`.
   */
  delete(
    dataAreaId: string,
    postingProfileId: string,
    transactionType: AssetTransType,
    valueModelId: string,
    accountGroupings: TableGroupAll,
    accountRelation: string
  ): DeleteRequestBuilder<FixedAssetPostingProfiles<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FixedAssetPostingProfiles`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FixedAssetPostingProfiles` by taking the entity as a parameter.
   */
  delete(
    entity: FixedAssetPostingProfiles<T>
  ): DeleteRequestBuilder<FixedAssetPostingProfiles<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    postingProfileId?: string,
    transactionType?: AssetTransType,
    valueModelId?: string,
    accountGroupings?: TableGroupAll,
    accountRelation?: string
  ): DeleteRequestBuilder<FixedAssetPostingProfiles<T>, T> {
    return new DeleteRequestBuilder<FixedAssetPostingProfiles<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof FixedAssetPostingProfiles
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PostingProfileId: postingProfileId!,
            TransactionType: transactionType!,
            ValueModelId: valueModelId!,
            AccountGroupings: accountGroupings!,
            AccountRelation: accountRelation!
          }
    );
  }
}
