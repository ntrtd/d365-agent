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
import { AnchoringGroups } from './AnchoringGroups';

/**
 * Request builder class for operations supported on the {@link AnchoringGroups} entity.
 */
export class AnchoringGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AnchoringGroups<T>, T> {
  /**
   * Returns a request builder for querying all `AnchoringGroups` entities.
   * @returns A request builder for creating requests to retrieve all `AnchoringGroups` entities.
   */
  getAll(): GetAllRequestBuilder<AnchoringGroups<T>, T> {
    return new GetAllRequestBuilder<AnchoringGroups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AnchoringGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AnchoringGroups`.
   */
  create(
    entity: AnchoringGroups<T>
  ): CreateRequestBuilder<AnchoringGroups<T>, T> {
    return new CreateRequestBuilder<AnchoringGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AnchoringGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link AnchoringGroups.dataAreaId}.
   * @param anchoringGroupId Key property. See {@link AnchoringGroups.anchoringGroupId}.
   * @returns A request builder for creating requests to retrieve one `AnchoringGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    anchoringGroupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AnchoringGroups<T>, T> {
    return new GetByKeyRequestBuilder<AnchoringGroups<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      AnchoringGroupId: anchoringGroupId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AnchoringGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AnchoringGroups`.
   */
  update(
    entity: AnchoringGroups<T>
  ): UpdateRequestBuilder<AnchoringGroups<T>, T> {
    return new UpdateRequestBuilder<AnchoringGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AnchoringGroups`.
   * @param dataAreaId Key property. See {@link AnchoringGroups.dataAreaId}.
   * @param anchoringGroupId Key property. See {@link AnchoringGroups.anchoringGroupId}.
   * @returns A request builder for creating requests that delete an entity of type `AnchoringGroups`.
   */
  delete(
    dataAreaId: string,
    anchoringGroupId: string
  ): DeleteRequestBuilder<AnchoringGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AnchoringGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AnchoringGroups` by taking the entity as a parameter.
   */
  delete(
    entity: AnchoringGroups<T>
  ): DeleteRequestBuilder<AnchoringGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    anchoringGroupId?: string
  ): DeleteRequestBuilder<AnchoringGroups<T>, T> {
    return new DeleteRequestBuilder<AnchoringGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AnchoringGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            AnchoringGroupId: anchoringGroupId!
          }
    );
  }
}
