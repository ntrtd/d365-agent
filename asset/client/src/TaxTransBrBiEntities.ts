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
import type { TaxTransBrBiEntitiesApi } from './TaxTransBrBiEntitiesApi';
import { TaxTypeBr } from './TaxTypeBr';
import { TaxFiscalValueBr } from './TaxFiscalValueBr';
import { NoYes } from './NoYes';
import { FiTaxationOriginBr } from './FiTaxationOriginBr';
import { TaxSubstitutionEnumBr } from './TaxSubstitutionEnumBr';

/**
 * This class represents the entity "TaxTransBRBiEntities" of service "d365_metadata".
 */
export class TaxTransBrBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TaxTransBrBiEntitiesType<T>
{
  /**
   * Technical entity name for TaxTransBrBiEntities.
   */
  static override _entityName = 'TaxTransBRBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TaxTransBrBiEntities entity.
   */
  static _keys = ['dataAreaId', 'SourceKey'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Tax Type Br.
   * @nullable
   */
  declare taxTypeBr?: TaxTypeBr | null;
  /**
   * Tax Base Amount Other Br.
   */
  declare taxBaseAmountOtherBr: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Fiscal Value Br.
   * @nullable
   */
  declare fiscalValueBr?: TaxFiscalValueBr | null;
  /**
   * Is Icms Difference Tax Br.
   * @nullable
   */
  declare isIcmsDifferenceTaxBr?: NoYes | null;
  /**
   * Tax Base Amount Exempt Br.
   */
  declare taxBaseAmountExemptBr: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Trans.
   */
  declare taxTrans: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Tax Receivable Long Term Br.
   * @nullable
   */
  declare taxReceivableLongTermBr?: NoYes | null;
  /**
   * Taxation Code Br.
   * @nullable
   */
  declare taxationCodeBr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Value Diff Br.
   */
  declare taxValueDiffBr: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Taxation Origin Br.
   * @nullable
   */
  declare taxationOriginBr?: FiTaxationOriginBr | null;
  /**
   * Tax Substitution Br.
   * @nullable
   */
  declare taxSubstitutionBr?: TaxSubstitutionEnumBr | null;
  /**
   * Tax Amount Other Br.
   */
  declare taxAmountOtherBr: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Reduction Pct Br.
   */
  declare taxReductionPctBr: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: TaxTransBrBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface TaxTransBrBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  taxTypeBr?: TaxTypeBr | null;
  taxBaseAmountOtherBr: DeserializedType<T, 'Edm.Decimal'>;
  fiscalValueBr?: TaxFiscalValueBr | null;
  isIcmsDifferenceTaxBr?: NoYes | null;
  taxBaseAmountExemptBr: DeserializedType<T, 'Edm.Decimal'>;
  taxTrans: DeserializedType<T, 'Edm.Int64'>;
  taxReceivableLongTermBr?: NoYes | null;
  taxationCodeBr?: DeserializedType<T, 'Edm.String'> | null;
  taxValueDiffBr: DeserializedType<T, 'Edm.Decimal'>;
  taxationOriginBr?: FiTaxationOriginBr | null;
  taxSubstitutionBr?: TaxSubstitutionEnumBr | null;
  taxAmountOtherBr: DeserializedType<T, 'Edm.Decimal'>;
  taxReductionPctBr: DeserializedType<T, 'Edm.Decimal'>;
}
