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
import type { RetailTenderDiscountsApi } from './RetailTenderDiscountsApi';
import { RetailDateValidationTypeBase } from './RetailDateValidationTypeBase';
import { RetailDisabledEnabled } from './RetailDisabledEnabled';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';

/**
 * This class represents the entity "RetailTenderDiscounts" of service "d365_metadata".
 */
export class RetailTenderDiscounts<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailTenderDiscountsType<T>
{
  /**
   * Technical entity name for RetailTenderDiscounts.
   */
  static override _entityName = 'RetailTenderDiscounts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTenderDiscounts entity.
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
   * Tender Type Id.
   * @nullable
   */
  declare tenderTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Max Discount Amount.
   */
  declare maxDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
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
   * Card Type Id.
   * @nullable
   */
  declare cardTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date Validation Type.
   * @nullable
   */
  declare dateValidationType?: RetailDateValidationTypeBase | null;
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
   * Status.
   * @nullable
   */
  declare status?: RetailDisabledEnabled | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;

  constructor(_entityApi: RetailTenderDiscountsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailTenderDiscountsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  offerId: DeserializedType<T, 'Edm.String'>;
  tenderTypeId?: DeserializedType<T, 'Edm.String'> | null;
  maxDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  discountLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  cardTypeId?: DeserializedType<T, 'Edm.String'> | null;
  dateValidationType?: RetailDateValidationTypeBase | null;
  validationPeriodId?: DeserializedType<T, 'Edm.String'> | null;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  status?: RetailDisabledEnabled | null;
  dimensionCombination?: DimensionCombinationsType<T> | null;
}
