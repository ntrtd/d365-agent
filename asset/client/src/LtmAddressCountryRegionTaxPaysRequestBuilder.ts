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
import { LtmAddressCountryRegionTaxPays } from './LtmAddressCountryRegionTaxPays';

/**
 * Request builder class for operations supported on the {@link LtmAddressCountryRegionTaxPays} entity.
 */
export class LtmAddressCountryRegionTaxPaysRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LtmAddressCountryRegionTaxPays<T>, T> {
  /**
   * Returns a request builder for querying all `LtmAddressCountryRegionTaxPays` entities.
   * @returns A request builder for creating requests to retrieve all `LtmAddressCountryRegionTaxPays` entities.
   */
  getAll(): GetAllRequestBuilder<LtmAddressCountryRegionTaxPays<T>, T> {
    return new GetAllRequestBuilder<LtmAddressCountryRegionTaxPays<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LtmAddressCountryRegionTaxPays` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LtmAddressCountryRegionTaxPays`.
   */
  create(
    entity: LtmAddressCountryRegionTaxPays<T>
  ): CreateRequestBuilder<LtmAddressCountryRegionTaxPays<T>, T> {
    return new CreateRequestBuilder<LtmAddressCountryRegionTaxPays<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LtmAddressCountryRegionTaxPays` entity based on its keys.
   * @param dataAreaId Key property. See {@link LtmAddressCountryRegionTaxPays.dataAreaId}.
   * @param countryRegionId Key property. See {@link LtmAddressCountryRegionTaxPays.countryRegionId}.
   * @param taxPayerTypeId Key property. See {@link LtmAddressCountryRegionTaxPays.taxPayerTypeId}.
   * @param taxApplicationId Key property. See {@link LtmAddressCountryRegionTaxPays.taxApplicationId}.
   * @returns A request builder for creating requests to retrieve one `LtmAddressCountryRegionTaxPays` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    countryRegionId: DeserializedType<T, 'Edm.String'>,
    taxPayerTypeId: DeserializedType<T, 'Edm.String'>,
    taxApplicationId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LtmAddressCountryRegionTaxPays<T>, T> {
    return new GetByKeyRequestBuilder<LtmAddressCountryRegionTaxPays<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        CountryRegionId: countryRegionId,
        TaxPayerTypeId: taxPayerTypeId,
        TaxApplicationId: taxApplicationId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LtmAddressCountryRegionTaxPays`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LtmAddressCountryRegionTaxPays`.
   */
  update(
    entity: LtmAddressCountryRegionTaxPays<T>
  ): UpdateRequestBuilder<LtmAddressCountryRegionTaxPays<T>, T> {
    return new UpdateRequestBuilder<LtmAddressCountryRegionTaxPays<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LtmAddressCountryRegionTaxPays`.
   * @param dataAreaId Key property. See {@link LtmAddressCountryRegionTaxPays.dataAreaId}.
   * @param countryRegionId Key property. See {@link LtmAddressCountryRegionTaxPays.countryRegionId}.
   * @param taxPayerTypeId Key property. See {@link LtmAddressCountryRegionTaxPays.taxPayerTypeId}.
   * @param taxApplicationId Key property. See {@link LtmAddressCountryRegionTaxPays.taxApplicationId}.
   * @returns A request builder for creating requests that delete an entity of type `LtmAddressCountryRegionTaxPays`.
   */
  delete(
    dataAreaId: string,
    countryRegionId: string,
    taxPayerTypeId: string,
    taxApplicationId: string
  ): DeleteRequestBuilder<LtmAddressCountryRegionTaxPays<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LtmAddressCountryRegionTaxPays`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LtmAddressCountryRegionTaxPays` by taking the entity as a parameter.
   */
  delete(
    entity: LtmAddressCountryRegionTaxPays<T>
  ): DeleteRequestBuilder<LtmAddressCountryRegionTaxPays<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    countryRegionId?: string,
    taxPayerTypeId?: string,
    taxApplicationId?: string
  ): DeleteRequestBuilder<LtmAddressCountryRegionTaxPays<T>, T> {
    return new DeleteRequestBuilder<LtmAddressCountryRegionTaxPays<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LtmAddressCountryRegionTaxPays
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CountryRegionId: countryRegionId!,
            TaxPayerTypeId: taxPayerTypeId!,
            TaxApplicationId: taxApplicationId!
          }
    );
  }
}
