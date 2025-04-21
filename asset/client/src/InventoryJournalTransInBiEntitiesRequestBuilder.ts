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
import { InventoryJournalTransInBiEntities } from './InventoryJournalTransInBiEntities';

/**
 * Request builder class for operations supported on the {@link InventoryJournalTransInBiEntities} entity.
 */
export class InventoryJournalTransInBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InventoryJournalTransInBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `InventoryJournalTransInBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `InventoryJournalTransInBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<InventoryJournalTransInBiEntities<T>, T> {
    return new GetAllRequestBuilder<InventoryJournalTransInBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `InventoryJournalTransInBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventoryJournalTransInBiEntities`.
   */
  create(
    entity: InventoryJournalTransInBiEntities<T>
  ): CreateRequestBuilder<InventoryJournalTransInBiEntities<T>, T> {
    return new CreateRequestBuilder<InventoryJournalTransInBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InventoryJournalTransInBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link InventoryJournalTransInBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link InventoryJournalTransInBiEntities.sourceKey}.
   * @returns A request builder for creating requests to retrieve one `InventoryJournalTransInBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sourceKey: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<InventoryJournalTransInBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<InventoryJournalTransInBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SourceKey: sourceKey
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InventoryJournalTransInBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventoryJournalTransInBiEntities`.
   */
  update(
    entity: InventoryJournalTransInBiEntities<T>
  ): UpdateRequestBuilder<InventoryJournalTransInBiEntities<T>, T> {
    return new UpdateRequestBuilder<InventoryJournalTransInBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InventoryJournalTransInBiEntities`.
   * @param dataAreaId Key property. See {@link InventoryJournalTransInBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link InventoryJournalTransInBiEntities.sourceKey}.
   * @returns A request builder for creating requests that delete an entity of type `InventoryJournalTransInBiEntities`.
   */
  delete(
    dataAreaId: string,
    sourceKey: BigNumber
  ): DeleteRequestBuilder<InventoryJournalTransInBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InventoryJournalTransInBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventoryJournalTransInBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: InventoryJournalTransInBiEntities<T>
  ): DeleteRequestBuilder<InventoryJournalTransInBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sourceKey?: BigNumber
  ): DeleteRequestBuilder<InventoryJournalTransInBiEntities<T>, T> {
    return new DeleteRequestBuilder<InventoryJournalTransInBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InventoryJournalTransInBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SourceKey: sourceKey!
          }
    );
  }
}
