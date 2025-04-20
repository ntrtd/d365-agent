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
import { ExpenseTaxConfigurations } from './ExpenseTaxConfigurations';

/**
 * Request builder class for operations supported on the {@link ExpenseTaxConfigurations} entity.
 */
export class ExpenseTaxConfigurationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ExpenseTaxConfigurations<T>, T> {
  /**
   * Returns a request builder for querying all `ExpenseTaxConfigurations` entities.
   * @returns A request builder for creating requests to retrieve all `ExpenseTaxConfigurations` entities.
   */
  getAll(): GetAllRequestBuilder<ExpenseTaxConfigurations<T>, T> {
    return new GetAllRequestBuilder<ExpenseTaxConfigurations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ExpenseTaxConfigurations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExpenseTaxConfigurations`.
   */
  create(
    entity: ExpenseTaxConfigurations<T>
  ): CreateRequestBuilder<ExpenseTaxConfigurations<T>, T> {
    return new CreateRequestBuilder<ExpenseTaxConfigurations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ExpenseTaxConfigurations` entity based on its keys.
   * @param dataAreaId Key property. See {@link ExpenseTaxConfigurations.dataAreaId}.
   * @param countryRegionId Key property. See {@link ExpenseTaxConfigurations.countryRegionId}.
   * @param taxGroup Key property. See {@link ExpenseTaxConfigurations.taxGroup}.
   * @returns A request builder for creating requests to retrieve one `ExpenseTaxConfigurations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    countryRegionId: DeserializedType<T, 'Edm.String'>,
    taxGroup: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ExpenseTaxConfigurations<T>, T> {
    return new GetByKeyRequestBuilder<ExpenseTaxConfigurations<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        CountryRegionId: countryRegionId,
        TaxGroup: taxGroup
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ExpenseTaxConfigurations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ExpenseTaxConfigurations`.
   */
  update(
    entity: ExpenseTaxConfigurations<T>
  ): UpdateRequestBuilder<ExpenseTaxConfigurations<T>, T> {
    return new UpdateRequestBuilder<ExpenseTaxConfigurations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ExpenseTaxConfigurations`.
   * @param dataAreaId Key property. See {@link ExpenseTaxConfigurations.dataAreaId}.
   * @param countryRegionId Key property. See {@link ExpenseTaxConfigurations.countryRegionId}.
   * @param taxGroup Key property. See {@link ExpenseTaxConfigurations.taxGroup}.
   * @returns A request builder for creating requests that delete an entity of type `ExpenseTaxConfigurations`.
   */
  delete(
    dataAreaId: string,
    countryRegionId: string,
    taxGroup: string
  ): DeleteRequestBuilder<ExpenseTaxConfigurations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ExpenseTaxConfigurations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ExpenseTaxConfigurations` by taking the entity as a parameter.
   */
  delete(
    entity: ExpenseTaxConfigurations<T>
  ): DeleteRequestBuilder<ExpenseTaxConfigurations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    countryRegionId?: string,
    taxGroup?: string
  ): DeleteRequestBuilder<ExpenseTaxConfigurations<T>, T> {
    return new DeleteRequestBuilder<ExpenseTaxConfigurations<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ExpenseTaxConfigurations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CountryRegionId: countryRegionId!,
            TaxGroup: taxGroup!
          }
    );
  }
}
