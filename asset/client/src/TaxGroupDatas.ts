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
import type { TaxGroupDatasApi } from './TaxGroupDatasApi';
import { NoYes } from './NoYes';
import { TaxExemptCodes, TaxExemptCodesType } from './TaxExemptCodes';
import { TaxCodes, TaxCodesType } from './TaxCodes';
import { TaxGroups, TaxGroupsType } from './TaxGroups';

/**
 * This class represents the entity "TaxGroupDatas" of service "d365_metadata".
 */
export class TaxGroupDatas<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TaxGroupDatasType<T>
{
  /**
   * Technical entity name for TaxGroupDatas.
   */
  static override _entityName = 'TaxGroupDatas';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TaxGroupDatas entity.
   */
  static _keys = ['dataAreaId', 'TaxGroupId', 'TaxCodeId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Group Id.
   */
  declare taxGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Code Id.
   */
  declare taxCodeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Use Tax.
   * @nullable
   */
  declare useTax?: NoYes | null;
  /**
   * Tax Exempt Code Id.
   * @nullable
   */
  declare taxExemptCodeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Intracom Vat.
   * @nullable
   */
  declare intracomVat?: NoYes | null;
  /**
   * Reverse Charge.
   * @nullable
   */
  declare reverseCharge?: NoYes | null;
  /**
   * Brazilian Taxation Code.
   * @nullable
   */
  declare brazilianTaxationCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exempt Tax.
   * @nullable
   */
  declare exemptTax?: NoYes | null;
  /**
   * One-to-one navigation property to the {@link TaxExemptCodes} entity.
   */
  declare taxExemptCode?: TaxExemptCodes<T> | null;
  /**
   * One-to-one navigation property to the {@link TaxCodes} entity.
   */
  declare taxCode?: TaxCodes<T> | null;
  /**
   * One-to-one navigation property to the {@link TaxGroups} entity.
   */
  declare taxGroup?: TaxGroups<T> | null;

  constructor(_entityApi: TaxGroupDatasApi<T>) {
    super(_entityApi);
  }
}

export interface TaxGroupDatasType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  taxGroupId: DeserializedType<T, 'Edm.String'>;
  taxCodeId: DeserializedType<T, 'Edm.String'>;
  useTax?: NoYes | null;
  taxExemptCodeId?: DeserializedType<T, 'Edm.String'> | null;
  intracomVat?: NoYes | null;
  reverseCharge?: NoYes | null;
  brazilianTaxationCode?: DeserializedType<T, 'Edm.String'> | null;
  exemptTax?: NoYes | null;
  taxExemptCode?: TaxExemptCodesType<T> | null;
  taxCode?: TaxCodesType<T> | null;
  taxGroup?: TaxGroupsType<T> | null;
}
