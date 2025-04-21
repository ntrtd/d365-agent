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
import { AcceleratedDepreciationGroups } from './AcceleratedDepreciationGroups';

/**
 * Request builder class for operations supported on the {@link AcceleratedDepreciationGroups} entity.
 */
export class AcceleratedDepreciationGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AcceleratedDepreciationGroups<T>, T> {
  /**
   * Returns a request builder for querying all `AcceleratedDepreciationGroups` entities.
   * @returns A request builder for creating requests to retrieve all `AcceleratedDepreciationGroups` entities.
   */
  getAll(): GetAllRequestBuilder<AcceleratedDepreciationGroups<T>, T> {
    return new GetAllRequestBuilder<AcceleratedDepreciationGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AcceleratedDepreciationGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AcceleratedDepreciationGroups`.
   */
  create(
    entity: AcceleratedDepreciationGroups<T>
  ): CreateRequestBuilder<AcceleratedDepreciationGroups<T>, T> {
    return new CreateRequestBuilder<AcceleratedDepreciationGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AcceleratedDepreciationGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link AcceleratedDepreciationGroups.dataAreaId}.
   * @param equipmentGroup Key property. See {@link AcceleratedDepreciationGroups.equipmentGroup}.
   * @returns A request builder for creating requests to retrieve one `AcceleratedDepreciationGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    equipmentGroup: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AcceleratedDepreciationGroups<T>, T> {
    return new GetByKeyRequestBuilder<AcceleratedDepreciationGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        EquipmentGroup: equipmentGroup
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AcceleratedDepreciationGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AcceleratedDepreciationGroups`.
   */
  update(
    entity: AcceleratedDepreciationGroups<T>
  ): UpdateRequestBuilder<AcceleratedDepreciationGroups<T>, T> {
    return new UpdateRequestBuilder<AcceleratedDepreciationGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AcceleratedDepreciationGroups`.
   * @param dataAreaId Key property. See {@link AcceleratedDepreciationGroups.dataAreaId}.
   * @param equipmentGroup Key property. See {@link AcceleratedDepreciationGroups.equipmentGroup}.
   * @returns A request builder for creating requests that delete an entity of type `AcceleratedDepreciationGroups`.
   */
  delete(
    dataAreaId: string,
    equipmentGroup: string
  ): DeleteRequestBuilder<AcceleratedDepreciationGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AcceleratedDepreciationGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AcceleratedDepreciationGroups` by taking the entity as a parameter.
   */
  delete(
    entity: AcceleratedDepreciationGroups<T>
  ): DeleteRequestBuilder<AcceleratedDepreciationGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    equipmentGroup?: string
  ): DeleteRequestBuilder<AcceleratedDepreciationGroups<T>, T> {
    return new DeleteRequestBuilder<AcceleratedDepreciationGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AcceleratedDepreciationGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            EquipmentGroup: equipmentGroup!
          }
    );
  }
}
