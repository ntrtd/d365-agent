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
import { SalesAutomaticSalesDocumentHeaderCharge } from './SalesAutomaticSalesDocumentHeaderCharge';

/**
 * Request builder class for operations supported on the {@link SalesAutomaticSalesDocumentHeaderCharge} entity.
 */
export class SalesAutomaticSalesDocumentHeaderChargeRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesAutomaticSalesDocumentHeaderCharge<T>, T> {
  /**
   * Returns a request builder for querying all `SalesAutomaticSalesDocumentHeaderCharge` entities.
   * @returns A request builder for creating requests to retrieve all `SalesAutomaticSalesDocumentHeaderCharge` entities.
   */
  getAll(): GetAllRequestBuilder<
    SalesAutomaticSalesDocumentHeaderCharge<T>,
    T
  > {
    return new GetAllRequestBuilder<
      SalesAutomaticSalesDocumentHeaderCharge<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SalesAutomaticSalesDocumentHeaderCharge` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesAutomaticSalesDocumentHeaderCharge`.
   */
  create(
    entity: SalesAutomaticSalesDocumentHeaderCharge<T>
  ): CreateRequestBuilder<SalesAutomaticSalesDocumentHeaderCharge<T>, T> {
    return new CreateRequestBuilder<
      SalesAutomaticSalesDocumentHeaderCharge<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `SalesAutomaticSalesDocumentHeaderCharge` entity based on its keys.
   * @param dataAreaId Key property. See {@link SalesAutomaticSalesDocumentHeaderCharge.dataAreaId}.
   * @param chargingCustomerAccountNumber Key property. See {@link SalesAutomaticSalesDocumentHeaderCharge.chargingCustomerAccountNumber}.
   * @param chargingChargeCustomerGroupId Key property. See {@link SalesAutomaticSalesDocumentHeaderCharge.chargingChargeCustomerGroupId}.
   * @param chargingDeliveryModeCode Key property. See {@link SalesAutomaticSalesDocumentHeaderCharge.chargingDeliveryModeCode}.
   * @param chargingChargeDeliveryGroupId Key property. See {@link SalesAutomaticSalesDocumentHeaderCharge.chargingChargeDeliveryGroupId}.
   * @param lineNumber Key property. See {@link SalesAutomaticSalesDocumentHeaderCharge.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `SalesAutomaticSalesDocumentHeaderCharge` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    chargingCustomerAccountNumber: DeserializedType<T, 'Edm.String'>,
    chargingChargeCustomerGroupId: DeserializedType<T, 'Edm.String'>,
    chargingDeliveryModeCode: DeserializedType<T, 'Edm.String'>,
    chargingChargeDeliveryGroupId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<SalesAutomaticSalesDocumentHeaderCharge<T>, T> {
    return new GetByKeyRequestBuilder<
      SalesAutomaticSalesDocumentHeaderCharge<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      ChargingCustomerAccountNumber: chargingCustomerAccountNumber,
      ChargingChargeCustomerGroupId: chargingChargeCustomerGroupId,
      ChargingDeliveryModeCode: chargingDeliveryModeCode,
      ChargingChargeDeliveryGroupId: chargingChargeDeliveryGroupId,
      LineNumber: lineNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `SalesAutomaticSalesDocumentHeaderCharge`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesAutomaticSalesDocumentHeaderCharge`.
   */
  update(
    entity: SalesAutomaticSalesDocumentHeaderCharge<T>
  ): UpdateRequestBuilder<SalesAutomaticSalesDocumentHeaderCharge<T>, T> {
    return new UpdateRequestBuilder<
      SalesAutomaticSalesDocumentHeaderCharge<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesAutomaticSalesDocumentHeaderCharge`.
   * @param dataAreaId Key property. See {@link SalesAutomaticSalesDocumentHeaderCharge.dataAreaId}.
   * @param chargingCustomerAccountNumber Key property. See {@link SalesAutomaticSalesDocumentHeaderCharge.chargingCustomerAccountNumber}.
   * @param chargingChargeCustomerGroupId Key property. See {@link SalesAutomaticSalesDocumentHeaderCharge.chargingChargeCustomerGroupId}.
   * @param chargingDeliveryModeCode Key property. See {@link SalesAutomaticSalesDocumentHeaderCharge.chargingDeliveryModeCode}.
   * @param chargingChargeDeliveryGroupId Key property. See {@link SalesAutomaticSalesDocumentHeaderCharge.chargingChargeDeliveryGroupId}.
   * @param lineNumber Key property. See {@link SalesAutomaticSalesDocumentHeaderCharge.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `SalesAutomaticSalesDocumentHeaderCharge`.
   */
  delete(
    dataAreaId: string,
    chargingCustomerAccountNumber: string,
    chargingChargeCustomerGroupId: string,
    chargingDeliveryModeCode: string,
    chargingChargeDeliveryGroupId: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<SalesAutomaticSalesDocumentHeaderCharge<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesAutomaticSalesDocumentHeaderCharge`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesAutomaticSalesDocumentHeaderCharge` by taking the entity as a parameter.
   */
  delete(
    entity: SalesAutomaticSalesDocumentHeaderCharge<T>
  ): DeleteRequestBuilder<SalesAutomaticSalesDocumentHeaderCharge<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    chargingCustomerAccountNumber?: string,
    chargingChargeCustomerGroupId?: string,
    chargingDeliveryModeCode?: string,
    chargingChargeDeliveryGroupId?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<SalesAutomaticSalesDocumentHeaderCharge<T>, T> {
    return new DeleteRequestBuilder<
      SalesAutomaticSalesDocumentHeaderCharge<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof SalesAutomaticSalesDocumentHeaderCharge
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ChargingCustomerAccountNumber: chargingCustomerAccountNumber!,
            ChargingChargeCustomerGroupId: chargingChargeCustomerGroupId!,
            ChargingDeliveryModeCode: chargingDeliveryModeCode!,
            ChargingChargeDeliveryGroupId: chargingChargeDeliveryGroupId!,
            LineNumber: lineNumber!
          }
    );
  }
}
