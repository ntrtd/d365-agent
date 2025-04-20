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
import { GstReliefGroups } from './GstReliefGroups';

/**
 * Request builder class for operations supported on the {@link GstReliefGroups} entity.
 */
export class GstReliefGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<GstReliefGroups<T>, T> {
  /**
   * Returns a request builder for querying all `GstReliefGroups` entities.
   * @returns A request builder for creating requests to retrieve all `GstReliefGroups` entities.
   */
  getAll(): GetAllRequestBuilder<GstReliefGroups<T>, T> {
    return new GetAllRequestBuilder<GstReliefGroups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `GstReliefGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `GstReliefGroups`.
   */
  create(
    entity: GstReliefGroups<T>
  ): CreateRequestBuilder<GstReliefGroups<T>, T> {
    return new CreateRequestBuilder<GstReliefGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `GstReliefGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link GstReliefGroups.dataAreaId}.
   * @param name Key property. See {@link GstReliefGroups.name}.
   * @param reliefCategoryId Key property. See {@link GstReliefGroups.reliefCategoryId}.
   * @returns A request builder for creating requests to retrieve one `GstReliefGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    name: DeserializedType<T, 'Edm.String'>,
    reliefCategoryId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<GstReliefGroups<T>, T> {
    return new GetByKeyRequestBuilder<GstReliefGroups<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      Name: name,
      ReliefCategoryId: reliefCategoryId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `GstReliefGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `GstReliefGroups`.
   */
  update(
    entity: GstReliefGroups<T>
  ): UpdateRequestBuilder<GstReliefGroups<T>, T> {
    return new UpdateRequestBuilder<GstReliefGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `GstReliefGroups`.
   * @param dataAreaId Key property. See {@link GstReliefGroups.dataAreaId}.
   * @param name Key property. See {@link GstReliefGroups.name}.
   * @param reliefCategoryId Key property. See {@link GstReliefGroups.reliefCategoryId}.
   * @returns A request builder for creating requests that delete an entity of type `GstReliefGroups`.
   */
  delete(
    dataAreaId: string,
    name: string,
    reliefCategoryId: string
  ): DeleteRequestBuilder<GstReliefGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `GstReliefGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `GstReliefGroups` by taking the entity as a parameter.
   */
  delete(
    entity: GstReliefGroups<T>
  ): DeleteRequestBuilder<GstReliefGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    name?: string,
    reliefCategoryId?: string
  ): DeleteRequestBuilder<GstReliefGroups<T>, T> {
    return new DeleteRequestBuilder<GstReliefGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof GstReliefGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Name: name!,
            ReliefCategoryId: reliefCategoryId!
          }
    );
  }
}
