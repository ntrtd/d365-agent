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
import { SeparateDivisions } from './SeparateDivisions';

/**
 * Request builder class for operations supported on the {@link SeparateDivisions} entity.
 */
export class SeparateDivisionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SeparateDivisions<T>, T> {
  /**
   * Returns a request builder for querying all `SeparateDivisions` entities.
   * @returns A request builder for creating requests to retrieve all `SeparateDivisions` entities.
   */
  getAll(): GetAllRequestBuilder<SeparateDivisions<T>, T> {
    return new GetAllRequestBuilder<SeparateDivisions<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SeparateDivisions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SeparateDivisions`.
   */
  create(
    entity: SeparateDivisions<T>
  ): CreateRequestBuilder<SeparateDivisions<T>, T> {
    return new CreateRequestBuilder<SeparateDivisions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SeparateDivisions` entity based on its keys.
   * @param dataAreaId Key property. See {@link SeparateDivisions.dataAreaId}.
   * @param separateDivisionId Key property. See {@link SeparateDivisions.separateDivisionId}.
   * @returns A request builder for creating requests to retrieve one `SeparateDivisions` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    separateDivisionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SeparateDivisions<T>, T> {
    return new GetByKeyRequestBuilder<SeparateDivisions<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      SeparateDivisionID: separateDivisionId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `SeparateDivisions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SeparateDivisions`.
   */
  update(
    entity: SeparateDivisions<T>
  ): UpdateRequestBuilder<SeparateDivisions<T>, T> {
    return new UpdateRequestBuilder<SeparateDivisions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SeparateDivisions`.
   * @param dataAreaId Key property. See {@link SeparateDivisions.dataAreaId}.
   * @param separateDivisionId Key property. See {@link SeparateDivisions.separateDivisionId}.
   * @returns A request builder for creating requests that delete an entity of type `SeparateDivisions`.
   */
  delete(
    dataAreaId: string,
    separateDivisionId: string
  ): DeleteRequestBuilder<SeparateDivisions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SeparateDivisions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SeparateDivisions` by taking the entity as a parameter.
   */
  delete(
    entity: SeparateDivisions<T>
  ): DeleteRequestBuilder<SeparateDivisions<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    separateDivisionId?: string
  ): DeleteRequestBuilder<SeparateDivisions<T>, T> {
    return new DeleteRequestBuilder<SeparateDivisions<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SeparateDivisions
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SeparateDivisionID: separateDivisionId!
          }
    );
  }
}
