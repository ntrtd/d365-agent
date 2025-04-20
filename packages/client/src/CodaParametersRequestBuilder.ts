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
import { CodaParameters } from './CodaParameters';

/**
 * Request builder class for operations supported on the {@link CodaParameters} entity.
 */
export class CodaParametersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CodaParameters<T>, T> {
  /**
   * Returns a request builder for querying all `CodaParameters` entities.
   * @returns A request builder for creating requests to retrieve all `CodaParameters` entities.
   */
  getAll(): GetAllRequestBuilder<CodaParameters<T>, T> {
    return new GetAllRequestBuilder<CodaParameters<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CodaParameters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CodaParameters`.
   */
  create(
    entity: CodaParameters<T>
  ): CreateRequestBuilder<CodaParameters<T>, T> {
    return new CreateRequestBuilder<CodaParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CodaParameters` entity based on its keys.
   * @param dataAreaId Key property. See {@link CodaParameters.dataAreaId}.
   * @returns A request builder for creating requests to retrieve one `CodaParameters` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CodaParameters<T>, T> {
    return new GetByKeyRequestBuilder<CodaParameters<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CodaParameters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CodaParameters`.
   */
  update(
    entity: CodaParameters<T>
  ): UpdateRequestBuilder<CodaParameters<T>, T> {
    return new UpdateRequestBuilder<CodaParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CodaParameters`.
   * @param dataAreaId Key property. See {@link CodaParameters.dataAreaId}.
   * @returns A request builder for creating requests that delete an entity of type `CodaParameters`.
   */
  delete(dataAreaId: string): DeleteRequestBuilder<CodaParameters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CodaParameters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CodaParameters` by taking the entity as a parameter.
   */
  delete(entity: CodaParameters<T>): DeleteRequestBuilder<CodaParameters<T>, T>;
  delete(dataAreaIdOrEntity: any): DeleteRequestBuilder<CodaParameters<T>, T> {
    return new DeleteRequestBuilder<CodaParameters<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CodaParameters
        ? dataAreaIdOrEntity
        : { dataAreaId: dataAreaIdOrEntity! }
    );
  }
}
