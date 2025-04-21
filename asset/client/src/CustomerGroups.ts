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
import type { CustomerGroupsApi } from './CustomerGroupsApi';
import { NoYes } from './NoYes';
import { Prospects, ProspectsType } from './Prospects';
import { DimensionSets, DimensionSetsType } from './DimensionSets';

/**
 * This class represents the entity "CustomerGroups" of service "d365_metadata".
 */
export class CustomerGroups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CustomerGroupsType<T>
{
  /**
   * Technical entity name for CustomerGroups.
   */
  static override _entityName = 'CustomerGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CustomerGroups entity.
   */
  static _keys = ['dataAreaId', 'CustomerGroupId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Customer Group Id.
   */
  declare customerGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Clearing Period Payment Term Name.
   * @nullable
   */
  declare clearingPeriodPaymentTermName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Default Dimension Display Value.
   * @nullable
   */
  declare defaultDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Customer Account Number Sequence.
   * @nullable
   */
  declare customerAccountNumberSequence?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Accounting Currency Exchange Rate Type.
   * @nullable
   */
  declare accountingCurrencyExchangeRateType?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Is Sales Tax Included In Price.
   * @nullable
   */
  declare isSalesTaxIncludedInPrice?: NoYes | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Write Off Reason.
   * @nullable
   */
  declare writeOffReason?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reporting Currency Exchange Rate Type.
   * @nullable
   */
  declare reportingCurrencyExchangeRateType?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Payment Term Id.
   * @nullable
   */
  declare paymentTermId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Group Id.
   * @nullable
   */
  declare taxGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Public Sector It.
   * @nullable
   */
  declare isPublicSectorIt?: NoYes | null;
  /**
   * One-to-many navigation property to the {@link Prospects} entity.
   */
  declare prospects: Prospects<T>[];
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;

  constructor(_entityApi: CustomerGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface CustomerGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  customerGroupId: DeserializedType<T, 'Edm.String'>;
  clearingPeriodPaymentTermName?: DeserializedType<T, 'Edm.String'> | null;
  defaultDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  customerAccountNumberSequence?: DeserializedType<T, 'Edm.String'> | null;
  accountingCurrencyExchangeRateType?: DeserializedType<T, 'Edm.String'> | null;
  isSalesTaxIncludedInPrice?: NoYes | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  writeOffReason?: DeserializedType<T, 'Edm.String'> | null;
  reportingCurrencyExchangeRateType?: DeserializedType<T, 'Edm.String'> | null;
  paymentTermId?: DeserializedType<T, 'Edm.String'> | null;
  taxGroupId?: DeserializedType<T, 'Edm.String'> | null;
  isPublicSectorIt?: NoYes | null;
  prospects: ProspectsType<T>[];
  dimensionSet?: DimensionSetsType<T> | null;
}
