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
import { ProjTableBiEntities } from './ProjTableBiEntities';

/**
 * Request builder class for operations supported on the {@link ProjTableBiEntities} entity.
 */
export class ProjTableBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjTableBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `ProjTableBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `ProjTableBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<ProjTableBiEntities<T>, T> {
    return new GetAllRequestBuilder<ProjTableBiEntities<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProjTableBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjTableBiEntities`.
   */
  create(
    entity: ProjTableBiEntities<T>
  ): CreateRequestBuilder<ProjTableBiEntities<T>, T> {
    return new CreateRequestBuilder<ProjTableBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjTableBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjTableBiEntities.dataAreaId}.
   * @param projId Key property. See {@link ProjTableBiEntities.projId}.
   * @returns A request builder for creating requests to retrieve one `ProjTableBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    projId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProjTableBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<ProjTableBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ProjId: projId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProjTableBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjTableBiEntities`.
   */
  update(
    entity: ProjTableBiEntities<T>
  ): UpdateRequestBuilder<ProjTableBiEntities<T>, T> {
    return new UpdateRequestBuilder<ProjTableBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjTableBiEntities`.
   * @param dataAreaId Key property. See {@link ProjTableBiEntities.dataAreaId}.
   * @param projId Key property. See {@link ProjTableBiEntities.projId}.
   * @returns A request builder for creating requests that delete an entity of type `ProjTableBiEntities`.
   */
  delete(
    dataAreaId: string,
    projId: string
  ): DeleteRequestBuilder<ProjTableBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjTableBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjTableBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: ProjTableBiEntities<T>
  ): DeleteRequestBuilder<ProjTableBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    projId?: string
  ): DeleteRequestBuilder<ProjTableBiEntities<T>, T> {
    return new DeleteRequestBuilder<ProjTableBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjTableBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProjId: projId!
          }
    );
  }
}
