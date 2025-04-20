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
import { BlwiParameters } from './BlwiParameters';

/**
 * Request builder class for operations supported on the {@link BlwiParameters} entity.
 */
export class BlwiParametersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BlwiParameters<T>, T> {
  /**
   * Returns a request builder for querying all `BlwiParameters` entities.
   * @returns A request builder for creating requests to retrieve all `BlwiParameters` entities.
   */
  getAll(): GetAllRequestBuilder<BlwiParameters<T>, T> {
    return new GetAllRequestBuilder<BlwiParameters<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BlwiParameters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BlwiParameters`.
   */
  create(
    entity: BlwiParameters<T>
  ): CreateRequestBuilder<BlwiParameters<T>, T> {
    return new CreateRequestBuilder<BlwiParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BlwiParameters` entity based on its keys.
   * @param dataAreaId Key property. See {@link BlwiParameters.dataAreaId}.
   * @param id Key property. See {@link BlwiParameters.id}.
   * @returns A request builder for creating requests to retrieve one `BlwiParameters` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    id: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<BlwiParameters<T>, T> {
    return new GetByKeyRequestBuilder<BlwiParameters<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ID: id
    });
  }

  /**
   * Returns a request builder for updating an entity of type `BlwiParameters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BlwiParameters`.
   */
  update(
    entity: BlwiParameters<T>
  ): UpdateRequestBuilder<BlwiParameters<T>, T> {
    return new UpdateRequestBuilder<BlwiParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BlwiParameters`.
   * @param dataAreaId Key property. See {@link BlwiParameters.dataAreaId}.
   * @param id Key property. See {@link BlwiParameters.id}.
   * @returns A request builder for creating requests that delete an entity of type `BlwiParameters`.
   */
  delete(
    dataAreaId: string,
    id: number
  ): DeleteRequestBuilder<BlwiParameters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BlwiParameters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BlwiParameters` by taking the entity as a parameter.
   */
  delete(entity: BlwiParameters<T>): DeleteRequestBuilder<BlwiParameters<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    id?: number
  ): DeleteRequestBuilder<BlwiParameters<T>, T> {
    return new DeleteRequestBuilder<BlwiParameters<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BlwiParameters
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ID: id!
          }
    );
  }
}
