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
import { ProjValEmplProjSetupEntity_DataEntities } from './ProjValEmplProjSetupEntity_DataEntities';

/**
 * Request builder class for operations supported on the {@link ProjValEmplProjSetupEntity_DataEntities} entity.
 */
export class ProjValEmplProjSetupEntity_DataEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjValEmplProjSetupEntity_DataEntities<T>, T> {
  /**
   * Returns a request builder for querying all `ProjValEmplProjSetupEntity_DataEntities` entities.
   * @returns A request builder for creating requests to retrieve all `ProjValEmplProjSetupEntity_DataEntities` entities.
   */
  getAll(): GetAllRequestBuilder<
    ProjValEmplProjSetupEntity_DataEntities<T>,
    T
  > {
    return new GetAllRequestBuilder<
      ProjValEmplProjSetupEntity_DataEntities<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProjValEmplProjSetupEntity_DataEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjValEmplProjSetupEntity_DataEntities`.
   */
  create(
    entity: ProjValEmplProjSetupEntity_DataEntities<T>
  ): CreateRequestBuilder<ProjValEmplProjSetupEntity_DataEntities<T>, T> {
    return new CreateRequestBuilder<
      ProjValEmplProjSetupEntity_DataEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `ProjValEmplProjSetupEntity_DataEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjValEmplProjSetupEntity_DataEntities.dataAreaId}.
   * @param groupId Key property. See {@link ProjValEmplProjSetupEntity_DataEntities.groupId}.
   * @param projid Key property. See {@link ProjValEmplProjSetupEntity_DataEntities.projid}.
   * @param resourceId Key property. See {@link ProjValEmplProjSetupEntity_DataEntities.resourceId}.
   * @param resourceLegalEntityDataArea Key property. See {@link ProjValEmplProjSetupEntity_DataEntities.resourceLegalEntityDataArea}.
   * @returns A request builder for creating requests to retrieve one `ProjValEmplProjSetupEntity_DataEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    groupId: DeserializedType<T, 'Edm.String'>,
    projid: DeserializedType<T, 'Edm.String'>,
    resourceId: DeserializedType<T, 'Edm.String'>,
    resourceLegalEntityDataArea: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProjValEmplProjSetupEntity_DataEntities<T>, T> {
    return new GetByKeyRequestBuilder<
      ProjValEmplProjSetupEntity_DataEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      GroupId: groupId,
      Projid: projid,
      ResourceId: resourceId,
      ResourceLegalEntityDataArea: resourceLegalEntityDataArea
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProjValEmplProjSetupEntity_DataEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjValEmplProjSetupEntity_DataEntities`.
   */
  update(
    entity: ProjValEmplProjSetupEntity_DataEntities<T>
  ): UpdateRequestBuilder<ProjValEmplProjSetupEntity_DataEntities<T>, T> {
    return new UpdateRequestBuilder<
      ProjValEmplProjSetupEntity_DataEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjValEmplProjSetupEntity_DataEntities`.
   * @param dataAreaId Key property. See {@link ProjValEmplProjSetupEntity_DataEntities.dataAreaId}.
   * @param groupId Key property. See {@link ProjValEmplProjSetupEntity_DataEntities.groupId}.
   * @param projid Key property. See {@link ProjValEmplProjSetupEntity_DataEntities.projid}.
   * @param resourceId Key property. See {@link ProjValEmplProjSetupEntity_DataEntities.resourceId}.
   * @param resourceLegalEntityDataArea Key property. See {@link ProjValEmplProjSetupEntity_DataEntities.resourceLegalEntityDataArea}.
   * @returns A request builder for creating requests that delete an entity of type `ProjValEmplProjSetupEntity_DataEntities`.
   */
  delete(
    dataAreaId: string,
    groupId: string,
    projid: string,
    resourceId: string,
    resourceLegalEntityDataArea: string
  ): DeleteRequestBuilder<ProjValEmplProjSetupEntity_DataEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjValEmplProjSetupEntity_DataEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjValEmplProjSetupEntity_DataEntities` by taking the entity as a parameter.
   */
  delete(
    entity: ProjValEmplProjSetupEntity_DataEntities<T>
  ): DeleteRequestBuilder<ProjValEmplProjSetupEntity_DataEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    groupId?: string,
    projid?: string,
    resourceId?: string,
    resourceLegalEntityDataArea?: string
  ): DeleteRequestBuilder<ProjValEmplProjSetupEntity_DataEntities<T>, T> {
    return new DeleteRequestBuilder<
      ProjValEmplProjSetupEntity_DataEntities<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjValEmplProjSetupEntity_DataEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            GroupId: groupId!,
            Projid: projid!,
            ResourceId: resourceId!,
            ResourceLegalEntityDataArea: resourceLegalEntityDataArea!
          }
    );
  }
}
