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
import { RetailCdxDataGroups } from './RetailCdxDataGroups';

/**
 * Request builder class for operations supported on the {@link RetailCdxDataGroups} entity.
 */
export class RetailCdxDataGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailCdxDataGroups<T>, T> {
  /**
   * Returns a request builder for querying all `RetailCdxDataGroups` entities.
   * @returns A request builder for creating requests to retrieve all `RetailCdxDataGroups` entities.
   */
  getAll(): GetAllRequestBuilder<RetailCdxDataGroups<T>, T> {
    return new GetAllRequestBuilder<RetailCdxDataGroups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailCdxDataGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailCdxDataGroups`.
   */
  create(
    entity: RetailCdxDataGroups<T>
  ): CreateRequestBuilder<RetailCdxDataGroups<T>, T> {
    return new CreateRequestBuilder<RetailCdxDataGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailCdxDataGroups` entity based on its keys.
   * @param name Key property. See {@link RetailCdxDataGroups.name}.
   * @returns A request builder for creating requests to retrieve one `RetailCdxDataGroups` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailCdxDataGroups<T>, T> {
    return new GetByKeyRequestBuilder<RetailCdxDataGroups<T>, T>(
      this.entityApi,
      { Name: name }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailCdxDataGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailCdxDataGroups`.
   */
  update(
    entity: RetailCdxDataGroups<T>
  ): UpdateRequestBuilder<RetailCdxDataGroups<T>, T> {
    return new UpdateRequestBuilder<RetailCdxDataGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailCdxDataGroups`.
   * @param name Key property. See {@link RetailCdxDataGroups.name}.
   * @returns A request builder for creating requests that delete an entity of type `RetailCdxDataGroups`.
   */
  delete(name: string): DeleteRequestBuilder<RetailCdxDataGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailCdxDataGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailCdxDataGroups` by taking the entity as a parameter.
   */
  delete(
    entity: RetailCdxDataGroups<T>
  ): DeleteRequestBuilder<RetailCdxDataGroups<T>, T>;
  delete(nameOrEntity: any): DeleteRequestBuilder<RetailCdxDataGroups<T>, T> {
    return new DeleteRequestBuilder<RetailCdxDataGroups<T>, T>(
      this.entityApi,
      nameOrEntity instanceof RetailCdxDataGroups
        ? nameOrEntity
        : { Name: nameOrEntity! }
    );
  }
}
