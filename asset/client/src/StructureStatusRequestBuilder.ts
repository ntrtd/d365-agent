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
import { StructureStatus } from './StructureStatus';

/**
 * Request builder class for operations supported on the {@link StructureStatus} entity.
 */
export class StructureStatusRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<StructureStatus<T>, T> {
  /**
   * Returns a request builder for querying all `StructureStatus` entities.
   * @returns A request builder for creating requests to retrieve all `StructureStatus` entities.
   */
  getAll(): GetAllRequestBuilder<StructureStatus<T>, T> {
    return new GetAllRequestBuilder<StructureStatus<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `StructureStatus` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `StructureStatus`.
   */
  create(
    entity: StructureStatus<T>
  ): CreateRequestBuilder<StructureStatus<T>, T> {
    return new CreateRequestBuilder<StructureStatus<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `StructureStatus` entity based on its keys.
   * @param dataAreaId Key property. See {@link StructureStatus.dataAreaId}.
   * @param strStatId Key property. See {@link StructureStatus.strStatId}.
   * @returns A request builder for creating requests to retrieve one `StructureStatus` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    strStatId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<StructureStatus<T>, T> {
    return new GetByKeyRequestBuilder<StructureStatus<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      StrStatId: strStatId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `StructureStatus`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `StructureStatus`.
   */
  update(
    entity: StructureStatus<T>
  ): UpdateRequestBuilder<StructureStatus<T>, T> {
    return new UpdateRequestBuilder<StructureStatus<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `StructureStatus`.
   * @param dataAreaId Key property. See {@link StructureStatus.dataAreaId}.
   * @param strStatId Key property. See {@link StructureStatus.strStatId}.
   * @returns A request builder for creating requests that delete an entity of type `StructureStatus`.
   */
  delete(
    dataAreaId: string,
    strStatId: string
  ): DeleteRequestBuilder<StructureStatus<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `StructureStatus`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `StructureStatus` by taking the entity as a parameter.
   */
  delete(
    entity: StructureStatus<T>
  ): DeleteRequestBuilder<StructureStatus<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    strStatId?: string
  ): DeleteRequestBuilder<StructureStatus<T>, T> {
    return new DeleteRequestBuilder<StructureStatus<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof StructureStatus
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            StrStatId: strStatId!
          }
    );
  }
}
