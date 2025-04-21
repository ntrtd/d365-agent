/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { InventoryJournalTableInBiEntities } from './InventoryJournalTableInBiEntities';

/**
 * Request builder class for operations supported on the {@link InventoryJournalTableInBiEntities} entity.
 */
export class InventoryJournalTableInBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InventoryJournalTableInBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `InventoryJournalTableInBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `InventoryJournalTableInBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<InventoryJournalTableInBiEntities<T>, T> {
    return new GetAllRequestBuilder<InventoryJournalTableInBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `InventoryJournalTableInBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventoryJournalTableInBiEntities`.
   */
  create(
    entity: InventoryJournalTableInBiEntities<T>
  ): CreateRequestBuilder<InventoryJournalTableInBiEntities<T>, T> {
    return new CreateRequestBuilder<InventoryJournalTableInBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InventoryJournalTableInBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link InventoryJournalTableInBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link InventoryJournalTableInBiEntities.sourceKey}.
   * @returns A request builder for creating requests to retrieve one `InventoryJournalTableInBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sourceKey: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<InventoryJournalTableInBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<InventoryJournalTableInBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SourceKey: sourceKey
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InventoryJournalTableInBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventoryJournalTableInBiEntities`.
   */
  update(
    entity: InventoryJournalTableInBiEntities<T>
  ): UpdateRequestBuilder<InventoryJournalTableInBiEntities<T>, T> {
    return new UpdateRequestBuilder<InventoryJournalTableInBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InventoryJournalTableInBiEntities`.
   * @param dataAreaId Key property. See {@link InventoryJournalTableInBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link InventoryJournalTableInBiEntities.sourceKey}.
   * @returns A request builder for creating requests that delete an entity of type `InventoryJournalTableInBiEntities`.
   */
  delete(
    dataAreaId: string,
    sourceKey: BigNumber
  ): DeleteRequestBuilder<InventoryJournalTableInBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InventoryJournalTableInBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventoryJournalTableInBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: InventoryJournalTableInBiEntities<T>
  ): DeleteRequestBuilder<InventoryJournalTableInBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sourceKey?: BigNumber
  ): DeleteRequestBuilder<InventoryJournalTableInBiEntities<T>, T> {
    return new DeleteRequestBuilder<InventoryJournalTableInBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InventoryJournalTableInBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SourceKey: sourceKey!
          }
    );
  }
}
