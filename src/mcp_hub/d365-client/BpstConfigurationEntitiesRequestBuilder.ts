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
import { BpstConfigurationEntities } from './BpstConfigurationEntities';

/**
 * Request builder class for operations supported on the {@link BpstConfigurationEntities} entity.
 */
export class BpstConfigurationEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BpstConfigurationEntities<T>, T> {
  /**
   * Returns a request builder for querying all `BpstConfigurationEntities` entities.
   * @returns A request builder for creating requests to retrieve all `BpstConfigurationEntities` entities.
   */
  getAll(): GetAllRequestBuilder<BpstConfigurationEntities<T>, T> {
    return new GetAllRequestBuilder<BpstConfigurationEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BpstConfigurationEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BpstConfigurationEntities`.
   */
  create(
    entity: BpstConfigurationEntities<T>
  ): CreateRequestBuilder<BpstConfigurationEntities<T>, T> {
    return new CreateRequestBuilder<BpstConfigurationEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BpstConfigurationEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link BpstConfigurationEntities.dataAreaId}.
   * @param id Key property. See {@link BpstConfigurationEntities.id}.
   * @returns A request builder for creating requests to retrieve one `BpstConfigurationEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    id: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<BpstConfigurationEntities<T>, T> {
    return new GetByKeyRequestBuilder<BpstConfigurationEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Id: id
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BpstConfigurationEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BpstConfigurationEntities`.
   */
  update(
    entity: BpstConfigurationEntities<T>
  ): UpdateRequestBuilder<BpstConfigurationEntities<T>, T> {
    return new UpdateRequestBuilder<BpstConfigurationEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BpstConfigurationEntities`.
   * @param dataAreaId Key property. See {@link BpstConfigurationEntities.dataAreaId}.
   * @param id Key property. See {@link BpstConfigurationEntities.id}.
   * @returns A request builder for creating requests that delete an entity of type `BpstConfigurationEntities`.
   */
  delete(
    dataAreaId: string,
    id: string
  ): DeleteRequestBuilder<BpstConfigurationEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BpstConfigurationEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BpstConfigurationEntities` by taking the entity as a parameter.
   */
  delete(
    entity: BpstConfigurationEntities<T>
  ): DeleteRequestBuilder<BpstConfigurationEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    id?: string
  ): DeleteRequestBuilder<BpstConfigurationEntities<T>, T> {
    return new DeleteRequestBuilder<BpstConfigurationEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BpstConfigurationEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Id: id!
          }
    );
  }
}
