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
import { CustTaxesAreaV2 } from './CustTaxesAreaV2';

/**
 * Request builder class for operations supported on the {@link CustTaxesAreaV2} entity.
 */
export class CustTaxesAreaV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustTaxesAreaV2<T>, T> {
  /**
   * Returns a request builder for querying all `CustTaxesAreaV2` entities.
   * @returns A request builder for creating requests to retrieve all `CustTaxesAreaV2` entities.
   */
  getAll(): GetAllRequestBuilder<CustTaxesAreaV2<T>, T> {
    return new GetAllRequestBuilder<CustTaxesAreaV2<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CustTaxesAreaV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustTaxesAreaV2`.
   */
  create(
    entity: CustTaxesAreaV2<T>
  ): CreateRequestBuilder<CustTaxesAreaV2<T>, T> {
    return new CreateRequestBuilder<CustTaxesAreaV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CustTaxesAreaV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link CustTaxesAreaV2.dataAreaId}.
   * @param accountNum Key property. See {@link CustTaxesAreaV2.accountNum}.
   * @param taxGroup Key property. See {@link CustTaxesAreaV2.taxGroup}.
   * @param countryRegionId Key property. See {@link CustTaxesAreaV2.countryRegionId}.
   * @param countyId Key property. See {@link CustTaxesAreaV2.countyId}.
   * @param stateId Key property. See {@link CustTaxesAreaV2.stateId}.
   * @returns A request builder for creating requests to retrieve one `CustTaxesAreaV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    accountNum: DeserializedType<T, 'Edm.String'>,
    taxGroup: DeserializedType<T, 'Edm.String'>,
    countryRegionId: DeserializedType<T, 'Edm.String'>,
    countyId: DeserializedType<T, 'Edm.String'>,
    stateId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CustTaxesAreaV2<T>, T> {
    return new GetByKeyRequestBuilder<CustTaxesAreaV2<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      AccountNum: accountNum,
      TaxGroup: taxGroup,
      CountryRegionId: countryRegionId,
      CountyId: countyId,
      StateId: stateId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CustTaxesAreaV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustTaxesAreaV2`.
   */
  update(
    entity: CustTaxesAreaV2<T>
  ): UpdateRequestBuilder<CustTaxesAreaV2<T>, T> {
    return new UpdateRequestBuilder<CustTaxesAreaV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CustTaxesAreaV2`.
   * @param dataAreaId Key property. See {@link CustTaxesAreaV2.dataAreaId}.
   * @param accountNum Key property. See {@link CustTaxesAreaV2.accountNum}.
   * @param taxGroup Key property. See {@link CustTaxesAreaV2.taxGroup}.
   * @param countryRegionId Key property. See {@link CustTaxesAreaV2.countryRegionId}.
   * @param countyId Key property. See {@link CustTaxesAreaV2.countyId}.
   * @param stateId Key property. See {@link CustTaxesAreaV2.stateId}.
   * @returns A request builder for creating requests that delete an entity of type `CustTaxesAreaV2`.
   */
  delete(
    dataAreaId: string,
    accountNum: string,
    taxGroup: string,
    countryRegionId: string,
    countyId: string,
    stateId: string
  ): DeleteRequestBuilder<CustTaxesAreaV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustTaxesAreaV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustTaxesAreaV2` by taking the entity as a parameter.
   */
  delete(
    entity: CustTaxesAreaV2<T>
  ): DeleteRequestBuilder<CustTaxesAreaV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    accountNum?: string,
    taxGroup?: string,
    countryRegionId?: string,
    countyId?: string,
    stateId?: string
  ): DeleteRequestBuilder<CustTaxesAreaV2<T>, T> {
    return new DeleteRequestBuilder<CustTaxesAreaV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CustTaxesAreaV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            AccountNum: accountNum!,
            TaxGroup: taxGroup!,
            CountryRegionId: countryRegionId!,
            CountyId: countyId!,
            StateId: stateId!
          }
    );
  }
}
