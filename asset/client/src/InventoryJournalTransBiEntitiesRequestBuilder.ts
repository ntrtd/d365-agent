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
import { InventoryJournalTransBiEntities } from './InventoryJournalTransBiEntities';

/**
 * Request builder class for operations supported on the {@link InventoryJournalTransBiEntities} entity.
 */
export class InventoryJournalTransBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InventoryJournalTransBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `InventoryJournalTransBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `InventoryJournalTransBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<InventoryJournalTransBiEntities<T>, T> {
    return new GetAllRequestBuilder<InventoryJournalTransBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `InventoryJournalTransBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventoryJournalTransBiEntities`.
   */
  create(
    entity: InventoryJournalTransBiEntities<T>
  ): CreateRequestBuilder<InventoryJournalTransBiEntities<T>, T> {
    return new CreateRequestBuilder<InventoryJournalTransBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InventoryJournalTransBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link InventoryJournalTransBiEntities.dataAreaId}.
   * @param journalId Key property. See {@link InventoryJournalTransBiEntities.journalId}.
   * @param lineNum Key property. See {@link InventoryJournalTransBiEntities.lineNum}.
   * @returns A request builder for creating requests to retrieve one `InventoryJournalTransBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    journalId: DeserializedType<T, 'Edm.String'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<InventoryJournalTransBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<InventoryJournalTransBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        JournalId: journalId,
        LineNum: lineNum
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InventoryJournalTransBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventoryJournalTransBiEntities`.
   */
  update(
    entity: InventoryJournalTransBiEntities<T>
  ): UpdateRequestBuilder<InventoryJournalTransBiEntities<T>, T> {
    return new UpdateRequestBuilder<InventoryJournalTransBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InventoryJournalTransBiEntities`.
   * @param dataAreaId Key property. See {@link InventoryJournalTransBiEntities.dataAreaId}.
   * @param journalId Key property. See {@link InventoryJournalTransBiEntities.journalId}.
   * @param lineNum Key property. See {@link InventoryJournalTransBiEntities.lineNum}.
   * @returns A request builder for creating requests that delete an entity of type `InventoryJournalTransBiEntities`.
   */
  delete(
    dataAreaId: string,
    journalId: string,
    lineNum: BigNumber
  ): DeleteRequestBuilder<InventoryJournalTransBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InventoryJournalTransBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventoryJournalTransBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: InventoryJournalTransBiEntities<T>
  ): DeleteRequestBuilder<InventoryJournalTransBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    journalId?: string,
    lineNum?: BigNumber
  ): DeleteRequestBuilder<InventoryJournalTransBiEntities<T>, T> {
    return new DeleteRequestBuilder<InventoryJournalTransBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InventoryJournalTransBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JournalId: journalId!,
            LineNum: lineNum!
          }
    );
  }
}
