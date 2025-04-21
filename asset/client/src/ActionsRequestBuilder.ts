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
import { Actions } from './Actions';

/**
 * Request builder class for operations supported on the {@link Actions} entity.
 */
export class ActionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Actions<T>, T> {
  /**
   * Returns a request builder for querying all `Actions` entities.
   * @returns A request builder for creating requests to retrieve all `Actions` entities.
   */
  getAll(): GetAllRequestBuilder<Actions<T>, T> {
    return new GetAllRequestBuilder<Actions<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Actions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Actions`.
   */
  create(entity: Actions<T>): CreateRequestBuilder<Actions<T>, T> {
    return new CreateRequestBuilder<Actions<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `Actions` entity based on its keys.
   * @param dataAreaId Key property. See {@link Actions.dataAreaId}.
   * @param action Key property. See {@link Actions.action}.
   * @returns A request builder for creating requests to retrieve one `Actions` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    action: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Actions<T>, T> {
    return new GetByKeyRequestBuilder<Actions<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      Action: action
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Actions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Actions`.
   */
  update(entity: Actions<T>): UpdateRequestBuilder<Actions<T>, T> {
    return new UpdateRequestBuilder<Actions<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Actions`.
   * @param dataAreaId Key property. See {@link Actions.dataAreaId}.
   * @param action Key property. See {@link Actions.action}.
   * @returns A request builder for creating requests that delete an entity of type `Actions`.
   */
  delete(
    dataAreaId: string,
    action: string
  ): DeleteRequestBuilder<Actions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Actions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Actions` by taking the entity as a parameter.
   */
  delete(entity: Actions<T>): DeleteRequestBuilder<Actions<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    action?: string
  ): DeleteRequestBuilder<Actions<T>, T> {
    return new DeleteRequestBuilder<Actions<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof Actions
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Action: action!
          }
    );
  }
}
