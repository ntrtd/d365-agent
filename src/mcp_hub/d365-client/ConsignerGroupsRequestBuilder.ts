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
import { ConsignerGroups } from './ConsignerGroups';

/**
 * Request builder class for operations supported on the {@link ConsignerGroups} entity.
 */
export class ConsignerGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ConsignerGroups<T>, T> {
  /**
   * Returns a request builder for querying all `ConsignerGroups` entities.
   * @returns A request builder for creating requests to retrieve all `ConsignerGroups` entities.
   */
  getAll(): GetAllRequestBuilder<ConsignerGroups<T>, T> {
    return new GetAllRequestBuilder<ConsignerGroups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ConsignerGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ConsignerGroups`.
   */
  create(
    entity: ConsignerGroups<T>
  ): CreateRequestBuilder<ConsignerGroups<T>, T> {
    return new CreateRequestBuilder<ConsignerGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ConsignerGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link ConsignerGroups.dataAreaId}.
   * @param consignerGroupId Key property. See {@link ConsignerGroups.consignerGroupId}.
   * @returns A request builder for creating requests to retrieve one `ConsignerGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    consignerGroupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ConsignerGroups<T>, T> {
    return new GetByKeyRequestBuilder<ConsignerGroups<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ConsignerGroupId: consignerGroupId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ConsignerGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ConsignerGroups`.
   */
  update(
    entity: ConsignerGroups<T>
  ): UpdateRequestBuilder<ConsignerGroups<T>, T> {
    return new UpdateRequestBuilder<ConsignerGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ConsignerGroups`.
   * @param dataAreaId Key property. See {@link ConsignerGroups.dataAreaId}.
   * @param consignerGroupId Key property. See {@link ConsignerGroups.consignerGroupId}.
   * @returns A request builder for creating requests that delete an entity of type `ConsignerGroups`.
   */
  delete(
    dataAreaId: string,
    consignerGroupId: string
  ): DeleteRequestBuilder<ConsignerGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ConsignerGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ConsignerGroups` by taking the entity as a parameter.
   */
  delete(
    entity: ConsignerGroups<T>
  ): DeleteRequestBuilder<ConsignerGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    consignerGroupId?: string
  ): DeleteRequestBuilder<ConsignerGroups<T>, T> {
    return new DeleteRequestBuilder<ConsignerGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ConsignerGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ConsignerGroupId: consignerGroupId!
          }
    );
  }
}
