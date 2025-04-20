/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { SalesAutomaticSalesDocumentHeaderTaxChargesApi } from './SalesAutomaticSalesDocumentHeaderTaxChargesApi';
import {
  DeliveryChargeGroup,
  DeliveryChargeGroupType
} from './DeliveryChargeGroup';
import {
  CustomerChargeGroup,
  CustomerChargeGroupType
} from './CustomerChargeGroup';
import { TaxCodes, TaxCodesType } from './TaxCodes';
import { SalesCharge, SalesChargeType } from './SalesCharge';
import { DeliveryModesV2, DeliveryModesV2Type } from './DeliveryModesV2';
import { CustomersV3, CustomersV3Type } from './CustomersV3';

/**
 * This class represents the entity "SalesAutomaticSalesDocumentHeaderTaxCharges" of service "d365_metadata".
 */
export class SalesAutomaticSalesDocumentHeaderTaxCharges<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SalesAutomaticSalesDocumentHeaderTaxChargesType<T>
{
  /**
   * Technical entity name for SalesAutomaticSalesDocumentHeaderTaxCharges.
   */
  static override _entityName = 'SalesAutomaticSalesDocumentHeaderTaxCharges';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SalesAutomaticSalesDocumentHeaderTaxCharges entity.
   */
  static _keys = [
    'dataAreaId',
    'TaxCode',
    'ChargingCustomerAccountNumber',
    'ChargingChargeCustomerGroupId',
    'ChargingDeliveryModeCode',
    'ChargingChargeDeliveryGroupId',
    'LineNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Code.
   */
  declare taxCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Charging Customer Account Number.
   */
  declare chargingCustomerAccountNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Charging Charge Customer Group Id.
   */
  declare chargingChargeCustomerGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Charging Delivery Mode Code.
   */
  declare chargingDeliveryModeCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Charging Charge Delivery Group Id.
   */
  declare chargingChargeDeliveryGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Charge Code.
   * @nullable
   */
  declare salesChargeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link DeliveryChargeGroup} entity.
   */
  declare salesChargeDeliveryGroup?: DeliveryChargeGroup<T> | null;
  /**
   * One-to-one navigation property to the {@link CustomerChargeGroup} entity.
   */
  declare salesChargeCustomerGroup?: CustomerChargeGroup<T> | null;
  /**
   * One-to-one navigation property to the {@link TaxCodes} entity.
   */
  declare salesTaxCode?: TaxCodes<T> | null;
  /**
   * One-to-one navigation property to the {@link SalesCharge} entity.
   */
  declare salesCharge?: SalesCharge<T> | null;
  /**
   * One-to-one navigation property to the {@link DeliveryModesV2} entity.
   */
  declare salesChargeDeliveryMode?: DeliveryModesV2<T> | null;
  /**
   * One-to-one navigation property to the {@link CustomersV3} entity.
   */
  declare salesChargeCustomer?: CustomersV3<T> | null;

  constructor(_entityApi: SalesAutomaticSalesDocumentHeaderTaxChargesApi<T>) {
    super(_entityApi);
  }
}

export interface SalesAutomaticSalesDocumentHeaderTaxChargesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  taxCode: DeserializedType<T, 'Edm.String'>;
  chargingCustomerAccountNumber: DeserializedType<T, 'Edm.String'>;
  chargingChargeCustomerGroupId: DeserializedType<T, 'Edm.String'>;
  chargingDeliveryModeCode: DeserializedType<T, 'Edm.String'>;
  chargingChargeDeliveryGroupId: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  salesChargeCode?: DeserializedType<T, 'Edm.String'> | null;
  salesChargeDeliveryGroup?: DeliveryChargeGroupType<T> | null;
  salesChargeCustomerGroup?: CustomerChargeGroupType<T> | null;
  salesTaxCode?: TaxCodesType<T> | null;
  salesCharge?: SalesChargeType<T> | null;
  salesChargeDeliveryMode?: DeliveryModesV2Type<T> | null;
  salesChargeCustomer?: CustomersV3Type<T> | null;
}
