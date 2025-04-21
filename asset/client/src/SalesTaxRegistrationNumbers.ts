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
import type { SalesTaxRegistrationNumbersApi } from './SalesTaxRegistrationNumbersApi';
import { TaxRegistrationTypeIn } from './TaxRegistrationTypeIn';
import { NoYes } from './NoYes';
import { PeriodUnit } from './PeriodUnit';
import { SalesReturnAlertIn } from './SalesReturnAlertIn';
import { CustomerCalculationDateTypeIn } from './CustomerCalculationDateTypeIn';

/**
 * This class represents the entity "SalesTaxRegistrationNumbers" of service "d365_metadata".
 */
export class SalesTaxRegistrationNumbers<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SalesTaxRegistrationNumbersType<T>
{
  /**
   * Technical entity name for SalesTaxRegistrationNumbers.
   */
  static override _entityName = 'SalesTaxRegistrationNumbers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SalesTaxRegistrationNumbers entity.
   */
  static _keys = ['RegistrationNumberType', 'RegistrationNumber'];
  /**
   * Registration Number Type.
   * @nullable
   */
  declare registrationNumberType?: TaxRegistrationTypeIn | null;
  /**
   * Registration Number.
   */
  declare registrationNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Shared.
   * @nullable
   */
  declare shared?: NoYes | null;
  /**
   * Sales Unit.
   * @nullable
   */
  declare salesUnit?: PeriodUnit | null;
  /**
   * Return Alert.
   * @nullable
   */
  declare returnAlert?: SalesReturnAlertIn | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Duration.
   */
  declare returnDuration: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Return Unit.
   * @nullable
   */
  declare returnUnit?: PeriodUnit | null;
  /**
   * Return Basis.
   * @nullable
   */
  declare returnBasis?: CustomerCalculationDateTypeIn | null;
  /**
   * Sales Duration.
   */
  declare salesDuration: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: SalesTaxRegistrationNumbersApi<T>) {
    super(_entityApi);
  }
}

export interface SalesTaxRegistrationNumbersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  registrationNumberType?: TaxRegistrationTypeIn | null;
  registrationNumber: DeserializedType<T, 'Edm.String'>;
  shared?: NoYes | null;
  salesUnit?: PeriodUnit | null;
  returnAlert?: SalesReturnAlertIn | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  returnDuration: DeserializedType<T, 'Edm.Int32'>;
  returnUnit?: PeriodUnit | null;
  returnBasis?: CustomerCalculationDateTypeIn | null;
  salesDuration: DeserializedType<T, 'Edm.Int32'>;
}
