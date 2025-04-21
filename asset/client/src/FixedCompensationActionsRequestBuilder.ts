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
import { FixedCompensationActions } from './FixedCompensationActions';

/**
 * Request builder class for operations supported on the {@link FixedCompensationActions} entity.
 */
export class FixedCompensationActionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FixedCompensationActions<T>, T> {
  /**
   * Returns a request builder for querying all `FixedCompensationActions` entities.
   * @returns A request builder for creating requests to retrieve all `FixedCompensationActions` entities.
   */
  getAll(): GetAllRequestBuilder<FixedCompensationActions<T>, T> {
    return new GetAllRequestBuilder<FixedCompensationActions<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `FixedCompensationActions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FixedCompensationActions`.
   */
  create(
    entity: FixedCompensationActions<T>
  ): CreateRequestBuilder<FixedCompensationActions<T>, T> {
    return new CreateRequestBuilder<FixedCompensationActions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `FixedCompensationActions` entity based on its keys.
   * @param dataAreaId Key property. See {@link FixedCompensationActions.dataAreaId}.
   * @param action Key property. See {@link FixedCompensationActions.action}.
   * @returns A request builder for creating requests to retrieve one `FixedCompensationActions` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    action: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<FixedCompensationActions<T>, T> {
    return new GetByKeyRequestBuilder<FixedCompensationActions<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Action: action
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `FixedCompensationActions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FixedCompensationActions`.
   */
  update(
    entity: FixedCompensationActions<T>
  ): UpdateRequestBuilder<FixedCompensationActions<T>, T> {
    return new UpdateRequestBuilder<FixedCompensationActions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `FixedCompensationActions`.
   * @param dataAreaId Key property. See {@link FixedCompensationActions.dataAreaId}.
   * @param action Key property. See {@link FixedCompensationActions.action}.
   * @returns A request builder for creating requests that delete an entity of type `FixedCompensationActions`.
   */
  delete(
    dataAreaId: string,
    action: string
  ): DeleteRequestBuilder<FixedCompensationActions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FixedCompensationActions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FixedCompensationActions` by taking the entity as a parameter.
   */
  delete(
    entity: FixedCompensationActions<T>
  ): DeleteRequestBuilder<FixedCompensationActions<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    action?: string
  ): DeleteRequestBuilder<FixedCompensationActions<T>, T> {
    return new DeleteRequestBuilder<FixedCompensationActions<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof FixedCompensationActions
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Action: action!
          }
    );
  }
}
