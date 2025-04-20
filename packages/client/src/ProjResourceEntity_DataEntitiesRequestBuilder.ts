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
import { ProjResourceEntity_DataEntities } from './ProjResourceEntity_DataEntities';

/**
 * Request builder class for operations supported on the {@link ProjResourceEntity_DataEntities} entity.
 */
export class ProjResourceEntity_DataEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjResourceEntity_DataEntities<T>, T> {
  /**
   * Returns a request builder for querying all `ProjResourceEntity_DataEntities` entities.
   * @returns A request builder for creating requests to retrieve all `ProjResourceEntity_DataEntities` entities.
   */
  getAll(): GetAllRequestBuilder<ProjResourceEntity_DataEntities<T>, T> {
    return new GetAllRequestBuilder<ProjResourceEntity_DataEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProjResourceEntity_DataEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjResourceEntity_DataEntities`.
   */
  create(
    entity: ProjResourceEntity_DataEntities<T>
  ): CreateRequestBuilder<ProjResourceEntity_DataEntities<T>, T> {
    return new CreateRequestBuilder<ProjResourceEntity_DataEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjResourceEntity_DataEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjResourceEntity_DataEntities.dataAreaId}.
   * @param personnelNumber Key property. See {@link ProjResourceEntity_DataEntities.personnelNumber}.
   * @param projectId Key property. See {@link ProjResourceEntity_DataEntities.projectId}.
   * @returns A request builder for creating requests to retrieve one `ProjResourceEntity_DataEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    projectId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProjResourceEntity_DataEntities<T>, T> {
    return new GetByKeyRequestBuilder<ProjResourceEntity_DataEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PersonnelNumber: personnelNumber,
        ProjectId: projectId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProjResourceEntity_DataEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjResourceEntity_DataEntities`.
   */
  update(
    entity: ProjResourceEntity_DataEntities<T>
  ): UpdateRequestBuilder<ProjResourceEntity_DataEntities<T>, T> {
    return new UpdateRequestBuilder<ProjResourceEntity_DataEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjResourceEntity_DataEntities`.
   * @param dataAreaId Key property. See {@link ProjResourceEntity_DataEntities.dataAreaId}.
   * @param personnelNumber Key property. See {@link ProjResourceEntity_DataEntities.personnelNumber}.
   * @param projectId Key property. See {@link ProjResourceEntity_DataEntities.projectId}.
   * @returns A request builder for creating requests that delete an entity of type `ProjResourceEntity_DataEntities`.
   */
  delete(
    dataAreaId: string,
    personnelNumber: string,
    projectId: string
  ): DeleteRequestBuilder<ProjResourceEntity_DataEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjResourceEntity_DataEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjResourceEntity_DataEntities` by taking the entity as a parameter.
   */
  delete(
    entity: ProjResourceEntity_DataEntities<T>
  ): DeleteRequestBuilder<ProjResourceEntity_DataEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    personnelNumber?: string,
    projectId?: string
  ): DeleteRequestBuilder<ProjResourceEntity_DataEntities<T>, T> {
    return new DeleteRequestBuilder<ProjResourceEntity_DataEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjResourceEntity_DataEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PersonnelNumber: personnelNumber!,
            ProjectId: projectId!
          }
    );
  }
}
