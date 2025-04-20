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
import { TaxServiceTaxRegistrationNumberCustomers } from './TaxServiceTaxRegistrationNumberCustomers';

/**
 * Request builder class for operations supported on the {@link TaxServiceTaxRegistrationNumberCustomers} entity.
 */
export class TaxServiceTaxRegistrationNumberCustomersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TaxServiceTaxRegistrationNumberCustomers<T>, T> {
  /**
   * Returns a request builder for querying all `TaxServiceTaxRegistrationNumberCustomers` entities.
   * @returns A request builder for creating requests to retrieve all `TaxServiceTaxRegistrationNumberCustomers` entities.
   */
  getAll(): GetAllRequestBuilder<
    TaxServiceTaxRegistrationNumberCustomers<T>,
    T
  > {
    return new GetAllRequestBuilder<
      TaxServiceTaxRegistrationNumberCustomers<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TaxServiceTaxRegistrationNumberCustomers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TaxServiceTaxRegistrationNumberCustomers`.
   */
  create(
    entity: TaxServiceTaxRegistrationNumberCustomers<T>
  ): CreateRequestBuilder<TaxServiceTaxRegistrationNumberCustomers<T>, T> {
    return new CreateRequestBuilder<
      TaxServiceTaxRegistrationNumberCustomers<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `TaxServiceTaxRegistrationNumberCustomers` entity based on its keys.
   * @param taxRegstrationType Key property. See {@link TaxServiceTaxRegistrationNumberCustomers.taxRegstrationType}.
   * @param validFrom Key property. See {@link TaxServiceTaxRegistrationNumberCustomers.validFrom}.
   * @param validTo Key property. See {@link TaxServiceTaxRegistrationNumberCustomers.validTo}.
   * @param custAccountNum Key property. See {@link TaxServiceTaxRegistrationNumberCustomers.custAccountNum}.
   * @param legalEntity Key property. See {@link TaxServiceTaxRegistrationNumberCustomers.legalEntity}.
   * @param countryRegionId Key property. See {@link TaxServiceTaxRegistrationNumberCustomers.countryRegionId}.
   * @param registrationNumber Key property. See {@link TaxServiceTaxRegistrationNumberCustomers.registrationNumber}.
   * @returns A request builder for creating requests to retrieve one `TaxServiceTaxRegistrationNumberCustomers` entity based on its keys.
   */
  getByKey(
    taxRegstrationType: DeserializedType<T, 'Edm.String'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>,
    validTo: DeserializedType<T, 'Edm.DateTimeOffset'>,
    custAccountNum: DeserializedType<T, 'Edm.String'>,
    legalEntity: DeserializedType<T, 'Edm.String'>,
    countryRegionId: DeserializedType<T, 'Edm.String'>,
    registrationNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TaxServiceTaxRegistrationNumberCustomers<T>, T> {
    return new GetByKeyRequestBuilder<
      TaxServiceTaxRegistrationNumberCustomers<T>,
      T
    >(this.entityApi, {
      TaxRegstrationType: taxRegstrationType,
      ValidFrom: validFrom,
      ValidTo: validTo,
      CustAccountNum: custAccountNum,
      LegalEntity: legalEntity,
      CountryRegionId: countryRegionId,
      RegistrationNumber: registrationNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `TaxServiceTaxRegistrationNumberCustomers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TaxServiceTaxRegistrationNumberCustomers`.
   */
  update(
    entity: TaxServiceTaxRegistrationNumberCustomers<T>
  ): UpdateRequestBuilder<TaxServiceTaxRegistrationNumberCustomers<T>, T> {
    return new UpdateRequestBuilder<
      TaxServiceTaxRegistrationNumberCustomers<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `TaxServiceTaxRegistrationNumberCustomers`.
   * @param taxRegstrationType Key property. See {@link TaxServiceTaxRegistrationNumberCustomers.taxRegstrationType}.
   * @param validFrom Key property. See {@link TaxServiceTaxRegistrationNumberCustomers.validFrom}.
   * @param validTo Key property. See {@link TaxServiceTaxRegistrationNumberCustomers.validTo}.
   * @param custAccountNum Key property. See {@link TaxServiceTaxRegistrationNumberCustomers.custAccountNum}.
   * @param legalEntity Key property. See {@link TaxServiceTaxRegistrationNumberCustomers.legalEntity}.
   * @param countryRegionId Key property. See {@link TaxServiceTaxRegistrationNumberCustomers.countryRegionId}.
   * @param registrationNumber Key property. See {@link TaxServiceTaxRegistrationNumberCustomers.registrationNumber}.
   * @returns A request builder for creating requests that delete an entity of type `TaxServiceTaxRegistrationNumberCustomers`.
   */
  delete(
    taxRegstrationType: string,
    validFrom: Moment,
    validTo: Moment,
    custAccountNum: string,
    legalEntity: string,
    countryRegionId: string,
    registrationNumber: string
  ): DeleteRequestBuilder<TaxServiceTaxRegistrationNumberCustomers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TaxServiceTaxRegistrationNumberCustomers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TaxServiceTaxRegistrationNumberCustomers` by taking the entity as a parameter.
   */
  delete(
    entity: TaxServiceTaxRegistrationNumberCustomers<T>
  ): DeleteRequestBuilder<TaxServiceTaxRegistrationNumberCustomers<T>, T>;
  delete(
    taxRegstrationTypeOrEntity: any,
    validFrom?: Moment,
    validTo?: Moment,
    custAccountNum?: string,
    legalEntity?: string,
    countryRegionId?: string,
    registrationNumber?: string
  ): DeleteRequestBuilder<TaxServiceTaxRegistrationNumberCustomers<T>, T> {
    return new DeleteRequestBuilder<
      TaxServiceTaxRegistrationNumberCustomers<T>,
      T
    >(
      this.entityApi,
      taxRegstrationTypeOrEntity instanceof
      TaxServiceTaxRegistrationNumberCustomers
        ? taxRegstrationTypeOrEntity
        : {
            TaxRegstrationType: taxRegstrationTypeOrEntity!,
            ValidFrom: validFrom!,
            ValidTo: validTo!,
            CustAccountNum: custAccountNum!,
            LegalEntity: legalEntity!,
            CountryRegionId: countryRegionId!,
            RegistrationNumber: registrationNumber!
          }
    );
  }
}
