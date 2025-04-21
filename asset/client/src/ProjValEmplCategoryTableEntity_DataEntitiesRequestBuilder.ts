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
import { ProjValEmplCategoryTableEntity_DataEntities } from './ProjValEmplCategoryTableEntity_DataEntities';

/**
 * Request builder class for operations supported on the {@link ProjValEmplCategoryTableEntity_DataEntities} entity.
 */
export class ProjValEmplCategoryTableEntity_DataEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjValEmplCategoryTableEntity_DataEntities<T>, T> {
  /**
   * Returns a request builder for querying all `ProjValEmplCategoryTableEntity_DataEntities` entities.
   * @returns A request builder for creating requests to retrieve all `ProjValEmplCategoryTableEntity_DataEntities` entities.
   */
  getAll(): GetAllRequestBuilder<
    ProjValEmplCategoryTableEntity_DataEntities<T>,
    T
  > {
    return new GetAllRequestBuilder<
      ProjValEmplCategoryTableEntity_DataEntities<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProjValEmplCategoryTableEntity_DataEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjValEmplCategoryTableEntity_DataEntities`.
   */
  create(
    entity: ProjValEmplCategoryTableEntity_DataEntities<T>
  ): CreateRequestBuilder<ProjValEmplCategoryTableEntity_DataEntities<T>, T> {
    return new CreateRequestBuilder<
      ProjValEmplCategoryTableEntity_DataEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `ProjValEmplCategoryTableEntity_DataEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjValEmplCategoryTableEntity_DataEntities.dataAreaId}.
   * @param groupId Key property. See {@link ProjValEmplCategoryTableEntity_DataEntities.groupId}.
   * @returns A request builder for creating requests to retrieve one `ProjValEmplCategoryTableEntity_DataEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    groupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProjValEmplCategoryTableEntity_DataEntities<T>, T> {
    return new GetByKeyRequestBuilder<
      ProjValEmplCategoryTableEntity_DataEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      GroupId: groupId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProjValEmplCategoryTableEntity_DataEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjValEmplCategoryTableEntity_DataEntities`.
   */
  update(
    entity: ProjValEmplCategoryTableEntity_DataEntities<T>
  ): UpdateRequestBuilder<ProjValEmplCategoryTableEntity_DataEntities<T>, T> {
    return new UpdateRequestBuilder<
      ProjValEmplCategoryTableEntity_DataEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjValEmplCategoryTableEntity_DataEntities`.
   * @param dataAreaId Key property. See {@link ProjValEmplCategoryTableEntity_DataEntities.dataAreaId}.
   * @param groupId Key property. See {@link ProjValEmplCategoryTableEntity_DataEntities.groupId}.
   * @returns A request builder for creating requests that delete an entity of type `ProjValEmplCategoryTableEntity_DataEntities`.
   */
  delete(
    dataAreaId: string,
    groupId: string
  ): DeleteRequestBuilder<ProjValEmplCategoryTableEntity_DataEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjValEmplCategoryTableEntity_DataEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjValEmplCategoryTableEntity_DataEntities` by taking the entity as a parameter.
   */
  delete(
    entity: ProjValEmplCategoryTableEntity_DataEntities<T>
  ): DeleteRequestBuilder<ProjValEmplCategoryTableEntity_DataEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    groupId?: string
  ): DeleteRequestBuilder<ProjValEmplCategoryTableEntity_DataEntities<T>, T> {
    return new DeleteRequestBuilder<
      ProjValEmplCategoryTableEntity_DataEntities<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjValEmplCategoryTableEntity_DataEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            GroupId: groupId!
          }
    );
  }
}
