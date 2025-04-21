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
import { DirPartyTableBiEntities } from './DirPartyTableBiEntities';

/**
 * Request builder class for operations supported on the {@link DirPartyTableBiEntities} entity.
 */
export class DirPartyTableBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DirPartyTableBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `DirPartyTableBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `DirPartyTableBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<DirPartyTableBiEntities<T>, T> {
    return new GetAllRequestBuilder<DirPartyTableBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DirPartyTableBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DirPartyTableBiEntities`.
   */
  create(
    entity: DirPartyTableBiEntities<T>
  ): CreateRequestBuilder<DirPartyTableBiEntities<T>, T> {
    return new CreateRequestBuilder<DirPartyTableBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DirPartyTableBiEntities` entity based on its keys.
   * @param partyNumber Key property. See {@link DirPartyTableBiEntities.partyNumber}.
   * @returns A request builder for creating requests to retrieve one `DirPartyTableBiEntities` entity based on its keys.
   */
  getByKey(
    partyNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DirPartyTableBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<DirPartyTableBiEntities<T>, T>(
      this.entityApi,
      { PartyNumber: partyNumber }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DirPartyTableBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DirPartyTableBiEntities`.
   */
  update(
    entity: DirPartyTableBiEntities<T>
  ): UpdateRequestBuilder<DirPartyTableBiEntities<T>, T> {
    return new UpdateRequestBuilder<DirPartyTableBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DirPartyTableBiEntities`.
   * @param partyNumber Key property. See {@link DirPartyTableBiEntities.partyNumber}.
   * @returns A request builder for creating requests that delete an entity of type `DirPartyTableBiEntities`.
   */
  delete(
    partyNumber: string
  ): DeleteRequestBuilder<DirPartyTableBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DirPartyTableBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DirPartyTableBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: DirPartyTableBiEntities<T>
  ): DeleteRequestBuilder<DirPartyTableBiEntities<T>, T>;
  delete(
    partyNumberOrEntity: any
  ): DeleteRequestBuilder<DirPartyTableBiEntities<T>, T> {
    return new DeleteRequestBuilder<DirPartyTableBiEntities<T>, T>(
      this.entityApi,
      partyNumberOrEntity instanceof DirPartyTableBiEntities
        ? partyNumberOrEntity
        : { PartyNumber: partyNumberOrEntity! }
    );
  }
}
