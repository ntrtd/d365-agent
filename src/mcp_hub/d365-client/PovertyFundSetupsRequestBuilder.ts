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
import { PovertyFundSetups } from './PovertyFundSetups';
import { CustVendTypeBr } from './CustVendTypeBr';

/**
 * Request builder class for operations supported on the {@link PovertyFundSetups} entity.
 */
export class PovertyFundSetupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PovertyFundSetups<T>, T> {
  /**
   * Returns a request builder for querying all `PovertyFundSetups` entities.
   * @returns A request builder for creating requests to retrieve all `PovertyFundSetups` entities.
   */
  getAll(): GetAllRequestBuilder<PovertyFundSetups<T>, T> {
    return new GetAllRequestBuilder<PovertyFundSetups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PovertyFundSetups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PovertyFundSetups`.
   */
  create(
    entity: PovertyFundSetups<T>
  ): CreateRequestBuilder<PovertyFundSetups<T>, T> {
    return new CreateRequestBuilder<PovertyFundSetups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PovertyFundSetups` entity based on its keys.
   * @param dataAreaId Key property. See {@link PovertyFundSetups.dataAreaId}.
   * @param accountRelation Key property. See {@link PovertyFundSetups.accountRelation}.
   * @param itemRelation Key property. See {@link PovertyFundSetups.itemRelation}.
   * @param taxFromDate Key property. See {@link PovertyFundSetups.taxFromDate}.
   * @param taxToDate Key property. See {@link PovertyFundSetups.taxToDate}.
   * @param stateId Key property. See {@link PovertyFundSetups.stateId}.
   * @param countryRegionId Key property. See {@link PovertyFundSetups.countryRegionId}.
   * @param custVendType Key property. See {@link PovertyFundSetups.custVendType}.
   * @returns A request builder for creating requests to retrieve one `PovertyFundSetups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    accountRelation: DeserializedType<T, 'Edm.String'>,
    itemRelation: DeserializedType<T, 'Edm.String'>,
    taxFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    taxToDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    stateId: DeserializedType<T, 'Edm.String'>,
    countryRegionId: DeserializedType<T, 'Edm.String'>,
    custVendType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.CustVendType_BR'
    >
  ): GetByKeyRequestBuilder<PovertyFundSetups<T>, T> {
    return new GetByKeyRequestBuilder<PovertyFundSetups<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      AccountRelation: accountRelation,
      ItemRelation: itemRelation,
      TaxFromDate: taxFromDate,
      TaxToDate: taxToDate,
      StateId: stateId,
      CountryRegionId: countryRegionId,
      CustVendType: custVendType
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PovertyFundSetups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PovertyFundSetups`.
   */
  update(
    entity: PovertyFundSetups<T>
  ): UpdateRequestBuilder<PovertyFundSetups<T>, T> {
    return new UpdateRequestBuilder<PovertyFundSetups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PovertyFundSetups`.
   * @param dataAreaId Key property. See {@link PovertyFundSetups.dataAreaId}.
   * @param accountRelation Key property. See {@link PovertyFundSetups.accountRelation}.
   * @param itemRelation Key property. See {@link PovertyFundSetups.itemRelation}.
   * @param taxFromDate Key property. See {@link PovertyFundSetups.taxFromDate}.
   * @param taxToDate Key property. See {@link PovertyFundSetups.taxToDate}.
   * @param stateId Key property. See {@link PovertyFundSetups.stateId}.
   * @param countryRegionId Key property. See {@link PovertyFundSetups.countryRegionId}.
   * @param custVendType Key property. See {@link PovertyFundSetups.custVendType}.
   * @returns A request builder for creating requests that delete an entity of type `PovertyFundSetups`.
   */
  delete(
    dataAreaId: string,
    accountRelation: string,
    itemRelation: string,
    taxFromDate: Moment,
    taxToDate: Moment,
    stateId: string,
    countryRegionId: string,
    custVendType: CustVendTypeBr
  ): DeleteRequestBuilder<PovertyFundSetups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PovertyFundSetups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PovertyFundSetups` by taking the entity as a parameter.
   */
  delete(
    entity: PovertyFundSetups<T>
  ): DeleteRequestBuilder<PovertyFundSetups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    accountRelation?: string,
    itemRelation?: string,
    taxFromDate?: Moment,
    taxToDate?: Moment,
    stateId?: string,
    countryRegionId?: string,
    custVendType?: CustVendTypeBr
  ): DeleteRequestBuilder<PovertyFundSetups<T>, T> {
    return new DeleteRequestBuilder<PovertyFundSetups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PovertyFundSetups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            AccountRelation: accountRelation!,
            ItemRelation: itemRelation!,
            TaxFromDate: taxFromDate!,
            TaxToDate: taxToDate!,
            StateId: stateId!,
            CountryRegionId: countryRegionId!,
            CustVendType: custVendType!
          }
    );
  }
}
