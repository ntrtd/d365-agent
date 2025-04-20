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
import { InventDimSetupGridEntities } from './InventDimSetupGridEntities';

/**
 * Request builder class for operations supported on the {@link InventDimSetupGridEntities} entity.
 */
export class InventDimSetupGridEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InventDimSetupGridEntities<T>, T> {
  /**
   * Returns a request builder for querying all `InventDimSetupGridEntities` entities.
   * @returns A request builder for creating requests to retrieve all `InventDimSetupGridEntities` entities.
   */
  getAll(): GetAllRequestBuilder<InventDimSetupGridEntities<T>, T> {
    return new GetAllRequestBuilder<InventDimSetupGridEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `InventDimSetupGridEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventDimSetupGridEntities`.
   */
  create(
    entity: InventDimSetupGridEntities<T>
  ): CreateRequestBuilder<InventDimSetupGridEntities<T>, T> {
    return new CreateRequestBuilder<InventDimSetupGridEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InventDimSetupGridEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link InventDimSetupGridEntities.dataAreaId}.
   * @param fieldId Key property. See {@link InventDimSetupGridEntities.fieldId}.
   * @returns A request builder for creating requests to retrieve one `InventDimSetupGridEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    fieldId: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<InventDimSetupGridEntities<T>, T> {
    return new GetByKeyRequestBuilder<InventDimSetupGridEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        FieldID: fieldId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InventDimSetupGridEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventDimSetupGridEntities`.
   */
  update(
    entity: InventDimSetupGridEntities<T>
  ): UpdateRequestBuilder<InventDimSetupGridEntities<T>, T> {
    return new UpdateRequestBuilder<InventDimSetupGridEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InventDimSetupGridEntities`.
   * @param dataAreaId Key property. See {@link InventDimSetupGridEntities.dataAreaId}.
   * @param fieldId Key property. See {@link InventDimSetupGridEntities.fieldId}.
   * @returns A request builder for creating requests that delete an entity of type `InventDimSetupGridEntities`.
   */
  delete(
    dataAreaId: string,
    fieldId: number
  ): DeleteRequestBuilder<InventDimSetupGridEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InventDimSetupGridEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventDimSetupGridEntities` by taking the entity as a parameter.
   */
  delete(
    entity: InventDimSetupGridEntities<T>
  ): DeleteRequestBuilder<InventDimSetupGridEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    fieldId?: number
  ): DeleteRequestBuilder<InventDimSetupGridEntities<T>, T> {
    return new DeleteRequestBuilder<InventDimSetupGridEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InventDimSetupGridEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FieldID: fieldId!
          }
    );
  }
}
