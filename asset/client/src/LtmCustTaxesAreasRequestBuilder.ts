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
import { LtmCustTaxesAreas } from './LtmCustTaxesAreas';

/**
 * Request builder class for operations supported on the {@link LtmCustTaxesAreas} entity.
 */
export class LtmCustTaxesAreasRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LtmCustTaxesAreas<T>, T> {
  /**
   * Returns a request builder for querying all `LtmCustTaxesAreas` entities.
   * @returns A request builder for creating requests to retrieve all `LtmCustTaxesAreas` entities.
   */
  getAll(): GetAllRequestBuilder<LtmCustTaxesAreas<T>, T> {
    return new GetAllRequestBuilder<LtmCustTaxesAreas<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LtmCustTaxesAreas` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LtmCustTaxesAreas`.
   */
  create(
    entity: LtmCustTaxesAreas<T>
  ): CreateRequestBuilder<LtmCustTaxesAreas<T>, T> {
    return new CreateRequestBuilder<LtmCustTaxesAreas<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LtmCustTaxesAreas` entity based on its keys.
   * @param dataAreaId Key property. See {@link LtmCustTaxesAreas.dataAreaId}.
   * @param accountNum Key property. See {@link LtmCustTaxesAreas.accountNum}.
   * @param countryRegionId Key property. See {@link LtmCustTaxesAreas.countryRegionId}.
   * @param stateId Key property. See {@link LtmCustTaxesAreas.stateId}.
   * @param countyId Key property. See {@link LtmCustTaxesAreas.countyId}.
   * @param taxGroup Key property. See {@link LtmCustTaxesAreas.taxGroup}.
   * @returns A request builder for creating requests to retrieve one `LtmCustTaxesAreas` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    accountNum: DeserializedType<T, 'Edm.String'>,
    countryRegionId: DeserializedType<T, 'Edm.String'>,
    stateId: DeserializedType<T, 'Edm.String'>,
    countyId: DeserializedType<T, 'Edm.String'>,
    taxGroup: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LtmCustTaxesAreas<T>, T> {
    return new GetByKeyRequestBuilder<LtmCustTaxesAreas<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      AccountNum: accountNum,
      CountryRegionId: countryRegionId,
      StateId: stateId,
      CountyId: countyId,
      TaxGroup: taxGroup
    });
  }

  /**
   * Returns a request builder for updating an entity of type `LtmCustTaxesAreas`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LtmCustTaxesAreas`.
   */
  update(
    entity: LtmCustTaxesAreas<T>
  ): UpdateRequestBuilder<LtmCustTaxesAreas<T>, T> {
    return new UpdateRequestBuilder<LtmCustTaxesAreas<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LtmCustTaxesAreas`.
   * @param dataAreaId Key property. See {@link LtmCustTaxesAreas.dataAreaId}.
   * @param accountNum Key property. See {@link LtmCustTaxesAreas.accountNum}.
   * @param countryRegionId Key property. See {@link LtmCustTaxesAreas.countryRegionId}.
   * @param stateId Key property. See {@link LtmCustTaxesAreas.stateId}.
   * @param countyId Key property. See {@link LtmCustTaxesAreas.countyId}.
   * @param taxGroup Key property. See {@link LtmCustTaxesAreas.taxGroup}.
   * @returns A request builder for creating requests that delete an entity of type `LtmCustTaxesAreas`.
   */
  delete(
    dataAreaId: string,
    accountNum: string,
    countryRegionId: string,
    stateId: string,
    countyId: string,
    taxGroup: string
  ): DeleteRequestBuilder<LtmCustTaxesAreas<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LtmCustTaxesAreas`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LtmCustTaxesAreas` by taking the entity as a parameter.
   */
  delete(
    entity: LtmCustTaxesAreas<T>
  ): DeleteRequestBuilder<LtmCustTaxesAreas<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    accountNum?: string,
    countryRegionId?: string,
    stateId?: string,
    countyId?: string,
    taxGroup?: string
  ): DeleteRequestBuilder<LtmCustTaxesAreas<T>, T> {
    return new DeleteRequestBuilder<LtmCustTaxesAreas<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LtmCustTaxesAreas
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            AccountNum: accountNum!,
            CountryRegionId: countryRegionId!,
            StateId: stateId!,
            CountyId: countyId!,
            TaxGroup: taxGroup!
          }
    );
  }
}
