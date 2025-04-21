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
import { TaxParameters } from './TaxParameters';

/**
 * Request builder class for operations supported on the {@link TaxParameters} entity.
 */
export class TaxParametersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TaxParameters<T>, T> {
  /**
   * Returns a request builder for querying all `TaxParameters` entities.
   * @returns A request builder for creating requests to retrieve all `TaxParameters` entities.
   */
  getAll(): GetAllRequestBuilder<TaxParameters<T>, T> {
    return new GetAllRequestBuilder<TaxParameters<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TaxParameters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TaxParameters`.
   */
  create(entity: TaxParameters<T>): CreateRequestBuilder<TaxParameters<T>, T> {
    return new CreateRequestBuilder<TaxParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TaxParameters` entity based on its keys.
   * @param dataAreaId Key property. See {@link TaxParameters.dataAreaId}.
   * @returns A request builder for creating requests to retrieve one `TaxParameters` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TaxParameters<T>, T> {
    return new GetByKeyRequestBuilder<TaxParameters<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `TaxParameters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TaxParameters`.
   */
  update(entity: TaxParameters<T>): UpdateRequestBuilder<TaxParameters<T>, T> {
    return new UpdateRequestBuilder<TaxParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TaxParameters`.
   * @param dataAreaId Key property. See {@link TaxParameters.dataAreaId}.
   * @returns A request builder for creating requests that delete an entity of type `TaxParameters`.
   */
  delete(dataAreaId: string): DeleteRequestBuilder<TaxParameters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TaxParameters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TaxParameters` by taking the entity as a parameter.
   */
  delete(entity: TaxParameters<T>): DeleteRequestBuilder<TaxParameters<T>, T>;
  delete(dataAreaIdOrEntity: any): DeleteRequestBuilder<TaxParameters<T>, T> {
    return new DeleteRequestBuilder<TaxParameters<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TaxParameters
        ? dataAreaIdOrEntity
        : { dataAreaId: dataAreaIdOrEntity! }
    );
  }
}
