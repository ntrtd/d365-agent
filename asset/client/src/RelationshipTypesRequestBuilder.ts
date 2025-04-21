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
import { RelationshipTypes } from './RelationshipTypes';

/**
 * Request builder class for operations supported on the {@link RelationshipTypes} entity.
 */
export class RelationshipTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RelationshipTypes<T>, T> {
  /**
   * Returns a request builder for querying all `RelationshipTypes` entities.
   * @returns A request builder for creating requests to retrieve all `RelationshipTypes` entities.
   */
  getAll(): GetAllRequestBuilder<RelationshipTypes<T>, T> {
    return new GetAllRequestBuilder<RelationshipTypes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RelationshipTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RelationshipTypes`.
   */
  create(
    entity: RelationshipTypes<T>
  ): CreateRequestBuilder<RelationshipTypes<T>, T> {
    return new CreateRequestBuilder<RelationshipTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RelationshipTypes` entity based on its keys.
   * @param id Key property. See {@link RelationshipTypes.id}.
   * @returns A request builder for creating requests to retrieve one `RelationshipTypes` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RelationshipTypes<T>, T> {
    return new GetByKeyRequestBuilder<RelationshipTypes<T>, T>(this.entityApi, {
      ID: id
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RelationshipTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RelationshipTypes`.
   */
  update(
    entity: RelationshipTypes<T>
  ): UpdateRequestBuilder<RelationshipTypes<T>, T> {
    return new UpdateRequestBuilder<RelationshipTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RelationshipTypes`.
   * @param id Key property. See {@link RelationshipTypes.id}.
   * @returns A request builder for creating requests that delete an entity of type `RelationshipTypes`.
   */
  delete(id: string): DeleteRequestBuilder<RelationshipTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RelationshipTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RelationshipTypes` by taking the entity as a parameter.
   */
  delete(
    entity: RelationshipTypes<T>
  ): DeleteRequestBuilder<RelationshipTypes<T>, T>;
  delete(idOrEntity: any): DeleteRequestBuilder<RelationshipTypes<T>, T> {
    return new DeleteRequestBuilder<RelationshipTypes<T>, T>(
      this.entityApi,
      idOrEntity instanceof RelationshipTypes ? idOrEntity : { ID: idOrEntity! }
    );
  }
}
