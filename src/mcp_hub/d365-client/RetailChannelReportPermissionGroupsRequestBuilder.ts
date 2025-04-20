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
import { RetailChannelReportPermissionGroups } from './RetailChannelReportPermissionGroups';

/**
 * Request builder class for operations supported on the {@link RetailChannelReportPermissionGroups} entity.
 */
export class RetailChannelReportPermissionGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailChannelReportPermissionGroups<T>, T> {
  /**
   * Returns a request builder for querying all `RetailChannelReportPermissionGroups` entities.
   * @returns A request builder for creating requests to retrieve all `RetailChannelReportPermissionGroups` entities.
   */
  getAll(): GetAllRequestBuilder<RetailChannelReportPermissionGroups<T>, T> {
    return new GetAllRequestBuilder<RetailChannelReportPermissionGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailChannelReportPermissionGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailChannelReportPermissionGroups`.
   */
  create(
    entity: RetailChannelReportPermissionGroups<T>
  ): CreateRequestBuilder<RetailChannelReportPermissionGroups<T>, T> {
    return new CreateRequestBuilder<RetailChannelReportPermissionGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailChannelReportPermissionGroups` entity based on its keys.
   * @param channelReportId Key property. See {@link RetailChannelReportPermissionGroups.channelReportId}.
   * @param posPermissionGroupId Key property. See {@link RetailChannelReportPermissionGroups.posPermissionGroupId}.
   * @returns A request builder for creating requests to retrieve one `RetailChannelReportPermissionGroups` entity based on its keys.
   */
  getByKey(
    channelReportId: DeserializedType<T, 'Edm.String'>,
    posPermissionGroupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailChannelReportPermissionGroups<T>, T> {
    return new GetByKeyRequestBuilder<
      RetailChannelReportPermissionGroups<T>,
      T
    >(this.entityApi, {
      ChannelReportId: channelReportId,
      PosPermissionGroupId: posPermissionGroupId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailChannelReportPermissionGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailChannelReportPermissionGroups`.
   */
  update(
    entity: RetailChannelReportPermissionGroups<T>
  ): UpdateRequestBuilder<RetailChannelReportPermissionGroups<T>, T> {
    return new UpdateRequestBuilder<RetailChannelReportPermissionGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailChannelReportPermissionGroups`.
   * @param channelReportId Key property. See {@link RetailChannelReportPermissionGroups.channelReportId}.
   * @param posPermissionGroupId Key property. See {@link RetailChannelReportPermissionGroups.posPermissionGroupId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailChannelReportPermissionGroups`.
   */
  delete(
    channelReportId: string,
    posPermissionGroupId: string
  ): DeleteRequestBuilder<RetailChannelReportPermissionGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailChannelReportPermissionGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailChannelReportPermissionGroups` by taking the entity as a parameter.
   */
  delete(
    entity: RetailChannelReportPermissionGroups<T>
  ): DeleteRequestBuilder<RetailChannelReportPermissionGroups<T>, T>;
  delete(
    channelReportIdOrEntity: any,
    posPermissionGroupId?: string
  ): DeleteRequestBuilder<RetailChannelReportPermissionGroups<T>, T> {
    return new DeleteRequestBuilder<RetailChannelReportPermissionGroups<T>, T>(
      this.entityApi,
      channelReportIdOrEntity instanceof RetailChannelReportPermissionGroups
        ? channelReportIdOrEntity
        : {
            ChannelReportId: channelReportIdOrEntity!,
            PosPermissionGroupId: posPermissionGroupId!
          }
    );
  }
}
