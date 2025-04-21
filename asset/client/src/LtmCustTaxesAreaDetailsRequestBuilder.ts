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
import { LtmCustTaxesAreaDetails } from './LtmCustTaxesAreaDetails';

/**
 * Request builder class for operations supported on the {@link LtmCustTaxesAreaDetails} entity.
 */
export class LtmCustTaxesAreaDetailsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LtmCustTaxesAreaDetails<T>, T> {
  /**
   * Returns a request builder for querying all `LtmCustTaxesAreaDetails` entities.
   * @returns A request builder for creating requests to retrieve all `LtmCustTaxesAreaDetails` entities.
   */
  getAll(): GetAllRequestBuilder<LtmCustTaxesAreaDetails<T>, T> {
    return new GetAllRequestBuilder<LtmCustTaxesAreaDetails<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LtmCustTaxesAreaDetails` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LtmCustTaxesAreaDetails`.
   */
  create(
    entity: LtmCustTaxesAreaDetails<T>
  ): CreateRequestBuilder<LtmCustTaxesAreaDetails<T>, T> {
    return new CreateRequestBuilder<LtmCustTaxesAreaDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LtmCustTaxesAreaDetails` entity based on its keys.
   * @param dataAreaId Key property. See {@link LtmCustTaxesAreaDetails.dataAreaId}.
   * @param accountNum Key property. See {@link LtmCustTaxesAreaDetails.accountNum}.
   * @param countyId Key property. See {@link LtmCustTaxesAreaDetails.countyId}.
   * @param stateId Key property. See {@link LtmCustTaxesAreaDetails.stateId}.
   * @param countryRegionId Key property. See {@link LtmCustTaxesAreaDetails.countryRegionId}.
   * @param taxCode Key property. See {@link LtmCustTaxesAreaDetails.taxCode}.
   * @param toDate Key property. See {@link LtmCustTaxesAreaDetails.toDate}.
   * @param fromDate Key property. See {@link LtmCustTaxesAreaDetails.fromDate}.
   * @returns A request builder for creating requests to retrieve one `LtmCustTaxesAreaDetails` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    accountNum: DeserializedType<T, 'Edm.String'>,
    countyId: DeserializedType<T, 'Edm.String'>,
    stateId: DeserializedType<T, 'Edm.String'>,
    countryRegionId: DeserializedType<T, 'Edm.String'>,
    taxCode: DeserializedType<T, 'Edm.String'>,
    toDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<LtmCustTaxesAreaDetails<T>, T> {
    return new GetByKeyRequestBuilder<LtmCustTaxesAreaDetails<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        AccountNum: accountNum,
        CountyId: countyId,
        StateId: stateId,
        CountryRegionId: countryRegionId,
        TaxCode: taxCode,
        ToDate: toDate,
        FromDate: fromDate
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LtmCustTaxesAreaDetails`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LtmCustTaxesAreaDetails`.
   */
  update(
    entity: LtmCustTaxesAreaDetails<T>
  ): UpdateRequestBuilder<LtmCustTaxesAreaDetails<T>, T> {
    return new UpdateRequestBuilder<LtmCustTaxesAreaDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LtmCustTaxesAreaDetails`.
   * @param dataAreaId Key property. See {@link LtmCustTaxesAreaDetails.dataAreaId}.
   * @param accountNum Key property. See {@link LtmCustTaxesAreaDetails.accountNum}.
   * @param countyId Key property. See {@link LtmCustTaxesAreaDetails.countyId}.
   * @param stateId Key property. See {@link LtmCustTaxesAreaDetails.stateId}.
   * @param countryRegionId Key property. See {@link LtmCustTaxesAreaDetails.countryRegionId}.
   * @param taxCode Key property. See {@link LtmCustTaxesAreaDetails.taxCode}.
   * @param toDate Key property. See {@link LtmCustTaxesAreaDetails.toDate}.
   * @param fromDate Key property. See {@link LtmCustTaxesAreaDetails.fromDate}.
   * @returns A request builder for creating requests that delete an entity of type `LtmCustTaxesAreaDetails`.
   */
  delete(
    dataAreaId: string,
    accountNum: string,
    countyId: string,
    stateId: string,
    countryRegionId: string,
    taxCode: string,
    toDate: Moment,
    fromDate: Moment
  ): DeleteRequestBuilder<LtmCustTaxesAreaDetails<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LtmCustTaxesAreaDetails`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LtmCustTaxesAreaDetails` by taking the entity as a parameter.
   */
  delete(
    entity: LtmCustTaxesAreaDetails<T>
  ): DeleteRequestBuilder<LtmCustTaxesAreaDetails<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    accountNum?: string,
    countyId?: string,
    stateId?: string,
    countryRegionId?: string,
    taxCode?: string,
    toDate?: Moment,
    fromDate?: Moment
  ): DeleteRequestBuilder<LtmCustTaxesAreaDetails<T>, T> {
    return new DeleteRequestBuilder<LtmCustTaxesAreaDetails<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LtmCustTaxesAreaDetails
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            AccountNum: accountNum!,
            CountyId: countyId!,
            StateId: stateId!,
            CountryRegionId: countryRegionId!,
            TaxCode: taxCode!,
            ToDate: toDate!,
            FromDate: fromDate!
          }
    );
  }
}
