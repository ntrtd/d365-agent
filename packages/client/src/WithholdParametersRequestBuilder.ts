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
import { WithholdParameters } from './WithholdParameters';

/**
 * Request builder class for operations supported on the {@link WithholdParameters} entity.
 */
export class WithholdParametersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WithholdParameters<T>, T> {
  /**
   * Returns a request builder for querying all `WithholdParameters` entities.
   * @returns A request builder for creating requests to retrieve all `WithholdParameters` entities.
   */
  getAll(): GetAllRequestBuilder<WithholdParameters<T>, T> {
    return new GetAllRequestBuilder<WithholdParameters<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `WithholdParameters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WithholdParameters`.
   */
  create(
    entity: WithholdParameters<T>
  ): CreateRequestBuilder<WithholdParameters<T>, T> {
    return new CreateRequestBuilder<WithholdParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WithholdParameters` entity based on its keys.
   * @param dataAreaId Key property. See {@link WithholdParameters.dataAreaId}.
   * @param key Key property. See {@link WithholdParameters.key}.
   * @returns A request builder for creating requests to retrieve one `WithholdParameters` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    key: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<WithholdParameters<T>, T> {
    return new GetByKeyRequestBuilder<WithholdParameters<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Key: key
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WithholdParameters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WithholdParameters`.
   */
  update(
    entity: WithholdParameters<T>
  ): UpdateRequestBuilder<WithholdParameters<T>, T> {
    return new UpdateRequestBuilder<WithholdParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WithholdParameters`.
   * @param dataAreaId Key property. See {@link WithholdParameters.dataAreaId}.
   * @param key Key property. See {@link WithholdParameters.key}.
   * @returns A request builder for creating requests that delete an entity of type `WithholdParameters`.
   */
  delete(
    dataAreaId: string,
    key: number
  ): DeleteRequestBuilder<WithholdParameters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WithholdParameters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WithholdParameters` by taking the entity as a parameter.
   */
  delete(
    entity: WithholdParameters<T>
  ): DeleteRequestBuilder<WithholdParameters<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    key?: number
  ): DeleteRequestBuilder<WithholdParameters<T>, T> {
    return new DeleteRequestBuilder<WithholdParameters<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof WithholdParameters
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Key: key!
          }
    );
  }
}
