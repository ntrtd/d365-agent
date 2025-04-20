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
import type { TaxTransWBiEntitiesApi } from './TaxTransWBiEntitiesApi';
import { TaxTypeIn } from './TaxTypeIn';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "TaxTransWBiEntities" of service "d365_metadata".
 */
export class TaxTransWBiEntities<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TaxTransWBiEntitiesType<T>
{
  /**
   * Technical entity name for TaxTransWBiEntities.
   */
  static override _entityName = 'TaxTransWBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TaxTransWBiEntities entity.
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
   * Service Tax Reverse Charge Percentage In.
   */
  declare serviceTaxReverseChargePercentageIn: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Document Date Pl.
   */
  declare documentDatePl: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Addressing Pl.
   * @nullable
   */
  declare addressingPl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Offset Rec Id Mx.
   */
  declare offsetRecIdMx: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Tax Type In.
   * @nullable
   */
  declare taxTypeIn?: TaxTypeIn | null;
  /**
   * Service Tax Reverse Charge Origin Amount In.
   */
  declare serviceTaxReverseChargeOriginAmountIn: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Tax Trans Ref Rec Id In.
   */
  declare taxTransRefRecIdIn: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Cust Vend Trans Posting Log Tax Origin W.
   */
  declare custVendTransPostingLogTaxOriginW: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Trans Rec Id Mx.
   */
  declare transRecIdMx: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Reversed Tax Trans Rec Id W.
   */
  declare reversedTaxTransRecIdW: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Excise Amount Pl.
   */
  declare exciseAmountPl: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Cust Vend Name Pl.
   * @nullable
   */
  declare custVendNamePl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Apply Excise In.
   * @nullable
   */
  declare applyExciseIn?: NoYes | null;
  /**
   * Abatement Amount In.
   */
  declare abatementAmountIn: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Component Table In.
   */
  declare taxComponentTableIn: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Tax Amount Customs In.
   */
  declare taxAmountCustomsIn: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Registration Number Table In.
   */
  declare taxRegistrationNumberTableIn: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Claim Percentage In.
   */
  declare claimPercentageIn: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Trans.
   */
  declare taxTrans: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Tax Period Payment Code Pl.
   * @nullable
   */
  declare taxPeriodPaymentCodePl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Promissory Note Invoice Mx.
   * @nullable
   */
  declare promissoryNoteInvoiceMx?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trans Table Id Mx.
   */
  declare transTableIdMx: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Customs Duty In.
   */
  declare customsDutyIn: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Vat Num Pl.
   * @nullable
   */
  declare vatNumPl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vat Due Date W.
   */
  declare vatDueDateW: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: TaxTransWBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface TaxTransWBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  serviceTaxReverseChargePercentageIn: DeserializedType<T, 'Edm.Decimal'>;
  documentDatePl: DeserializedType<T, 'Edm.DateTimeOffset'>;
  addressingPl?: DeserializedType<T, 'Edm.String'> | null;
  offsetRecIdMx: DeserializedType<T, 'Edm.Int64'>;
  taxTypeIn?: TaxTypeIn | null;
  serviceTaxReverseChargeOriginAmountIn: DeserializedType<T, 'Edm.Decimal'>;
  taxTransRefRecIdIn: DeserializedType<T, 'Edm.Int64'>;
  custVendTransPostingLogTaxOriginW: DeserializedType<T, 'Edm.Int64'>;
  transRecIdMx: DeserializedType<T, 'Edm.Int64'>;
  reversedTaxTransRecIdW: DeserializedType<T, 'Edm.Int64'>;
  exciseAmountPl: DeserializedType<T, 'Edm.Decimal'>;
  custVendNamePl?: DeserializedType<T, 'Edm.String'> | null;
  applyExciseIn?: NoYes | null;
  abatementAmountIn: DeserializedType<T, 'Edm.Decimal'>;
  taxComponentTableIn: DeserializedType<T, 'Edm.Int64'>;
  taxAmountCustomsIn: DeserializedType<T, 'Edm.Decimal'>;
  taxRegistrationNumberTableIn: DeserializedType<T, 'Edm.Int64'>;
  claimPercentageIn: DeserializedType<T, 'Edm.Decimal'>;
  taxTrans: DeserializedType<T, 'Edm.Int64'>;
  taxPeriodPaymentCodePl?: DeserializedType<T, 'Edm.String'> | null;
  promissoryNoteInvoiceMx?: DeserializedType<T, 'Edm.String'> | null;
  transTableIdMx: DeserializedType<T, 'Edm.Int32'>;
  customsDutyIn: DeserializedType<T, 'Edm.Decimal'>;
  vatNumPl?: DeserializedType<T, 'Edm.String'> | null;
  vatDueDateW: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
