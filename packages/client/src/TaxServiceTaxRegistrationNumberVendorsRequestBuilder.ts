/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { TaxServiceTaxRegistrationNumberVendors } from './TaxServiceTaxRegistrationNumberVendors';

/**
 * Request builder class for operations supported on the {@link TaxServiceTaxRegistrationNumberVendors} entity.
 */
export class TaxServiceTaxRegistrationNumberVendorsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TaxServiceTaxRegistrationNumberVendors<T>, T> {
  /**
   * Returns a request builder for querying all `TaxServiceTaxRegistrationNumberVendors` entities.
   * @returns A request builder for creating requests to retrieve all `TaxServiceTaxRegistrationNumberVendors` entities.
   */
  getAll(): GetAllRequestBuilder<TaxServiceTaxRegistrationNumberVendors<T>, T> {
    return new GetAllRequestBuilder<
      TaxServiceTaxRegistrationNumberVendors<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TaxServiceTaxRegistrationNumberVendors` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TaxServiceTaxRegistrationNumberVendors`.
   */
  create(
    entity: TaxServiceTaxRegistrationNumberVendors<T>
  ): CreateRequestBuilder<TaxServiceTaxRegistrationNumberVendors<T>, T> {
    return new CreateRequestBuilder<
      TaxServiceTaxRegistrationNumberVendors<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `TaxServiceTaxRegistrationNumberVendors` entity based on its keys.
   * @param taxRegstrationType Key property. See {@link TaxServiceTaxRegistrationNumberVendors.taxRegstrationType}.
   * @param countryRegionId Key property. See {@link TaxServiceTaxRegistrationNumberVendors.countryRegionId}.
   * @param validFrom Key property. See {@link TaxServiceTaxRegistrationNumberVendors.validFrom}.
   * @param validTo Key property. See {@link TaxServiceTaxRegistrationNumberVendors.validTo}.
   * @param vendAccount Key property. See {@link TaxServiceTaxRegistrationNumberVendors.vendAccount}.
   * @param legalEntity Key property. See {@link TaxServiceTaxRegistrationNumberVendors.legalEntity}.
   * @param registrationNumber Key property. See {@link TaxServiceTaxRegistrationNumberVendors.registrationNumber}.
   * @returns A request builder for creating requests to retrieve one `TaxServiceTaxRegistrationNumberVendors` entity based on its keys.
   */
  getByKey(
    taxRegstrationType: DeserializedType<T, 'Edm.String'>,
    countryRegionId: DeserializedType<T, 'Edm.String'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>,
    validTo: DeserializedType<T, 'Edm.DateTimeOffset'>,
    vendAccount: DeserializedType<T, 'Edm.String'>,
    legalEntity: DeserializedType<T, 'Edm.String'>,
    registrationNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TaxServiceTaxRegistrationNumberVendors<T>, T> {
    return new GetByKeyRequestBuilder<
      TaxServiceTaxRegistrationNumberVendors<T>,
      T
    >(this.entityApi, {
      TaxRegstrationType: taxRegstrationType,
      CountryRegionId: countryRegionId,
      ValidFrom: validFrom,
      ValidTo: validTo,
      VendAccount: vendAccount,
      LegalEntity: legalEntity,
      RegistrationNumber: registrationNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `TaxServiceTaxRegistrationNumberVendors`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TaxServiceTaxRegistrationNumberVendors`.
   */
  update(
    entity: TaxServiceTaxRegistrationNumberVendors<T>
  ): UpdateRequestBuilder<TaxServiceTaxRegistrationNumberVendors<T>, T> {
    return new UpdateRequestBuilder<
      TaxServiceTaxRegistrationNumberVendors<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `TaxServiceTaxRegistrationNumberVendors`.
   * @param taxRegstrationType Key property. See {@link TaxServiceTaxRegistrationNumberVendors.taxRegstrationType}.
   * @param countryRegionId Key property. See {@link TaxServiceTaxRegistrationNumberVendors.countryRegionId}.
   * @param validFrom Key property. See {@link TaxServiceTaxRegistrationNumberVendors.validFrom}.
   * @param validTo Key property. See {@link TaxServiceTaxRegistrationNumberVendors.validTo}.
   * @param vendAccount Key property. See {@link TaxServiceTaxRegistrationNumberVendors.vendAccount}.
   * @param legalEntity Key property. See {@link TaxServiceTaxRegistrationNumberVendors.legalEntity}.
   * @param registrationNumber Key property. See {@link TaxServiceTaxRegistrationNumberVendors.registrationNumber}.
   * @returns A request builder for creating requests that delete an entity of type `TaxServiceTaxRegistrationNumberVendors`.
   */
  delete(
    taxRegstrationType: string,
    countryRegionId: string,
    validFrom: Moment,
    validTo: Moment,
    vendAccount: string,
    legalEntity: string,
    registrationNumber: string
  ): DeleteRequestBuilder<TaxServiceTaxRegistrationNumberVendors<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TaxServiceTaxRegistrationNumberVendors`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TaxServiceTaxRegistrationNumberVendors` by taking the entity as a parameter.
   */
  delete(
    entity: TaxServiceTaxRegistrationNumberVendors<T>
  ): DeleteRequestBuilder<TaxServiceTaxRegistrationNumberVendors<T>, T>;
  delete(
    taxRegstrationTypeOrEntity: any,
    countryRegionId?: string,
    validFrom?: Moment,
    validTo?: Moment,
    vendAccount?: string,
    legalEntity?: string,
    registrationNumber?: string
  ): DeleteRequestBuilder<TaxServiceTaxRegistrationNumberVendors<T>, T> {
    return new DeleteRequestBuilder<
      TaxServiceTaxRegistrationNumberVendors<T>,
      T
    >(
      this.entityApi,
      taxRegstrationTypeOrEntity instanceof
      TaxServiceTaxRegistrationNumberVendors
        ? taxRegstrationTypeOrEntity
        : {
            TaxRegstrationType: taxRegstrationTypeOrEntity!,
            CountryRegionId: countryRegionId!,
            ValidFrom: validFrom!,
            ValidTo: validTo!,
            VendAccount: vendAccount!,
            LegalEntity: legalEntity!,
            RegistrationNumber: registrationNumber!
          }
    );
  }
}
