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
import { CostCalculationGroups } from './CostCalculationGroups';

/**
 * Request builder class for operations supported on the {@link CostCalculationGroups} entity.
 */
export class CostCalculationGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CostCalculationGroups<T>, T> {
  /**
   * Returns a request builder for querying all `CostCalculationGroups` entities.
   * @returns A request builder for creating requests to retrieve all `CostCalculationGroups` entities.
   */
  getAll(): GetAllRequestBuilder<CostCalculationGroups<T>, T> {
    return new GetAllRequestBuilder<CostCalculationGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CostCalculationGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CostCalculationGroups`.
   */
  create(
    entity: CostCalculationGroups<T>
  ): CreateRequestBuilder<CostCalculationGroups<T>, T> {
    return new CreateRequestBuilder<CostCalculationGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CostCalculationGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link CostCalculationGroups.dataAreaId}.
   * @param groupId Key property. See {@link CostCalculationGroups.groupId}.
   * @returns A request builder for creating requests to retrieve one `CostCalculationGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    groupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CostCalculationGroups<T>, T> {
    return new GetByKeyRequestBuilder<CostCalculationGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        GroupId: groupId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CostCalculationGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CostCalculationGroups`.
   */
  update(
    entity: CostCalculationGroups<T>
  ): UpdateRequestBuilder<CostCalculationGroups<T>, T> {
    return new UpdateRequestBuilder<CostCalculationGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CostCalculationGroups`.
   * @param dataAreaId Key property. See {@link CostCalculationGroups.dataAreaId}.
   * @param groupId Key property. See {@link CostCalculationGroups.groupId}.
   * @returns A request builder for creating requests that delete an entity of type `CostCalculationGroups`.
   */
  delete(
    dataAreaId: string,
    groupId: string
  ): DeleteRequestBuilder<CostCalculationGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CostCalculationGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CostCalculationGroups` by taking the entity as a parameter.
   */
  delete(
    entity: CostCalculationGroups<T>
  ): DeleteRequestBuilder<CostCalculationGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    groupId?: string
  ): DeleteRequestBuilder<CostCalculationGroups<T>, T> {
    return new DeleteRequestBuilder<CostCalculationGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CostCalculationGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            GroupId: groupId!
          }
    );
  }
}
