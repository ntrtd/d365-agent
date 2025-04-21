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
import { FiscalCloseGroups } from './FiscalCloseGroups';

/**
 * Request builder class for operations supported on the {@link FiscalCloseGroups} entity.
 */
export class FiscalCloseGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FiscalCloseGroups<T>, T> {
  /**
   * Returns a request builder for querying all `FiscalCloseGroups` entities.
   * @returns A request builder for creating requests to retrieve all `FiscalCloseGroups` entities.
   */
  getAll(): GetAllRequestBuilder<FiscalCloseGroups<T>, T> {
    return new GetAllRequestBuilder<FiscalCloseGroups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `FiscalCloseGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FiscalCloseGroups`.
   */
  create(
    entity: FiscalCloseGroups<T>
  ): CreateRequestBuilder<FiscalCloseGroups<T>, T> {
    return new CreateRequestBuilder<FiscalCloseGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `FiscalCloseGroups` entity based on its keys.
   * @param name Key property. See {@link FiscalCloseGroups.name}.
   * @returns A request builder for creating requests to retrieve one `FiscalCloseGroups` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<FiscalCloseGroups<T>, T> {
    return new GetByKeyRequestBuilder<FiscalCloseGroups<T>, T>(this.entityApi, {
      Name: name
    });
  }

  /**
   * Returns a request builder for updating an entity of type `FiscalCloseGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FiscalCloseGroups`.
   */
  update(
    entity: FiscalCloseGroups<T>
  ): UpdateRequestBuilder<FiscalCloseGroups<T>, T> {
    return new UpdateRequestBuilder<FiscalCloseGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `FiscalCloseGroups`.
   * @param name Key property. See {@link FiscalCloseGroups.name}.
   * @returns A request builder for creating requests that delete an entity of type `FiscalCloseGroups`.
   */
  delete(name: string): DeleteRequestBuilder<FiscalCloseGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FiscalCloseGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FiscalCloseGroups` by taking the entity as a parameter.
   */
  delete(
    entity: FiscalCloseGroups<T>
  ): DeleteRequestBuilder<FiscalCloseGroups<T>, T>;
  delete(nameOrEntity: any): DeleteRequestBuilder<FiscalCloseGroups<T>, T> {
    return new DeleteRequestBuilder<FiscalCloseGroups<T>, T>(
      this.entityApi,
      nameOrEntity instanceof FiscalCloseGroups
        ? nameOrEntity
        : { Name: nameOrEntity! }
    );
  }
}
