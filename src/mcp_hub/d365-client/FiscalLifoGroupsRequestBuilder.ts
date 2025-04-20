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
import { FiscalLifoGroups } from './FiscalLifoGroups';

/**
 * Request builder class for operations supported on the {@link FiscalLifoGroups} entity.
 */
export class FiscalLifoGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FiscalLifoGroups<T>, T> {
  /**
   * Returns a request builder for querying all `FiscalLifoGroups` entities.
   * @returns A request builder for creating requests to retrieve all `FiscalLifoGroups` entities.
   */
  getAll(): GetAllRequestBuilder<FiscalLifoGroups<T>, T> {
    return new GetAllRequestBuilder<FiscalLifoGroups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `FiscalLifoGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FiscalLifoGroups`.
   */
  create(
    entity: FiscalLifoGroups<T>
  ): CreateRequestBuilder<FiscalLifoGroups<T>, T> {
    return new CreateRequestBuilder<FiscalLifoGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `FiscalLifoGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link FiscalLifoGroups.dataAreaId}.
   * @param groupId Key property. See {@link FiscalLifoGroups.groupId}.
   * @returns A request builder for creating requests to retrieve one `FiscalLifoGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    groupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<FiscalLifoGroups<T>, T> {
    return new GetByKeyRequestBuilder<FiscalLifoGroups<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      GroupId: groupId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `FiscalLifoGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FiscalLifoGroups`.
   */
  update(
    entity: FiscalLifoGroups<T>
  ): UpdateRequestBuilder<FiscalLifoGroups<T>, T> {
    return new UpdateRequestBuilder<FiscalLifoGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `FiscalLifoGroups`.
   * @param dataAreaId Key property. See {@link FiscalLifoGroups.dataAreaId}.
   * @param groupId Key property. See {@link FiscalLifoGroups.groupId}.
   * @returns A request builder for creating requests that delete an entity of type `FiscalLifoGroups`.
   */
  delete(
    dataAreaId: string,
    groupId: string
  ): DeleteRequestBuilder<FiscalLifoGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FiscalLifoGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FiscalLifoGroups` by taking the entity as a parameter.
   */
  delete(
    entity: FiscalLifoGroups<T>
  ): DeleteRequestBuilder<FiscalLifoGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    groupId?: string
  ): DeleteRequestBuilder<FiscalLifoGroups<T>, T> {
    return new DeleteRequestBuilder<FiscalLifoGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof FiscalLifoGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            GroupId: groupId!
          }
    );
  }
}
