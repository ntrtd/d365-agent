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
import type { ProjAdvancedJournalLineHoursApi } from './ProjAdvancedJournalLineHoursApi';
import { NoYes } from './NoYes';
import { ProjTransType } from './ProjTransType';

/**
 * This class represents the entity "ProjAdvancedJournalLineHours" of service "d365_metadata".
 */
export class ProjAdvancedJournalLineHours<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProjAdvancedJournalLineHoursType<T>
{
  /**
   * Technical entity name for ProjAdvancedJournalLineHours.
   */
  static override _entityName = 'ProjAdvancedJournalLineHours';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjAdvancedJournalLineHours entity.
   */
  static _keys = ['dataAreaId', 'LineNumber', 'ProjAdvancedJournal'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Proj Advanced Journal.
   */
  declare projAdvancedJournal: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Proj Data Area Id.
   * @nullable
   */
  declare projDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Post Error.
   * @nullable
   */
  declare postError?: NoYes | null;
  /**
   * Accounting Date.
   */
  declare accountingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Proj Id.
   * @nullable
   */
  declare projId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Proj Category Id.
   * @nullable
   */
  declare projCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Activity Number.
   * @nullable
   */
  declare activityNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Text.
   * @nullable
   */
  declare text?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price Currency.
   * @nullable
   */
  declare priceCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Extended Price.
   */
  declare extendedPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Extended Cost.
   */
  declare extendedCost: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Price Exchange Rate.
   */
  declare priceExchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Contract Line Id.
   * @nullable
   */
  declare contractLineId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Group.
   * @nullable
   */
  declare taxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Voucher.
   * @nullable
   */
  declare voucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trans Type.
   * @nullable
   */
  declare transType?: ProjTransType | null;
  /**
   * Unit Price.
   */
  declare unitPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Line Property Id.
   * @nullable
   */
  declare linePropertyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Override Sales Tax.
   * @nullable
   */
  declare overrideSalesTax?: NoYes | null;
  /**
   * Tax Item Group.
   * @nullable
   */
  declare taxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unit Cost.
   */
  declare unitCost: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Project Sales Tax Group.
   * @nullable
   */
  declare projectSalesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Sales Tax Item Group.
   * @nullable
   */
  declare projectSalesTaxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Quantity.
   */
  declare quantity: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: ProjAdvancedJournalLineHoursApi<T>) {
    super(_entityApi);
  }
}

export interface ProjAdvancedJournalLineHoursType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  projAdvancedJournal: DeserializedType<T, 'Edm.Int64'>;
  projDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  postError?: NoYes | null;
  accountingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  projId?: DeserializedType<T, 'Edm.String'> | null;
  projCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  activityNumber?: DeserializedType<T, 'Edm.String'> | null;
  text?: DeserializedType<T, 'Edm.String'> | null;
  priceCurrency?: DeserializedType<T, 'Edm.String'> | null;
  extendedPrice: DeserializedType<T, 'Edm.Decimal'>;
  extendedCost: DeserializedType<T, 'Edm.Decimal'>;
  priceExchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  contractLineId?: DeserializedType<T, 'Edm.String'> | null;
  taxGroup?: DeserializedType<T, 'Edm.String'> | null;
  voucher?: DeserializedType<T, 'Edm.String'> | null;
  transType?: ProjTransType | null;
  unitPrice: DeserializedType<T, 'Edm.Decimal'>;
  linePropertyId?: DeserializedType<T, 'Edm.String'> | null;
  overrideSalesTax?: NoYes | null;
  taxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  unitCost: DeserializedType<T, 'Edm.Decimal'>;
  projectSalesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  projectSalesTaxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  quantity: DeserializedType<T, 'Edm.Decimal'>;
}
