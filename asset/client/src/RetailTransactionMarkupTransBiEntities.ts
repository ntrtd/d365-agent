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
import type { RetailTransactionMarkupTransBiEntitiesApi } from './RetailTransactionMarkupTransBiEntitiesApi';
import { ServiceCategoryIn } from './ServiceCategoryIn';
import { NoYes } from './NoYes';
import { MarkupCategory } from './MarkupCategory';
import { ItcCategoryIn } from './ItcCategoryIn';
import { MarkupModuleType } from './MarkupModuleType';

/**
 * This class represents the entity "RetailTransactionMarkupTransBIEntities" of service "d365_metadata".
 */
export class RetailTransactionMarkupTransBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailTransactionMarkupTransBiEntitiesType<T>
{
  /**
   * Technical entity name for RetailTransactionMarkupTransBiEntities.
   */
  static override _entityName = 'RetailTransactionMarkupTransBIEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTransactionMarkupTransBiEntities entity.
   */
  static _keys = [
    'dataAreaId',
    'store',
    'terminalId',
    'transactionId',
    'saleLineNum',
    'markupLineNum'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Store.
   */
  declare store: DeserializedType<T, 'Edm.String'>;
  /**
   * Terminal Id.
   */
  declare terminalId: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Id.
   */
  declare transactionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sale Line Num.
   */
  declare saleLineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Markup Line Num.
   */
  declare markupLineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Service Category In.
   * @nullable
   */
  declare serviceCategoryIn?: ServiceCategoryIn | null;
  /**
   * Value.
   */
  declare value: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exempt In.
   * @nullable
   */
  declare exemptIn?: NoYes | null;
  /**
   * Tax Amount Exclusive.
   */
  declare taxAmountExclusive: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Replication Counter From Origin.
   */
  declare replicationCounterFromOrigin: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Method.
   * @nullable
   */
  declare method?: MarkupCategory | null;
  /**
   * Tax Rate Type.
   * @nullable
   */
  declare taxRateType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Amount.
   */
  declare taxAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Service Accounting Code In.
   * @nullable
   */
  declare serviceAccountingCodeIn?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Overridden Line.
   * @nullable
   */
  declare isOverriddenLine?: NoYes | null;
  /**
   * Hsn Code In.
   * @nullable
   */
  declare hsnCodeIn?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Group.
   * @nullable
   */
  declare taxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Tax Exempt Price Inclusive Reduction Amount.
   */
  declare taxExemptPriceInclusiveReductionAmount: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Calculated Amount.
   */
  declare calculatedAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Item Group.
   * @nullable
   */
  declare taxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Itc Category In.
   * @nullable
   */
  declare itcCategoryIn?: ItcCategoryIn | null;
  /**
   * Module Type.
   * @nullable
   */
  declare moduleType?: MarkupModuleType | null;
  /**
   * Markup Code.
   * @nullable
   */
  declare markupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Amount Inclusive.
   */
  declare taxAmountInclusive: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Origin.
   * @nullable
   */
  declare origin?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Non Gst In.
   * @nullable
   */
  declare nonGstIn?: NoYes | null;
  /**
   * Tax Exempt Price Inclusive Original Price.
   */
  declare taxExemptPriceInclusiveOriginalPrice: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Keep.
   * @nullable
   */
  declare keep?: NoYes | null;

  constructor(_entityApi: RetailTransactionMarkupTransBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailTransactionMarkupTransBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  store: DeserializedType<T, 'Edm.String'>;
  terminalId: DeserializedType<T, 'Edm.String'>;
  transactionId: DeserializedType<T, 'Edm.String'>;
  saleLineNum: DeserializedType<T, 'Edm.Decimal'>;
  markupLineNum: DeserializedType<T, 'Edm.Decimal'>;
  serviceCategoryIn?: ServiceCategoryIn | null;
  value: DeserializedType<T, 'Edm.Decimal'>;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  exemptIn?: NoYes | null;
  taxAmountExclusive: DeserializedType<T, 'Edm.Decimal'>;
  replicationCounterFromOrigin: DeserializedType<T, 'Edm.Int32'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  method?: MarkupCategory | null;
  taxRateType?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  taxAmount: DeserializedType<T, 'Edm.Decimal'>;
  serviceAccountingCodeIn?: DeserializedType<T, 'Edm.String'> | null;
  isOverriddenLine?: NoYes | null;
  hsnCodeIn?: DeserializedType<T, 'Edm.String'> | null;
  taxGroup?: DeserializedType<T, 'Edm.String'> | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  taxExemptPriceInclusiveReductionAmount: DeserializedType<T, 'Edm.Decimal'>;
  calculatedAmount: DeserializedType<T, 'Edm.Decimal'>;
  taxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  itcCategoryIn?: ItcCategoryIn | null;
  moduleType?: MarkupModuleType | null;
  markupCode?: DeserializedType<T, 'Edm.String'> | null;
  taxAmountInclusive: DeserializedType<T, 'Edm.Decimal'>;
  origin?: DeserializedType<T, 'Edm.String'> | null;
  nonGstIn?: NoYes | null;
  taxExemptPriceInclusiveOriginalPrice: DeserializedType<T, 'Edm.Decimal'>;
  keep?: NoYes | null;
}
