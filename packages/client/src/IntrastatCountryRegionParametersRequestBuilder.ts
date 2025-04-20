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
import { IntrastatCountryRegionParameters } from './IntrastatCountryRegionParameters';

/**
 * Request builder class for operations supported on the {@link IntrastatCountryRegionParameters} entity.
 */
export class IntrastatCountryRegionParametersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<IntrastatCountryRegionParameters<T>, T> {
  /**
   * Returns a request builder for querying all `IntrastatCountryRegionParameters` entities.
   * @returns A request builder for creating requests to retrieve all `IntrastatCountryRegionParameters` entities.
   */
  getAll(): GetAllRequestBuilder<IntrastatCountryRegionParameters<T>, T> {
    return new GetAllRequestBuilder<IntrastatCountryRegionParameters<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `IntrastatCountryRegionParameters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `IntrastatCountryRegionParameters`.
   */
  create(
    entity: IntrastatCountryRegionParameters<T>
  ): CreateRequestBuilder<IntrastatCountryRegionParameters<T>, T> {
    return new CreateRequestBuilder<IntrastatCountryRegionParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `IntrastatCountryRegionParameters` entity based on its keys.
   * @param dataAreaId Key property. See {@link IntrastatCountryRegionParameters.dataAreaId}.
   * @param countryRegionId Key property. See {@link IntrastatCountryRegionParameters.countryRegionId}.
   * @returns A request builder for creating requests to retrieve one `IntrastatCountryRegionParameters` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    countryRegionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<IntrastatCountryRegionParameters<T>, T> {
    return new GetByKeyRequestBuilder<IntrastatCountryRegionParameters<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        CountryRegionId: countryRegionId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `IntrastatCountryRegionParameters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `IntrastatCountryRegionParameters`.
   */
  update(
    entity: IntrastatCountryRegionParameters<T>
  ): UpdateRequestBuilder<IntrastatCountryRegionParameters<T>, T> {
    return new UpdateRequestBuilder<IntrastatCountryRegionParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `IntrastatCountryRegionParameters`.
   * @param dataAreaId Key property. See {@link IntrastatCountryRegionParameters.dataAreaId}.
   * @param countryRegionId Key property. See {@link IntrastatCountryRegionParameters.countryRegionId}.
   * @returns A request builder for creating requests that delete an entity of type `IntrastatCountryRegionParameters`.
   */
  delete(
    dataAreaId: string,
    countryRegionId: string
  ): DeleteRequestBuilder<IntrastatCountryRegionParameters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `IntrastatCountryRegionParameters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `IntrastatCountryRegionParameters` by taking the entity as a parameter.
   */
  delete(
    entity: IntrastatCountryRegionParameters<T>
  ): DeleteRequestBuilder<IntrastatCountryRegionParameters<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    countryRegionId?: string
  ): DeleteRequestBuilder<IntrastatCountryRegionParameters<T>, T> {
    return new DeleteRequestBuilder<IntrastatCountryRegionParameters<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof IntrastatCountryRegionParameters
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CountryRegionId: countryRegionId!
          }
    );
  }
}
