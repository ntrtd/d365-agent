/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { DepreciationGroups } from './DepreciationGroups';

/**
 * Request builder class for operations supported on the {@link DepreciationGroups} entity.
 */
export class DepreciationGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DepreciationGroups<T>, T> {
  /**
   * Returns a request builder for querying all `DepreciationGroups` entities.
   * @returns A request builder for creating requests to retrieve all `DepreciationGroups` entities.
   */
  getAll(): GetAllRequestBuilder<DepreciationGroups<T>, T> {
    return new GetAllRequestBuilder<DepreciationGroups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `DepreciationGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DepreciationGroups`.
   */
  create(
    entity: DepreciationGroups<T>
  ): CreateRequestBuilder<DepreciationGroups<T>, T> {
    return new CreateRequestBuilder<DepreciationGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DepreciationGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link DepreciationGroups.dataAreaId}.
   * @param depreciationGroup Key property. See {@link DepreciationGroups.depreciationGroup}.
   * @param startDate Key property. See {@link DepreciationGroups.startDate}.
   * @returns A request builder for creating requests to retrieve one `DepreciationGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    depreciationGroup: DeserializedType<T, 'Edm.String'>,
    startDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<DepreciationGroups<T>, T> {
    return new GetByKeyRequestBuilder<DepreciationGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        DepreciationGroup: depreciationGroup,
        StartDate: startDate
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DepreciationGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DepreciationGroups`.
   */
  update(
    entity: DepreciationGroups<T>
  ): UpdateRequestBuilder<DepreciationGroups<T>, T> {
    return new UpdateRequestBuilder<DepreciationGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DepreciationGroups`.
   * @param dataAreaId Key property. See {@link DepreciationGroups.dataAreaId}.
   * @param depreciationGroup Key property. See {@link DepreciationGroups.depreciationGroup}.
   * @param startDate Key property. See {@link DepreciationGroups.startDate}.
   * @returns A request builder for creating requests that delete an entity of type `DepreciationGroups`.
   */
  delete(
    dataAreaId: string,
    depreciationGroup: string,
    startDate: Moment
  ): DeleteRequestBuilder<DepreciationGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DepreciationGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DepreciationGroups` by taking the entity as a parameter.
   */
  delete(
    entity: DepreciationGroups<T>
  ): DeleteRequestBuilder<DepreciationGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    depreciationGroup?: string,
    startDate?: Moment
  ): DeleteRequestBuilder<DepreciationGroups<T>, T> {
    return new DeleteRequestBuilder<DepreciationGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DepreciationGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            DepreciationGroup: depreciationGroup!,
            StartDate: startDate!
          }
    );
  }
}
