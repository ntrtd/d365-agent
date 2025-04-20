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
import { WhsSalesLineBiEntities } from './WhsSalesLineBiEntities';

/**
 * Request builder class for operations supported on the {@link WhsSalesLineBiEntities} entity.
 */
export class WhsSalesLineBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WhsSalesLineBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `WhsSalesLineBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `WhsSalesLineBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<WhsSalesLineBiEntities<T>, T> {
    return new GetAllRequestBuilder<WhsSalesLineBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `WhsSalesLineBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WhsSalesLineBiEntities`.
   */
  create(
    entity: WhsSalesLineBiEntities<T>
  ): CreateRequestBuilder<WhsSalesLineBiEntities<T>, T> {
    return new CreateRequestBuilder<WhsSalesLineBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WhsSalesLineBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link WhsSalesLineBiEntities.dataAreaId}.
   * @param inventTransId Key property. See {@link WhsSalesLineBiEntities.inventTransId}.
   * @returns A request builder for creating requests to retrieve one `WhsSalesLineBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    inventTransId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WhsSalesLineBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<WhsSalesLineBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        InventTransId: inventTransId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WhsSalesLineBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WhsSalesLineBiEntities`.
   */
  update(
    entity: WhsSalesLineBiEntities<T>
  ): UpdateRequestBuilder<WhsSalesLineBiEntities<T>, T> {
    return new UpdateRequestBuilder<WhsSalesLineBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WhsSalesLineBiEntities`.
   * @param dataAreaId Key property. See {@link WhsSalesLineBiEntities.dataAreaId}.
   * @param inventTransId Key property. See {@link WhsSalesLineBiEntities.inventTransId}.
   * @returns A request builder for creating requests that delete an entity of type `WhsSalesLineBiEntities`.
   */
  delete(
    dataAreaId: string,
    inventTransId: string
  ): DeleteRequestBuilder<WhsSalesLineBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WhsSalesLineBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WhsSalesLineBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: WhsSalesLineBiEntities<T>
  ): DeleteRequestBuilder<WhsSalesLineBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    inventTransId?: string
  ): DeleteRequestBuilder<WhsSalesLineBiEntities<T>, T> {
    return new DeleteRequestBuilder<WhsSalesLineBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof WhsSalesLineBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            InventTransId: inventTransId!
          }
    );
  }
}
