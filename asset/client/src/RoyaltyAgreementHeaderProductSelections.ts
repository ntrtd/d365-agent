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
import type { RoyaltyAgreementHeaderProductSelectionsApi } from './RoyaltyAgreementHeaderProductSelectionsApi';
import {
  RoyaltyAgreementHeaders,
  RoyaltyAgreementHeadersType
} from './RoyaltyAgreementHeaders';

/**
 * This class represents the entity "RoyaltyAgreementHeaderProductSelections" of service "d365_metadata".
 */
export class RoyaltyAgreementHeaderProductSelections<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RoyaltyAgreementHeaderProductSelectionsType<T>
{
  /**
   * Technical entity name for RoyaltyAgreementHeaderProductSelections.
   */
  static override _entityName = 'RoyaltyAgreementHeaderProductSelections';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RoyaltyAgreementHeaderProductSelections entity.
   */
  static _keys = [
    'dataAreaId',
    'RoyaltyAgreementId',
    'ItemNumber',
    'SalesUnitSymbol',
    'QualifyingSiteId',
    'QualifyingWarehouseId',
    'ProductConfigurationId',
    'ProductColorId',
    'ProductSizeId',
    'ProductStyleId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Royalty Agreement Id.
   */
  declare royaltyAgreementId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Number.
   */
  declare itemNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Unit Symbol.
   */
  declare salesUnitSymbol: DeserializedType<T, 'Edm.String'>;
  /**
   * Qualifying Site Id.
   */
  declare qualifyingSiteId: DeserializedType<T, 'Edm.String'>;
  /**
   * Qualifying Warehouse Id.
   */
  declare qualifyingWarehouseId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Configuration Id.
   */
  declare productConfigurationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Color Id.
   */
  declare productColorId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Size Id.
   */
  declare productSizeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Style Id.
   */
  declare productStyleId: DeserializedType<T, 'Edm.String'>;
  /**
   * Default Vendor Account Number.
   * @nullable
   */
  declare defaultVendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link RoyaltyAgreementHeaders} entity.
   */
  declare royaltyAgreementHeader?: RoyaltyAgreementHeaders<T> | null;

  constructor(_entityApi: RoyaltyAgreementHeaderProductSelectionsApi<T>) {
    super(_entityApi);
  }
}

export interface RoyaltyAgreementHeaderProductSelectionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  royaltyAgreementId: DeserializedType<T, 'Edm.String'>;
  itemNumber: DeserializedType<T, 'Edm.String'>;
  salesUnitSymbol: DeserializedType<T, 'Edm.String'>;
  qualifyingSiteId: DeserializedType<T, 'Edm.String'>;
  qualifyingWarehouseId: DeserializedType<T, 'Edm.String'>;
  productConfigurationId: DeserializedType<T, 'Edm.String'>;
  productColorId: DeserializedType<T, 'Edm.String'>;
  productSizeId: DeserializedType<T, 'Edm.String'>;
  productStyleId: DeserializedType<T, 'Edm.String'>;
  defaultVendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  royaltyAgreementHeader?: RoyaltyAgreementHeadersType<T> | null;
}
