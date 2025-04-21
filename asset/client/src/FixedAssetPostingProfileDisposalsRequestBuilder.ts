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
import { FixedAssetPostingProfileDisposals } from './FixedAssetPostingProfileDisposals';
import { AssetSoldScrap } from './AssetSoldScrap';
import { TableGroupAll } from './TableGroupAll';
import { AssetPostValue } from './AssetPostValue';
import { AssetPostType } from './AssetPostType';

/**
 * Request builder class for operations supported on the {@link FixedAssetPostingProfileDisposals} entity.
 */
export class FixedAssetPostingProfileDisposalsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FixedAssetPostingProfileDisposals<T>, T> {
  /**
   * Returns a request builder for querying all `FixedAssetPostingProfileDisposals` entities.
   * @returns A request builder for creating requests to retrieve all `FixedAssetPostingProfileDisposals` entities.
   */
  getAll(): GetAllRequestBuilder<FixedAssetPostingProfileDisposals<T>, T> {
    return new GetAllRequestBuilder<FixedAssetPostingProfileDisposals<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `FixedAssetPostingProfileDisposals` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FixedAssetPostingProfileDisposals`.
   */
  create(
    entity: FixedAssetPostingProfileDisposals<T>
  ): CreateRequestBuilder<FixedAssetPostingProfileDisposals<T>, T> {
    return new CreateRequestBuilder<FixedAssetPostingProfileDisposals<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `FixedAssetPostingProfileDisposals` entity based on its keys.
   * @param dataAreaId Key property. See {@link FixedAssetPostingProfileDisposals.dataAreaId}.
   * @param postingProfileId Key property. See {@link FixedAssetPostingProfileDisposals.postingProfileId}.
   * @param saleOrScrap Key property. See {@link FixedAssetPostingProfileDisposals.saleOrScrap}.
   * @param valueModelId Key property. See {@link FixedAssetPostingProfileDisposals.valueModelId}.
   * @param accountGroupings Key property. See {@link FixedAssetPostingProfileDisposals.accountGroupings}.
   * @param accountRelation Key property. See {@link FixedAssetPostingProfileDisposals.accountRelation}.
   * @param postValue Key property. See {@link FixedAssetPostingProfileDisposals.postValue}.
   * @param salesValueType Key property. See {@link FixedAssetPostingProfileDisposals.salesValueType}.
   * @returns A request builder for creating requests to retrieve one `FixedAssetPostingProfileDisposals` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    postingProfileId: DeserializedType<T, 'Edm.String'>,
    saleOrScrap: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.AssetSoldScrap'
    >,
    valueModelId: DeserializedType<T, 'Edm.String'>,
    accountGroupings: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.TableGroupAll'
    >,
    accountRelation: DeserializedType<T, 'Edm.String'>,
    postValue: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.AssetPostValue'
    >,
    salesValueType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.AssetPostType'
    >
  ): GetByKeyRequestBuilder<FixedAssetPostingProfileDisposals<T>, T> {
    return new GetByKeyRequestBuilder<FixedAssetPostingProfileDisposals<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PostingProfileId: postingProfileId,
        SaleOrScrap: saleOrScrap,
        ValueModelId: valueModelId,
        AccountGroupings: accountGroupings,
        AccountRelation: accountRelation,
        PostValue: postValue,
        SalesValueType: salesValueType
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `FixedAssetPostingProfileDisposals`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FixedAssetPostingProfileDisposals`.
   */
  update(
    entity: FixedAssetPostingProfileDisposals<T>
  ): UpdateRequestBuilder<FixedAssetPostingProfileDisposals<T>, T> {
    return new UpdateRequestBuilder<FixedAssetPostingProfileDisposals<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `FixedAssetPostingProfileDisposals`.
   * @param dataAreaId Key property. See {@link FixedAssetPostingProfileDisposals.dataAreaId}.
   * @param postingProfileId Key property. See {@link FixedAssetPostingProfileDisposals.postingProfileId}.
   * @param saleOrScrap Key property. See {@link FixedAssetPostingProfileDisposals.saleOrScrap}.
   * @param valueModelId Key property. See {@link FixedAssetPostingProfileDisposals.valueModelId}.
   * @param accountGroupings Key property. See {@link FixedAssetPostingProfileDisposals.accountGroupings}.
   * @param accountRelation Key property. See {@link FixedAssetPostingProfileDisposals.accountRelation}.
   * @param postValue Key property. See {@link FixedAssetPostingProfileDisposals.postValue}.
   * @param salesValueType Key property. See {@link FixedAssetPostingProfileDisposals.salesValueType}.
   * @returns A request builder for creating requests that delete an entity of type `FixedAssetPostingProfileDisposals`.
   */
  delete(
    dataAreaId: string,
    postingProfileId: string,
    saleOrScrap: AssetSoldScrap,
    valueModelId: string,
    accountGroupings: TableGroupAll,
    accountRelation: string,
    postValue: AssetPostValue,
    salesValueType: AssetPostType
  ): DeleteRequestBuilder<FixedAssetPostingProfileDisposals<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FixedAssetPostingProfileDisposals`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FixedAssetPostingProfileDisposals` by taking the entity as a parameter.
   */
  delete(
    entity: FixedAssetPostingProfileDisposals<T>
  ): DeleteRequestBuilder<FixedAssetPostingProfileDisposals<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    postingProfileId?: string,
    saleOrScrap?: AssetSoldScrap,
    valueModelId?: string,
    accountGroupings?: TableGroupAll,
    accountRelation?: string,
    postValue?: AssetPostValue,
    salesValueType?: AssetPostType
  ): DeleteRequestBuilder<FixedAssetPostingProfileDisposals<T>, T> {
    return new DeleteRequestBuilder<FixedAssetPostingProfileDisposals<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof FixedAssetPostingProfileDisposals
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PostingProfileId: postingProfileId!,
            SaleOrScrap: saleOrScrap!,
            ValueModelId: valueModelId!,
            AccountGroupings: accountGroupings!,
            AccountRelation: accountRelation!,
            PostValue: postValue!,
            SalesValueType: salesValueType!
          }
    );
  }
}
