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
import { QualityTestGroups } from './QualityTestGroups';

/**
 * Request builder class for operations supported on the {@link QualityTestGroups} entity.
 */
export class QualityTestGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<QualityTestGroups<T>, T> {
  /**
   * Returns a request builder for querying all `QualityTestGroups` entities.
   * @returns A request builder for creating requests to retrieve all `QualityTestGroups` entities.
   */
  getAll(): GetAllRequestBuilder<QualityTestGroups<T>, T> {
    return new GetAllRequestBuilder<QualityTestGroups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `QualityTestGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `QualityTestGroups`.
   */
  create(
    entity: QualityTestGroups<T>
  ): CreateRequestBuilder<QualityTestGroups<T>, T> {
    return new CreateRequestBuilder<QualityTestGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `QualityTestGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link QualityTestGroups.dataAreaId}.
   * @param qualityTestGroupId Key property. See {@link QualityTestGroups.qualityTestGroupId}.
   * @returns A request builder for creating requests to retrieve one `QualityTestGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    qualityTestGroupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<QualityTestGroups<T>, T> {
    return new GetByKeyRequestBuilder<QualityTestGroups<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      QualityTestGroupId: qualityTestGroupId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `QualityTestGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `QualityTestGroups`.
   */
  update(
    entity: QualityTestGroups<T>
  ): UpdateRequestBuilder<QualityTestGroups<T>, T> {
    return new UpdateRequestBuilder<QualityTestGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `QualityTestGroups`.
   * @param dataAreaId Key property. See {@link QualityTestGroups.dataAreaId}.
   * @param qualityTestGroupId Key property. See {@link QualityTestGroups.qualityTestGroupId}.
   * @returns A request builder for creating requests that delete an entity of type `QualityTestGroups`.
   */
  delete(
    dataAreaId: string,
    qualityTestGroupId: string
  ): DeleteRequestBuilder<QualityTestGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `QualityTestGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `QualityTestGroups` by taking the entity as a parameter.
   */
  delete(
    entity: QualityTestGroups<T>
  ): DeleteRequestBuilder<QualityTestGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    qualityTestGroupId?: string
  ): DeleteRequestBuilder<QualityTestGroups<T>, T> {
    return new DeleteRequestBuilder<QualityTestGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof QualityTestGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            QualityTestGroupId: qualityTestGroupId!
          }
    );
  }
}
