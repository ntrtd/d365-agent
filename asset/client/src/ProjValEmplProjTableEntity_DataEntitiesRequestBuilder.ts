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
import { ProjValEmplProjTableEntity_DataEntities } from './ProjValEmplProjTableEntity_DataEntities';

/**
 * Request builder class for operations supported on the {@link ProjValEmplProjTableEntity_DataEntities} entity.
 */
export class ProjValEmplProjTableEntity_DataEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjValEmplProjTableEntity_DataEntities<T>, T> {
  /**
   * Returns a request builder for querying all `ProjValEmplProjTableEntity_DataEntities` entities.
   * @returns A request builder for creating requests to retrieve all `ProjValEmplProjTableEntity_DataEntities` entities.
   */
  getAll(): GetAllRequestBuilder<
    ProjValEmplProjTableEntity_DataEntities<T>,
    T
  > {
    return new GetAllRequestBuilder<
      ProjValEmplProjTableEntity_DataEntities<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProjValEmplProjTableEntity_DataEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjValEmplProjTableEntity_DataEntities`.
   */
  create(
    entity: ProjValEmplProjTableEntity_DataEntities<T>
  ): CreateRequestBuilder<ProjValEmplProjTableEntity_DataEntities<T>, T> {
    return new CreateRequestBuilder<
      ProjValEmplProjTableEntity_DataEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `ProjValEmplProjTableEntity_DataEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjValEmplProjTableEntity_DataEntities.dataAreaId}.
   * @param groupId Key property. See {@link ProjValEmplProjTableEntity_DataEntities.groupId}.
   * @returns A request builder for creating requests to retrieve one `ProjValEmplProjTableEntity_DataEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    groupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProjValEmplProjTableEntity_DataEntities<T>, T> {
    return new GetByKeyRequestBuilder<
      ProjValEmplProjTableEntity_DataEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      GroupId: groupId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProjValEmplProjTableEntity_DataEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjValEmplProjTableEntity_DataEntities`.
   */
  update(
    entity: ProjValEmplProjTableEntity_DataEntities<T>
  ): UpdateRequestBuilder<ProjValEmplProjTableEntity_DataEntities<T>, T> {
    return new UpdateRequestBuilder<
      ProjValEmplProjTableEntity_DataEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjValEmplProjTableEntity_DataEntities`.
   * @param dataAreaId Key property. See {@link ProjValEmplProjTableEntity_DataEntities.dataAreaId}.
   * @param groupId Key property. See {@link ProjValEmplProjTableEntity_DataEntities.groupId}.
   * @returns A request builder for creating requests that delete an entity of type `ProjValEmplProjTableEntity_DataEntities`.
   */
  delete(
    dataAreaId: string,
    groupId: string
  ): DeleteRequestBuilder<ProjValEmplProjTableEntity_DataEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjValEmplProjTableEntity_DataEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjValEmplProjTableEntity_DataEntities` by taking the entity as a parameter.
   */
  delete(
    entity: ProjValEmplProjTableEntity_DataEntities<T>
  ): DeleteRequestBuilder<ProjValEmplProjTableEntity_DataEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    groupId?: string
  ): DeleteRequestBuilder<ProjValEmplProjTableEntity_DataEntities<T>, T> {
    return new DeleteRequestBuilder<
      ProjValEmplProjTableEntity_DataEntities<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjValEmplProjTableEntity_DataEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            GroupId: groupId!
          }
    );
  }
}
