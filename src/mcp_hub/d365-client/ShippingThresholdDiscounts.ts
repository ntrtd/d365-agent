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
import type { ShippingThresholdDiscountsApi } from './ShippingThresholdDiscountsApi';
import { RetailDateValidationTypeBase } from './RetailDateValidationTypeBase';
import { NoYes } from './NoYes';
import { RetailDisabledEnabled } from './RetailDisabledEnabled';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';
import {
  RetailDiscountLines,
  RetailDiscountLinesType
} from './RetailDiscountLines';

/**
 * This class represents the entity "ShippingThresholdDiscounts" of service "d365_metadata".
 */
export class ShippingThresholdDiscounts<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ShippingThresholdDiscountsType<T>
{
  /**
   * Technical entity name for ShippingThresholdDiscounts.
   */
  static override _entityName = 'ShippingThresholdDiscounts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ShippingThresholdDiscounts entity.
   */
  static _keys = ['dataAreaId', 'OfferId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Offer Id.
   */
  declare offerId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Discount Ledger Dimension Display Value.
   * @nullable
   */
  declare discountLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Discount Code.
   * @nullable
   */
  declare discountCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date Validation Type.
   * @nullable
   */
  declare dateValidationType?: RetailDateValidationTypeBase | null;
  /**
   * Delivery Mode.
   * @nullable
   */
  declare deliveryMode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Disclaimer.
   * @nullable
   */
  declare disclaimer?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Validation Period Id.
   * @nullable
   */
  declare validationPeriodId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Discount Code Required.
   * @nullable
   */
  declare isDiscountCodeRequired?: NoYes | null;
  /**
   * Status.
   * @nullable
   */
  declare status?: RetailDisabledEnabled | null;
  /**
   * Print Description On Fiscal Receipt.
   * @nullable
   */
  declare printDescriptionOnFiscalReceipt?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;
  /**
   * One-to-many navigation property to the {@link RetailDiscountLines} entity.
   */
  declare retailDiscountLine: RetailDiscountLines<T>[];

  constructor(_entityApi: ShippingThresholdDiscountsApi<T>) {
    super(_entityApi);
  }
}

export interface ShippingThresholdDiscountsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  offerId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  discountLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  discountCode?: DeserializedType<T, 'Edm.String'> | null;
  dateValidationType?: RetailDateValidationTypeBase | null;
  deliveryMode?: DeserializedType<T, 'Edm.String'> | null;
  disclaimer?: DeserializedType<T, 'Edm.String'> | null;
  validationPeriodId?: DeserializedType<T, 'Edm.String'> | null;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  isDiscountCodeRequired?: NoYes | null;
  status?: RetailDisabledEnabled | null;
  printDescriptionOnFiscalReceipt?: DeserializedType<T, 'Edm.String'> | null;
  dimensionCombination?: DimensionCombinationsType<T> | null;
  retailDiscountLine: RetailDiscountLinesType<T>[];
}
