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
import { TrvExpMobileProjLineProperties } from './TrvExpMobileProjLineProperties';

/**
 * Request builder class for operations supported on the {@link TrvExpMobileProjLineProperties} entity.
 */
export class TrvExpMobileProjLinePropertiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TrvExpMobileProjLineProperties<T>, T> {
  /**
   * Returns a request builder for querying all `TrvExpMobileProjLineProperties` entities.
   * @returns A request builder for creating requests to retrieve all `TrvExpMobileProjLineProperties` entities.
   */
  getAll(): GetAllRequestBuilder<TrvExpMobileProjLineProperties<T>, T> {
    return new GetAllRequestBuilder<TrvExpMobileProjLineProperties<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `TrvExpMobileProjLineProperties` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TrvExpMobileProjLineProperties`.
   */
  create(
    entity: TrvExpMobileProjLineProperties<T>
  ): CreateRequestBuilder<TrvExpMobileProjLineProperties<T>, T> {
    return new CreateRequestBuilder<TrvExpMobileProjLineProperties<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TrvExpMobileProjLineProperties` entity based on its keys.
   * @param dataAreaId Key property. See {@link TrvExpMobileProjLineProperties.dataAreaId}.
   * @param lineProperty Key property. See {@link TrvExpMobileProjLineProperties.lineProperty}.
   * @returns A request builder for creating requests to retrieve one `TrvExpMobileProjLineProperties` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    lineProperty: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TrvExpMobileProjLineProperties<T>, T> {
    return new GetByKeyRequestBuilder<TrvExpMobileProjLineProperties<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        LineProperty: lineProperty
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TrvExpMobileProjLineProperties`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TrvExpMobileProjLineProperties`.
   */
  update(
    entity: TrvExpMobileProjLineProperties<T>
  ): UpdateRequestBuilder<TrvExpMobileProjLineProperties<T>, T> {
    return new UpdateRequestBuilder<TrvExpMobileProjLineProperties<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TrvExpMobileProjLineProperties`.
   * @param dataAreaId Key property. See {@link TrvExpMobileProjLineProperties.dataAreaId}.
   * @param lineProperty Key property. See {@link TrvExpMobileProjLineProperties.lineProperty}.
   * @returns A request builder for creating requests that delete an entity of type `TrvExpMobileProjLineProperties`.
   */
  delete(
    dataAreaId: string,
    lineProperty: string
  ): DeleteRequestBuilder<TrvExpMobileProjLineProperties<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TrvExpMobileProjLineProperties`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TrvExpMobileProjLineProperties` by taking the entity as a parameter.
   */
  delete(
    entity: TrvExpMobileProjLineProperties<T>
  ): DeleteRequestBuilder<TrvExpMobileProjLineProperties<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    lineProperty?: string
  ): DeleteRequestBuilder<TrvExpMobileProjLineProperties<T>, T> {
    return new DeleteRequestBuilder<TrvExpMobileProjLineProperties<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TrvExpMobileProjLineProperties
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LineProperty: lineProperty!
          }
    );
  }
}
