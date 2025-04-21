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
import { ExternalLinksGroups } from './ExternalLinksGroups';

/**
 * Request builder class for operations supported on the {@link ExternalLinksGroups} entity.
 */
export class ExternalLinksGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ExternalLinksGroups<T>, T> {
  /**
   * Returns a request builder for querying all `ExternalLinksGroups` entities.
   * @returns A request builder for creating requests to retrieve all `ExternalLinksGroups` entities.
   */
  getAll(): GetAllRequestBuilder<ExternalLinksGroups<T>, T> {
    return new GetAllRequestBuilder<ExternalLinksGroups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ExternalLinksGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExternalLinksGroups`.
   */
  create(
    entity: ExternalLinksGroups<T>
  ): CreateRequestBuilder<ExternalLinksGroups<T>, T> {
    return new CreateRequestBuilder<ExternalLinksGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ExternalLinksGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link ExternalLinksGroups.dataAreaId}.
   * @param name Key property. See {@link ExternalLinksGroups.name}.
   * @returns A request builder for creating requests to retrieve one `ExternalLinksGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ExternalLinksGroups<T>, T> {
    return new GetByKeyRequestBuilder<ExternalLinksGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Name: name
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ExternalLinksGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ExternalLinksGroups`.
   */
  update(
    entity: ExternalLinksGroups<T>
  ): UpdateRequestBuilder<ExternalLinksGroups<T>, T> {
    return new UpdateRequestBuilder<ExternalLinksGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ExternalLinksGroups`.
   * @param dataAreaId Key property. See {@link ExternalLinksGroups.dataAreaId}.
   * @param name Key property. See {@link ExternalLinksGroups.name}.
   * @returns A request builder for creating requests that delete an entity of type `ExternalLinksGroups`.
   */
  delete(
    dataAreaId: string,
    name: string
  ): DeleteRequestBuilder<ExternalLinksGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ExternalLinksGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ExternalLinksGroups` by taking the entity as a parameter.
   */
  delete(
    entity: ExternalLinksGroups<T>
  ): DeleteRequestBuilder<ExternalLinksGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    name?: string
  ): DeleteRequestBuilder<ExternalLinksGroups<T>, T> {
    return new DeleteRequestBuilder<ExternalLinksGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ExternalLinksGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Name: name!
          }
    );
  }
}
