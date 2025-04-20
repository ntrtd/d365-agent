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
import type { SadParametersApi } from './SadParametersApi';
import { PlSadPostingRule } from './PlSadPostingRule';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';

/**
 * This class represents the entity "SADParameters" of service "d365_metadata".
 */
export class SadParameters<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SadParametersType<T>
{
  /**
   * Technical entity name for SadParameters.
   */
  static override _entityName = 'SADParameters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SadParameters entity.
   */
  static _keys = ['dataAreaId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Miscellaneous Charges From The Sad Document Account Display Value.
   * @nullable
   */
  declare miscellaneousChargesFromTheSadDocumentAccountDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Misc Payments.
   * @nullable
   */
  declare miscPayments?: PlSadPostingRule | null;
  /**
   * Insurance Account Display Value.
   * @nullable
   */
  declare insuranceAccountDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Transport On Sad Document Account Display Value.
   * @nullable
   */
  declare transportOnSadDocumentAccountDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Transport Account Display Value.
   * @nullable
   */
  declare transportAccountDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Vat Rounding.
   */
  declare vatRounding: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Additional Costs Form Invoice.
   * @nullable
   */
  declare additionalCostsFormInvoice?: PlSadPostingRule | null;
  /**
   * Misc Payments Account Display Value.
   * @nullable
   */
  declare miscPaymentsAccountDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Duty Rounding.
   */
  declare dutyRounding: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Excise Tax Rounding.
   */
  declare exciseTaxRounding: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;

  constructor(_entityApi: SadParametersApi<T>) {
    super(_entityApi);
  }
}

export interface SadParametersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  miscellaneousChargesFromTheSadDocumentAccountDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  miscPayments?: PlSadPostingRule | null;
  insuranceAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  transportOnSadDocumentAccountDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  transportAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  vatRounding: DeserializedType<T, 'Edm.Decimal'>;
  additionalCostsFormInvoice?: PlSadPostingRule | null;
  miscPaymentsAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  dutyRounding: DeserializedType<T, 'Edm.Decimal'>;
  exciseTaxRounding: DeserializedType<T, 'Edm.Decimal'>;
  dimensionCombination?: DimensionCombinationsType<T> | null;
}
