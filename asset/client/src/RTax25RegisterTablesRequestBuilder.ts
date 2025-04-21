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
import { RTax25RegisterTables } from './RTax25RegisterTables';

/**
 * Request builder class for operations supported on the {@link RTax25RegisterTables} entity.
 */
export class RTax25RegisterTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RTax25RegisterTables<T>, T> {
  /**
   * Returns a request builder for querying all `RTax25RegisterTables` entities.
   * @returns A request builder for creating requests to retrieve all `RTax25RegisterTables` entities.
   */
  getAll(): GetAllRequestBuilder<RTax25RegisterTables<T>, T> {
    return new GetAllRequestBuilder<RTax25RegisterTables<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RTax25RegisterTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RTax25RegisterTables`.
   */
  create(
    entity: RTax25RegisterTables<T>
  ): CreateRequestBuilder<RTax25RegisterTables<T>, T> {
    return new CreateRequestBuilder<RTax25RegisterTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RTax25RegisterTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link RTax25RegisterTables.dataAreaId}.
   * @param registerCode Key property. See {@link RTax25RegisterTables.registerCode}.
   * @returns A request builder for creating requests to retrieve one `RTax25RegisterTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    registerCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RTax25RegisterTables<T>, T> {
    return new GetByKeyRequestBuilder<RTax25RegisterTables<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RegisterCode: registerCode
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RTax25RegisterTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RTax25RegisterTables`.
   */
  update(
    entity: RTax25RegisterTables<T>
  ): UpdateRequestBuilder<RTax25RegisterTables<T>, T> {
    return new UpdateRequestBuilder<RTax25RegisterTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RTax25RegisterTables`.
   * @param dataAreaId Key property. See {@link RTax25RegisterTables.dataAreaId}.
   * @param registerCode Key property. See {@link RTax25RegisterTables.registerCode}.
   * @returns A request builder for creating requests that delete an entity of type `RTax25RegisterTables`.
   */
  delete(
    dataAreaId: string,
    registerCode: string
  ): DeleteRequestBuilder<RTax25RegisterTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RTax25RegisterTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RTax25RegisterTables` by taking the entity as a parameter.
   */
  delete(
    entity: RTax25RegisterTables<T>
  ): DeleteRequestBuilder<RTax25RegisterTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    registerCode?: string
  ): DeleteRequestBuilder<RTax25RegisterTables<T>, T> {
    return new DeleteRequestBuilder<RTax25RegisterTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RTax25RegisterTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RegisterCode: registerCode!
          }
    );
  }
}
