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
import type { MarkupTableBiEntitiesApi } from './MarkupTableBiEntitiesApi';
import { MarkupModuleType } from './MarkupModuleType';
import { NoYes } from './NoYes';
import { LedgerPostingType } from './LedgerPostingType';
import { MarkupClassificationBr } from './MarkupClassificationBr';
import { CustomPaymTypeRu } from './CustomPaymTypeRu';
import { MarkupType } from './MarkupType';

/**
 * This class represents the entity "MarkupTableBiEntities" of service "d365_metadata".
 */
export class MarkupTableBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements MarkupTableBiEntitiesType<T>
{
  /**
   * Technical entity name for MarkupTableBiEntities.
   */
  static override _entityName = 'MarkupTableBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the MarkupTableBiEntities entity.
   */
  static _keys = ['dataAreaId', 'ModuleType', 'MarkupCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Module Type.
   * @nullable
   */
  declare moduleType?: MarkupModuleType | null;
  /**
   * Markup Code.
   */
  declare markupCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Use Cust Posting Type Transit Ru.
   * @nullable
   */
  declare useCustPostingTypeTransitRu?: NoYes | null;
  /**
   * Is Letter Of Credit Sa.
   * @nullable
   */
  declare isLetterOfCreditSa?: NoYes | null;
  /**
   * Vend Posting.
   * @nullable
   */
  declare vendPosting?: LedgerPostingType | null;
  /**
   * Cust Posting.
   * @nullable
   */
  declare custPosting?: LedgerPostingType | null;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Skip In Free Invoices It.
   * @nullable
   */
  declare skipInFreeInvoicesIt?: NoYes | null;
  /**
   * Markup Classification Br.
   * @nullable
   */
  declare markupClassificationBr?: MarkupClassificationBr | null;
  /**
   * Is Shipping.
   * @nullable
   */
  declare isShipping?: NoYes | null;
  /**
   * Mcr Pro Rate.
   * @nullable
   */
  declare mcrProRate?: NoYes | null;
  /**
   * Use In Matching.
   * @nullable
   */
  declare useInMatching?: NoYes | null;
  /**
   * Include Into Intrastat Invoice Value.
   * @nullable
   */
  declare includeIntoIntrastatInvoiceValue?: NoYes | null;
  /**
   * Vendor Ledger Dimension Values Json.
   * @nullable
   */
  declare vendorLedgerDimensionValuesJson?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Txt.
   * @nullable
   */
  declare txt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mcr Broker Contract Fee.
   * @nullable
   */
  declare mcrBrokerContractFee?: NoYes | null;
  /**
   * Tax Rate Type.
   */
  declare taxRateType: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Max Amount.
   */
  declare maxAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Tax Withhold Item Group.
   */
  declare taxWithholdItemGroup: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sat Unit Code Mx.
   * @nullable
   */
  declare satUnitCodeMx?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Include Into Intrastat Statistical Value.
   * @nullable
   */
  declare includeIntoIntrastatStatisticalValue?: NoYes | null;
  /**
   * Sat Product Code Mx.
   * @nullable
   */
  declare satProductCodeMx?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Custom Paym Type Ru.
   * @nullable
   */
  declare customPaymTypeRu?: CustomPaymTypeRu | null;
  /**
   * Cust Type.
   * @nullable
   */
  declare custType?: MarkupType | null;
  /**
   * Vend Type.
   * @nullable
   */
  declare vendType?: MarkupType | null;
  /**
   * Tax Item Group.
   * @nullable
   */
  declare taxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Ledger Dimension Values Json.
   * @nullable
   */
  declare customerLedgerDimensionValuesJson?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Refundable.
   * @nullable
   */
  declare refundable?: NoYes | null;

  constructor(_entityApi: MarkupTableBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface MarkupTableBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  moduleType?: MarkupModuleType | null;
  markupCode: DeserializedType<T, 'Edm.String'>;
  useCustPostingTypeTransitRu?: NoYes | null;
  isLetterOfCreditSa?: NoYes | null;
  vendPosting?: LedgerPostingType | null;
  custPosting?: LedgerPostingType | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  skipInFreeInvoicesIt?: NoYes | null;
  markupClassificationBr?: MarkupClassificationBr | null;
  isShipping?: NoYes | null;
  mcrProRate?: NoYes | null;
  useInMatching?: NoYes | null;
  includeIntoIntrastatInvoiceValue?: NoYes | null;
  vendorLedgerDimensionValuesJson?: DeserializedType<T, 'Edm.String'> | null;
  txt?: DeserializedType<T, 'Edm.String'> | null;
  mcrBrokerContractFee?: NoYes | null;
  taxRateType: DeserializedType<T, 'Edm.Int64'>;
  maxAmount: DeserializedType<T, 'Edm.Decimal'>;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  taxWithholdItemGroup: DeserializedType<T, 'Edm.Int64'>;
  satUnitCodeMx?: DeserializedType<T, 'Edm.String'> | null;
  includeIntoIntrastatStatisticalValue?: NoYes | null;
  satProductCodeMx?: DeserializedType<T, 'Edm.String'> | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  customPaymTypeRu?: CustomPaymTypeRu | null;
  custType?: MarkupType | null;
  vendType?: MarkupType | null;
  taxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  customerLedgerDimensionValuesJson?: DeserializedType<T, 'Edm.String'> | null;
  refundable?: NoYes | null;
}
