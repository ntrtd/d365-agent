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
import { ProjValEmplCategorySetupEntity_DataEntities } from './ProjValEmplCategorySetupEntity_DataEntities';

/**
 * Request builder class for operations supported on the {@link ProjValEmplCategorySetupEntity_DataEntities} entity.
 */
export class ProjValEmplCategorySetupEntity_DataEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjValEmplCategorySetupEntity_DataEntities<T>, T> {
  /**
   * Returns a request builder for querying all `ProjValEmplCategorySetupEntity_DataEntities` entities.
   * @returns A request builder for creating requests to retrieve all `ProjValEmplCategorySetupEntity_DataEntities` entities.
   */
  getAll(): GetAllRequestBuilder<
    ProjValEmplCategorySetupEntity_DataEntities<T>,
    T
  > {
    return new GetAllRequestBuilder<
      ProjValEmplCategorySetupEntity_DataEntities<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProjValEmplCategorySetupEntity_DataEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjValEmplCategorySetupEntity_DataEntities`.
   */
  create(
    entity: ProjValEmplCategorySetupEntity_DataEntities<T>
  ): CreateRequestBuilder<ProjValEmplCategorySetupEntity_DataEntities<T>, T> {
    return new CreateRequestBuilder<
      ProjValEmplCategorySetupEntity_DataEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `ProjValEmplCategorySetupEntity_DataEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjValEmplCategorySetupEntity_DataEntities.dataAreaId}.
   * @param groupId Key property. See {@link ProjValEmplCategorySetupEntity_DataEntities.groupId}.
   * @param categoryId Key property. See {@link ProjValEmplCategorySetupEntity_DataEntities.categoryId}.
   * @param resourceId Key property. See {@link ProjValEmplCategorySetupEntity_DataEntities.resourceId}.
   * @returns A request builder for creating requests to retrieve one `ProjValEmplCategorySetupEntity_DataEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    groupId: DeserializedType<T, 'Edm.String'>,
    categoryId: DeserializedType<T, 'Edm.String'>,
    resourceId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProjValEmplCategorySetupEntity_DataEntities<T>, T> {
    return new GetByKeyRequestBuilder<
      ProjValEmplCategorySetupEntity_DataEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      GroupId: groupId,
      CategoryId: categoryId,
      ResourceId: resourceId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProjValEmplCategorySetupEntity_DataEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjValEmplCategorySetupEntity_DataEntities`.
   */
  update(
    entity: ProjValEmplCategorySetupEntity_DataEntities<T>
  ): UpdateRequestBuilder<ProjValEmplCategorySetupEntity_DataEntities<T>, T> {
    return new UpdateRequestBuilder<
      ProjValEmplCategorySetupEntity_DataEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjValEmplCategorySetupEntity_DataEntities`.
   * @param dataAreaId Key property. See {@link ProjValEmplCategorySetupEntity_DataEntities.dataAreaId}.
   * @param groupId Key property. See {@link ProjValEmplCategorySetupEntity_DataEntities.groupId}.
   * @param categoryId Key property. See {@link ProjValEmplCategorySetupEntity_DataEntities.categoryId}.
   * @param resourceId Key property. See {@link ProjValEmplCategorySetupEntity_DataEntities.resourceId}.
   * @returns A request builder for creating requests that delete an entity of type `ProjValEmplCategorySetupEntity_DataEntities`.
   */
  delete(
    dataAreaId: string,
    groupId: string,
    categoryId: string,
    resourceId: string
  ): DeleteRequestBuilder<ProjValEmplCategorySetupEntity_DataEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjValEmplCategorySetupEntity_DataEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjValEmplCategorySetupEntity_DataEntities` by taking the entity as a parameter.
   */
  delete(
    entity: ProjValEmplCategorySetupEntity_DataEntities<T>
  ): DeleteRequestBuilder<ProjValEmplCategorySetupEntity_DataEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    groupId?: string,
    categoryId?: string,
    resourceId?: string
  ): DeleteRequestBuilder<ProjValEmplCategorySetupEntity_DataEntities<T>, T> {
    return new DeleteRequestBuilder<
      ProjValEmplCategorySetupEntity_DataEntities<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjValEmplCategorySetupEntity_DataEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            GroupId: groupId!,
            CategoryId: categoryId!,
            ResourceId: resourceId!
          }
    );
  }
}
