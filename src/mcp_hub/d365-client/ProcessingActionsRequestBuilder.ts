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
import { ProcessingActions } from './ProcessingActions';

/**
 * Request builder class for operations supported on the {@link ProcessingActions} entity.
 */
export class ProcessingActionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProcessingActions<T>, T> {
  /**
   * Returns a request builder for querying all `ProcessingActions` entities.
   * @returns A request builder for creating requests to retrieve all `ProcessingActions` entities.
   */
  getAll(): GetAllRequestBuilder<ProcessingActions<T>, T> {
    return new GetAllRequestBuilder<ProcessingActions<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProcessingActions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProcessingActions`.
   */
  create(
    entity: ProcessingActions<T>
  ): CreateRequestBuilder<ProcessingActions<T>, T> {
    return new CreateRequestBuilder<ProcessingActions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProcessingActions` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProcessingActions.dataAreaId}.
   * @param processing Key property. See {@link ProcessingActions.processing}.
   * @param action Key property. See {@link ProcessingActions.action}.
   * @returns A request builder for creating requests to retrieve one `ProcessingActions` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    processing: DeserializedType<T, 'Edm.String'>,
    action: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProcessingActions<T>, T> {
    return new GetByKeyRequestBuilder<ProcessingActions<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      Processing: processing,
      Action: action
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProcessingActions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProcessingActions`.
   */
  update(
    entity: ProcessingActions<T>
  ): UpdateRequestBuilder<ProcessingActions<T>, T> {
    return new UpdateRequestBuilder<ProcessingActions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProcessingActions`.
   * @param dataAreaId Key property. See {@link ProcessingActions.dataAreaId}.
   * @param processing Key property. See {@link ProcessingActions.processing}.
   * @param action Key property. See {@link ProcessingActions.action}.
   * @returns A request builder for creating requests that delete an entity of type `ProcessingActions`.
   */
  delete(
    dataAreaId: string,
    processing: string,
    action: string
  ): DeleteRequestBuilder<ProcessingActions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProcessingActions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProcessingActions` by taking the entity as a parameter.
   */
  delete(
    entity: ProcessingActions<T>
  ): DeleteRequestBuilder<ProcessingActions<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    processing?: string,
    action?: string
  ): DeleteRequestBuilder<ProcessingActions<T>, T> {
    return new DeleteRequestBuilder<ProcessingActions<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProcessingActions
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Processing: processing!,
            Action: action!
          }
    );
  }
}
