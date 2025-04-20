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
import { AssetLeaseLedgerToLeaseRelationBiEntities } from './AssetLeaseLedgerToLeaseRelationBiEntities';

/**
 * Request builder class for operations supported on the {@link AssetLeaseLedgerToLeaseRelationBiEntities} entity.
 */
export class AssetLeaseLedgerToLeaseRelationBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetLeaseLedgerToLeaseRelationBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `AssetLeaseLedgerToLeaseRelationBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `AssetLeaseLedgerToLeaseRelationBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<
    AssetLeaseLedgerToLeaseRelationBiEntities<T>,
    T
  > {
    return new GetAllRequestBuilder<
      AssetLeaseLedgerToLeaseRelationBiEntities<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetLeaseLedgerToLeaseRelationBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetLeaseLedgerToLeaseRelationBiEntities`.
   */
  create(
    entity: AssetLeaseLedgerToLeaseRelationBiEntities<T>
  ): CreateRequestBuilder<AssetLeaseLedgerToLeaseRelationBiEntities<T>, T> {
    return new CreateRequestBuilder<
      AssetLeaseLedgerToLeaseRelationBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AssetLeaseLedgerToLeaseRelationBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetLeaseLedgerToLeaseRelationBiEntities.dataAreaId}.
   * @param journalNum Key property. See {@link AssetLeaseLedgerToLeaseRelationBiEntities.journalNum}.
   * @returns A request builder for creating requests to retrieve one `AssetLeaseLedgerToLeaseRelationBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    journalNum: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AssetLeaseLedgerToLeaseRelationBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<
      AssetLeaseLedgerToLeaseRelationBiEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      JournalNum: journalNum
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetLeaseLedgerToLeaseRelationBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetLeaseLedgerToLeaseRelationBiEntities`.
   */
  update(
    entity: AssetLeaseLedgerToLeaseRelationBiEntities<T>
  ): UpdateRequestBuilder<AssetLeaseLedgerToLeaseRelationBiEntities<T>, T> {
    return new UpdateRequestBuilder<
      AssetLeaseLedgerToLeaseRelationBiEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetLeaseLedgerToLeaseRelationBiEntities`.
   * @param dataAreaId Key property. See {@link AssetLeaseLedgerToLeaseRelationBiEntities.dataAreaId}.
   * @param journalNum Key property. See {@link AssetLeaseLedgerToLeaseRelationBiEntities.journalNum}.
   * @returns A request builder for creating requests that delete an entity of type `AssetLeaseLedgerToLeaseRelationBiEntities`.
   */
  delete(
    dataAreaId: string,
    journalNum: string
  ): DeleteRequestBuilder<AssetLeaseLedgerToLeaseRelationBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetLeaseLedgerToLeaseRelationBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetLeaseLedgerToLeaseRelationBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: AssetLeaseLedgerToLeaseRelationBiEntities<T>
  ): DeleteRequestBuilder<AssetLeaseLedgerToLeaseRelationBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    journalNum?: string
  ): DeleteRequestBuilder<AssetLeaseLedgerToLeaseRelationBiEntities<T>, T> {
    return new DeleteRequestBuilder<
      AssetLeaseLedgerToLeaseRelationBiEntities<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetLeaseLedgerToLeaseRelationBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JournalNum: journalNum!
          }
    );
  }
}
