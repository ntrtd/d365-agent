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
import { UnrealizedDocuSetTables } from './UnrealizedDocuSetTables';

/**
 * Request builder class for operations supported on the {@link UnrealizedDocuSetTables} entity.
 */
export class UnrealizedDocuSetTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<UnrealizedDocuSetTables<T>, T> {
  /**
   * Returns a request builder for querying all `UnrealizedDocuSetTables` entities.
   * @returns A request builder for creating requests to retrieve all `UnrealizedDocuSetTables` entities.
   */
  getAll(): GetAllRequestBuilder<UnrealizedDocuSetTables<T>, T> {
    return new GetAllRequestBuilder<UnrealizedDocuSetTables<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `UnrealizedDocuSetTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `UnrealizedDocuSetTables`.
   */
  create(
    entity: UnrealizedDocuSetTables<T>
  ): CreateRequestBuilder<UnrealizedDocuSetTables<T>, T> {
    return new CreateRequestBuilder<UnrealizedDocuSetTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `UnrealizedDocuSetTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link UnrealizedDocuSetTables.dataAreaId}.
   * @param code Key property. See {@link UnrealizedDocuSetTables.code}.
   * @param lineId Key property. See {@link UnrealizedDocuSetTables.lineId}.
   * @returns A request builder for creating requests to retrieve one `UnrealizedDocuSetTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    code: DeserializedType<T, 'Edm.String'>,
    lineId: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<UnrealizedDocuSetTables<T>, T> {
    return new GetByKeyRequestBuilder<UnrealizedDocuSetTables<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Code: code,
        LineId: lineId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `UnrealizedDocuSetTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `UnrealizedDocuSetTables`.
   */
  update(
    entity: UnrealizedDocuSetTables<T>
  ): UpdateRequestBuilder<UnrealizedDocuSetTables<T>, T> {
    return new UpdateRequestBuilder<UnrealizedDocuSetTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `UnrealizedDocuSetTables`.
   * @param dataAreaId Key property. See {@link UnrealizedDocuSetTables.dataAreaId}.
   * @param code Key property. See {@link UnrealizedDocuSetTables.code}.
   * @param lineId Key property. See {@link UnrealizedDocuSetTables.lineId}.
   * @returns A request builder for creating requests that delete an entity of type `UnrealizedDocuSetTables`.
   */
  delete(
    dataAreaId: string,
    code: string,
    lineId: string
  ): DeleteRequestBuilder<UnrealizedDocuSetTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `UnrealizedDocuSetTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `UnrealizedDocuSetTables` by taking the entity as a parameter.
   */
  delete(
    entity: UnrealizedDocuSetTables<T>
  ): DeleteRequestBuilder<UnrealizedDocuSetTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    code?: string,
    lineId?: string
  ): DeleteRequestBuilder<UnrealizedDocuSetTables<T>, T> {
    return new DeleteRequestBuilder<UnrealizedDocuSetTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof UnrealizedDocuSetTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Code: code!,
            LineId: lineId!
          }
    );
  }
}
