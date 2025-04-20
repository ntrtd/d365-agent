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
import type { RoyaltyAgreementLineProductSelectionsApi } from './RoyaltyAgreementLineProductSelectionsApi';
import {
  RoyaltyAgreementLines,
  RoyaltyAgreementLinesType
} from './RoyaltyAgreementLines';

/**
 * This class represents the entity "RoyaltyAgreementLineProductSelections" of service "d365_metadata".
 */
export class RoyaltyAgreementLineProductSelections<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RoyaltyAgreementLineProductSelectionsType<T>
{
  /**
   * Technical entity name for RoyaltyAgreementLineProductSelections.
   */
  static override _entityName = 'RoyaltyAgreementLineProductSelections';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RoyaltyAgreementLineProductSelections entity.
   */
  static _keys = [
    'dataAreaId',
    'RoyaltyAgreementLineId',
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
   * Royalty Agreement Line Id.
   */
  declare royaltyAgreementLineId: DeserializedType<T, 'Edm.String'>;
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
   * Vendor Account Number.
   * @nullable
   */
  declare vendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link RoyaltyAgreementLines} entity.
   */
  declare royaltyAgreementLine?: RoyaltyAgreementLines<T> | null;

  constructor(_entityApi: RoyaltyAgreementLineProductSelectionsApi<T>) {
    super(_entityApi);
  }
}

export interface RoyaltyAgreementLineProductSelectionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  royaltyAgreementLineId: DeserializedType<T, 'Edm.String'>;
  royaltyAgreementId: DeserializedType<T, 'Edm.String'>;
  itemNumber: DeserializedType<T, 'Edm.String'>;
  salesUnitSymbol: DeserializedType<T, 'Edm.String'>;
  qualifyingSiteId: DeserializedType<T, 'Edm.String'>;
  qualifyingWarehouseId: DeserializedType<T, 'Edm.String'>;
  productConfigurationId: DeserializedType<T, 'Edm.String'>;
  productColorId: DeserializedType<T, 'Edm.String'>;
  productSizeId: DeserializedType<T, 'Edm.String'>;
  productStyleId: DeserializedType<T, 'Edm.String'>;
  vendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  royaltyAgreementLine?: RoyaltyAgreementLinesType<T> | null;
}
