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
import type { ChargesTolerancesApi } from './ChargesTolerancesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "ChargesTolerances" of service "d365_metadata".
 */
export class ChargesTolerances<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ChargesTolerancesType<T>
{
  /**
   * Technical entity name for ChargesTolerances.
   */
  static override _entityName = 'ChargesTolerances';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ChargesTolerances entity.
   */
  static _keys = ['dataAreaId', 'ChargesCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Charges Code.
   */
  declare chargesCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Intrastat Statistical Value.
   * @nullable
   */
  declare intrastatStatisticalValue?: NoYes | null;
  /**
   * Is Letterof Credit Enabled.
   * @nullable
   */
  declare isLetterofCreditEnabled?: NoYes | null;
  /**
   * Intrastat Invoice Value.
   * @nullable
   */
  declare intrastatInvoiceValue?: NoYes | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Charges Tolerance Percentage.
   */
  declare chargesTolerancePercentage: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: ChargesTolerancesApi<T>) {
    super(_entityApi);
  }
}

export interface ChargesTolerancesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  chargesCode: DeserializedType<T, 'Edm.String'>;
  intrastatStatisticalValue?: NoYes | null;
  isLetterofCreditEnabled?: NoYes | null;
  intrastatInvoiceValue?: NoYes | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  chargesTolerancePercentage: DeserializedType<T, 'Edm.Decimal'>;
}
