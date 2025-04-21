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
import { LegalEntities } from './LegalEntities';

/**
 * Request builder class for operations supported on the {@link LegalEntities} entity.
 */
export class LegalEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LegalEntities<T>, T> {
  /**
   * Returns a request builder for querying all `LegalEntities` entities.
   * @returns A request builder for creating requests to retrieve all `LegalEntities` entities.
   */
  getAll(): GetAllRequestBuilder<LegalEntities<T>, T> {
    return new GetAllRequestBuilder<LegalEntities<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LegalEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LegalEntities`.
   */
  create(entity: LegalEntities<T>): CreateRequestBuilder<LegalEntities<T>, T> {
    return new CreateRequestBuilder<LegalEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LegalEntities` entity based on its keys.
   * @param legalEntityId Key property. See {@link LegalEntities.legalEntityId}.
   * @returns A request builder for creating requests to retrieve one `LegalEntities` entity based on its keys.
   */
  getByKey(
    legalEntityId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LegalEntities<T>, T> {
    return new GetByKeyRequestBuilder<LegalEntities<T>, T>(this.entityApi, {
      LegalEntityId: legalEntityId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `LegalEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LegalEntities`.
   */
  update(entity: LegalEntities<T>): UpdateRequestBuilder<LegalEntities<T>, T> {
    return new UpdateRequestBuilder<LegalEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LegalEntities`.
   * @param legalEntityId Key property. See {@link LegalEntities.legalEntityId}.
   * @returns A request builder for creating requests that delete an entity of type `LegalEntities`.
   */
  delete(legalEntityId: string): DeleteRequestBuilder<LegalEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LegalEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LegalEntities` by taking the entity as a parameter.
   */
  delete(entity: LegalEntities<T>): DeleteRequestBuilder<LegalEntities<T>, T>;
  delete(
    legalEntityIdOrEntity: any
  ): DeleteRequestBuilder<LegalEntities<T>, T> {
    return new DeleteRequestBuilder<LegalEntities<T>, T>(
      this.entityApi,
      legalEntityIdOrEntity instanceof LegalEntities
        ? legalEntityIdOrEntity
        : { LegalEntityId: legalEntityIdOrEntity! }
    );
  }
}
