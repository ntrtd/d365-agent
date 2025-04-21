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
import type { RAssetTaxAllowancesApi } from './RAssetTaxAllowancesApi';
import { RAssetTaxAllowanceType } from './RAssetTaxAllowanceType';
import { RAssetTaxType } from './RAssetTaxType';

/**
 * This class represents the entity "RAssetTaxAllowances" of service "d365_metadata".
 */
export class RAssetTaxAllowances<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RAssetTaxAllowancesType<T>
{
  /**
   * Technical entity name for RAssetTaxAllowances.
   */
  static override _entityName = 'RAssetTaxAllowances';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RAssetTaxAllowances entity.
   */
  static _keys = ['dataAreaId', 'Privilege'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Privilege.
   */
  declare privilege: DeserializedType<T, 'Edm.String'>;
  /**
   * Allowance Value.
   */
  declare allowanceValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Clause.
   * @nullable
   */
  declare clause?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Benefit Type.
   * @nullable
   */
  declare benefitType?: RAssetTaxAllowanceType | null;
  /**
   * Type Of Tax.
   * @nullable
   */
  declare typeOfTax?: RAssetTaxType | null;
  /**
   * Article Number.
   * @nullable
   */
  declare articleNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Article Sub Clause.
   * @nullable
   */
  declare articleSubClause?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: RAssetTaxAllowancesApi<T>) {
    super(_entityApi);
  }
}

export interface RAssetTaxAllowancesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  privilege: DeserializedType<T, 'Edm.String'>;
  allowanceValue: DeserializedType<T, 'Edm.Decimal'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  clause?: DeserializedType<T, 'Edm.String'> | null;
  benefitType?: RAssetTaxAllowanceType | null;
  typeOfTax?: RAssetTaxType | null;
  articleNumber?: DeserializedType<T, 'Edm.String'> | null;
  articleSubClause?: DeserializedType<T, 'Edm.String'> | null;
}
