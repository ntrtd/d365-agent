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
import { ConsigneeGroups } from './ConsigneeGroups';

/**
 * Request builder class for operations supported on the {@link ConsigneeGroups} entity.
 */
export class ConsigneeGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ConsigneeGroups<T>, T> {
  /**
   * Returns a request builder for querying all `ConsigneeGroups` entities.
   * @returns A request builder for creating requests to retrieve all `ConsigneeGroups` entities.
   */
  getAll(): GetAllRequestBuilder<ConsigneeGroups<T>, T> {
    return new GetAllRequestBuilder<ConsigneeGroups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ConsigneeGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ConsigneeGroups`.
   */
  create(
    entity: ConsigneeGroups<T>
  ): CreateRequestBuilder<ConsigneeGroups<T>, T> {
    return new CreateRequestBuilder<ConsigneeGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ConsigneeGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link ConsigneeGroups.dataAreaId}.
   * @param consigneeGroupId Key property. See {@link ConsigneeGroups.consigneeGroupId}.
   * @returns A request builder for creating requests to retrieve one `ConsigneeGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    consigneeGroupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ConsigneeGroups<T>, T> {
    return new GetByKeyRequestBuilder<ConsigneeGroups<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ConsigneeGroupId: consigneeGroupId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ConsigneeGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ConsigneeGroups`.
   */
  update(
    entity: ConsigneeGroups<T>
  ): UpdateRequestBuilder<ConsigneeGroups<T>, T> {
    return new UpdateRequestBuilder<ConsigneeGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ConsigneeGroups`.
   * @param dataAreaId Key property. See {@link ConsigneeGroups.dataAreaId}.
   * @param consigneeGroupId Key property. See {@link ConsigneeGroups.consigneeGroupId}.
   * @returns A request builder for creating requests that delete an entity of type `ConsigneeGroups`.
   */
  delete(
    dataAreaId: string,
    consigneeGroupId: string
  ): DeleteRequestBuilder<ConsigneeGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ConsigneeGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ConsigneeGroups` by taking the entity as a parameter.
   */
  delete(
    entity: ConsigneeGroups<T>
  ): DeleteRequestBuilder<ConsigneeGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    consigneeGroupId?: string
  ): DeleteRequestBuilder<ConsigneeGroups<T>, T> {
    return new DeleteRequestBuilder<ConsigneeGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ConsigneeGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ConsigneeGroupId: consigneeGroupId!
          }
    );
  }
}
