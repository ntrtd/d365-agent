/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { SalesAutomaticSalesDocumentHeaderTaxCharges } from './SalesAutomaticSalesDocumentHeaderTaxCharges';

/**
 * Request builder class for operations supported on the {@link SalesAutomaticSalesDocumentHeaderTaxCharges} entity.
 */
export class SalesAutomaticSalesDocumentHeaderTaxChargesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesAutomaticSalesDocumentHeaderTaxCharges<T>, T> {
  /**
   * Returns a request builder for querying all `SalesAutomaticSalesDocumentHeaderTaxCharges` entities.
   * @returns A request builder for creating requests to retrieve all `SalesAutomaticSalesDocumentHeaderTaxCharges` entities.
   */
  getAll(): GetAllRequestBuilder<
    SalesAutomaticSalesDocumentHeaderTaxCharges<T>,
    T
  > {
    return new GetAllRequestBuilder<
      SalesAutomaticSalesDocumentHeaderTaxCharges<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SalesAutomaticSalesDocumentHeaderTaxCharges` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesAutomaticSalesDocumentHeaderTaxCharges`.
   */
  create(
    entity: SalesAutomaticSalesDocumentHeaderTaxCharges<T>
  ): CreateRequestBuilder<SalesAutomaticSalesDocumentHeaderTaxCharges<T>, T> {
    return new CreateRequestBuilder<
      SalesAutomaticSalesDocumentHeaderTaxCharges<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `SalesAutomaticSalesDocumentHeaderTaxCharges` entity based on its keys.
   * @param dataAreaId Key property. See {@link SalesAutomaticSalesDocumentHeaderTaxCharges.dataAreaId}.
   * @param taxCode Key property. See {@link SalesAutomaticSalesDocumentHeaderTaxCharges.taxCode}.
   * @param chargingCustomerAccountNumber Key property. See {@link SalesAutomaticSalesDocumentHeaderTaxCharges.chargingCustomerAccountNumber}.
   * @param chargingChargeCustomerGroupId Key property. See {@link SalesAutomaticSalesDocumentHeaderTaxCharges.chargingChargeCustomerGroupId}.
   * @param chargingDeliveryModeCode Key property. See {@link SalesAutomaticSalesDocumentHeaderTaxCharges.chargingDeliveryModeCode}.
   * @param chargingChargeDeliveryGroupId Key property. See {@link SalesAutomaticSalesDocumentHeaderTaxCharges.chargingChargeDeliveryGroupId}.
   * @param lineNumber Key property. See {@link SalesAutomaticSalesDocumentHeaderTaxCharges.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `SalesAutomaticSalesDocumentHeaderTaxCharges` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    taxCode: DeserializedType<T, 'Edm.String'>,
    chargingCustomerAccountNumber: DeserializedType<T, 'Edm.String'>,
    chargingChargeCustomerGroupId: DeserializedType<T, 'Edm.String'>,
    chargingDeliveryModeCode: DeserializedType<T, 'Edm.String'>,
    chargingChargeDeliveryGroupId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<SalesAutomaticSalesDocumentHeaderTaxCharges<T>, T> {
    return new GetByKeyRequestBuilder<
      SalesAutomaticSalesDocumentHeaderTaxCharges<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      TaxCode: taxCode,
      ChargingCustomerAccountNumber: chargingCustomerAccountNumber,
      ChargingChargeCustomerGroupId: chargingChargeCustomerGroupId,
      ChargingDeliveryModeCode: chargingDeliveryModeCode,
      ChargingChargeDeliveryGroupId: chargingChargeDeliveryGroupId,
      LineNumber: lineNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `SalesAutomaticSalesDocumentHeaderTaxCharges`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesAutomaticSalesDocumentHeaderTaxCharges`.
   */
  update(
    entity: SalesAutomaticSalesDocumentHeaderTaxCharges<T>
  ): UpdateRequestBuilder<SalesAutomaticSalesDocumentHeaderTaxCharges<T>, T> {
    return new UpdateRequestBuilder<
      SalesAutomaticSalesDocumentHeaderTaxCharges<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesAutomaticSalesDocumentHeaderTaxCharges`.
   * @param dataAreaId Key property. See {@link SalesAutomaticSalesDocumentHeaderTaxCharges.dataAreaId}.
   * @param taxCode Key property. See {@link SalesAutomaticSalesDocumentHeaderTaxCharges.taxCode}.
   * @param chargingCustomerAccountNumber Key property. See {@link SalesAutomaticSalesDocumentHeaderTaxCharges.chargingCustomerAccountNumber}.
   * @param chargingChargeCustomerGroupId Key property. See {@link SalesAutomaticSalesDocumentHeaderTaxCharges.chargingChargeCustomerGroupId}.
   * @param chargingDeliveryModeCode Key property. See {@link SalesAutomaticSalesDocumentHeaderTaxCharges.chargingDeliveryModeCode}.
   * @param chargingChargeDeliveryGroupId Key property. See {@link SalesAutomaticSalesDocumentHeaderTaxCharges.chargingChargeDeliveryGroupId}.
   * @param lineNumber Key property. See {@link SalesAutomaticSalesDocumentHeaderTaxCharges.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `SalesAutomaticSalesDocumentHeaderTaxCharges`.
   */
  delete(
    dataAreaId: string,
    taxCode: string,
    chargingCustomerAccountNumber: string,
    chargingChargeCustomerGroupId: string,
    chargingDeliveryModeCode: string,
    chargingChargeDeliveryGroupId: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<SalesAutomaticSalesDocumentHeaderTaxCharges<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesAutomaticSalesDocumentHeaderTaxCharges`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesAutomaticSalesDocumentHeaderTaxCharges` by taking the entity as a parameter.
   */
  delete(
    entity: SalesAutomaticSalesDocumentHeaderTaxCharges<T>
  ): DeleteRequestBuilder<SalesAutomaticSalesDocumentHeaderTaxCharges<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    taxCode?: string,
    chargingCustomerAccountNumber?: string,
    chargingChargeCustomerGroupId?: string,
    chargingDeliveryModeCode?: string,
    chargingChargeDeliveryGroupId?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<SalesAutomaticSalesDocumentHeaderTaxCharges<T>, T> {
    return new DeleteRequestBuilder<
      SalesAutomaticSalesDocumentHeaderTaxCharges<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof SalesAutomaticSalesDocumentHeaderTaxCharges
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TaxCode: taxCode!,
            ChargingCustomerAccountNumber: chargingCustomerAccountNumber!,
            ChargingChargeCustomerGroupId: chargingChargeCustomerGroupId!,
            ChargingDeliveryModeCode: chargingDeliveryModeCode!,
            ChargingChargeDeliveryGroupId: chargingChargeDeliveryGroupId!,
            LineNumber: lineNumber!
          }
    );
  }
}
