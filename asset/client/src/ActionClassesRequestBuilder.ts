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
import { ActionClasses } from './ActionClasses';

/**
 * Request builder class for operations supported on the {@link ActionClasses} entity.
 */
export class ActionClassesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ActionClasses<T>, T> {
  /**
   * Returns a request builder for querying all `ActionClasses` entities.
   * @returns A request builder for creating requests to retrieve all `ActionClasses` entities.
   */
  getAll(): GetAllRequestBuilder<ActionClasses<T>, T> {
    return new GetAllRequestBuilder<ActionClasses<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ActionClasses` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ActionClasses`.
   */
  create(entity: ActionClasses<T>): CreateRequestBuilder<ActionClasses<T>, T> {
    return new CreateRequestBuilder<ActionClasses<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ActionClasses` entity based on its keys.
   * @param dataAreaId Key property. See {@link ActionClasses.dataAreaId}.
   * @param executableClass Key property. See {@link ActionClasses.executableClass}.
   * @returns A request builder for creating requests to retrieve one `ActionClasses` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    executableClass: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ActionClasses<T>, T> {
    return new GetByKeyRequestBuilder<ActionClasses<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ExecutableClass: executableClass
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ActionClasses`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ActionClasses`.
   */
  update(entity: ActionClasses<T>): UpdateRequestBuilder<ActionClasses<T>, T> {
    return new UpdateRequestBuilder<ActionClasses<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ActionClasses`.
   * @param dataAreaId Key property. See {@link ActionClasses.dataAreaId}.
   * @param executableClass Key property. See {@link ActionClasses.executableClass}.
   * @returns A request builder for creating requests that delete an entity of type `ActionClasses`.
   */
  delete(
    dataAreaId: string,
    executableClass: string
  ): DeleteRequestBuilder<ActionClasses<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ActionClasses`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ActionClasses` by taking the entity as a parameter.
   */
  delete(entity: ActionClasses<T>): DeleteRequestBuilder<ActionClasses<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    executableClass?: string
  ): DeleteRequestBuilder<ActionClasses<T>, T> {
    return new DeleteRequestBuilder<ActionClasses<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ActionClasses
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ExecutableClass: executableClass!
          }
    );
  }
}
