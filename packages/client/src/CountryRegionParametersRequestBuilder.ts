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
import { CountryRegionParameters } from './CountryRegionParameters';

/**
 * Request builder class for operations supported on the {@link CountryRegionParameters} entity.
 */
export class CountryRegionParametersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CountryRegionParameters<T>, T> {
  /**
   * Returns a request builder for querying all `CountryRegionParameters` entities.
   * @returns A request builder for creating requests to retrieve all `CountryRegionParameters` entities.
   */
  getAll(): GetAllRequestBuilder<CountryRegionParameters<T>, T> {
    return new GetAllRequestBuilder<CountryRegionParameters<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CountryRegionParameters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CountryRegionParameters`.
   */
  create(
    entity: CountryRegionParameters<T>
  ): CreateRequestBuilder<CountryRegionParameters<T>, T> {
    return new CreateRequestBuilder<CountryRegionParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CountryRegionParameters` entity based on its keys.
   * @param dataAreaId Key property. See {@link CountryRegionParameters.dataAreaId}.
   * @param countryRegionId Key property. See {@link CountryRegionParameters.countryRegionId}.
   * @returns A request builder for creating requests to retrieve one `CountryRegionParameters` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    countryRegionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CountryRegionParameters<T>, T> {
    return new GetByKeyRequestBuilder<CountryRegionParameters<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        CountryRegionId: countryRegionId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CountryRegionParameters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CountryRegionParameters`.
   */
  update(
    entity: CountryRegionParameters<T>
  ): UpdateRequestBuilder<CountryRegionParameters<T>, T> {
    return new UpdateRequestBuilder<CountryRegionParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CountryRegionParameters`.
   * @param dataAreaId Key property. See {@link CountryRegionParameters.dataAreaId}.
   * @param countryRegionId Key property. See {@link CountryRegionParameters.countryRegionId}.
   * @returns A request builder for creating requests that delete an entity of type `CountryRegionParameters`.
   */
  delete(
    dataAreaId: string,
    countryRegionId: string
  ): DeleteRequestBuilder<CountryRegionParameters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CountryRegionParameters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CountryRegionParameters` by taking the entity as a parameter.
   */
  delete(
    entity: CountryRegionParameters<T>
  ): DeleteRequestBuilder<CountryRegionParameters<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    countryRegionId?: string
  ): DeleteRequestBuilder<CountryRegionParameters<T>, T> {
    return new DeleteRequestBuilder<CountryRegionParameters<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CountryRegionParameters
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CountryRegionId: countryRegionId!
          }
    );
  }
}
