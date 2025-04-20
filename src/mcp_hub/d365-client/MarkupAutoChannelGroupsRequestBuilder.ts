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
import { MarkupAutoChannelGroups } from './MarkupAutoChannelGroups';

/**
 * Request builder class for operations supported on the {@link MarkupAutoChannelGroups} entity.
 */
export class MarkupAutoChannelGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MarkupAutoChannelGroups<T>, T> {
  /**
   * Returns a request builder for querying all `MarkupAutoChannelGroups` entities.
   * @returns A request builder for creating requests to retrieve all `MarkupAutoChannelGroups` entities.
   */
  getAll(): GetAllRequestBuilder<MarkupAutoChannelGroups<T>, T> {
    return new GetAllRequestBuilder<MarkupAutoChannelGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `MarkupAutoChannelGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MarkupAutoChannelGroups`.
   */
  create(
    entity: MarkupAutoChannelGroups<T>
  ): CreateRequestBuilder<MarkupAutoChannelGroups<T>, T> {
    return new CreateRequestBuilder<MarkupAutoChannelGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MarkupAutoChannelGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link MarkupAutoChannelGroups.dataAreaId}.
   * @param retailChannelRelation Key property. See {@link MarkupAutoChannelGroups.retailChannelRelation}.
   * @returns A request builder for creating requests to retrieve one `MarkupAutoChannelGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    retailChannelRelation: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<MarkupAutoChannelGroups<T>, T> {
    return new GetByKeyRequestBuilder<MarkupAutoChannelGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RetailChannelRelation: retailChannelRelation
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `MarkupAutoChannelGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MarkupAutoChannelGroups`.
   */
  update(
    entity: MarkupAutoChannelGroups<T>
  ): UpdateRequestBuilder<MarkupAutoChannelGroups<T>, T> {
    return new UpdateRequestBuilder<MarkupAutoChannelGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MarkupAutoChannelGroups`.
   * @param dataAreaId Key property. See {@link MarkupAutoChannelGroups.dataAreaId}.
   * @param retailChannelRelation Key property. See {@link MarkupAutoChannelGroups.retailChannelRelation}.
   * @returns A request builder for creating requests that delete an entity of type `MarkupAutoChannelGroups`.
   */
  delete(
    dataAreaId: string,
    retailChannelRelation: string
  ): DeleteRequestBuilder<MarkupAutoChannelGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MarkupAutoChannelGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MarkupAutoChannelGroups` by taking the entity as a parameter.
   */
  delete(
    entity: MarkupAutoChannelGroups<T>
  ): DeleteRequestBuilder<MarkupAutoChannelGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    retailChannelRelation?: string
  ): DeleteRequestBuilder<MarkupAutoChannelGroups<T>, T> {
    return new DeleteRequestBuilder<MarkupAutoChannelGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof MarkupAutoChannelGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RetailChannelRelation: retailChannelRelation!
          }
    );
  }
}
