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
import { GenericSetups } from './GenericSetups';

/**
 * Request builder class for operations supported on the {@link GenericSetups} entity.
 */
export class GenericSetupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<GenericSetups<T>, T> {
  /**
   * Returns a request builder for querying all `GenericSetups` entities.
   * @returns A request builder for creating requests to retrieve all `GenericSetups` entities.
   */
  getAll(): GetAllRequestBuilder<GenericSetups<T>, T> {
    return new GetAllRequestBuilder<GenericSetups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `GenericSetups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `GenericSetups`.
   */
  create(entity: GenericSetups<T>): CreateRequestBuilder<GenericSetups<T>, T> {
    return new CreateRequestBuilder<GenericSetups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `GenericSetups` entity based on its keys.
   * @param mdIdentifier Key property. See {@link GenericSetups.mdIdentifier}.
   * @returns A request builder for creating requests to retrieve one `GenericSetups` entity based on its keys.
   */
  getByKey(
    mdIdentifier: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<GenericSetups<T>, T> {
    return new GetByKeyRequestBuilder<GenericSetups<T>, T>(this.entityApi, {
      MDIdentifier: mdIdentifier
    });
  }

  /**
   * Returns a request builder for updating an entity of type `GenericSetups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `GenericSetups`.
   */
  update(entity: GenericSetups<T>): UpdateRequestBuilder<GenericSetups<T>, T> {
    return new UpdateRequestBuilder<GenericSetups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `GenericSetups`.
   * @param mdIdentifier Key property. See {@link GenericSetups.mdIdentifier}.
   * @returns A request builder for creating requests that delete an entity of type `GenericSetups`.
   */
  delete(mdIdentifier: string): DeleteRequestBuilder<GenericSetups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `GenericSetups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `GenericSetups` by taking the entity as a parameter.
   */
  delete(entity: GenericSetups<T>): DeleteRequestBuilder<GenericSetups<T>, T>;
  delete(mdIdentifierOrEntity: any): DeleteRequestBuilder<GenericSetups<T>, T> {
    return new DeleteRequestBuilder<GenericSetups<T>, T>(
      this.entityApi,
      mdIdentifierOrEntity instanceof GenericSetups
        ? mdIdentifierOrEntity
        : { MDIdentifier: mdIdentifierOrEntity! }
    );
  }
}
