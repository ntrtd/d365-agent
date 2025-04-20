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
import { CredManTableBiEntities } from './CredManTableBiEntities';

/**
 * Request builder class for operations supported on the {@link CredManTableBiEntities} entity.
 */
export class CredManTableBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CredManTableBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `CredManTableBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `CredManTableBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<CredManTableBiEntities<T>, T> {
    return new GetAllRequestBuilder<CredManTableBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CredManTableBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CredManTableBiEntities`.
   */
  create(
    entity: CredManTableBiEntities<T>
  ): CreateRequestBuilder<CredManTableBiEntities<T>, T> {
    return new CreateRequestBuilder<CredManTableBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CredManTableBiEntities` entity based on its keys.
   * @param credManId Key property. See {@link CredManTableBiEntities.credManId}.
   * @param company Key property. See {@link CredManTableBiEntities.company}.
   * @returns A request builder for creating requests to retrieve one `CredManTableBiEntities` entity based on its keys.
   */
  getByKey(
    credManId: DeserializedType<T, 'Edm.String'>,
    company: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CredManTableBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<CredManTableBiEntities<T>, T>(
      this.entityApi,
      {
        CredManId: credManId,
        Company: company
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CredManTableBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CredManTableBiEntities`.
   */
  update(
    entity: CredManTableBiEntities<T>
  ): UpdateRequestBuilder<CredManTableBiEntities<T>, T> {
    return new UpdateRequestBuilder<CredManTableBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CredManTableBiEntities`.
   * @param credManId Key property. See {@link CredManTableBiEntities.credManId}.
   * @param company Key property. See {@link CredManTableBiEntities.company}.
   * @returns A request builder for creating requests that delete an entity of type `CredManTableBiEntities`.
   */
  delete(
    credManId: string,
    company: string
  ): DeleteRequestBuilder<CredManTableBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CredManTableBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CredManTableBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: CredManTableBiEntities<T>
  ): DeleteRequestBuilder<CredManTableBiEntities<T>, T>;
  delete(
    credManIdOrEntity: any,
    company?: string
  ): DeleteRequestBuilder<CredManTableBiEntities<T>, T> {
    return new DeleteRequestBuilder<CredManTableBiEntities<T>, T>(
      this.entityApi,
      credManIdOrEntity instanceof CredManTableBiEntities
        ? credManIdOrEntity
        : {
            CredManId: credManIdOrEntity!,
            Company: company!
          }
    );
  }
}
